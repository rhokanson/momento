const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginGreeting = document.querySelector("#login-form span");
const greeting = document.querySelector("#greeting");
const goodsomething = ["Good morning", "Good afternoon", "Good evening", "Go to bed"];
const date = new Date();
const hours = date.getHours();
let chosenGreeting = [];


if(hours < 5) {
    chosenGreeting = (goodsomething[3]);
} else if (hours < 12) {
chosenGreeting = (goodsomething[0]);
} else if(hours < 17) {
chosenGreeting = (goodsomething[1]);
} else if(hours < 24) {
chosenGreeting = (goodsomething[2]);
}


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginInput.classList.add(HIDDEN_CLASSNAME);
    loginGreeting.classList.add(HIDDEN_CLASSNAME);
    paintGreetings()
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText =`${chosenGreeting}, ${username}`;

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.classList.remove(HIDDEN_CLASSNAME);
    loginGreeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings()
}











  
