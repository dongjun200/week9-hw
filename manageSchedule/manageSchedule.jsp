<%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>일정관리페이지</title>

    <link rel="stylesheet" type="text/css" href="manageSchedule.css">

</head>

<body>
    <div id="dateContainer"></div>

    <div id="container">
        <div id="scheduleContainer"></div>
        <input id="addScheduleButton" type="button" value="일정 추가" onclick="location.href='addSchedulePage.jsp'">
    </div>



    <script src="manageSchedule.js"></script>
</body>

</html>