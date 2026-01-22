// Course data is now loaded from data.js

// Function to create course card HTML
function getCourseId(code) {
    return 'course-' + String(code).toLowerCase().replace(/\s+/g, '-');
}

function createCourseCard(course) {
    const topicsHTML = course.topics.map((topic, index) => {
        const topicId = `${course.code}-${index}`;
        return `
        <li class="topic-item" data-topic-id="${topicId}" onclick="toggleTopic(this)">
            <strong>${topic.title}</strong>
            <div class="topic-explanation">${topic.explanation}</div>
        </li>`;
    }).join('');

    return `
        <div class="course-card" id="${getCourseId(course.code)}">
            <div class="course-header" onclick="toggleCourse(this.closest('.course-card'))">
                <div class="course-code">${course.code}</div>
                <span class="expand-icon">▼</span>
            </div>
            <div class="course-title">${course.title}</div>
            <ul class="topics-list">
                ${topicsHTML}
            </ul>
        </div>
    `;
}

function renderTOC(tocEl) {
    const buildItems = (arr) => arr.map(c => {
        const id = getCourseId(c.code);
        return `<div class="toc-item"><span class="toc-code">${c.code}</span><a class="toc-link" href="#${id}">${c.title}</a></div>`;
    }).join('');
    const html =
        `<div class="toc-group">
            <div class="toc-group-title">100 Level</div>
            <div class="toc-grid">${buildItems(courses100)}</div>
        </div>
        <div class="toc-group">
            <div class="toc-group-title">200 Level</div>
            <div class="toc-grid">${buildItems(courses200)}</div>
        </div>`;
    tocEl.innerHTML = html;
}

// Function to toggle topic explanation
function toggleTopic(item) {
    item.classList.toggle('expanded');
}

// Function to toggle course expansion
function toggleCourse(card) {
    card.classList.toggle('expanded');
}

// Initialize the page
function init() {
    const container100 = document.getElementById('coursesContainer100');
    const container200 = document.getElementById('coursesContainer200');
    const toc = document.getElementById('tocContainer');
    const tocSection = document.getElementById('tocSection');
    const tocToggle = document.getElementById('tocToggle');
    const tocPanel = document.getElementById('tocPanel');
    
    if (container100 && typeof courses100 !== 'undefined') {
        courses100.forEach(course => {
            container100.innerHTML += createCourseCard(course);
        });
    }
    
    if (container200 && typeof courses200 !== 'undefined') {
        courses200.forEach(course => {
            container200.innerHTML += createCourseCard(course);
        });
    }
    
    if (toc && typeof courses100 !== 'undefined' && typeof courses200 !== 'undefined') {
        renderTOC(toc);
    }
    if (tocToggle && tocSection && tocPanel) {
        tocToggle.addEventListener('click', () => {
            const isOpen = tocSection.classList.toggle('open');
            tocToggle.setAttribute('aria-expanded', String(isOpen));
            tocPanel.hidden = !isOpen;
        });
    }
    
    // Trigger progress update after courses are loaded
    if (window.updateProgress) {
        setTimeout(() => window.updateProgress(), 100);
    }
}

// Make init available globally
window.init = init;

// Load courses when script is loaded or when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
