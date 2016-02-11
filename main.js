function startTime() {
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}())
function checkTime(t) {
    if (t < 10) {t = "0" + t};  // add zero in front of numbers < 10
    return t;
}())
