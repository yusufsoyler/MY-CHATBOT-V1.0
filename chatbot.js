// chatbot.js
document.getElementById("user-input").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    appendMessage("user", userInput);

    // Chatbot cevapları
    var botResponse = getBotResponse(userInput);
    appendMessage("bot", botResponse);

    // Giriş alanını temizle
    document.getElementById("user-input").value = '';
}

function appendMessage(sender, message) {
    var chatContainer = document.getElementById("chat-container");
    var messageDiv = document.createElement("div");
    messageDiv.className = sender;
    messageDiv.innerHTML = `<strong>${sender.charAt(0).toUpperCase() + sender.slice(1)}:</strong> ${message}`;
    chatContainer.appendChild(messageDiv);

    // Otomatik olarak en altta ki mesajı görüntüle
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getBotResponse(userInput) {
    // Basit bir chatbot mantığı - Örnek cevaplar
    if (userInput.toLowerCase().includes("merhaba")) {
        return "Merhaba! Size nasıl yardımcı olabilirim?";
    } else if (userInput.toLowerCase().includes("teşekkür")) {
        return "Rica ederim! Başka bir sorunuz var mı?";
    } else if (userInput.toLowerCase().includes("saat")) {
        return "PC saatine baksana davar";
    } else if (userInput.toLowerCase().includes("naber lan")) {
        return "iyidir kalleş";
    } else if (userInput.toLowerCase().includes("ne atar yapıyün")) {
        return "atara atar gidere gider işine gelmiyorsa exit orda";
    } else if (userInput.toLowerCase().includes("sakin")) {
        return "Sakinim lan ben";
     } else if (userInput.toLowerCase().includes("sa")) {
            return "Aleyküm Selam";
        } else if (userInput.toLowerCase().includes("Ne haber lan")) {
            return "İyidir kardeş";
    } else {
        return "Üzgünüm, anlamadım. Lütfen başka bir şey sorun.";
    }
    
}
function startVoiceRecognition() {
    // Burada ses tanıma (voice recognition) kodlarını ekleyeceksiniz.
    // Tarayıcıya bağlı olarak farklı API'leri kullanabilirsiniz.
    // Örneğin, Web Speech API kullanabilirsiniz.
    // Bu API, tarayıcı desteğine bağlı olarak farklılık gösterir.
    // Tarayıcı desteğini kontrol ederek uygun API'yi seçmelisiniz.

    if ('webkitSpeechRecognition' in window) {
        var recognition = new webkitSpeechRecognition();

        recognition.onresult = function (event) {
            var transcript = event.results[0][0].transcript;
            document.getElementById("user-input").value = transcript;
            sendMessage();
        };

      recognition.start();
    } else {
        alert("Mikrofon İzinini aktif ediniz.");
    }
}


/*arkaplan renk değiştirme kodları*/ 




