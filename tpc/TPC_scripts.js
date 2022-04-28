function displaydiv(id, display) {
    document.getElementById(id).style.display = display;
}

function create() {
    displaydiv("button_options", "none")
    displaydiv("setup", "block")
    displaydiv("break", "block")
    displaydiv("login_bonus", "none")
}

function login() {
    displaydiv("button_options", "none")
    displaydiv("login", "block")
    displaydiv("break", "block")
    displaydiv("login_bonus", "none")
}

function home() {
    displaydiv("button_options", "block")
    displaydiv("setup", "none")
    displaydiv("login", "none")
    displaydiv("break", "none")
    displaydiv("popup", "none")
    displaydiv("login_bonus", "block")
    displaydiv("popup_image", "inline")
    document.getElementById("1").value = ""
    document.getElementById("2").value = ""
    document.getElementById("3").value = ""
    document.getElementById("4").value = ""
    demo()
    refresh_home()
    user_check()
}

function hasnumber(str) {
    return str.includes(0) 
    || str.includes(1)
    || str.includes(2)
    || str.includes(3)
    || str.includes(4)
    || str.includes(5)
    || str.includes(6)
    || str.includes(7)
    || str.includes(8)
    || str.includes(9)
}

function hasspecial(str) {
    return str.includes("~") 
    || str.includes("!")
    || str.includes("@")
    || str.includes("#")
    || str.includes("$")
    || str.includes("%")
    || str.includes("&")
    || str.includes("*")
    || str.includes("?")
    || str.includes(".")
}

function demo() {
    var input = document.getElementById("2").value
    if (input.length > 7 && input.length < 17) {
        document.getElementById("checklistA").style.color = "forestgreen"
        document.getElementById("checkitemA").className = "fa-li fa fa-check"
    } else {
        document.getElementById("checklistA").style.color = "red"
        document.getElementById("checkitemA").className = "fa-li fa fa-close"
    }

    if (input.toUpperCase() != input) {
        document.getElementById("checklistB").style.color = "forestgreen"
        document.getElementById("checkitemB").className = "fa-li fa fa-check"
    } else {
        document.getElementById("checklistB").style.color = "red"
        document.getElementById("checkitemB").className = "fa-li fa fa-close"
    }
 
    if (input.toLowerCase() != input) {
        document.getElementById("checklistC").style.color = "forestgreen"
        document.getElementById("checkitemC").className = "fa-li fa fa-check"
    } else {
        document.getElementById("checklistC").style.color = "red"
        document.getElementById("checkitemC").className = "fa-li fa fa-close"
    }

    if (hasnumber(input)) {
        document.getElementById("checklistD").style.color = "forestgreen"
        document.getElementById("checkitemD").className = "fa-li fa fa-check"
    } else {
        document.getElementById("checklistD").style.color = "red"
        document.getElementById("checkitemD").className = "fa-li fa fa-close"
    }

    if (hasspecial(input)) {
        document.getElementById("checklistE").style.color = "forestgreen"
        document.getElementById("checkitemE").className = "fa-li fa fa-check"
    } else {
        document.getElementById("checklistE").style.color = "red"
        document.getElementById("checkitemE").className = "fa-li fa fa-close"
    }

    if (!(input.includes(" ")) && input.length > 0) {
        document.getElementById("checklistF").style.color = "forestgreen"
        document.getElementById("checkitemF").className = "fa-li fa fa-check"
    } else {
        document.getElementById("checklistF").style.color = "red"
        document.getElementById("checkitemF").className = "fa-li fa fa-close"
    }

    if (
        input.length > 7 && input.length < 17
        && input.toUpperCase() != input
        && input.toLowerCase() != input
        && hasnumber(input)
        && hasspecial(input)
    ) { return "true" } else { return "false" }
}

function user_check() {
    var input = document.getElementById("1").value
    if (usernames.includes(input) || input.length < 3) {
        document.getElementById("user_check").className = "fa fa-close"
        document.getElementById("user_check").style.color = "red"
        return "false"
    } else {
        document.getElementById("user_check").className = "fa fa-check"
        document.getElementById("user_check").style.color = "forestgreen"
        return "true"
    }
}

function toggle() {
    color = document.getElementById("toggle").style.color
    if (eye == "A") {
        document.getElementById("toggle").style.color = "lightgrey"
        document.getElementById("toggle").className = "icon fa fa-eye-slash"
        document.getElementById("2").type = "password"
        eye = "B"
    } else {
        document.getElementById("toggle").style.color = "darkmagenta"
        document.getElementById("toggle").className = "icon fa fa-eye"
        document.getElementById("2").type = "text"
        eye = "A"
    }
}

function random() {
    var randomChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%&*?.`;
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var number = '0123456789';
    var symbol = '~!@#$%&*?.';
    var result = '';
    result += upper.charAt(Math.floor(Math.random() * upper.length));
    result += lower.charAt(Math.floor(Math.random() * lower.length));
    for ( var i = 0; i < 4; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        document.getElementById("2").value = result
    }
    result += symbol.charAt(Math.floor(Math.random() * symbol.length));
    result += number.charAt(Math.floor(Math.random() * number.length));
    document.getElementById("2").value = result
}

function generate() {
    document.getElementById("gen").style.color = "darkmagenta"
    document.getElementById("gen").className = "icon fa fa-refresh fa-spin"
    setTimeout(() => { 
        document.getElementById("gen").className = "icon fa fa-refresh"
        document.getElementById("gen").style.color = "lightgrey"

        random()

        demo()
    }, 1000);
}

function signup() {
    usern = document.getElementById("1").value
    var current = new Date();
    if (demo() == "true" && !(usern.includes(" ")) && usern.length > 0 && user_check() == "true") {
        displaydiv("setup", "none")
        displaydiv("popup", "block")
        document.getElementById("popup_title").innerText = "Success!"
        document.getElementById("popup_body").innerText = "You are now logged in as " + usern + "."
        usernames.push(usern)
        times.push(current)
        passwords.push(document.getElementById("2").value)
        account = usernames.length - 1
        loggedin = "true"
    } else {
        displaydiv("error1", "block")
        displaydiv("error1A", "none")
        setTimeout(() => { displaydiv("error1", "none"); displaydiv("error1A", "block") }, 5000);
    }
}

function check_login() {
    usern = document.getElementById("3").value
    passw = document.getElementById("4").value
    index = usernames.indexOf(usern)
    if (fails > 4) {
        displaydiv("error2B", "block")
        displaydiv("error2A", "none")
        setTimeout(() => { displaydiv("error2B", "none"); displaydiv("error2A", "block"); fails = 0}, 60000);
    } else {
        if (usern.length > 0 && passw.length > 0 && usernames.includes(usern) && passw == passwords[index]) {
            displaydiv("login", "none")
            displaydiv("popup", "block")
            document.getElementById("popup_title").innerText = "Success!"
            document.getElementById("popup_body").innerText = "You are now logged in as " + usern + "."
            loggedin="true"
            account = usernames.indexOf(usern)
        } else {
            displaydiv("error2", "block")
            displaydiv("error2A", "none")
            setTimeout(() => { displaydiv("error2", "none"); displaydiv("error2A", "block")}, 1000);
            fails++
        }
    }
}

function logout() {
    loggedin = "false"
    account = 0
    refresh_home()
}

function refresh_home() {
    if (loggedin == "true") {
        document.getElementById("home_text").innerHTML = 
        "Currently, you are logged in as <span style='color:darkmagenta;'>" + usernames[account] + `</span>.`
        displaydiv("login_bonus", "block")
    } else { 
        document.getElementById("home_text").innerHTML = "Currently, you are not logged in.<br>Login or create an account to access extra features."
        displaydiv("login_bonus", "none")
    }
}

function bonus_window(reason) {
    displaydiv("button_options", "none")
    displaydiv("login_bonus", "none")
    displaydiv("popup", "block")
    displaydiv("break", "block")
    displaydiv("popup_image", "none")
    if (reason == "about") {
        document.getElementById("popup_title").innerText = "About Us"
        document.getElementById("popup_body").innerText = `The password company, or TPC, is a website and log-in system developed by Jai Matthews for a Computer Science class. Once entering the website, you must create an account and after an account has been created you can log in to it again using the 'log in' window. 
            
            Be careful when creating an account; you must make sure the password fulfills all password requirements (8-16 characters, 1 upper case character, 1 lower case character, 1 number, and 1 special character). Also make sure your username is above 3 characters. If an error still occurs, the username is likely already taken.
            
            Those who are logged in can access extra features on the website. These extra features involve the about us page you are currently reading, a list of accounts registered, and the ability to change your password or add a description to your account that will be displayed on the user list.
            `
    } else if (reason == "users") {
        var table = ""
        document.getElementById("popup_title").innerText = "Our Users"
        table = `<table>`
        table += `
            <tr>
                <th>ID</th>
                <th>Account Name</th>
                <th>Time Registered</th>
                <th>Description</th>
            </tr>
        `
        for ( var i = 1; i < (usernames.length); i++ ) {
            table += `
                <tr>
                    <td>ACC`+i+`</td>
                    <td>`+usernames[i]+`</td>
                    <td>`+times[i]+`</td>
                    <td>-</td>
                </tr>
            `
        }
        
        table += `</table>`
        document.getElementById("popup_body").innerHTML = table
    }
}

function redirect() {
    window.open('https://mybraincells.cf/?refcode=dk1sgv84mn2qp3xh', '_blank');
}

var eye = "B"
var loggedin = "false"
var usernames = ["Default"]
var passwords = ["Default"]
var times = ["Default"]
var account = 0
var fails = 0
home()