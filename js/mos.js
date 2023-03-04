




let pow = document.getElementById('pow')

window.onmousemove = function(event){

    x=event.clientX
    y=event.clientY

    pow.style.top=(y+20) +"px"
    pow.style.left=(x+20) +"px"
}

//استفاده از ان موس 