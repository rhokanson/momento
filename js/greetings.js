const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginGreeting = document.querySelector("#login-form span");
const greeting = document.querySelector("#greeting");

const clock2 = document.querySelector("h2#clock");

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
    const date = new Date();
    const hours = date.getHours();
    let chosenGreeting = "";
    if (Math.random() < 0.1) {
        chosenGreeting = "Don't forget to drink water";
    } else if(hours < 5) {
        chosenGreeting = "It's good to sleep 7~9 hours per night";
    } else if (hours < 12) {
    chosenGreeting = "Good morning";
    } else if(hours < 17) {
    chosenGreeting = "Good afternoon";
    } else if(hours < 24) {
    chosenGreeting = "Good evening";
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText =`${chosenGreeting}, ${username}`;
    clock2.classList.remove(HIDDEN_CLASSNAME);
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


