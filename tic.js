var iscross = true;
var markXarr = [];
var markOarr = [];
let myMap = new Map();
var cnt = 0;
function selectedBlock(element){
    var currId = element.id;
    cnt++;
    if(iscross)
    {
        element.textContent = "[X]";
        myMap.set(currId,'X');
        if(isWinner(element)) //alert("Winner");
        iscross = false;
    }
    else{
        element.textContent ="[O]";
        myMap.set(currId,'O');
        iscross = true;
    }
    if(cnt>4)
    {
        isWinner(element)
    }
}



function isWinner(element){
    var currSign = element.textContent;
    var currId = element.id;
    return true;
}