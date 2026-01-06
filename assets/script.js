/* JavaScript - The Logic */
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender + '-message');
        msgDiv.innerText = text;
        chatWindow.appendChild(msgDiv);
        
        // Scroll to the bottom
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function getBotResponse(input) {
        const text = input.toLowerCase();
        
        // Logic Rules
        if (text.includes("hello") || text.includes("hi")) return "Hi there! How can I help you today?";
        if (text.includes("help")) return "I can answer questions about: 'pricing', 'hours', or 'contact'.";
        if (text.includes("price") || text.includes("cost")) return "Our basic plan starts at $19/month.";
        if (text.includes("hour")) return "We are open Monday-Friday, 9am to 6pm.";
        if (text.includes("contact")) return "You can email us at support@example.com.";
        if (text.includes("bye")) return "Goodbye! Have a great day!";
        
        return "I'm sorry, I don't understand that yet. Try asking for 'help'.";
    }

    function handleSend() {
        const message = userInput.value.trim();
        if (message === "") return;

        // User Message
        addMessage(message, 'user');
        userInput.value = '';

        // Bot Response (with a small delay to simulate thinking)
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 600);
    }

    // Click button to send
    sendBtn.addEventListener('click', handleSend);

    // Press "Enter" key to send
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
