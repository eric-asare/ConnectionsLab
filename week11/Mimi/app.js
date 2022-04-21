// initialize chatbot
let chatBot = new RiveScript();

// load logic
let chatLogic = [
    './chatLogic.rive'
];

chatBot.loadFile(chatLogic)
    .then(chatBotReady)
    .catch(chatBotNotReady);




window.addEventListener('load', () => {
    let input_box = document.getElementById('message');
    //listen for enter
    document.getElementById('form-submit').addEventListener('submit', (e) => {
        e.preventDefault();
        selfReply(input_box.value);
        input_box.value = '';
    });
})

// chat bot reply
function chatBotReply(message) {
    let message_container = document.getElementById('messages');
    message_container.innerHTML += `<div class = "bot-text"> <span class = "bot"> Mimi : </span>  ${message}</div>`;


}

//user submit a chat
function selfReply(message) {
    let message_container = document.getElementById('messages');
    message_container.innerHTML += `<div class = "self-text"> <span class = "self"> You : </span> ${message}</div>`;


    chatBot.reply("local - user", message).then(function(reply) {
        chatBotReply(reply);
    });
}

function chatBotReady() {
    chatBot.sortReplies();
    chatBotReply('Hello');
}

function chatBotNotReady(err) {
    console.log("An error has occurred.", err);
}