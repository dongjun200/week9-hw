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


const createErrorMessage = (message) => {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("errorMessage");
    errorMessage.textContent = message;

    console.log("Error Message Created:", errorMessage); 

    return errorMessage;
};

const removeErrorMessage = (input) => {
    const nextElement = input.nextElementSibling;
    if (nextElement && nextElement.classList.contains("errorMessage")) {
        nextElement.remove();
    }
};

const validateInput = (input, regex, message) => {
    removeErrorMessage(input);
    if (!regex.test(input.value.trim())) {
        const errorMessage = createErrorMessage(message);

        console.log("Inserting Error Message after:", input); 

        input.insertAdjacentElement("afterend", errorMessage);
        return false;
    } else {
        input.style.borderColor = "#0056a3"; 
        return true;
    }
};
// common 폴더에 넣어서 둘것

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
        event.preventDefault(); 
    }
});
