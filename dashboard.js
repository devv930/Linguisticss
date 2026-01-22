// Badge definitions
const BADGES = {
    firstStep: {
        id: 'firstStep',
        name: 'First Step',
        icon: '👣',
        description: 'Start your first course',
        condition: () => getCoursesStarted() >= 1
    },
    explorer: {
        id: 'explorer',
        name: 'Explorer',
        icon: '🗺️',
        description: 'Start 5 different courses',
        condition: () => getCoursesStarted() >= 5
    },
    masterExplorer: {
        id: 'masterExplorer',
        name: 'Master Explorer',
        icon: '🌍',
        description: 'Start all courses',
        condition: () => getCoursesStarted() >= 10
    },
    completionist: {
        id: 'completionist',
        name: 'Completionist',
        icon: '✅',
        description: 'Complete your first course',
        condition: () => getCoursesCompleted() >= 1
    },
    scholar: {
        id: 'scholar',
        name: 'Scholar',
        icon: '🎓',
        description: 'Complete 3 courses',
        condition: () => getCoursesCompleted() >= 3
    },
    masterScholar: {
        id: 'masterScholar',
        name: 'Master Scholar',
        icon: '👨‍🎓',
        description: 'Complete all courses',
        condition: () => getCoursesCompleted() >= 10
    },
    perfectScore: {
        id: 'perfectScore',
        name: 'Perfect Score',
        icon: '💯',
        description: 'Score 100% on a test',
        condition: () => localStorage.getItem('perfectScoreAchieved') === 'true'
    },
    certified: {
        id: 'certified',
        name: 'Certified',
        icon: '🏆',
        description: 'Earn your first certificate',
        condition: () => {
            const certs = JSON.parse(localStorage.getItem('userCertificates') || '[]');
            return certs.length >= 1;
        }
    },
    multiCertified: {
        id: 'multiCertified',
        name: 'Multi-Certified',
        icon: '🎖️',
        description: 'Earn 3 certificates',
        condition: () => {
            const certs = JSON.parse(localStorage.getItem('userCertificates') || '[]');
            return certs.length >= 3;
        }
    },
    streakMaster: {
        id: 'streakMaster',
        name: 'Streak Master',
        icon: '🔥',
        description: 'Maintain 7-day study streak',
        condition: () => getStudyStreak() >= 7
    }
};

// Weekly challenges
const WEEKLY_CHALLENGES = [
    {
        id: 'weeklyTest',
        title: 'Weekly Test Champion',
        description: 'Take 2 practice tests this week',
        icon: '📝',
        target: 2,
        reward: '50 XP',
        progress: () => getWeeklyTestsCompleted(),
        key: 'weeklyTestsCompleted'
    },
    {
        id: 'courseFocus',
        title: 'Course Focus',
        description: 'Complete progress in 1 course',
        icon: '📚',
        target: 1,
        reward: '40 XP',
        progress: () => getWeeklyCoursesProgress(),
        key: 'weeklyCoursesProgress'
    },
    {
        id: 'flashcardMastery',
        title: 'Flashcard Mastery',
        description: 'Study 50 flashcards this week',
        icon: '🃏',
        target: 50,
        reward: '60 XP',
        progress: () => getWeeklyFlashcardsStudied(),
        key: 'weeklyFlashcardsStudied'
    },
    {
        id: 'consistentLearner',
        title: 'Consistent Learner',
        description: 'Study 5 days this week',
        icon: '⏰',
        target: 5,
        reward: '45 XP',
        progress: () => getWeeklyStudyDays(),
        key: 'weeklyStudyDays'
    }
];

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    loadNavigation();
});

function initializeDashboard() {
    updateStats();
    loadCourseProgress();
    loadBadges();
    loadChallenges();
    loadDetailedStats();
    trackStudySession();
}

function trackStudySession() {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastStudySession');
    
    if (lastVisit !== today) {
        localStorage.setItem('lastStudySession', today);
        updateStudyStreak();
    }
}

function updateStudyStreak() {
    const streakKey = 'studyStreak';
    const streakDateKey = 'streakStartDate';
    const lastSessionKey = 'lastStudySession';
    
    const today = new Date();
    const lastSession = localStorage.getItem(lastSessionKey);
    const streakStart = localStorage.getItem(streakDateKey);
    
    if (!streakStart) {
        localStorage.setItem(streakDateKey, today.toDateString());
        localStorage.setItem(streakKey, '1');
        return;
    }
    
    const lastDate = new Date(lastSession);
    const daysDiff = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
    
    if (daysDiff === 1) {
        // Consecutive day - increase streak
        let streak = parseInt(localStorage.getItem(streakKey) || '0');
        streak++;
        localStorage.setItem(streakKey, streak.toString());
    } else if (daysDiff > 1) {
        // Streak broken - reset
        localStorage.setItem(streakKey, '1');
        localStorage.setItem(streakDateKey, today.toDateString());
    }
}

function getStudyStreak() {
    return parseInt(localStorage.getItem('studyStreak') || '0');
}

function getCoursesStarted() {
    const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    return Object.keys(progress).length;
}

function getCoursesCompleted() {
    const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    return Object.values(progress).filter(p => p >= 100).length;
}

function getWeeklyTestsCompleted() {
    const weekData = getWeekData();
    return weekData.testsCompleted || 0;
}

function getWeeklyCoursesProgress() {
    const weekData = getWeekData();
    const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    const courseChanges = weekData.courseChanges || {};
    
    let completed = 0;
    for (const course in courseChanges) {
        if (courseChanges[course] > 0) completed++;
    }
    return completed;
}

function getWeeklyFlashcardsStudied() {
    const weekData = getWeekData();
    return weekData.flashcardsStudied || 0;
}

function getWeeklyStudyDays() {
    const weekData = getWeekData();
    return weekData.studyDays || 0;
}

function getWeekData() {
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay()); // Start from Monday
    weekStart.setHours(0, 0, 0, 0);
    
    const weekKey = `weekData_${weekStart.toDateString()}`;
    return JSON.parse(localStorage.getItem(weekKey) || '{}');
}

function updateStats() {
    document.getElementById('coursesStarted').textContent = getCoursesStarted();
    document.getElementById('coursesCompleted').textContent = getCoursesCompleted();
    
    const earnedBadges = Object.values(BADGES).filter(badge => badge.condition()).length;
    document.getElementById('badgesEarned').textContent = earnedBadges;
    document.getElementById('studyStreak').textContent = getStudyStreak();
}

function loadCourseProgress() {
    const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    const allCourses = getCourses();
    const container = document.getElementById('courseProgressContainer');
    
    if (Object.keys(progress).length === 0) {
        container.innerHTML = '<p style="color: #7f8c8d; text-align: center;">Start a course to track your progress!</p>';
        return;
    }
    
    container.innerHTML = '';
    for (const course in progress) {
        const percentage = progress[course];
        const courseData = allCourses.find(c => c.course === course);
        const courseName = courseData ? courseData.course : course;
        
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course-progress-item';
        courseDiv.innerHTML = `
            <div class="course-progress-header">
                <span>${courseName}</span>
                <span>${percentage}%</span>
            </div>
            <div class="course-progress-bar">
                <div class="course-progress-fill" style="width: ${percentage}%"></div>
            </div>
        `;
        container.appendChild(courseDiv);
    }
}

function loadBadges() {
    const container = document.getElementById('badgesContainer');
    const noBadgesMessage = document.getElementById('noBadgesMessage');
    
    let earnedCount = 0;
    container.innerHTML = '';
    
    for (const badge of Object.values(BADGES)) {
        const isEarned = badge.condition();
        if (isEarned) earnedCount++;
        
        const badgeElement = document.createElement('div');
        badgeElement.className = `badge-item ${!isEarned ? 'locked' : ''}`;
        badgeElement.title = badge.description;
        badgeElement.innerHTML = `
            <div class="badge-icon">${badge.icon}</div>
            <p class="badge-name">${badge.name}</p>
            <p class="badge-description">${isEarned ? 'Earned!' : 'Locked'}</p>
            ${!isEarned ? `<p class="badge-unlock-condition">${badge.description}</p>` : ''}
        `;
        container.appendChild(badgeElement);
    }
    
    if (earnedCount === 0) {
        noBadgesMessage.style.display = 'block';
    } else {
        noBadgesMessage.style.display = 'none';
    }
}

function loadChallenges() {
    const container = document.getElementById('challengesContainer');
    container.innerHTML = '';
    
    WEEKLY_CHALLENGES.forEach(challenge => {
        const progress = challenge.progress();
        const percentage = Math.min((progress / challenge.target) * 100, 100);
        const isCompleted = progress >= challenge.target;
        
        const challengeElement = document.createElement('div');
        challengeElement.className = `challenge-card ${isCompleted ? 'completed' : ''}`;
        challengeElement.innerHTML = `
            <div class="challenge-header">
                <div class="challenge-icon">${challenge.icon}</div>
                <h3 class="challenge-title">${challenge.title}</h3>
            </div>
            <p class="challenge-description">${challenge.description}</p>
            <div class="challenge-progress">
                <div class="challenge-progress-bar">
                    <div class="challenge-progress-fill" style="width: ${percentage}%"></div>
                </div>
                <p style="font-size: 0.8rem; color: #7f8c8d; margin: 5px 0 0 0;">${progress} / ${challenge.target}</p>
            </div>
            <p class="challenge-reward">Reward: ${challenge.reward}</p>
            <p class="challenge-status ${isCompleted ? 'completed' : ''}">
                ${isCompleted ? '✅ Challenge Completed!' : 'In Progress'}
            </p>
        `;
        container.appendChild(challengeElement);
    });
}

function loadDetailedStats() {
    const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    const allCourses = getCourses();
    const testScores = JSON.parse(localStorage.getItem('testScores') || '{}');
    const container = document.getElementById('detailedStatsContainer');
    
    if (Object.keys(progress).length === 0) {
        container.innerHTML = '<p style="color: #7f8c8d; text-align: center; grid-column: 1/-1;">No courses started yet. Begin learning to see detailed statistics!</p>';
        return;
    }
    
    container.innerHTML = '';
    
    for (const course in progress) {
        const courseData = allCourses.find(c => c.course === course);
        const courseName = courseData ? courseData.course : course;
        const percentage = progress[course];
        const bestScore = testScores[course] || 0;
        const certificates = JSON.parse(localStorage.getItem('userCertificates') || '[]')
            .filter(cert => cert.courseTitle === course);
        
        const statCard = document.createElement('div');
        statCard.className = 'detailed-stat-card';
        statCard.innerHTML = `
            <p class="stat-course-name">${courseName}</p>
            <div class="stat-detail-item">
                <span class="stat-detail-label">Progress</span>
                <span class="stat-detail-value">${percentage}%</span>
            </div>
            <div class="stat-detail-item">
                <span class="stat-detail-label">Best Test Score</span>
                <span class="stat-detail-value">${bestScore}%</span>
            </div>
            <div class="stat-detail-item">
                <span class="stat-detail-label">Certificates</span>
                <span class="stat-detail-value">${certificates.length}</span>
            </div>
            <div class="stat-detail-item">
                <span class="stat-detail-label">Status</span>
                <span class="stat-detail-value">${percentage === 100 ? '✅ Completed' : '⏳ In Progress'}</span>
            </div>
        `;
        container.appendChild(statCard);
    }
}

function getCourses() {
    // Return all courses from data.js
    if (typeof courses !== 'undefined') {
        return Object.values(courses).flat();
    }
    return [];
}

function loadNavigation() {
    // This will be called by navigation.js
    if (typeof initializeNavigation === 'function') {
        initializeNavigation();
    }
}

// Track test completion
function recordTestCompletion() {
    const weekData = getWeekData();
    weekData.testsCompleted = (weekData.testsCompleted || 0) + 1;
    saveWeekData(weekData);
    loadChallenges();
}

// Track flashcard study
function recordFlashcardStudy(count = 1) {
    const weekData = getWeekData();
    weekData.flashcardsStudied = (weekData.flashcardsStudied || 0) + count;
    saveWeekData(weekData);
    loadChallenges();
}

// Track course progress
function recordCourseProgress(course, increment = 1) {
    const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    const current = progress[course] || 0;
    progress[course] = Math.min(current + increment, 100);
    localStorage.setItem('courseProgress', JSON.stringify(progress));
    
    // Track for weekly challenges
    const weekData = getWeekData();
    weekData.courseChanges = weekData.courseChanges || {};
    weekData.courseChanges[course] = (weekData.courseChanges[course] || 0) + increment;
    saveWeekData(weekData);
    
    initializeDashboard();
}

function saveWeekData(data) {
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    weekStart.setHours(0, 0, 0, 0);
    
    const weekKey = `weekData_${weekStart.toDateString()}`;
    localStorage.setItem(weekKey, JSON.stringify(data));
}

// Mark perfect score
function recordPerfectScore() {
    localStorage.setItem('perfectScoreAchieved', 'true');
    initializeDashboard();
}

// Record test score
function recordTestScore(course, score) {
    const testScores = JSON.parse(localStorage.getItem('testScores') || '{}');
    const current = testScores[course] || 0;
    testScores[course] = Math.max(current, score);
    localStorage.setItem('testScores', JSON.stringify(testScores));
    
    if (score === 100) {
        recordPerfectScore();
    }
}
// Toggle Detailed Course Statistics
function toggleDetailedStats() {
    const container = document.getElementById('detailedStatsContainer');
    const arrow = document.getElementById('statsToggleArrow');
    
    if (container.style.display === 'none') {
        container.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
        localStorage.setItem('detailedStatsVisible', 'true');
    } else {
        container.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
        localStorage.setItem('detailedStatsVisible', 'false');
    }
}

// Toggle Course Completion Progress
function toggleCourseProgress() {
    const container = document.getElementById('courseProgressContainer');
    const arrow = document.getElementById('courseToggleArrow');
    
    if (container.style.display === 'none') {
        container.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
        localStorage.setItem('courseProgressVisible', 'true');
    } else {
        container.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
        localStorage.setItem('courseProgressVisible', 'false');
    }
}

// Restore state on page load
document.addEventListener('DOMContentLoaded', function() {
    const detailedStatsVisible = localStorage.getItem('detailedStatsVisible') === 'true';
    const courseProgressVisible = localStorage.getItem('courseProgressVisible') === 'true';
    
    if (detailedStatsVisible) {
        const container = document.getElementById('detailedStatsContainer');
        const arrow = document.getElementById('statsToggleArrow');
        if (container) container.style.display = 'block';
        if (arrow) arrow.style.transform = 'rotate(180deg)';
    }
    
    if (courseProgressVisible) {
        const container = document.getElementById('courseProgressContainer');
        const arrow = document.getElementById('courseToggleArrow');
        if (container) container.style.display = 'block';
        if (arrow) arrow.style.transform = 'rotate(180deg)';
    }
});