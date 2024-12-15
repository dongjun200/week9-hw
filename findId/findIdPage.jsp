<%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>아이디 찾기</title>
    <link rel="stylesheet" type="text/css" href="findIdPage.css">
</head>

<body>
    <div class="findIdContainer">
        <h1>아이디 찾기</h1>
        
        <form class="emailElements">
            <label id="emailLabel" for="userEmail">이메일</label>
            <input type="email" name="userEmail">
        </form>

        <button id="findIdButton" type="submit">아이디 찾기</button>

        <script src="findIdPage.js"></script>
    </div>
</body>
