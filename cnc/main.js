function ChangeTheme() {
    if (document.querySelector(".pagestyle").href = "main.css") {
        changeStyleSheet("secondary.css");
    } else if (document.querySelector(".pagestyle").href = "secondary.css") {
        changeStyleSheet("main.css");
    }
}

function changeStyleSheet(sheet) {
    document.querySelector(".pagestyle").setAttribute("href", sheet);  
}

var subiframe = document.querySelector(".subscribe-iframe");
subiframe.onload = function() {
    subiframe.style.visibility = "unset";
}

function secr() {
    if (prompt("code") == "abc") {
        document.querySelector(".pagestyle").href = "secr.css";
    } else if (prompt("code") == "2") {
        document.querySelector(".pagestyle").href = "secondary.css";
    }
}

var tmember_box = document.querySelectorAll(".team-member");

var a;
for (a = 0; a < tmember_box.length; a++) {
    tmember_box[a].addEventListener("click", function() {
        this.classList.toggle("team-member_active");
        var cnt = this.nextElementSibling;
        if (cnt.style.maxHeight) {
            cnt.style.maxHeight = null;
        } else {
            cnt.style.maxHeight = cnt.scrollHeight + "px";
        }
    });
}