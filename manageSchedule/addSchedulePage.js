const currentMonth = new Date().getMonth() + 1;
const currentDate = new Date().getDate();

const dateContainer = document.getElementById("dateContainer");

const button = document.createElement("input");
button.type = "button"
button.value = currentMonth + "월" + currentDate + "일";
button.className = "currentDate";
button.classList.add('currentDate');

dateContainer.appendChild(button);