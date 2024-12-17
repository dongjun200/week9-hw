<%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>일정추가페이지</title>

    <link rel="stylesheet" type="text/css" href="addSchedulePage.css">

</head>

<body>
    <div id="dateContainer"></div>

    <div id="container">
        <div id="scheduleContainer"></div>
        <input id="saveScheduleButton" type="button" value="저장" onclick="location.href='manageSchedule.jsp'">

    </div>



    <script src="addSchedulePage.js"></script>
</body>

</html>