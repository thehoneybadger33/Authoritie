const chatMenu = document.getElementById("chat-menu");
if (chatMenu) {
    chatMenu.addEventListener("click", displayContent);
}
function displayContent() {
    document.getElementById("openMenu").classList.add("chat-active");
}

const dialogue = document.getElementById("dialogue");
if (dialogue) {
    dialogue.addEventListener("click", displayButtonSwitch);
}
function displayButtonSwitch() {
    document.getElementById("openMenu").classList.remove("chat-active");
}