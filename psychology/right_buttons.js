var colours = new Array();
    colours[0] = "blue_styles.css"
    colours[1] = "red_styles.css"
    colours[2] = "green_styles.css"
    colours[3] = "purple_styles.css"
    colours[4] = "cyan_styles.css"
    colours[5] = "pink_styles.css"
    colours[6] = "brown_styles.css"
    colours[7] = "orange_styles.css"

var num = 1

function color() {
    document.getElementById('colour-1').href=("colour_styles/"+colours[num]);
    num = num + 1
    if (num == 8) {
        num = 0
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("buttonset").style.pointerEvents = "none";
    document.getElementById("list").style.pointerEvents = "none";
    document.body.classList.add("stop-scrolling")
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("buttonset").style.pointerEvents = "auto";
    document.getElementById("list").style.pointerEvents = "auto";
    document.body.classList.remove("stop-scrolling")
}

function homepage() {
    window.location.href = "../index.html";
}