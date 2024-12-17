const currentMonth = new Date().getMonth() + 1;
const currentDate = new Date().getDate();

console.log(currentMonth);
console.log(currentDate);

const monthContainer = document.getElementById('monthContainer');
const dateContainer = document.getElementById('dateContainer');

for (var i = 1; i <= 12; i++) {
    const button = document.createElement('input');
    button.type = "button";
    button.value = i + "월";
    button.className = "monthButtons";

    if(i == currentMonth){
        button.classList.add("currentMonth")
    }

    monthContainer.appendChild(button);

}

for (var i = 1; i <= 31; i++) {
    const button = document.createElement('input');
    button.type = "button";
    button.value = i ;
    button.className = "dateButtons";

    if(i == currentDate){
        button.classList.add("currentDate")
    }
    button.setAttribute("onclick", "window.location.href='../manageSchedule/manageSchedule.jsp'")

    dateContainer.appendChild(button);

}