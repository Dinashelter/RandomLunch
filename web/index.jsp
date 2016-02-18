<%-- 
    Document   : index
    Created on : Jan 28, 2016, 3:16:39 PM
    Author     : d6l
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="css/randomLunch.css" rel="stylesheet" type="text/css" />
        <script src="js/jquery-2.0.0.min.js"></script>
        <script src="js/randomLunch.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8XIpcs7JiyR6DbAHSUGDkWfokcEx4Y5E&callback=initMap"
    async defer></script>
    </head>
    <body background="pic/foodbg1.jpg">
        <button id="randomLunch" onclick="randomLunch()">随机选择午餐</button>
        <input id="newPlace" type="text" size="20" placeholder="新餐厅"/>
        <button id="addLunchChoice" onclick="AddLunchChoice()">添加</button>
        <button id="deleteLunchChoice" onclick="DeleteLunchChoice()">删除</button>
        <button id="viewHistory">查看历史记录</button>
        <div id="placeDiv">
            <ul id="placeListView">
            </ul>
        </div>
    </body>
</html>
