var folderOpen = "false"
document.getElementById('inFolder').style.display = "none"

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
fUnlock = urlParams.get('fUnlock')

var sources = [
    'SATT2.png',
    'song1.mp3',
    'song2.mp3',
    'song3.mp3',
    'song4.mp3',
    'song5.mp3',
    'bookNumbers.pdf',
    'morse.mp3',
    'travelPlan.pdf',
    'blank.pdf'
]

function openfolder() {
    if (folderOpen == "false") {
        document.getElementById('inFolder').style.display = "block"
        folderOpen = "true"
        document.getElementById('folderPuzzle').style.display = "none"
        document.getElementById('folderHead').innerText = "Folder Unlocked"

        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        urlA = urlParams.get('hour')
        urlB = urlParams.get('minute')
        urlC = urlParams.get('message')
        urlD = 'true'
        // penalty = urlParams.get('penalty')
        url = "?hour="+urlA+"&minute="+urlB+"&message="+urlC+"&penalty="+penalty+"&fUnlock="+urlD
            
        window.history.replaceState(null, null, url)
    }
}

function openfile(extension, name) {
    document.getElementById('folder').style.display = "none"
    document.getElementById('mp3').style.display = "none"
    document.getElementById('pdf').style.display = "none"
    if (extension == 'mp3') {
        document.getElementById('mp3').style.display = "inline-block"
        document.getElementById('audioSource').src = "documents/"+sources[name]
    } else if (extension == 'pdf') {
        document.getElementById('pdf').style.display = "inline-block"
        document.getElementById('pdf').src = "documents/"+sources[name]+"#toolbar=0"
        document.getElementById('audioSource').src = ""

    } else if (extension == 'folder') {
        document.getElementById('folder').style.display = "inline-block"
        document.getElementById('audioSource').src = ""
        document.getElementById('folderPuzzleImage').src = "documents/"+sources[name]
    }
    for (i=0; i<10; i++) {
        document.getElementById('doc'+i).classList.remove('selected')
    }
    document.getElementById('doc'+name).classList.add('selected')
}

if (fUnlock == "true") {
    openfolder()
    // openfile('folder', 0)
}