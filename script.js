function toggleMode() {
    const html = document.documentElement

    if (html.classList.contains ('rotate')) {
        html.classList.remove ('rotate')
    } else {
        html.classList.add ('rotate')
    }
}

var c=document.getElementById("idCanvas");
var ctx=c.getContext("2d");