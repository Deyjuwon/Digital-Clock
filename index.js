function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var mins = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";

    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    mins = (mins < 10) ? "0" + mins : mins;
    sec = (sec < 10) ? "0" + sec : sec;


    var time = hour + ":" + mins + ":" + sec + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    setTimeout(showTime, 1000);
}
showTime();