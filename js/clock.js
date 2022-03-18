const clock = document.querySelector("h2#clock");
const dateText = document.querySelector("#date-text");

function getDate() {
    const date = new Date();
    // const year = date.getFullYear();
    // const month = String(date.getMonth()+1).padStart(2, "0");
    // const dateNum = String(date.getDate()).padStart(2, "0");
    // const day = date.getDay();
    // let dayKr = "";
    // if (day === 0) {
    //     dayKr = "Sun"
    // } else if (day === 1) {
    //     dayKr = "Mon"
    // } else if (day === 2) {
    //     dayKr = "Tue"
    // } else if (day === 3) {
    //     dayKr = "Wed"
    // } else if (day === 4) {
    //     dayKr = "Thu"
    // } else if (day === 5) {
    //     dayKr = "Fri"
    // } else if (day === 6) {
    //     dayKr = "Sat"
    // }
    dateText.innerText = `${date}`;
    // dateText.innerText = `${year}-${month}-${dateNum} (${dayKr})`;
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

