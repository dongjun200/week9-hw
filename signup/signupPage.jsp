<%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입</title>
    <link rel="stylesheet" type="text/css" href="signupPage.css">
</head>
<body>
    <div class="signupContainer">
        <h1>회원가입</h1>
        <form>
            <label>아이디</label>
            <input type="text">

            <label>비밀번호</label>
            <input type="password">

            <label>비밀번호 확인</label>
            <input type="password">

            <label>이름</label>
            <input type="text">

            <label>이메일</label>
            <input type="email">

            <div class="dropdownContainer">
                <div>
                    <label>부서</label>
                    <select>
                        <option value="" disabled selected>부서 선택</option>
                        <option value="marketing">마케팅</option>
                        <option value="management">경영</option>
                    </select>
                </div>
                <div>
                    <label>권한</label>
                    <select>
                        <option value="" disabled selected>권한 선택</option>
                        <option value="teamLeader">팀장</option>
                        <option value="teamMember">팀원</option>
                    </select>
                </div>
            </div>
            <button type="submit" id="signupButton">회원가입</button>
        </form>
    </div>


    <script src="signupPage.js"></script>
</body>
