// 1. Select DOM elements
const feedbackForm = document.getElementById('feedbackForm');
const nameField = document.getElementById('nameField');
const msgField = document.getElementById('msgField');
const messageBoard = document.getElementById('messageBoard');

// Ensure script only runs if feedbackForm exists on the current page
if (feedbackForm) {
    feedbackForm.onsubmit = function(event) {
        // Prevent browser reload
        event.preventDefault();

        // Capture and trim input values
        let userName = nameField.value.trim();
        let userMessage = msgField.value.trim();

        // Validation check
        if (userName === "" || userMessage === "") {
            alert("Please enter both your name and feedback message!");
            return;
        }

        // Create card element
        let newCard = document.createElement('div');
        newCard.className = 'msg-card';

        // Inject dynamic HTML with template literals
        newCard.innerHTML = `
            <div class="msg-card-header">
                <h4>${userName}</h4>
                <button type="button" class="delete-btn">Delete</button>
            </div>
            <p>${userMessage}</p>
        `;

        // Wire up delete button (including the dot selector!)
        let deleteBtn = newCard.querySelector('.delete-btn');
        deleteBtn.onclick = function() {
            newCard.remove();
        };

        // Insert newest message at the top of the board
        messageBoard.prepend(newCard);

        // Clear form inputs
        feedbackForm.reset();
    };
}