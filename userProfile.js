/**
 * Unified User Profile Manager
 * All user data stored in single localStorage object: 'linguisticsUserData'
 */

const USER_DATA_KEY = 'linguisticsUserData';

// Default user data structure
const DEFAULT_USER_DATA = {
    profile: {
        name: 'Student',
        email: '',
        matricNumber: '',
        bio: '',
        avatar: '👤',
        joinDate: new Date().toISOString(),
        level: 1,
        totalXP: 0
    },
    progress: {
        courses: {},        // { 'LIN 101': 45, 'LIN 103': 20 }
        tests: {},          // { 'LIN 101': 85, 'LIN 103': 92 }
        certificates: []    // Array of certificate objects
    },
    streak: {
        current: 0,
        longest: 0,
        lastStudyDate: null,
        studyDates: []      // Array of ISO date strings
    },
    challenges: {
        weekly: {
            testsCompleted: 0,
            coursesProgress: 0,
            flashcardsStudied: 0,
            studyDays: 0
        },
        weekStartDate: null
    },
    badges: {
        earned: [],         // Array of badge IDs
        progress: {}        // { badgeId: 'progress_data' }
    },
    settings: {
        darkMode: false,
        notifications: true
    },
    metadata: {
        lastUpdated: new Date().toISOString(),
        version: 1
    }
};

/**
 * Initialize or get user data
 */
function getUserData() {
    const stored = localStorage.getItem(USER_DATA_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Failed to parse user data:', e);
            return JSON.parse(JSON.stringify(DEFAULT_USER_DATA));
        }
    }
    return JSON.parse(JSON.stringify(DEFAULT_USER_DATA));
}

/**
 * Save user data to localStorage
 */
function saveUserData(data) {
    data.metadata.lastUpdated = new Date().toISOString();
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
}

/**
 * Get user profile
 */
function getUserProfile() {
    const data = getUserData();
    return data.profile;
}

/**
 * Update user profile
 */
function updateUserProfile(updates) {
    const data = getUserData();
    data.profile = { ...data.profile, ...updates };
    
    // Recalculate level based on XP
    data.profile.level = Math.floor(data.profile.totalXP / 100) + 1;
    
    saveUserData(data);
    return data.profile;
}

/**
 * Record course progress
 */
function recordCourseProgress(course, increment = 1) {
    const data = getUserData();
    const current = data.progress.courses[course] || 0;
    data.progress.courses[course] = Math.min(current + increment, 100);
    
    // Add XP
    data.profile.totalXP += increment;
    
    // Update streak
    updateStudyStreak();
    
    saveUserData(data);
}

/**
 * Record test score
 */
function recordTestScore(course, score) {
    const data = getUserData();
    const current = data.progress.tests[course] || 0;
    data.progress.tests[course] = Math.max(current, score);
    
    // Add XP based on score
    const xpReward = Math.floor(score / 10);
    data.profile.totalXP += xpReward;
    
    // Track for weekly challenges
    data.challenges.weekly.testsCompleted = (data.challenges.weekly.testsCompleted || 0) + 1;
    
    // Update streak
    updateStudyStreak();
    
    saveUserData(data);
}

/**
 * Record certificate earned
 */
function recordCertificate(certificate) {
    const data = getUserData();
    data.progress.certificates.push({
        ...certificate,
        id: Date.now() + Math.random(),
        earnedDate: new Date().toISOString()
    });
    
    // Add XP for certificate
    data.profile.totalXP += 200;
    
    saveUserData(data);
}

/**
 * Get all certificates
 */
function getCertificates() {
    const data = getUserData();
    return data.progress.certificates || [];
}

/**
 * Update study streak
 */
function updateStudyStreak() {
    const data = getUserData();
    const today = new Date().toDateString();
    
    if (!data.streak.studyDates) {
        data.streak.studyDates = [];
    }
    
    // Check if already logged in today
    if (data.streak.studyDates.length > 0) {
        const lastDate = new Date(data.streak.studyDates[data.streak.studyDates.length - 1]).toDateString();
        if (lastDate === today) {
            saveUserData(data);
            return;
        }
    }
    
    // Add today's date
    data.streak.studyDates.push(new Date().toISOString());
    
    // Calculate current streak
    let streak = 1;
    for (let i = data.streak.studyDates.length - 1; i > 0; i--) {
        const current = new Date(data.streak.studyDates[i]);
        const previous = new Date(data.streak.studyDates[i - 1]);
        const dayDiff = Math.floor((current - previous) / (1000 * 60 * 60 * 24));
        
        if (dayDiff === 1) {
            streak++;
        } else {
            break;
        }
    }
    
    data.streak.current = streak;
    
    // Update longest streak
    if (streak > data.streak.longest) {
        data.streak.longest = streak;
        
        // Add streak bonus XP
        if (streak % 5 === 0) {
            data.profile.totalXP += 50; // Bonus every 5 days
        }
    }
    
    saveUserData(data);
}

/**
 * Get streak information
 */
function getStreakInfo() {
    const data = getUserData();
    return {
        current: data.streak.current,
        longest: data.streak.longest,
        studyDates: data.streak.studyDates || [],
        daysActive: (data.streak.studyDates || []).length
    };
}

/**
 * Record flashcard study
 */
function recordFlashcardStudy(count = 1) {
    const data = getUserData();
    data.challenges.weekly.flashcardsStudied = (data.challenges.weekly.flashcardsStudied || 0) + count;
    data.profile.totalXP += count;
    updateStudyStreak();
    saveUserData(data);
}

/**
 * Record badge earned
 */
function recordBadgeEarned(badgeId) {
    const data = getUserData();
    if (!data.badges.earned.includes(badgeId)) {
        data.badges.earned.push(badgeId);
        data.profile.totalXP += 75;
        saveUserData(data);
    }
}

/**
 * Get earned badges
 */
function getEarnedBadges() {
    const data = getUserData();
    return data.badges.earned || [];
}

/**
 * Get user level
 */
function getUserLevel() {
    const data = getUserData();
    return data.profile.level;
}

/**
 * Get total XP
 */
function getTotalXP() {
    const data = getUserData();
    return data.profile.totalXP;
}

/**
 * Get XP needed for next level
 */
function getXPForNextLevel() {
    const data = getUserData();
    const currentLevel = data.profile.level;
    const nextLevelXP = currentLevel * 100;
    const currentLevelXP = (currentLevel - 1) * 100;
    const progressInLevel = data.profile.totalXP - currentLevelXP;
    const xpPerLevel = 100;
    
    return {
        current: progressInLevel,
        needed: xpPerLevel,
        nextLevelAt: nextLevelXP
    };
}

/**
 * Toggle dark mode
 */
function toggleDarkMode() {
    const data = getUserData();
    data.settings.darkMode = !data.settings.darkMode;
    saveUserData(data);
    return data.settings.darkMode;
}

/**
 * Get dark mode setting
 */
function isDarkModeEnabled() {
    const data = getUserData();
    return data.settings.darkMode;
}

/**
 * Get weekly challenge progress
 */
function getWeeklyChallengeProgress() {
    const data = getUserData();
    
    // Check if we need to reset weekly challenges (every Monday)
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    weekStart.setHours(0, 0, 0, 0);
    
    if (!data.challenges.weekStartDate || new Date(data.challenges.weekStartDate) < weekStart) {
        data.challenges.weekStartDate = weekStart.toISOString();
        data.challenges.weekly = {
            testsCompleted: 0,
            coursesProgress: 0,
            flashcardsStudied: 0,
            studyDays: 0
        };
        saveUserData(data);
    }
    
    return data.challenges.weekly;
}

/**
 * Calculate streak bonus multiplier
 */
function getStreakBonus() {
    const streakInfo = getStreakInfo();
    if (streakInfo.current >= 30) return 3.0;  // 3x XP
    if (streakInfo.current >= 21) return 2.5;  // 2.5x XP
    if (streakInfo.current >= 14) return 2.0;  // 2x XP
    if (streakInfo.current >= 7) return 1.5;   // 1.5x XP
    if (streakInfo.current >= 3) return 1.2;   // 1.2x XP
    return 1.0;
}

/**
 * Migrate old data format to new consolidated format
 */
function migrateOldData() {
    const data = getUserData();
    
    // Migrate from old courseProgress
    const oldCourseProgress = localStorage.getItem('courseProgress');
    if (oldCourseProgress) {
        try {
            const parsed = JSON.parse(oldCourseProgress);
            data.progress.courses = { ...parsed };
        } catch (e) {
            console.error('Failed to migrate courseProgress:', e);
        }
    }
    
    // Migrate from old testScores
    const oldTestScores = localStorage.getItem('testScores');
    if (oldTestScores) {
        try {
            const parsed = JSON.parse(oldTestScores);
            data.progress.tests = { ...parsed };
        } catch (e) {
            console.error('Failed to migrate testScores:', e);
        }
    }
    
    // Migrate from old userCertificates
    const oldCerts = localStorage.getItem('userCertificates');
    if (oldCerts) {
        try {
            const parsed = JSON.parse(oldCerts);
            data.progress.certificates = Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            console.error('Failed to migrate userCertificates:', e);
        }
    }
    
    // Migrate from old streak data
    const oldStreak = localStorage.getItem('studyStreak');
    if (oldStreak) {
        data.streak.current = parseInt(oldStreak) || 0;
    }
    
    saveUserData(data);
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    // Run migration if needed
    migrateOldData();
});

// Export for use in other scripts
window.userProfile = {
    getUserData,
    saveUserData,
    getUserProfile,
    updateUserProfile,
    recordCourseProgress,
    recordTestScore,
    recordCertificate,
    getCertificates,
    updateStudyStreak,
    getStreakInfo,
    recordFlashcardStudy,
    recordBadgeEarned,
    getEarnedBadges,
    getUserLevel,
    getTotalXP,
    getXPForNextLevel,
    toggleDarkMode,
    isDarkModeEnabled,
    getWeeklyChallengeProgress,
    getStreakBonus,
    migrateOldData
};
