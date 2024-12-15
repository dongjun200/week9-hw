const idRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,20}$/;
const pwRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/;

const idInputBox = document.getElementById("idInputBox");
const pwInputBox = document.getElementById("pwInputBox");

function createErrorMessage(message){
    const errorMessage = document.createElement("div");
    errorMessage.textContent = message;
    return errorMessage;
}

function removeErrorMessage(input){

}

// 


function validateInput(input, regex, errorMessage){
    removeErrorMessage();
    console.log("입력");
    createErrorMessage(errorMessage);
    input.style.bordercolor = "#0056a3";  
    return true;
}

function validateIdInput(){
    validateInput(idInputBox, idRegex, "아이디는 영문 소문자, 숫자를 포함한 8~20자여야 합니다");
}

function validatePwInput(){
    validateInput(pwInputBox, pwRegex, "비밀번호는 영문 소문자, 숫자, 특수문자를 포함한 8~20자여야 합니다");
}


// 

// 아이디 입력하면 정규표현식 만족할때까지 에러메세지 출력

// 문자 하나하나를 입력할때마다 전 에러메세지 제거 + 에러메세지 출력
// 하는 방식으로 해야 만족했을때 없어짐

// 아이디 한 문자씩 입력 
// 정규식 만족하면 에러돔 없애기
// 정규식 만족하지않으면 에러메세지 생성











// const idInputBox = document.getElementById("idInputBox");
// const pwInputBox = document.getElementById("pwInputBox");

// const idRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,20}$/; 
// const pwRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/; 



// function createErrorMessage(message) {
//     const errorMessage = document.createElement("div");
//     // errorMessage.classList.add("errorMessage");
//     errorMessage.textContent = message;
//     console.log("Error Message Created:", errorMessage);
//     return errorMessage;
// }

// function removeErrorMessage(input) {
//     const nextElement = input.nextElementSibling;
//     if (nextElement && nextElement.classList.contains("errorMessage")) {
//         nextElement.remove();
//     }
// };

// function validateInput(input, regex, message) {
//     removeErrorMessage(input);
//     if (!regex.test(input.value.trim())) {
//         const errorMessage = createErrorMessage(message);
//         input.insertAdjacentElement("afterend", errorMessage);
//         return false;
//     }
//     else {
//         input.style.borderColor = "#0056a3";
//         return true;
//     }
// };

// function validateIdInput() {
//     validateInput(idInputBox, idRegex, "아이디는 영문 소문자, 숫자를 포함한 8~20자여야 합니다.");
// }


// function validatePwInput() {
//     validateInput(pwInputBox, pwRegex, "비밀번호는 영문 소문자, 숫자, 특수문자를 포함한 8~20자여야 합니다.");
// }

// function handleLogin(event) {
//     const isIdValid = validateInput(idInputBox, idRegex, "아이디는 영문 소문자, 숫자를 포함한 8~20자여야 합니다.");
//     const isPwValid = validateInput(pwInputBox, pwRegex, "비밀번호는 영문 소문자, 숫자, 특수문자를 포함한 8~20자여야 합니다.");

//     if (!isIdValid || !isPwValid) {
//         event.preventDefault(); 
//     }
// }







// const createErrorMessage = (message) => {
//     const errorMessage = document.createElement("div");
//     errorMessage.classList.add("errorMessage");
//     errorMessage.textContent = message;

//     console.log("Error Message Created:", errorMessage); 

//     return errorMessage;
// };



// const removeErrorMessage = (input) => {
//     const nextElement = input.nextElementSibling;
//     if (nextElement && nextElement.classList.contains("errorMessage")) {
//         nextElement.remove();
//     }
// };

// const validateInput = (input, regex, message) => {
//     removeErrorMessage(input);
//     if (!regex.test(input.value.trim())) {
//         const errorMessage = createErrorMessage(message);

//         console.log("Inserting Error Message after:", input); 

//         input.insertAdjacentElement("afterend", errorMessage);
//         return false;
//     } else {
//         input.style.borderColor = "#0056a3"; 
//         return true;
//     }
// };
// // common 폴더에 넣어서 둘것

// idInputBox.addEventListener("input", () => {
//     validateInput(
//         idInputBox,
//         idRegex,
//         "아이디는 영문 소문자, 숫자를 포함한 8~20자여야 합니다."
//     );
// });

// pwInputBox.addEventListener("input", () => {
//     validateInput(
//         pwInputBox,
//         pwRegex,
//         "비밀번호는 영문 소문자, 숫자, 특수문자를 포함한 8~20자여야 합니다."
//     );
// });

// loginButton.addEventListener("click", (event) => {
//     const isIdValid = validateInput(
//         idInputBox,
//         idRegex,
//         "아이디는 영문 소문자, 숫자를 포함한 8~20자여야 합니다."
//     );

//     const isPwValid = validateInput(
//         pwInputBox,
//         pwRegex,
//         "비밀번호는 영문 소문자, 숫자, 특수문자를 포함한 8~20자여야 합니다."
//     );

//     if (!isIdValid || !isPwValid) {
//         event.preventDefault(); 
//     }
// });
