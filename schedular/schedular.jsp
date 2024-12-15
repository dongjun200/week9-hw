<%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<%@ page import="java.sql.DriverManager" %> 
<%@ page import="java.sql.Connection" %> 
<%@ page import="java.sql.PreparedStatement" %> 

<%@ page import="java.sql.ResultSet" %> 
<!DOCTYPE html>
<html>
<head>
    <title>스케줄러</title>
    <link rel="stylesheet" type="text/css" href="scheduler.css">

</head>
<body>

    <div>
        <div id="yearBox">
            <input type="button" value="2024">
        </div>
    
    </div>

    <script src="scheduler.js"></script>

</body>
</html>