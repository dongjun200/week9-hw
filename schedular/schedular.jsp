<%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<%@ page import="java.sql.DriverManager" %> 
<%@ page import="java.sql.Connection" %> 
<%@ page import="java.sql.PreparedStatement" %> 

<%-- 데이터베이스로부터 값 받아오기 라이브러리 (db에서 보내주는 값 번역해주는 라이브러리) --%>
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
            <% 
                String date = request.getParameter("date");
                String userId = (String) session.getAttribute("userId"); // 로그인한 사용자 ID

                String url = "jdbc:mysql://localhost:3306/scheduleDB";
                String dbUser = "root";
                String dbPassword = "password";

                try (Connection conn = DriverManager.getConnection(url, dbUser, dbPassword)) {
                    String query = "SELECT schedule_id, time, description, author FROM schedules WHERE date = ? ORDER BY time";
                    PreparedStatement pstmt = conn.prepareStatement(query);
                    pstmt.setString(1, date);
                    ResultSet rs = pstmt.executeQuery();

                    while (rs.next()) {
                        String scheduleId = rs.getString("schedule_id");
                        String time = rs.getString("time");
                        String description = rs.getString("description");
                        String author = rs.getString("author");

                        boolean isAuthor = userId.equals(author);

                        %>
                            <div class="schedule-item">
                                <span class="time"><%= time %></span>
                                <span class="description"><%= description %></span>
                                <span class="author"><%= author %></span>
                                <% if (isAuthor) { %>
                                    <button class="edit-btn" onclick="editSchedule('<%= scheduleId %>')">수정</button>
                                    <button class="delete-btn" onclick="deleteSchedule('<%= scheduleId %>')">삭제</button>
                                <% } %>
                            </div>
                        <%
                    }
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            %>
        </div>
    </div>
</body>
</html>