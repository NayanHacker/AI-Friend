document.addEventListener("DOMContentLoaded", function() {
    const chatLog = document.getElementById("chatLog");
    const userInput = document.getElementById("userInput");

    function appendBotMessage(message) {
        const botMessage = document.createElement("p");
        botMessage.className = "bot-message";
        botMessage.textContent = message;
        chatLog.appendChild(botMessage);
    }

    function appendUserMessage(message) {
        const userMessage = document.createElement("p");
        userMessage.className = "user-message";
        userMessage.textContent = message;
        chatLog.appendChild(userMessage);
    }

    userInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const userMessage = userInput.value;
            appendUserMessage(userMessage);
            userInput.value = "";

            // Replace this section with your chatbot logic
            // For this example, the bot responds with a simple message.
            setTimeout(() => {
                appendBotMessage("I'm just a simple chatbot.");
            }, 500);
        }
    });
});
