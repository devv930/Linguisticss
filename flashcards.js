// Flashcards Page JavaScript
// Handles card flipping, navigation, and card management

// Note: flashcardData is loaded from data.js

// Current card index
let currentCardIndex = 0;
let isFlipped = false;

// Initialize flashcards
document.addEventListener('DOMContentLoaded', function() {
    // Check if flashcardData is available
    if (typeof flashcardData === 'undefined' || !Array.isArray(flashcardData)) {
        console.error('flashcardData not found. Make sure data.js is loaded correctly.');
        const container = document.querySelector('.flashcard-wrapper');
        if (container) {
            container.innerHTML = '<div class="error-message">Error loading flashcards. Please try refreshing the page.</div>';
        }
        return;
    }

    // Menu toggle is now handled by navigation.js
    
    // Initialize first card
    updateCard();
    generateCardList();
    updateCardCounter();
    
    // Add event listeners
    const flashcard = document.querySelector('.flashcard');
    if (flashcard) {
        flashcard.addEventListener('click', flipCard);
    }
    
    // Navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', showPreviousCard);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', showNextCard);
    }
    
    // Control buttons
    const shuffleBtn = document.getElementById('shuffleBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', shuffleCards);
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', resetCards);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            showPreviousCard();
        } else if (e.key === 'ArrowRight') {
            showNextCard();
        } else if (e.key === ' ') {
            e.preventDefault();
            flipCard();
        }
    });
});

// Function to flip the card
function flipCard() {
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        isFlipped = !isFlipped;
        flashcard.classList.toggle('flipped', isFlipped);
    }
}

// Function to update the current card
function updateCard() {
    const cardTerm = document.getElementById('cardTerm');
    const cardDefinition = document.getElementById('cardDefinition');
    const flashcard = document.getElementById('flashcard');
    
    if (cardTerm && cardDefinition && flashcardData[currentCardIndex]) {
        cardTerm.textContent = flashcardData[currentCardIndex].term;
        cardDefinition.textContent = flashcardData[currentCardIndex].definition;
        
        // Reset card to front
        isFlipped = false;
        flashcard.classList.remove('flipped');
    }
    
    updateCardCounter();
    updateCardList();
    updateNavigationButtons();
}

// Function to show next card
function showNextCard() {
    if (currentCardIndex < flashcardData.length - 1) {
        currentCardIndex++;
        updateCard();
    }
}

// Function to show previous card
function showPreviousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}

// Function to shuffle cards
function shuffleCards() {
    // Fisher-Yates shuffle algorithm
    for (let i = flashcardData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardData[i], flashcardData[j]] = [flashcardData[j], flashcardData[i]];
    }
    currentCardIndex = 0;
    updateCard();
}

// Function to reset to first card
function resetCards() {
    currentCardIndex = 0;
    updateCard();
}

// Function to update card counter
function updateCardCounter() {
    const currentCardSpan = document.getElementById('currentCard');
    const totalCardsSpan = document.getElementById('totalCards');
    
    if (currentCardSpan) {
        currentCardSpan.textContent = currentCardIndex + 1;
    }
    
    if (totalCardsSpan) {
        totalCardsSpan.textContent = flashcardData.length;
    }
}

// Function to update navigation buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentCardIndex === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentCardIndex === flashcardData.length - 1;
    }
}

// Function to generate card list
function generateCardList() {
    const cardList = document.getElementById('cardList');
    if (!cardList) return;
    
    cardList.innerHTML = '';
    
    flashcardData.forEach(function(card, index) {
        const listItem = document.createElement('div');
        listItem.className = 'card-list-item';
        listItem.textContent = card.term;
        listItem.setAttribute('role', 'listitem');
        listItem.setAttribute('tabindex', '0');
        listItem.setAttribute('aria-label', `Go to card: ${card.term}`);
        
        listItem.addEventListener('click', function() {
            currentCardIndex = index;
            updateCard();
        });
        
        listItem.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                currentCardIndex = index;
                updateCard();
            }
        });
        
        cardList.appendChild(listItem);
    });
}

// Function to update card list highlighting
function updateCardList() {
    const cardListItems = document.querySelectorAll('.card-list-item');
    cardListItems.forEach(function(item, index) {
        if (index === currentCardIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

