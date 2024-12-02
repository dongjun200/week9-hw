<%-- <%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>제목</title>
    <link rel="stylesheet" type="text/css" href="manageSchedule.css">
</head>

<body>
    <h1>스케줄러 페이지입니다.</h1>

    <script src="manageSchedule.js"></script>
</body> --%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>

<head>
    <title>Schedule Manager</title>
    <link rel="stylesheet" type="text/css" href="manageSchedule.css">
    <script src="manageSchedule.js"></script>
</head>
<body>
    <div class="calendar-container">


        <div class="header">
            <button id="prevYear" onclick="changeYear(-1)">&lt;</button>
            <span id="currentYear">2024</span>
            <button id="nextYear" onclick="changeYear(1)">&gt;</button>
        </div>


        <div class="month-buttons">
            <% for (int i = 1; i <= 12; i++) { %>
                <button class="month-btn" data-month="<%= i %>" onclick="loadCalendar(<%= i %>)"><%= i %>월</button>
            <% } %>
        </div>


        <div class="calendar-grid">

        </div>
    </div>
</body>
</html>