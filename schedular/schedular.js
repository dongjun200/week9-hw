function openAddSchedule() {
    alert("일정 추가 화면을 여는 로직을 여기에 추가하세요.");
}


function editSchedule(scheduleId) {
    const newDescription = prompt("새로운 일정을 입력하세요:");
    if (newDescription) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "editSchedule.jsp", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("일정이 수정되었습니다.");
                location.reload(); 
            }
        };
        xhr.send(`scheduleId=${scheduleId}&description=${newDescription}`);
    }
}

function deleteSchedule(scheduleId) {
    if (confirm("일정을 삭제하시겠습니까?")) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "deleteSchedule.jsp", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("일정이 삭제되었습니다.");
                location.reload(); 
            }
        };
        xhr.send(`scheduleId=${scheduleId}`);
    }
}

function logout() {
    location.href = "logout.jsp"; 
}
