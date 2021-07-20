function EAccel(){
    EMovA = EMov+EAceA
    EAceA = EAceA+EAce
    if(EAceA>EAceM)
    EAceA = EAceM
    if(EAceA<0)
    EAceA = 0
    if(EMovA>EMovM)
    EMovA = EMovM;
    if(EMovA<EMov)
    EMovA = EMov;

    //console.log(EEMovA)
    //console.log(EAceA)
}

var CDEQ = true
var CDEQx
var CDEW = true
var CDEWx
var CDEE = true
var CDEEx 
var CDER = true
var CDERx

function CdeQ(){
    var CDT = setTimeout(Cooldown,CDEQx)
    function Cooldown(){
    CDEQ = true
    clearTimeout(CDT)
}
}

function CdeW(){
    setTimeout(() => {
        CDEW = true
    }, CDEWx)
}

function CdeE(){
    setTimeout(() => {
        CDEE = true
    }, CDEEx)
}

function CdeR(){
    setTimeout(() => {
        CDER = true
    }, CDERx)
}