const currentYear = 2024;

function changeYear(delta) {
    // 연도 변경
    currentYear += delta;
    document.getElementById("currentYear").textContent = currentYear;

    // 새 연도로 캘린더 로드 (기본 1월)
    loadCalendar(1);
}

function loadCalendar(month) {
    // 서버에서 데이터를 가져와 캘린더 업데이트
    const calendarGrid = document.querySelector(".calendar-grid");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `manageSchedule.jsp?month=${month}&year=${currentYear}`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            calendarGrid.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}