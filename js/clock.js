const clock = document.querySelector("h2#clock");
const dateText = document.querySelector("#date-text");

function getDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, "0");
    const dateNum = String(date.getDate()).padStart(2, "0");
    const day = date.getDay();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    let dayEng = "";
    if (day === 0) {
        dayEng = "Sunday"
    } else if (day === 1) {
        dayEng = "Monday"
    } else if (day === 2) {
        dayEng = "Tuesday"
    } else if (day === 3) {
        dayEng = "Wednesday"
    } else if (day === 4) {
        dayEng = "Thursday"
    } else if (day === 5) {
        dayEng = "Friday"
    } else if (day === 6) {
        dayEng = "Saturday"
    }
    dateText.innerText = `${year}-${month}-${dateNum}  ${dayEng}  ${hours}:${minutes}:${seconds}`;
}

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
}
getClock()
setInterval(getClock, 1000);

getDate()
setInterval(getDate, 1000);

