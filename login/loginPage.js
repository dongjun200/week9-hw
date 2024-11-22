// function loginEvent(){
//     const idInputBox = document.getElementById("idInputBox")
//     const pwInputBox = document.getElementById("pwInputBox")

//     const idRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,20}$/
//     const pwRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/


//}



const idInputBox = document.getElementById("idInputBox");
const pwInputBox = document.getElementById("pwInputBox");
const loginButton = document.getElementById("loginButton");

const idRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,20}$/; 
const pwRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/; 

const createErrorMessage = (message) => {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("errorMessage");
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "12px";
    errorMessage.style.marginTop = "5px";
    errorMessage.textContent = message;
    return errorMessage;
};

const removeErrorMessage = (input) => {
    const nextElement = input.nextElementSibling;
    if (nextElement && nextElement.classList.contains("errorMessage")) {
        nextElement.remove();
    }
};

// 입력값 검증
const validateInput = (input, regex, message) => {
    removeErrorMessage(input);
    if (!regex.test(input.value.trim())) {
        const errorMessage = createErrorMessage(message);
        input.insertAdjacentElement("afterend", errorMessage);
        input.style.borderColor = "red";
        return false;
    } else {
        input.style.borderColor = "#0056a3"; // 정상 입력 시 테두리 색상 변경
        return true;
    }
};

// 실시간 입력 검증
idInputBox.addEventListener("input", () => {
    validateInput(
        idInputBox,
        idRegex,
        "아이디는 영문 소문자, 숫자를 포함한 8~20자여야 합니다."
    );
});

pwInputBox.addEventListener("input", () => {
    validateInput(
        pwInputBox,
        pwRegex,
        "비밀번호는 영문 소문자, 숫자, 특수문자를 포함한 8~20자여야 합니다."
    );
});

// 로그인 버튼 클릭 이벤트
loginButton.addEventListener("click", (event) => {
    const isIdValid = validateInput(
        idInputBox,
        idRegex,
        "아이디는 영문 소문자, 숫자를 포함한 8~20자여야 합니다."
    );

    const isPwValid = validateInput(
        pwInputBox,
        pwRegex,
        "비밀번호는 영문 소문자, 숫자, 특수문자를 포함한 8~20자여야 합니다."
    );

    if (!isIdValid || !isPwValid) {
        event.preventDefault(); // 폼 제출 방지
    }
});
