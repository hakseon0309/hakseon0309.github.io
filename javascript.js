var curMode = 0;

function Light_Dark_Mode() {
    if (curMode == 0) {
        document.getElementById('wrapper').style.color = black;
        document.getElementById('wrapper').style.backgroundColor = white;
        curMode = 1;
    }
    else if (curMode == 1) {
        document.getElementById('wrapper').style.color = white;
        document.getElementById('wrapper').style.backgroundColor = black;
    }
    
}