/**
 * Progress Tracker & Badge Unlocking System
 * Connects course navigation to badge unlocking and progress tracking
 */

const ProgressTracker = {
    /**
     * Initialize progress tracking for course navigation
     */
    initializeCourseTracking: function() {
        // Track when a course link is clicked
        document.addEventListener('click', (e) => {
            const courseLink = e.target.closest('.course-link, .course-card, [data-course]');
            if (courseLink) {
                const courseName = courseLink.getAttribute('data-course') || courseLink.textContent.trim();
                this.recordCourseAccess(courseName);
            }
        });

        // Also track course view in table of contents
        const courseItems = document.querySelectorAll('[data-course-name]');
        courseItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const courseName = item.getAttribute('data-course-name');
                this.recordCourseAccess(courseName);
            });
        });
    },

    /**
     * Record when a course is accessed
     */
    recordCourseAccess: function(courseName) {
        if (!courseName) return;

        // Get current progress data
        const courseProgress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
        
        // If this is the first time accessing this course, mark it as started
        if (!courseProgress[courseName]) {
            courseProgress[courseName] = 5; // Start with 5% progress
            localStorage.setItem('courseProgress', JSON.stringify(courseProgress));
            
            // Check and unlock badges
            this.checkBadgeUnlocks();
            
            // Update stats everywhere
            this.updateAllStats();
        }
    },

    /**
     * Record when a topic is completed
     */
    recordTopicCompletion: function(topicName, courseName) {
        const courseProgress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
        const current = courseProgress[courseName] || 0;
        
        // Increment progress (max 100%)
        courseProgress[courseName] = Math.min(current + 10, 100);
        localStorage.setItem('courseProgress', JSON.stringify(courseProgress));

        // Check if course is completed
        if (courseProgress[courseName] === 100) {
            this.recordCourseCompletion(courseName);
        }

        this.checkBadgeUnlocks();
        this.updateAllStats();
    },

    /**
     * Record when a course is completed
     */
    recordCourseCompletion: function(courseName) {
        const completedCourses = JSON.parse(localStorage.getItem('completedCourses') || '[]');
        if (!completedCourses.includes(courseName)) {
            completedCourses.push(courseName);
            localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
            this.checkBadgeUnlocks();
        }
    },

    /**
     * Check and unlock badges based on current progress
     */
    checkBadgeUnlocks: function() {
        const badgeConditions = {
            firstStep: () => {
                const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
                return Object.keys(progress).length >= 1;
            },
            explorer: () => {
                const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
                return Object.keys(progress).length >= 5;
            },
            masterExplorer: () => {
                const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
                return Object.keys(progress).length >= 10;
            },
            completionist: () => {
                const completed = JSON.parse(localStorage.getItem('completedCourses') || '[]');
                return completed.length >= 1;
            },
            scholar: () => {
                const completed = JSON.parse(localStorage.getItem('completedCourses') || '[]');
                return completed.length >= 3;
            },
            masterScholar: () => {
                const completed = JSON.parse(localStorage.getItem('completedCourses') || '[]');
                return completed.length >= 10;
            },
            perfectScore: () => localStorage.getItem('perfectScoreAchieved') === 'true',
            certified: () => {
                const certs = JSON.parse(localStorage.getItem('userCertificates') || '[]');
                return certs.length >= 1;
            },
            multiCertified: () => {
                const certs = JSON.parse(localStorage.getItem('userCertificates') || '[]');
                return certs.length >= 3;
            },
            streakMaster: () => this.getStudyStreak() >= 7
        };

        const earnedBadges = JSON.parse(localStorage.getItem('earnedBadges') || '[]');

        for (const [badgeId, condition] of Object.entries(badgeConditions)) {
            if (condition() && !earnedBadges.includes(badgeId)) {
                earnedBadges.push(badgeId);
                this.showBadgeNotification(badgeId);
            }
        }

        localStorage.setItem('earnedBadges', JSON.stringify(earnedBadges));
    },

    /**
     * Show badge unlock notification
     */
    showBadgeNotification: function(badgeId) {
        const badgeNames = {
            firstStep: { icon: '👣', name: 'First Step' },
            explorer: { icon: '🗺️', name: 'Explorer' },
            masterExplorer: { icon: '🌍', name: 'Master Explorer' },
            completionist: { icon: '✅', name: 'Completionist' },
            scholar: { icon: '🎓', name: 'Scholar' },
            masterScholar: { icon: '👨‍🎓', name: 'Master Scholar' },
            perfectScore: { icon: '💯', name: 'Perfect Score' },
            certified: { icon: '🏆', name: 'Certified' },
            multiCertified: { icon: '🎖️', name: 'Multi-Certified' },
            streakMaster: { icon: '🔥', name: 'Streak Master' }
        };

        const badge = badgeNames[badgeId];
        if (!badge) return;

        // Create notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px 25px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            z-index: 10001;
            display: flex;
            align-items: center;
            gap: 15px;
            font-weight: 600;
            animation: slideIn 0.4s ease;
        `;
        notification.innerHTML = `
            <span style="font-size: 2rem;">${badge.icon}</span>
            <div>
                <div>🎉 Badge Unlocked!</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">${badge.name}</div>
            </div>
        `;

        document.body.appendChild(notification);

        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.4s ease';
            setTimeout(() => notification.remove(), 400);
        }, 4000);
    },

    /**
     * Get study streak
     */
    getStudyStreak: function() {
        const today = new Date().toDateString();
        const lastVisit = localStorage.getItem('lastStudySession');
        
        if (lastVisit === today) {
            return parseInt(localStorage.getItem('currentStreak') || '0');
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastVisit === yesterday.toDateString()) {
            const newStreak = (parseInt(localStorage.getItem('currentStreak') || '0')) + 1;
            localStorage.setItem('currentStreak', newStreak.toString());
            localStorage.setItem('lastStudySession', today);
            return newStreak;
        }

        localStorage.setItem('currentStreak', '1');
        localStorage.setItem('lastStudySession', today);
        return 1;
    },

    /**
     * Update all statistics
     */
    updateAllStats: function() {
        // Dispatch custom event for other components to update
        const event = new CustomEvent('progressUpdated', {
            detail: {
                courseProgress: JSON.parse(localStorage.getItem('courseProgress') || '{}'),
                completedCourses: JSON.parse(localStorage.getItem('completedCourses') || '[]'),
                earnedBadges: JSON.parse(localStorage.getItem('earnedBadges') || '[]')
            }
        });
        document.dispatchEvent(event);

        // Try to update dashboard if it exists
        if (typeof updateStats === 'function') {
            updateStats();
            loadBadges();
            loadCourseProgress();
        }

        // Try to update profile if it exists
        if (typeof loadAchievements === 'function') {
            loadAchievements();
        }
    },

    /**
     * Get course statistics
     */
    getStats: function() {
        const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
        const completed = JSON.parse(localStorage.getItem('completedCourses') || '[]');
        const badges = JSON.parse(localStorage.getItem('earnedBadges') || '[]');

        return {
            coursesStarted: Object.keys(progress).length,
            coursesCompleted: completed.length,
            badgesEarned: badges.length,
            studyStreak: this.getStudyStreak(),
            courseProgress: progress,
            completedCourses: completed,
            earnedBadges: badges
        };
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    ProgressTracker.initializeCourseTracking();
    ProgressTracker.checkBadgeUnlocks();
    ProgressTracker.updateAllStats();
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(500px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(500px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
