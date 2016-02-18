/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var map;

window.onload = LoadPlaceList;
            
function AddLunchChoice() {
    var li = document.createElement("li");
    var newPlace = document.getElementById("newPlace");
    li.innerHTML = newPlace.value;
    if (li.innerHTML == "") return; 
    li.id = newPlace.value;
    var ul = document.getElementById("placeListView");
    ul.appendChild(li);
    SavePlace(li.innerHTML);
    newPlace.value = "";
}

function DeleteLunchChoice() {
    var deletePlace = document.getElementById("newPlace");
    var li = document.getElementById(deletePlace.value)
    if (li == null) return;
    var ul = document.getElementById("placeListView");
    ul.removeChild(li)
    DeletePlace(li.innerHTML);
    deletePlace.value = "";
}

function SavePlace(placeName) {
    var placeListArray = GetStoredPlace("placeList");
    placeListArray.push(placeName);
    localStorage.setItem("placeList", JSON.stringify(placeListArray));
}

function DeletePlace(placeName) {
    var placeListArray = GetStoredPlace("placeList");
    placeListArray.pop(placeName);
    localStorage.setItem("placeList", JSON.stringify(placeListArray));
}

function GetStoredPlace(key) {
    var placeListArray = localStorage.getItem(key);
    if (placeListArray == null || placeListArray == "")
        placeListArray = new Array();
    else
        placeListArray = JSON.parse(placeListArray);
    return placeListArray;
}

function LoadPlaceList() {
    var placeListArray = GetStoredPlace("placeList");
    var ul = document.getElementById("placeListView");
    if (placeListArray != null) {
        for (var i = 0; i < placeListArray.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = placeListArray[i];
            li.id = placeListArray[i];
            ul.appendChild(li);
        }
    }
}

function randomLunch() {
    var placeListArray = GetStoredPlace("placeList");

    $.ajax({
        url: 'https://api.random.org/json-rpc/1/invoke',
        dataType : 'json',
        contentType: "application/json-rpc", 
        type: 'POST',
        data:  JSON.stringify({
            "jsonrpc": "2.0",
            "method": "generateSignedIntegers",
            "params": {
                "apiKey": "a8d4721f-49b8-4143-bbbf-7cc875869424", //get your http://api.random.org/api-keys/beta
                "n": 1,
                "min": 1,
                "max":  placeListArray.length,
                "replacement" : false, //by default true - the resulting numbers may contain duplicate values
                "base" : 10
            },
            "id": 14215333
        })
    })
    .done(function (data, status, request)
    {
        console.log(data);
        if (data.error)
        {
            alert(data.error.message);
        }
        if (data)
            if (data.result)
                if (data.result.random)
                {
                    var randomNumArray = data.result.random.data;
                    var randomNum = randomNumArray[0];
                    alert(placeListArray[randomNum - 1]);
                }
    })
    .fail(function (request, status, error)
    {
        alert("Failed " + error);
    });
}