const idRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,20}$/; 
const pwRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/; 

const idInputBox = document.getElementById("idInputBox");
const pwInputBox = document.getElementById("pwInputBox");

const idErrorMessage = document.createElement("div");
idErrorMessage.style.color = "red";
idErrorMessage.style.fontSize = "12px";

const pwErrorMessage = document.createElement("div");
pwErrorMessage.style.color = "red";
pwErrorMessage.style.fontSize = "12px";

idInputBox.parentNode.insertBefore(idErrorMessage, idInputBox.nextSibling);
pwInputBox.parentNode.insertBefore(pwErrorMessage, pwInputBox.nextSibling);

function validateIdInput() {
    if (!idRegex.test(idInputBox.value)) {
        idErrorMessage.innerHTML = "아이디는 영문 소문자, 숫자만 포함한 8~20자여야 합니다.";
    }  else if (!idRegex.test(idInputBox.value)) {
        idErrorMessage.innerHTML = "아이디는 영문 소문자, 숫자만 포함한 8~20자여야 합니다.";
    } else {
        idErrorMessage.innerHTML = ""; 
    }
}

function validatePwInput() {
    if (!pwRegex.test(pwInputBox.value)) {
        pwErrorMessage.innerHTML = "비밀번호는 영문 소문자, 숫자, 특수문자를 포함한 8~20자여야 합니다.";
    } else if (!pwRegex.test(pwInputBox.value)) {
        pwErrorMessage.innerHTML = "비밀번호는 영문 소문자, 숫자, 특수문자를 포함한 8~20자여야 합니다.";
    } else {
        pwErrorMessage.innerHTML = ""; 
    }
}

function handleLogin(event) {
    event.preventDefault(); 
    validateIdInput();
    validatePwInput();

    if (idInputBox.value.trim() === "" || pwInputBox.value.trim() === "") {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    } else if (!idRegex.test(idInputBox.value) || !pwRegex.test(pwInputBox.value)) {
        alert("아이디 또는 비밀번호 형식이 올바르지 않습니다.");
    } else {
        alert("로그인 성공!"); // 조건이 만족할 경우 성공 메시지
    }
}

// 아이디 입력하면 정규표현식 만족할때까지 에러메세지 출력

// 문자 하나하나를 입력할때마다 전 에러메세지 제거 + 에러메세지 출력
// 하는 방식으로 해야 만족했을때 없어짐

// 아이디 한 문자씩 입력 
// 정규식 만족하면 에러돔 없애기
// 정규식 만족하지않으면 에러메세지 생성