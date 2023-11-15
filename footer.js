footer = `
<div class="footer">
    <a href="changelog.html">Change Log</a>
    <a href="tnc.html">Terms & Conditions</a>
    <a href="contact.html">Contact</a>
    <a href="https://www.instagram.com/jaimatthews1/" target="_blank">Instagram</a>
    
    <div class="darkToggle">
        <p>Dark Mode</p><br>
        <label class="switch" onclick="darkUpdate()">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
    </div>

    <br>
    <p>Jai Matthews, 2023</p>
    <a onclick="topFunction()">Back to Top</a>
</div>
`

document.body.innerHTML += footer;

//dark mode stuff:

function darkUpdate() {

    if (getCookie('dark') == 'true') {
        document.querySelector('.switch').querySelector('input').checked = true
    } else {
        document.querySelector('.switch').querySelector('input').checked = false
    }

    if (document.querySelector('.switch').querySelector('input').checked) {
        document.body.style.setProperty('--elGrey','#424242')
        document.body.style.setProperty('--eelGrey','rgba(112, 112, 112, 0.5)')
        document.body.style.setProperty('--bgBlue','#304141')
        document.body.style.setProperty('--hlBlue','#a6fdf4')
        document.body.style.setProperty('--elBlue','#0d8b7d')
        document.body.style.setProperty('--acBlue','#9fd4cf')
        document.body.style.setProperty('--lBlue','#0b7e72')
        document.body.style.setProperty('--textlBlue','#11e2cd')
        document.body.style.setProperty('--text','#ffffff')
        document.body.style.setProperty('--white','rgb(39, 39, 39)')
        document.body.style.setProperty('--smoke','rgb(85, 85, 85)')
        setCookie('dark','true')
    } else {
        document.body.style.setProperty('--elGrey','unset')
        document.body.style.setProperty('--eelGrey','unset')
        document.body.style.setProperty('--bgBlue','unset')
        document.body.style.setProperty('--hlBlue','unset')
        document.body.style.setProperty('--elBlue','unset')
        document.body.style.setProperty('--acBlue','unset')
        document.body.style.setProperty('--lBlue','unset')
        document.body.style.setProperty('--textlBlue','unset')
        document.body.style.setProperty('--text','unset')
        document.body.style.setProperty('--white','unset')
        document.body.style.setProperty('--smoke','unset')
        setCookie('dark','false')
    }
}

darkUpdate()