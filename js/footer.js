if (window.location.href.includes('/read/')) {
    goHomeEr = '../'
} else {
    goHomeEr = ''
}

footer = `
<div class="footer">
    <div class="bunch">
        <a href="${goHomeEr}read/changelog.html">Change Log</a>
        <a href="${goHomeEr}read/terms.html">Terms & Conditions</a>
        <a href="${goHomeEr}read/contact.html">Contact</a>
        <a href="https://www.instagram.com/jaimatthews1/" target="_blank">Instagram</a>
    </div>
    <div class="bunch bunch2">
        <p>Jai Matthews, 2023</p>
        <a onclick="topFunction()">Back to Top</a>
    </div>
    
    <div class="darkToggle">
        <p>Dark Mode</p>
        <label class="switch" onclick="darkUpdate()">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
    </div>
</div>
`

document.body.innerHTML = `
    <div class="wholeDocument">
        ${document.body.innerHTML}
    </div>
    ${footer}
`;

//dark mode stuff:

function darkUpdate() {

    if (document.querySelector('.switch').querySelector('input').checked) {
        document.querySelector('#colourTheme').href = `${goHomeEr}themes/darkMain.css`
        setCookie('dark','true')
    } else {
        document.querySelector('#colourTheme').href = `${goHomeEr}themes/lightMain.css`
        setCookie('dark','false')
    }
}

if (getCookie('dark') == 'true') {
    document.querySelector('.switch').querySelector('input').checked = true
} else {
    document.querySelector('.switch').querySelector('input').checked = false
}

darkUpdate()