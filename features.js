// Features: Search, Dark Mode, Progress Tracking

// ========== DARK MODE ==========
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply saved preference
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isNowDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isNowDark);
        darkModeToggle.textContent = isNowDark ? '☀️' : '🌙';
    });
}

// ========== SEARCH FUNCTIONALITY ==========
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    const courseCards = document.querySelectorAll('.course-card');
    
    if (!searchInput) return;
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        clearSearchBtn.style.display = searchTerm ? 'block' : 'none';
        
        if (!searchTerm) {
            // Show all courses
            courseCards.forEach(card => {
                card.style.display = '';
                const topics = card.querySelectorAll('.topic-item');
                topics.forEach(topic => {
                    topic.style.display = '';
                    topic.classList.remove('search-highlight');
                });
            });
            return;
        }
        
        // Search through courses and topics
        courseCards.forEach(card => {
            const courseCode = card.querySelector('.course-code')?.textContent.toLowerCase() || '';
            const courseTitle = card.querySelector('.course-title')?.textContent.toLowerCase() || '';
            const topics = card.querySelectorAll('.topic-item');
            let hasMatch = false;
            
            // Check if course matches
            const courseMatches = courseCode.includes(searchTerm) || courseTitle.includes(searchTerm);
            
            // Check topics
            topics.forEach(topic => {
                const topicTitle = topic.querySelector('strong')?.textContent.toLowerCase() || '';
                const topicExplanation = topic.querySelector('.topic-explanation')?.textContent.toLowerCase() || '';
                const topicMatches = topicTitle.includes(searchTerm) || topicExplanation.includes(searchTerm);
                
                if (topicMatches) {
                    topic.style.display = '';
                    topic.classList.add('search-highlight');
                    hasMatch = true;
                    // Auto-expand course if topic matches
                    card.classList.add('expanded');
                    // Auto-expand topic to show explanation if it matches
                    topic.classList.add('expanded');
                } else {
                    topic.style.display = 'none';
                    topic.classList.remove('search-highlight');
                }
            });
            
            // Show/hide course card
            if (courseMatches || hasMatch) {
                card.style.display = '';
                if (hasMatch) card.classList.add('expanded');
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    searchInput.addEventListener('input', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch();
        }
    });
    
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        performSearch();
        searchInput.focus();
    });
}

// ========== PROGRESS TRACKING ==========
function initProgressTracking() {
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');
    const resetProgressBtn = document.getElementById('resetProgress');
    
    // Load progress from localStorage
    function loadProgress() {
        const savedProgress = JSON.parse(localStorage.getItem('studyProgress') || '{}');
        return savedProgress;
    }
    
    // Save progress to localStorage
    function saveProgress(progress) {
        localStorage.setItem('studyProgress', JSON.stringify(progress));
    }
    
    // Calculate and update progress
    function updateProgress() {
        const progress = loadProgress();
        const allTopics = document.querySelectorAll('.topic-item');
        const totalTopics = allTopics.length;
        let completedTopics = 0;
        
        allTopics.forEach((topic, index) => {
            const topicId = topic.dataset.topicId || `topic-${index}`;
            topic.dataset.topicId = topicId;
            
            if (progress[topicId]) {
                completedTopics++;
                topic.classList.add('completed');
            } else {
                topic.classList.remove('completed');
            }
        });
        
        const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
        if (progressText) progressText.textContent = `${percentage}%`;
        if (progressFill) progressFill.style.width = `${percentage}%`;
    }
    
    // Make updateProgress available globally
    window.updateProgress = updateProgress;
    
    // Toggle topic completion
    function toggleTopicCompletion(topic) {
        const topicId = topic.dataset.topicId;
        const progress = loadProgress();
        progress[topicId] = !progress[topicId];
        saveProgress(progress);
        updateProgress();
    }
    
    // Add click handler to topics
    document.addEventListener('click', (e) => {
        const topicItem = e.target.closest('.topic-item');
        if (topicItem && e.detail === 2) { // Double-click to mark as complete
            toggleTopicCompletion(topicItem);
        }
    });
    
    // Reset progress
    if (resetProgressBtn) {
        resetProgressBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all progress?')) {
                localStorage.removeItem('studyProgress');
                updateProgress();
            }
        });
    }
    
    // Initial update
    setTimeout(updateProgress, 500);
    
    // Update progress periodically to catch dynamically loaded content
    setInterval(updateProgress, 1000);
}

// ========== INITIALIZE ALL FEATURES ==========
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    // initMobileMenu is now handled by navigation.js
    
    // Wait for courses to be loaded before initializing search and progress
    setTimeout(() => {
        initSearch();
        initProgressTracking();
    }, 300);
});

// Re-initialize search when courses are dynamically added
const originalToggleCourse = window.toggleCourse;
if (originalToggleCourse) {
    window.toggleCourse = function(card) {
        originalToggleCourse(card);
        // Re-run search to update highlights
        const searchInput = document.getElementById('searchInput');
        if (searchInput && searchInput.value) {
            searchInput.dispatchEvent(new Event('input'));
        }
    };
}

