// Conjuros
function Ecastq(){
    somraio.play()
    magiaEq()
    CDEQ = false
    CDEQx = 3500
    CdeQ()
}

var raioreturn = false
var raioreturning = false

function Ecastw(){
    somraio.play()
    if(!raioreturn){
    magiaEw()
    Ecastanima = false
    CDEW = false
    var castwT = setTimeout(castwTime,500) 
    function castwTime(){
            Ecastanima = true
            CDEWx = 1500
            CdeW()
            clearTimeout(castwT)
            }
    }
    else
    {
        raioreturning = true
        CDEW = false
        CDEWx = 6000
        CdeW()
    }
}

function Ecaste(){
    if(!Rcolision4){
    somraio.play()
    magiaEe()
    Ecastanima = false
    Etangivel = false
    CDEE = false
    CDEEx = 4000
    CdeE()
    }
    }


var dashR = false
var dashconfirm = false
var dashanimationdebug = false

var dashR2 = false
var dashconfirm2 = false

var resq1 = false
var resq2 = false

var contadorresq = 0
var contadorresq2 = 0

function Ecastr(){
    if(!dashR&&!dashR2){
        if(!resq1||!resq2){
        if(Emana>62.5){
            somraio.play()
            if(!resq1)
            magiaEr()
            else if(!resq2)
            magiaEr2()
            Emanacharge-= 62
            Ecastanima = false
            CDER = false
            CDERx = 950
            setTimeout(() => {
                Ecastanima = true
                CdeR()
            }, 600)
        }}
    }
    else if(dashR||dashR2&&!Rcolision4){
        somraio.play()
        if(dashR)
        dashconfirm = true
        else if(dashR2)
        dashconfirm2 = true
        dashanimationdebug = true
        Etangivel = false
        Ecastanima = false
        CDER = false
        CDERx = 750
        CdeR()
    }
    }


// Desenhadores

var Rcolision = false
var Rcolision2 = false
var Rcolision3 = false
var Rcolision4 = false
var Rcolision5 = false
var Rcolision6 = false
var RcolisionUlt1 = false
var RcolisionUlt2 = false

var fpsmagiasEq = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!Rcolision){
        requestAnimationFrame(loop)
        var agora = new Date().getTime()
        var diferenca = agora - antes
        if(diferenca > intervalo ){
            antes = agora - (diferenca % intervalo)
            fn()
        }}
        else
        cancelAnimationFrame(loop)
    }(0))

}
var fpsmagiasEq2 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!Rcolision2){
        requestAnimationFrame(loop)
        var agora = new Date().getTime()
        var diferenca = agora - antes
        if(diferenca > intervalo ){
            antes = agora - (diferenca % intervalo)
            fn()
        }}
        else
        cancelAnimationFrame(loop)
    }(0))
}

var fpsmagiasEw = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!Rcolision3){
        requestAnimationFrame(loop)
        var agora = new Date().getTime()
        var diferenca = agora - antes
        if(diferenca > intervalo ){
            antes = agora - (diferenca % intervalo)
            fn()
        }}
        else
        cancelAnimationFrame(loop)
    }(0))
}

var fpsmagiasEe = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!Rcolision4){
        requestAnimationFrame(loop)
        var agora = new Date().getTime()
        var diferenca = agora - antes
        if(diferenca > intervalo ){
            antes = agora - (diferenca % intervalo)
            fn()
        }}
        else
        cancelAnimationFrame(loop)
    }(0))
}

var fpsmagiasEr = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!RcolisionUlt1){
        requestAnimationFrame(loop)
        var agora = new Date().getTime()
        var diferenca = agora - antes
        if(diferenca > intervalo ){
            antes = agora - (diferenca % intervalo)
            fn()
        }}
        else
        cancelAnimationFrame(loop)
    }(0))
}

var fpsmagiasEr2 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!RcolisionUlt2){
        requestAnimationFrame(loop)
        var agora = new Date().getTime()
        var diferenca = agora - antes
        if(diferenca > intervalo ){
            antes = agora - (diferenca % intervalo)
            fn()
        }}
        else
        cancelAnimationFrame(loop)
    }(0))
}

var fpsmagiasErq = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!Rcolision5){
        requestAnimationFrame(loop)
        var agora = new Date().getTime()
        var diferenca = agora - antes
        if(diferenca > intervalo ){
            antes = agora - (diferenca % intervalo)
            fn()
        }}
        else
        cancelAnimationFrame(loop)
    }(0))
}

var fpsmagiasErq2 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!Rcolision6){
        requestAnimationFrame(loop)
        var agora = new Date().getTime()
        var diferenca = agora - antes
        if(diferenca > intervalo ){
            antes = agora - (diferenca % intervalo)
            fn()
        }}
        else
        cancelAnimationFrame(loop)
    }(0))
}

//Magias

var eletrocutado = false
var testedano = false

function magiaEq()
        { 
    
    var Yy = 0
    var Xx = 0
    var Tx = 0
    var Ty = 0
    var dmgcap = false
    var anima = 0
    var contadorfpsmagia = 0
    var magQ = new Image()
    magQ.src = "skills/skillraioQ.png"
 

    fpsmagiasEq(magiaT,60)

    function magiaT(){
        Tx = Ex
        Ty = Ey
        Xx = Ex
        Yy = Ey

        if(contadorfpsmagia<=1)
        contadorfpsmagia++
        else{
        contadorfpsmagia = 0
        anima++
        if(anima>9)
        anima = 0
        }

        context.drawImage(magQ,0+(anima*362),0, 362,362,Xx-20,Yy-25,180,180)

        setTimeout(() => {
            Rcolision = true
            setTimeout(() => {
                Rcolision = false
            },450)
        }, 400)

        if( trueX>Tx-x-20-95&&
            trueY>Ty-y-25-105&&   
            trueX<Tx-x-20+125&&
            trueY<Ty-y-25+165) 
        {
            if(!dmgcap){
            Emanacharge+=25
            this.herodmg+= 20
            dmgcap = true
            setTimeout(() => {
                magiaEq2()
            }, 1250)
            danoP()
            }
            
        }
    }}

function magiaEq2()
        { 
    somraio.play()
    var Yy = 0
    var Xx = 0
    var Tx = 0
    var Ty = 0
    var dmgcap2 = false
    var contadorfpsmagia = 0
    var anima = 0
    var magQ = new Image()
    magQ.src = "skills/skillraioQ.png"


    fpsmagiasEq2(magiaT,60)
    function magiaT(){
        Tx = Ex
        Ty = Ey
        Xx = Ex
        Yy = Ey

        if(contadorfpsmagia<=1)
        contadorfpsmagia++
        else{
        contadorfpsmagia = 0
        anima++
        if(anima>9)
        anima = 0
        }

        context.drawImage(magQ,0+(anima*362),0, 362,362,Xx-20,Yy-25,180,180)


        setTimeout(() => {
            Rcolision2 = true
            setTimeout(() => {
                Rcolision2 = false
            },450)
        }, 400)

        if( trueX>Tx-x-20-95&&
            trueY>Ty-y-25-105&&   
            trueX<Tx-x-20+125&&
            trueY<Ty-y-25+165) 
        {
            if(!dmgcap2){
            Emanacharge+=25
            this.herodmg+= 20
            dmgcap2 = true
            danoP()
            }
            
        }
    }}

function magiaEw()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var OlharMagia
        var eletrocutar = false
        var eletrocutar2 = true
        var carregado = false   
        var contadorfpsmagia = 0
        var contadorvoltaraio = 0
        var anima = 0
        LadoM = ELado
        OlharMagia = EOlharDireita 
        var AXx = Ex
        var AYy = Ey

        var magW = new Image()
        magW.src = "skills/skillraioW.png"


            fpsmagiasEw(magiaT,60)
            function magiaT(){
                if(LadoM<=4)
                distancia+=5.5
                else
                distancia+=6.5

                if(raioreturn)
                contadorvoltaraio++

                contadorfpsmagia++
                if(contadorfpsmagia>5)
                contadorfpsmagia = 0

                if(contadorfpsmagia==5)
                anima++
                if(anima>11)
                anima = 0

                var Xx = Ex
                var Yy = Ey
                    if(!raioreturn){
                        if(OlharMagia)
                            context.drawImage(magW,0+(anima*122),0, 122,362,Mx+AXx-backgroundX+85,My+AYy-backgroundY+20,45,90)
                        else
                            context.drawImage(magW,0+(anima*122),0, 122,362,Mx+AXx-backgroundX,My+AYy-backgroundY+20,45,90)
                    switch(LadoM){ 
                        case 1:
                        Mx-=5.5
                        break;
                        case 2:
                        My-=5.5
                        break;
                        case 3:
                        Mx+=5.5
                        break;
                        case 4:
                        My+=5.5
                        break;
                        case 5:
                        My-=4.8
                        Mx-=4.8
                        break;
                        case 6:
                        My+=4.8
                        Mx-=4.8
                        break;
                        case 7:
                        My-=4.8
                        Mx+=4.8
                        break;
                        case 8:
                        My+=4.8
                        Mx+=4.8
                    }}
                    else{
                        if(!raioreturning){
                            if(OlharMagia)
                                context.drawImage(magW,0+(anima*122),0, 122,362,Mx+AXx-backgroundX+85,My+AYy-backgroundY+20,45,90)
                            else
                                context.drawImage(magW,0+(anima*122),0, 122,362,Mx+AXx-backgroundX,My+AYy-backgroundY+20,45,90)
                            carregado = true
                            if(contadorvoltaraio>=250)
                                if(!raioreturning){
                                raioreturning = true
                                CDEW = false
                                CDEWx = 6000
                                CdeW()
                                }
                        }
                        else{
                            if(OlharMagia){
                                context.drawImage(magW,0+(anima*122),0, 122,362,Mx+AXx-backgroundX+85,My+AYy-backgroundY+20,45,90)
                            }
                            else{
                                context.drawImage(magW,0+(anima*122),0, 122,362,Mx+AXx-backgroundX,My+AYy-backgroundY+20,45,90)
                            }
                            if(Mx+AXx<=Ex+6&&Mx+AXx>=Ex-6&&My+AYy<=Ey+6&&My+AYy>=Ey-6){
                                Rcolision3  = true
                                setTimeout(() => {
                                    Rcolision3 = false
                                    raioreturning = false
                                    raioreturn = false
                                }, 150)
                                }

                                if(Mx+AXx<Ex)
                                Mx+=5
                                else if(Mx+AXx>Ex)
                                Mx-=5
                                if(My+AYy<Ey)
                                My+=5
                                else if(My+AYy>Ey)
                                My-=5

                                if(carregado){
                                carregado = false
                                eletrocutar2 = false
                                if(!eletrocutar)
                                eletrocutar = true
                                }
                        }
                    }




                    if(OlharMagia){
                        if( trueX>Mx+AXx-x-20&&
                            trueY>My+AYy-y-80&&
                            trueX<Mx+AXx-x+80&&
                            trueY<My+AYy-y+100) 
                        {
                            if(!eletrocutar){
                            Emanacharge+=25
                            this.herodmg+= 30
                            danoP()
                            eletrocutar=true
                        }
                            if(!eletrocutar2){
                            Emanacharge+=25
                            this.herodmg+= 30
                            danoP()
                            eletrocutar2=true
                        }
                        }
                    }
                    else{
                        if( trueX>Mx+AXx-x-85&&
                            trueY>My+AYy-y-80&&
                            trueX<Mx+AXx-x&&
                            trueY<My+AYy-y+100) 
                        {
                            if(!eletrocutar){
                            Emanacharge+=25
                            this.herodmg+= 30
                            danoP()
                            eletrocutar=true
                        }
                            if(!eletrocutar2){
                            Emanacharge+=25
                            this.herodmg+= 30
                            danoP()
                            eletrocutar2=true
                        }
                        }
                        }
                if(distancia>250)
                {
                    raioreturn = true
                }
        }
        }

function magiaEe(){
    var distanciad = 225
    var Xx = Ex
    var Yy = Ey
    var LadoM
    LadoM = ELado
    var eletrocutar = false
    fpsmagiasEe(magiaT,60)
        function magiaT(){
            if(distanciad>0){
                switch(LadoM){ 
                    case 1:
                    distanciad-=7.5
                    Ex-=7.5
                    break;
                    case 2:
                    distanciad-=7.5
                    Ey-=7.5
                    break;
                    case 3:
                    distanciad-=7.5
                    Ex+=7.5
                    break;
                    case 4:
                    distanciad-=7.5
                    Ey+=7.5
                    break;
                    case 5:
                    distanciad-=7.5
                    Ey-=6
                    Ex-=6
                    break;
                    case 6:
                    distanciad-=7.5
                    Ey+=6
                    Ex-=6
                    break;
                    case 7:
                    distanciad-=7.5
                    Ey-=6
                    Ex+=6
                    break;
                    case 8:
                    distanciad-=7.5
                    Ey+=6
                    Ex+=6
                }
                if( trueX>Ex-x-40&&
                    trueY>Ey-y-60&&   
                    trueX<Ex-x+60&&
                    trueY<Ey-y+70) 
                {
                    if(!eletrocutar)
                    {
                        Emanacharge+=25
                        this.herodmg+= 15
                        danoP()
                        eletrocutar = true
                    }
                }
            }
            else{
                Etangivel = true
                Ecastanima = true
                Rcolision4 = true
                setTimeout(() => {
                    Rcolision4 = false
                }, 150)
            }
        }}

function magiaEr(){
resq1 = true
var distancia = 300
var Xx = Ex
var Yy = Ey
var Mx = 0
var My = 0
var LadoM
var OlharMagia
var anima = 0
var animaTF = true
var animai = 0
var contadorfpsmagia = 0
LadoM = ELado
OlharMagia = EOlharDireita

var eletrocutar = false
var RXx = 0
var RYy = 0
var dmgcap = false
var animaQ = 0
var contadorfpsmagiaQ = 0
var magQ = new Image()
magQ.src = "skills/skillraioQ.png"

var eletrocutar2 = false
var avançoR = true

contadorresq = 0

var magR = new Image()
magR.src = "skills/raio_walkR.png"
var magRi = new Image()
magRi.src = "skills/raio_idleR.png"

fpsmagiasEr(magiaT,60)
    function magiaT(){
        distancia-=4
        contadorfpsmagia++

        contadorresq++
        if(contadorresq>=1000&&!RcolisionUlt1&&Etangivel)
        {
            setTimeout(() => {
                RcolisionUlt1 = false
                dashconfirm = false
                dashR = false
            },101)
            CDER = false
            CDERx = 100
            CdeR()
            dashanimationdebug = false
            resq1 = false
            RcolisionUlt1 = true
        }

        if(distancia>0){
        if(contadorfpsmagia>1){
        if(animaTF)
        anima++
        else
        anima--
        if(anima>=9)
        animaTF = false
        if(anima<=0)
        animaTF = true
        contadorfpsmagia = 0
        }}
        else{
            if(contadorfpsmagia>18){
                animai++
                contadorfpsmagia = 0
            }
            if(animai>=2)
            animai = 0  
        }


        if(distancia>0){
            if(OlharMagia)
            context.drawImage(magR,0+(anima*750),0, 750,720,Mx+Xx-backgroundX,My+Yy-backgroundY,150,120)
            else{
            context.save()
            context.scale(-1,1)
            context.drawImage(magR,0+(anima*750),0, 750,720,0-Mx-Xx+backgroundX-150,My+Yy-backgroundY,150,120)
            context.restore()
            }
            if(Xx+Mx<922&&Xx+Mx>-15&&My+Yy>23&&My+Yy<510)
            switch(LadoM){ 
                case 1:
                Mx-=4
                break;
                case 2:
                My-=4
                break;
                case 3:
                Mx+=4
                break;
                case 4:
                My+=4
                break;
                case 5:
                My-=3.5
                Mx-=3.5
                break;
                case 6:
                My+=3.5
                Mx-=3.5
                break;
                case 7:
                My-=3.5
                Mx+=3.5
                break;
                case 8:
                My+=3.5
                Mx+=3.5
            }
        }
        else{
            if(OlharMagia)
            context.drawImage(magRi,0+(animai*750),0, 750,723,Mx+Xx-backgroundX,My+Yy-backgroundY,150,120)
            else{
            context.save()
            context.scale(-1,1)
            context.drawImage(magRi,0+(animai*750),0, 750,723,0-Mx-Xx+backgroundX-150,My+Yy-backgroundY,150,120)
            context.restore()
        }
        }
            if( trueX>Mx+Xx-x-20-95&&
                trueY>My+Yy-y-25-105&&   
                trueX<Mx+Xx-x-20+125&&
                trueY<My+Yy-y-25+165) 
            {
                if(!eletrocutar){
                fpsmagiasErq(magiaRq,60)
                eletrocutar = true
                setTimeout(() => {
                    dmgcap = false
                    eletrocutar = false
                }, 3000)                
                }
            }

        function magiaRq(){
            RXx = Mx-backgroundX
            RYy = My-backgroundY
    
            if(contadorfpsmagiaQ<=1)
            contadorfpsmagiaQ++
            else{
            contadorfpsmagiaQ = 0
            animaQ++
            if(animaQ>9)
            animaQ = 0
            }
    
            context.drawImage(magQ,0+(animaQ*362),0, 362,362,RXx+Xx-20,RYy+Yy-25,180,180)
    
            setTimeout(() => {
                Rcolision5 = true
                setTimeout(() => {
                    Rcolision5 = false
                },450)
            }, 400)
    
            if( trueX>Mx+Xx-x-20-95&&
                trueY>My+Yy-y-25-105&&   
                trueX<Mx+Xx-x-20+125&&
                trueY<My+Yy-y-25+165) 
            {
                if(!dmgcap){
                this.herodmg+= 20
                dmgcap = true
                danoP()
                }
            }
        }

        if(Ex>Mx+Xx-325&&
           Ey>My+Yy-325&&
           Ex<Mx+Xx+325&&
           Ey<My+Yy+325)
            dashR = true
        else
            dashR = false

        if(dashconfirm)
        {
            fpsmagiasEe(magiaRe,60)
            dashconfirm = false
        }


        function magiaRe(){
            if(avançoR){
                if(Ex<Mx+Xx)
                Ex+=7
                else if(Ex>Mx+Xx)
                Ex-=7

                if(Ey<My+Yy)
                Ey+=7
                else if(Ey>My+Yy)
                Ey-=7

                if(Mx+Xx<=Ex+7&&Mx+Xx>=Ex-7&&My+Yy<=Ey+7&&My+Yy>=Ey-7)
                avançoR = false


                if( trueX>Ex-x-40&&
                    trueY>Ey-y-60&&   
                    trueX<Ex-x+60&&
                    trueY<Ey-y+70) 
                {
                    if(!eletrocutar2)
                    {
                        this.herodmg+= 15
                        danoP()
                        eletrocutar2 = true
                    }
                }
            }
            else{
                RcolisionUlt1 = true
                dashconfirm = false
                dashanimationdebug = false
                Ecastanima = true
                Rcolision4 = true
                resq1 = false
                Etangivel = true
                dashR = false             
                setTimeout(() => {
                    Rcolision4 = false
                    RcolisionUlt1 = false
                }, 25)
            }
        }
    }       
    }

function magiaEr2(){
        resq2 = true
        var distancia = 300
        var Xx = Ex
        var Yy = Ey
        var Mx = 0
        var My = 0
        var LadoM
        var OlharMagia
        var anima = 0
        var animaTF = true
        var animai = 0
        var contadorfpsmagia = 0
        LadoM = ELado
        OlharMagia = EOlharDireita
        
        var eletrocutar = false
        var RXx = 0
        var RYy = 0
        var dmgcap = false
        var animaQ = 0
        var contadorfpsmagiaQ = 0
        var magQ = new Image()
        magQ.src = "skills/skillraioQ.png"
        
        var eletrocutar2 = false
        var avançoR2 = true

        contadorresq2 = 0
        
        var magR = new Image()
        magR.src = "skills/raio_walkR.png"
        var magRi = new Image()
        magRi.src = "skills/raio_idleR.png"
        
        fpsmagiasEr2(magiaT,60)
            function magiaT(){
                distancia-=4
                contadorfpsmagia++

                contadorresq2++
                if(contadorresq2>1000&&!RcolisionUlt2&&Etangivel)
                {
                    setTimeout(() => {
                        RcolisionUlt2 = false
                        dashconfirm2 = false
                        dashR2 = false
                    },101)
                    CDER = false
                    CDERx = 100
                    CdeR()
                    dashanimationdebug = false
                    resq2 = false
                    RcolisionUlt2 = true
                }
        
                if(distancia>0){
                if(contadorfpsmagia>1){
                if(animaTF)
                anima++
                else
                anima--
                if(anima>=9)
                animaTF = false
                if(anima<=0)
                animaTF = true
                contadorfpsmagia = 0
                }}
                else{
                    if(contadorfpsmagia>18){
                        animai++
                        contadorfpsmagia = 0
                    }
                    if(animai>=2)
                    animai = 0  
                }
        
        
                if(distancia>0){
                    if(OlharMagia)
                    context.drawImage(magR,0+(anima*750),0, 750,720,Mx+Xx-backgroundX,My+Yy-backgroundY,150,120)
                    else{
                    context.save()
                    context.scale(-1,1)
                    context.drawImage(magR,0+(anima*750),0, 750,720,0-Mx-Xx+backgroundX-150,My+Yy-backgroundY,150,120)
                    context.restore()
                    }
                    if(Xx+Mx<922&&Xx+Mx>-15&&My+Yy>23&&My+Yy<510)
                    switch(LadoM){ 
                        case 1:
                        Mx-=4
                        break;
                        case 2:
                        My-=4
                        break;
                        case 3:
                        Mx+=4
                        break;
                        case 4:
                        My+=4
                        break;
                        case 5:
                        My-=3.5
                        Mx-=3.5
                        break;
                        case 6:
                        My+=3.5
                        Mx-=3.5
                        break;
                        case 7:
                        My-=3.5
                        Mx+=3.5
                        break;
                        case 8:
                        My+=3.5
                        Mx+=3.5
                    }
                }
                else{
                    if(OlharMagia)
                    context.drawImage(magRi,0+(animai*750),0, 750,723,Mx+Xx-backgroundX,My+Yy-backgroundY,150,120)
                    else{
                    context.save()
                    context.scale(-1,1)
                    context.drawImage(magRi,0+(animai*750),0, 750,723,0-Mx-Xx+backgroundX-150,My+Yy-backgroundY,150,120)
                    context.restore()
                }
                }
                    if( trueX>Mx+Xx-x-20-95&&
                        trueY>My+Yy-y-25-105&&   
                        trueX<Mx+Xx-x-20+125&&
                        trueY<My+Yy-y-25+165) 
                    {
                        if(!eletrocutar){
                        fpsmagiasErq2(magiaRq,60)
                        eletrocutar = true
                        setTimeout(() => {
                            dmgcap = false
                            eletrocutar = false
                        }, 3000)                
                        }
                    }
        
                function magiaRq(){
                    RXx = Mx-backgroundX
                    RYy = My-backgroundY
            
                    if(contadorfpsmagiaQ<=1)
                    contadorfpsmagiaQ++
                    else{
                    contadorfpsmagiaQ = 0
                    animaQ++
                    if(animaQ>9)
                    animaQ = 0
                    }
            
                    context.drawImage(magQ,0+(animaQ*362),0, 362,362,RXx+Xx-20,RYy+Yy-25,180,180)
            
                    setTimeout(() => {
                        Rcolision6 = true
                        setTimeout(() => {
                            Rcolision6 = false
                        },450)
                    }, 400)
            
                    if( trueX>Mx+Xx-x-20-95&&
                        trueY>My+Yy-y-25-105&&   
                        trueX<Mx+Xx-x-20+125&&
                        trueY<My+Yy-y-25+165) 
                    {
                        if(!dmgcap){
                        this.herodmg+= 20
                        dmgcap = true
                        danoP()
                        }
                    }
                }
        
                if(Ex>Mx+Xx-325&&
                   Ey>My+Yy-325&&
                   Ex<Mx+Xx+325&&
                   Ey<My+Yy+325)
                    dashR2 = true
                else
                    dashR2 = false
        
                if(dashconfirm2)
                {
                    fpsmagiasEe(magiaRe,60)
                    dashconfirm2 = false
                }
        
        
                function magiaRe(){
                    if(avançoR2){
                        if(Ex<Mx+Xx)
                        Ex+=7
                        else if(Ex>Mx+Xx)
                        Ex-=7
        
                        if(Ey<My+Yy)
                        Ey+=7
                        else if(Ey>My+Yy)
                        Ey-=7
        
                        if(Mx+Xx<=Ex+7&&Mx+Xx>=Ex-7&&My+Yy<=Ey+7&&My+Yy>=Ey-7)
                        avançoR2 = false
        
        
                        if( trueX>Ex-x-40&&
                            trueY>Ey-y-60&&   
                            trueX<Ex-x+60&&
                            trueY<Ey-y+70) 
                        {
                            if(!eletrocutar2)
                            {
                                this.herodmg+= 15
                                danoP()
                                eletrocutar2 = true
                            }
                        }
                    }
                    else{
                        RcolisionUlt2 = true
                        Ecastanima = true
                        Rcolision4 = true
                        resq2 = false
                        Etangivel = true
                        dashR2 = false
                        dashconfirm2 = false
                        dashanimationdebug = false
                        setTimeout(() => {
                            Rcolision4 = false
                            RcolisionUlt2 = false
                        }, 25)
                    }
                }
            }       
            }
        
        

