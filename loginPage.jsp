<%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>main</title>
    <link rel="stylesheet" type="text/css" href="loginPage.css">
</head>

<body>
    <div class="loginContainer">
        <h1>Login</h1>
        <form>
            <input id="idInputBox" type="text" name="username" placeholder="아이디" required>
            <input id="pwInputBox" type="password" name="password" placeholder="비밀번호" required>
            <button id="loginButton" type="submit">로그인</button>
        </form>
        <div class="optionButtons">
            <button onclick="location.href='signupPage.jsp'">회원가입</button>
            <button onclick="location.href='findIdPage.jsp'">ID 찾기</button>
            <button onclick="location.href='findPwPage.jsp'">PW 찾기</button>
        </div>
    </div>

    <script src="loginPage.js"></script>
</body>
