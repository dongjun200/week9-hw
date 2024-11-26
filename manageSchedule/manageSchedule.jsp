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
            <%
                // DB 연결
                String url = "jdbc:mysql://localhost:3306/scheduleDB";
                String user = "root";
                String password = "password";

                try (Connection conn = DriverManager.getConnection(url, user, password)) {
                    String query = "SELECT day, COUNT(schedule_id) AS count FROM schedules WHERE month = ? AND year = ? GROUP BY day";
                    PreparedStatement pstmt = conn.prepareStatement(query);

                    // 초기값 (11월 기준)
                    int currentMonth = 11;
                    int currentYear = 2024;

                    pstmt.setInt(1, currentMonth);
                    pstmt.setInt(2, currentYear);
                    ResultSet rs = pstmt.executeQuery();

                    // 일정 데이터 저장
                    int[] schedules = new int[31];
                    while (rs.next()) {
                        schedules[rs.getInt("day") - 1] = rs.getInt("count");
                    }

                    // 캘린더 출력
                    for (int i = 0; i < 31; i++) {
                        String todayClass = (i + 1 == 19) ? "today" : ""; // 오늘 날짜 강조
                        %>
                            <div class="day <%= todayClass %>">
                                <span class="date"><%= i + 1 %></span>
                                <span class="schedule-count"><%= schedules[i] %></span>
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