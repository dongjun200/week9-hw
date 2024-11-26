// 일정 추가 버튼 클릭
function openAddSchedule() {
    alert("일정 추가 화면을 여는 로직을 여기에 추가하세요.");
    // 추가 기능 구현
}

// 일정 수정
function editSchedule(scheduleId) {
    const newDescription = prompt("새로운 일정을 입력하세요:");
    if (newDescription) {
        // AJAX 요청으로 서버에 수정 요청 전송
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "editSchedule.jsp", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("일정이 수정되었습니다.");
                location.reload(); // 페이지 새로고침
            }
        };
        xhr.send(`scheduleId=${scheduleId}&description=${newDescription}`);
    }
}

// 일정 삭제
function deleteSchedule(scheduleId) {
    if (confirm("일정을 삭제하시겠습니까?")) {
        // AJAX 요청으로 서버에 삭제 요청 전송
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "deleteSchedule.jsp", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("일정이 삭제되었습니다.");
                location.reload(); // 페이지 새로고침
            }
        };
        xhr.send(`scheduleId=${scheduleId}`);
    }
}

// 로그아웃
function logout() {
    location.href = "logout.jsp"; // 로그아웃 처리 페이지로 이동
}
