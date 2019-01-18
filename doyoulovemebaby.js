function clickYes() {
    document.write("<3 ");
}
function moveMouse() {
    var randomLeft = Math.floor(Math.random() * window.innerWidth);
    var randomRight = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("no").style.left = randomLeft + "px";
    document.getElementById("no").style.top = randomRight + "px";
}
