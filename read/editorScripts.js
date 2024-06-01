editorBox = document.querySelector('.editorBox')

var options = {
    modules: {
        // syntax: true,
        // formats: ['bold', 'italic', 'underline', 'link'],
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            ['link','image']
            ]
      },
    placeholder: 'compose an epic...',
    theme: 'snow'
}

const quill = new Quill(editorBox, options)

function save() {
    htmlElements = document.querySelector('.ql-editor')

    console.log(htmlElements.innerHTML)

    // articleInterior = htmlElements.innerHTML

    articleInterior = htmlElements.innerHTML.replace(/></g, ">\n        <")

    documentContent = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="icon" type="image/x-icon" href="../assets/iconR-01.png">

    <link rel="stylesheet" href="../stylesheet.css">
    <link id="colourTheme" rel="stylesheet" href="themes/lightMain.css">
    <link rel="stylesheet" href="../article.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <canvas></canvas>
    <a href="../index.html"><img src='../assets/iconR-01.png' class="icon small"></a>
    <br>
    <div class="article">
        ${articleInterior}
        <p class="goHome"><i class="fa fa-caret-left" aria-hidden="true"> </i> <a href="../index.html">Return Home</a> </p>
    </div>
</body>
</html>
<script src="../js/cookies.js"></script>
<script src="../js/footer.js"></script>
<script src="../js/textScripts.js"></script>
<script src="../js/canvas.js"></script>`

    const blob = new Blob([documentContent], { type: 'text/plain' });

    const link = document.createElement('a');
    link.download = document.querySelector('#url').value + '.html';
    link.href = URL.createObjectURL(blob);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}