<%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<%@ page import="java.sql.DriverManager" %> 
<%@ page import="java.sql.Connection" %> 
<%@ page import="java.sql.PreparedStatement" %> 

<%@ page import="java.sql.ResultSet" %> 
<!DOCTYPE html>
<html>
<head>
    <title>Schedule Details</title>
    <link rel="stylesheet" type="text/css" href="scheduleDetails.css">
    <script src="scheduleDetails.js"></script>
</head>
<body>
    <div class="schedule-container">
        <div class="header">
            <button class="logout-btn" onclick="logout()">로그아웃</button>
            <span class="selected-date"><%= request.getParameter("date") %></span>
            <button class="add-btn" onclick="openAddSchedule()">일정 추가</button>
        </div>
        <div class="schedule-list">

        </div>
    </div>
</body>
</html>