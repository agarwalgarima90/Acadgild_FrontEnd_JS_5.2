
var x = document.getElementById("time");
var d = new Date();
var h = addZero(d.getHours());
var m = addZero(d.getMinutes());
x.innerHTML = h + ":" + m;

function addZero(i) {
        if (i<10) {
                i="0"+i;
        }
        return i;
}
