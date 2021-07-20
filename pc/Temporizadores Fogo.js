var CD = true
var CDW = true
var CDR = true
var CDE = true
var CDx
var CDWx
var CDRx
var CDEx
var comboCD1 = true
var comboCD2 = true
var comboCDqR1 = true
var comboCDqR2 = true
var rodas = true

// Aceleração
function Accel(){
    MovA = Mov+AceA
    AceA = AceA+Ace
    if(AceA>AceM)
    AceA = AceM
    if(AceA<0)
    AceA = 0
    if(MovA>MovM)
    MovA = MovM;
    if(MovA<Mov)
    MovA = Mov;
    //console.log(AceA)
}

// Tempos de recarga

function Cd(){
    var CDT = setTimeout(Cooldown,CDx)
    function Cooldown(){
    CD = true
    clearTimeout(CDT)
}
}

function CdW(){
    var CDT = setTimeout(Cooldown,CDWx)
    function Cooldown(){
    CDW = true
    clearTimeout(CDT)
}
}

function CdR(){
    var CDT = setTimeout(Cooldown,CDRx)
    function Cooldown(){
    CDR = true
    clearTimeout(CDT)
}
}

function CdE(){
    var CDT = setTimeout(Cooldown,CDEx)
    function Cooldown(){
    CDE = true
    rodas = true
    rodasdmgcap = false
    clearTimeout(CDT)
}
}

// Recarga para magias que não são lançadas em sequencia a tempo

function combotimer(){ 
var combocounter = 0
var Combotimerq = setInterval(combobreak,1000);
function combobreak(){
    combocounter++
    if(combocounter==5)
    {
        if(comboCD1){
        CD=false
        CDx = 3000
        combo = 1
        combocounter = 0
        Cd()
        clearInterval(Combotimerq)
        }
        else
        {
        comboCD1=true
        combocounter = 0
        clearInterval(Combotimerq)}
        }
    }
}

function combotimer2(){ 
    var combocounter = 0
    var Combotimerq = setInterval(combobreak,1000);
    function combobreak(){
        combocounter++
        if(combocounter==5)
        {
            if(comboCD2){
            CD=false
            CDx = 3000
            combo = 1
            combocounter = 0
            Cd()
            clearInterval(Combotimerq)
            }
            else
            {
            comboCD2=true
            combocounter = 0
            clearInterval(Combotimerq)}
            }
        }
    }

function combotimerRq1(){ 
        var combocounter = 0
        var Combotimerq = setInterval(combobreak,1000);
        function combobreak(){
            combocounter++
            if(combocounter==5)
            {
                if(comboCDqR1){
                CD=false
                CDx = 3000
                combo = 1
                combocounter = 0
                Cd()
                clearInterval(Combotimerq)
                }
                else
                {
                comboCDqR1=true
                combocounter = 0
                clearInterval(Combotimerq)}
                }
            }
        }

function combotimerRq2(){ 
            var combocounter = 0
            var Combotimerq = setInterval(combobreak,1000);
            function combobreak(){
                combocounter++
                if(combocounter==5)
                {
                    if(comboCDqR2){
                    CD=false
                    CDx = 3000
                    combo = 1
                    combocounter = 0
                    Cd()
                    clearInterval(Combotimerq)
                    }
                    else
                    {
                    comboCDqR2=true
                    combocounter = 0
                    clearInterval(Combotimerq)}
                    }
                }
            }
