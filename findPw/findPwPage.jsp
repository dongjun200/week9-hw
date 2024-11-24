<%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>비밀번호 찾기</title>
    <link rel="stylesheet" type="text/css" href="findPwPage.css">
</head>

<body>
    <div class="findPwContainer">
        <h1>비밀번호 찾기</h1>
        
        <form>
            <label>아이디</label>
            <input type="text" name="userId">

            <label>이메일</label>
            <input type="email" name="userEmail">
        </form>

        <button id="findPwButton" type="submit">비밀번호 찾기</button>

        <script src="findPwPage.js"></script>
    </div>

    <script src="findPwPage.js"></script>
</body>