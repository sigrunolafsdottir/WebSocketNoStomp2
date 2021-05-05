
var ws;
ws = new WebSocket('ws://localhost:8080/name');
ws.onmessage = function(data){
    showGreeting(data.data);
}

function sendName() {
    var data = JSON.stringify({'name': $("#name").val()})
    ws.send(data);
}

function showGreeting(message) {
    $("#greetings").append("<tr><td> " + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#send" ).click(function() { sendName(); });
});