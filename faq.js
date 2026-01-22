// FAQ Accordion Functionality
// This script handles the expand/collapse functionality for FAQ items

document.addEventListener('DOMContentLoaded', function() {
    // Get all FAQ question buttons
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Add click event listener to each FAQ question
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            // Get the parent FAQ item
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items first (optional - remove if you want multiple open)
            // Uncomment the next 3 lines if you want only one FAQ open at a time
            // document.querySelectorAll('.faq-item').forEach(function(item) {
            //     item.classList.remove('active');
            // });
            
            // Toggle the active class on the clicked item
            if (isActive) {
                faqItem.classList.remove('active');
                this.setAttribute('aria-expanded', 'false');
            } else {
                faqItem.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });
    
    // Menu toggle is now handled by navigation.js
});

