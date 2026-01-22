document.addEventListener('DOMContentLoaded', function() {
    // 0. Render Navigation Menu
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu && typeof sitePages !== 'undefined') {
        // Clear existing items (except search if it was somehow already there)
        navMenu.innerHTML = '';
        
        // Add items from sitePages
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        
        sitePages.forEach(page => {
            // Skip Certificate in the main list if you want it separate, 
            // but the user asked for access, so we include it.
            // Check if page matches current URL for active class
            // Handle simple match or special cases
            let isActive = false;
            if (page.url === currentPath) isActive = true;
            if (currentPath === '' && page.url === 'index.html') isActive = true;
            
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = page.url;
            a.textContent = page.title;
            if (isActive) a.classList.add('active');
            
            li.appendChild(a);
            navMenu.appendChild(li);
        });

        // Fallback: ensure each anchor reliably navigates (some browsers
        // or overlays may block normal clicks). Attach a direct handler
        // to each link that explicitly sets window.location.href.
        const anchors = navMenu.querySelectorAll('a');
        anchors.forEach(anchor => {
            // avoid adding duplicate listeners
            if (!anchor._navHandlerAttached) {
                anchor.addEventListener('click', function(ev) {
                    ev.preventDefault();
                    const href = this.getAttribute('href');
                    if (href && href !== '#') {
                        window.location.href = href;
                    }
                });
                anchor._navHandlerAttached = true;
            }
        });
        
        // Explicitly add "My Certificates" if not in sitePages (it is, but let's be safe or rename it)
        // sitePages has "Certificate" -> "certificate.html".
        // The user might prefer "My Certificates" as the label.
        // We can rename it in data.js or override here. 
        // For now, sitePages "Certificate" is fine.
    }

    // 1. Menu Toggle Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenuBtn && navMenu) {
        // Remove existing listeners if any by cloning (optional, but cleaner)
        // For now, we assume this script runs last or we overwrite onclick
        
        // Use addEventListener instead of onclick for better compatibility
           mobileMenuBtn.addEventListener('click', function(e) {
               e.stopPropagation();
               e.preventDefault(); // Prevent any default behavior
               // Toggle both the nav menu and a body-level flag for mobile
               navMenu.classList.toggle('active');
               document.body.classList.toggle('menu-open');
               const isExpanded = navMenu.classList.contains('active');
               mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
           });

           // Support touchend for some mobile environments
           mobileMenuBtn.addEventListener('touchend', function(e) {
              e.stopPropagation();
              e.preventDefault();
              navMenu.classList.toggle('active');
              document.body.classList.toggle('menu-open');
              const isExpanded = navMenu.classList.contains('active');
              mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
           });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking a link. Use event delegation and
        // ensure navigation works even if default click is blocked.
        navMenu.addEventListener('click', function(e) {
            const anchor = e.target.closest('a');
            if (!anchor) return;

            const href = anchor.getAttribute('href');

            // Close the mobile menu if it's open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }

            // If the link has a valid href, navigate explicitly to ensure it works
            if (href && href !== '#') {
                // allow same-window navigation
                window.location.href = href;
            }
        });
    }

    // 2. Inject Search Bar into Navigation
    if (navMenu) {
        // Check if search bar already exists (to prevent duplicates if script runs twice)
        if (!document.getElementById('globalSearchInput')) {
            const searchLi = document.createElement('li');
            searchLi.className = 'nav-search-item';
            searchLi.innerHTML = `
                <div class="nav-search-container">
                    <input type="text" id="globalSearchInput" placeholder="Search website..." aria-label="Search website">
                    <button id="globalSearchBtn" aria-label="Search">🔍</button>
                </div>
            `;
            // Insert at the top of the menu
            navMenu.insertBefore(searchLi, navMenu.firstChild);
        }
        
        // Add styles dynamically
        if (!document.getElementById('nav-search-styles')) {
            const style = document.createElement('style');
            style.id = 'nav-search-styles';
            style.textContent = `
                .nav-search-item {
                    width: 100%;
                    padding: 10px 20px;
                    box-sizing: border-box;
                }
                .nav-search-container {
                    display: flex;
                    width: 100%;
                    background: rgba(255,255,255,0.1);
                    border-radius: 4px;
                    padding: 5px;
                    border: 1px solid rgba(255,255,255,0.2);
                }
                #globalSearchInput {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: white;
                    padding: 5px;
                    outline: none;
                    font-size: 16px;
                }
                #globalSearchInput::placeholder {
                    color: rgba(255,255,255,0.7);
                }
                #globalSearchBtn {
                    background: transparent;
                    border: none;
                    color: white;
                    cursor: pointer;
                    padding: 0 10px;
                    font-size: 18px;
                }
                /* Search Modal Styles */
                .search-modal {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.8);
                    z-index: 2000;
                    justify-content: center;
                    align-items: flex-start;
                    padding-top: 80px;
                    backdrop-filter: blur(5px);
                }
                .search-modal.active {
                    display: flex;
                }
                .search-modal-content {
                    background: white;
                    width: 90%;
                    max-width: 600px;
                    border-radius: 8px;
                    padding: 20px;
                    max-height: 80vh;
                    overflow-y: auto;
                    position: relative;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                    animation: slideDown 0.3s ease;
                }
                @keyframes slideDown {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .search-close {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    font-size: 24px;
                    cursor: pointer;
                    color: #333;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #f5f5f5;
                }
                .search-close:hover {
                    background: #e0e0e0;
                }
                .search-result-item {
                    padding: 15px;
                    border-bottom: 1px solid #eee;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .search-result-item:hover {
                    background: #f9f9f9;
                }
                .search-result-title {
                    font-weight: bold;
                    color: #2c3e50;
                    font-size: 16px;
                    margin-bottom: 5px;
                }
                .search-result-type {
                    font-size: 11px;
                    color: #3498db;
                    text-transform: uppercase;
                    font-weight: bold;
                    letter-spacing: 0.5px;
                    margin-bottom: 4px;
                }
                .search-result-snippet {
                    font-size: 14px;
                    color: #555;
                    line-height: 1.4;
                }
                .no-results {
                    text-align: center;
                    padding: 20px;
                    color: #666;
                }
            `;
            document.head.appendChild(style);
        }

        // 3. Search Logic
        const searchInput = document.getElementById('globalSearchInput');
        const searchBtn = document.getElementById('globalSearchBtn');

        // Create Modal if not exists
        let modal = document.querySelector('.search-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.className = 'search-modal';
            modal.innerHTML = `
                <div class="search-modal-content">
                    <span class="search-close">&times;</span>
                    <h3 style="margin-top:0; color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; margin-bottom: 15px;">Search Results</h3>
                    <div id="searchResultsList"></div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        const closeBtn = modal.querySelector('.search-close');
        const resultsList = document.getElementById('searchResultsList');

        function performSearch() {
            const query = searchInput.value.toLowerCase().trim();
            if (!query) return;

            const results = [];

            // Search Pages
            if (typeof sitePages !== 'undefined') {
                sitePages.forEach(page => {
                    if (page.title.toLowerCase().includes(query) || page.keywords.includes(query)) {
                        results.push({
                            type: 'Page',
                            title: page.title,
                            snippet: `Navigate to ${page.title} page`,
                            url: page.url
                        });
                    }
                });
            }

            // Search Courses
            const searchCourses = (courses) => {
                if (!courses) return;
                courses.forEach(course => {
                    if (course.code.toLowerCase().includes(query) || course.title.toLowerCase().includes(query)) {
                        results.push({
                            type: 'Course',
                            title: `${course.code}: ${course.title}`,
                            snippet: 'View course details and topics',
                            url: `home.html#${course.code.toLowerCase().replace(/\s+/g, '-')}`
                        });
                    }
                    if (course.topics) {
                        course.topics.forEach((topic, idx) => {
                            if (topic.title.toLowerCase().includes(query) || topic.explanation.toLowerCase().includes(query)) {
                                results.push({
                                    type: 'Topic',
                                    title: topic.title,
                                    snippet: topic.explanation.substring(0, 100) + '...',
                                    url: `home.html#${course.code.toLowerCase().replace(/\s+/g, '-')}`
                                });
                            }
                        });
                    }
                });
            };

            if (typeof courses100 !== 'undefined') searchCourses(courses100);
            if (typeof courses200 !== 'undefined') searchCourses(courses200);

            // Search Flashcards
            if (typeof flashcardData !== 'undefined') {
                flashcardData.forEach(card => {
                    if (card.term.toLowerCase().includes(query) || card.definition.toLowerCase().includes(query)) {
                        results.push({
                            type: 'Flashcard',
                            title: card.term,
                            snippet: card.definition,
                            url: 'flashcards.html'
                        });
                    }
                });
            }

            // Render Results
            resultsList.innerHTML = '';
            if (results.length === 0) {
                resultsList.innerHTML = '<div class="no-results">No results found for "' + query + '"</div>';
            } else {
                results.forEach(res => {
                    const div = document.createElement('div');
                    div.className = 'search-result-item';
                    div.innerHTML = `
                        <div class="search-result-type">${res.type}</div>
                        <div class="search-result-title">${res.title}</div>
                        <div class="search-result-snippet">${res.snippet}</div>
                    `;
                    div.onclick = () => {
                        window.location.href = res.url;
                        modal.classList.remove('active');
                        navMenu.classList.remove('active');
                        mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    };
                    resultsList.appendChild(div);
                });
            }

            modal.classList.add('active');
        }

        searchBtn.onclick = performSearch;
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });

        closeBtn.onclick = () => modal.classList.remove('active');
        modal.onclick = (e) => {
            if (e.target === modal) modal.classList.remove('active');
        };
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }
});
