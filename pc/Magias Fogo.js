// Conjuros
var inferno = false
var combo = 1

function castq(){   // conjuro dos q's
    if(!inferno){
        switch(combo){
            case 1:
            CD = false
            castanima = false
            castq1()
            break;
            case 2:
            CD = false
            castanima = false
            castq2()
            break;
            case 3:
            CD = false
            castanima = false
            castq3()
            break;}}
    else{
        switch(combo){
            case 1:
            CD = false
            castanima = false
            castqr1()
            break;
            case 2:
            CD = false
            castanima = false
            castqr2()
            break;
            case 3:
            CD = false
            castanima = false
            castqr3()
            break;}}
}



function castq1() // conjuro q(1)
{
    combo++
    somfogo.play()
    magia()
var castqT = setTimeout(castq1Time,500) 
function castq1Time(){
        
        CDx = 500
        Cd()
        combotimer()
        castanima = true
        clearTimeout(castqT)
    }
}

function castq2()   //conjuro q(2) 
{
    combo++
    somfogo.play()
    magia2()
var castqT = setTimeout(castq2Time,500)
function castq2Time(){         
        
        comboCD1 = false
        CDx = 500
        Cd()
        combotimer2()
        castanima = true
        clearTimeout(castqT)
        }
}

function castq3()   //conjuro q(3) 
{
combo = 1
somfogo.play()
magia3()
var castqT = setTimeout(castq3Time,500)
function castq3Time(){         
        comboCD2 = false
        CDx = 3500
        Cd()
        castanima = true
        clearTimeout(castqT)
        }
}


function castw() // conjuro w
{
if(!inferno)
castanima = false
somfogo.play()
CDW = false
magia4()
setTimeout(() => {
    magia42()
    setTimeout(() => {
        magia43()
    }, 500)
}, 500)

var castwT = setTimeout(castwTime,1100) 
function castwTime(){
        if(!inferno)
        castanima = true
        CDWx = 8000
        CdW()
        clearTimeout(castwT)
    }
}

function castr()  // Conjuro c/ mana
{
    if(mana==125){
    CDR = false
    castanima = false
    setTimeout(() => {
        magiaULT()
        CDRx = 21000
        CdR()
        castanima = true
    }, 300)}
}

function castqr1() // conjuro Q(1) com R
{
    combo++
    somfogo.play()
    magiaULTq1()
var castqT = setTimeout(castq1Time,500) 
function castq1Time(){       
        CDx = 500
        Cd()
        combotimerRq1()
        castanima = true
        clearTimeout(castqT)
    }
}

function castqr2()   //conjuro  Q(2) com R 
{
    combo++
    somfogo.play()
    magiaULTq2()
var castqT = setTimeout(castq2Time,500)
function castq2Time(){         
        
        comboCDqR1 = false
        CDx = 500
        Cd()
        combotimerRq2()
        castanima = true
        clearTimeout(castqT)
        }
}

function castqr3()   //conjuro Q(3) com R 
{
combo = 1
somfogo.play()
magiaULTq3()
var castqT = setTimeout(castq3Time,500)
function castq3Time(){         
        comboCDqR2 = false
        CDx = 3000
        Cd()
        castanima = true
        clearTimeout(castqT)
        }
}

var rodasflam = 6
var rodasdmgcap = false

function caste()
{
if(rodasflam<1)
rodasflam = 1
if(!inferno&&rodasflam<4)
rodasflam = 4
somfogo.play()
rodas = false
castanima = false
CDE = false
switch(rodasflam){
    case 1:
    magia56()
    case 2:
    magia55()
    case 3:
    magia54()
    case 4:
    magia53()
    case 5:
    magia52()
    case 6:
    magia51()
    rodasflam = 6
}
var casteT = setTimeout(casteTime,600)
function casteTime(){         
        CDEx = 5000
        CdE()
        castanima = true
        clearTimeout(casteT)
        }
}

// Desehadores de magia
var Fcolision = false
var Fcolision2 = false
var Fcolision3 = false
var Fcolision41 = false
var Fcolision42 = false
var Fcolision43 = false
var FcolisionRq1 = false
var FcolisionRq2 =  false
var FcolisionRq3 = false
var FcolisionE1 = false
var FcolisionE2 = false
var FcolisionE3 = false
var FcolisionE4 = false
var FcolisionE5 = false
var FcolisionE6 = false

var fpsmagiasq1 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!Fcolision){
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

var fpsmagiasq2 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!Fcolision2){
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

var fpsmagiasq3 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!Fcolision3){
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

var fpsmagiasw = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!Fcolision41){
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

var fpsmagiasw2 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!Fcolision42){
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

var fpsmagiasw3 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!Fcolision43){
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

var fpsmagiasrq1 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!FcolisionRq1){
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

var fpsmagiasrq2 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!FcolisionRq2){
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

var fpsmagiasrq3 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!FcolisionRq3){
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

var fpsmagiase1 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!FcolisionE1){
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

var fpsmagiase2 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!FcolisionE2){
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

var fpsmagiase3 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!FcolisionE3){
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

var fpsmagiase4 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!FcolisionE4){
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

var fpsmagiase5 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!FcolisionE5){
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

var fpsmagiase6 = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(!FcolisionE6){
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

var fpsmagiasauraR = function (fn,fps){
    var antes = new Date().getTime()
    fps = fps || 60
    var intervalo = 1000 / fps
    return (function loop(tempo){
        if(inferno){
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
// Magias


function magia()
        {   
        // Variaveis de posição
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var OlharMagia // Direita = True Esquerda = False
        var contadorfpsmagia = 0

        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0

        LadoM = Lado
        OlharMagia = OlharDireita 
        // Imagens
        var magVQ = new Image()
        magVQ.src = "skills/skillQ.png"
        var magHQ = new Image()
        magHQ.src = "skills/skillQH.png"
        var magDQ = new Image()
        magDQ.src = "skills/skillQD.png"
            //Desenhando a magia
            fpsmagiasq1(magiaT,60)
            function magiaT(){
            // Variaveis de posição para inimigos (atualizados)
            distancia+=3.5
            var backgroundmX = backgroundX
            var backgroundmY = backgroundY
            var MEx = Ex
            var MEy = Ey 
            backgroundbackupX  = backgroundmX-backgroundXA
            backgroundbackupY  = backgroundmY-backgroundYA

            // Animação
            if(contadorfpsmagia<2)
            contadorfpsmagia++
            else
            contadorfpsmagia = 0
            if(contadorfpsmagia==2)
            animaQ++
            if(animaQ>3)
            animaQ = 0;
                // Direção da magia
                switch(LadoM){ 
                    case 1:
                    context.save()
                    context.scale(-1,1)
                    context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, 0-Mx-Xx-55,My+Yy+40, 30,30)
                    context.restore()
                    Mx-=3.5
                    break;
                    case 2:
                    if(OlharMagia)
                    context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+110,My+Yy+40, 30,30)
                    else
                    context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+55,My+Yy+40, 30,30)
                    My-=3.5
                    break;
                    case 3:
                    context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, Mx+Xx+110,My+Yy+40, 30,30)                
                    Mx+=3.5
                    break;
                    case 4:
                    if(OlharMagia){
                    context.save()
                    context.scale(1,-1)
                    context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+110,0-My-Yy-50, 30,30) 
                    context.restore()
                    }
                    else{
                    context.save()
                    context.scale(1,-1)
                    context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+55,0-My-Yy-50, 30,30)
                    context.restore()
                    }
                    My+=3.5
                    break;
                    case 5:
                    context.save()
                    context.scale(-1,1)
                    context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-75,My+Yy+40, 30,30)
                    context.restore()
                    My-=3.5
                    Mx-=3.5
                    break;
                    case 6:
                    context.save()
                    context.scale(-1,-1)
                    context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-75,0-My-Yy-50, 30,30)
                    context.restore()
                    My+=3.5
                    Mx-=3.5
                    break;
                    case 7:
                    context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx+95,My+Yy+40, 30,30)
                    My-=3.5
                    Mx+=3.5
                    break;
                    case 8:
                    context.save()
                    context.scale(1,-1)
                    context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx+95,0-My-Yy-50, 30,30)
                    context.restore()
                    My+=3.5
                    Mx+=3.5
                }

                // Ajuste da magia em relação ao BG
                if(backgroundbackupX>0||backgroundbackupX<0){
                Mx = Mx-backgroundbackupX
                backgroundXA = backgroundmX}
                
                if(backgroundbackupY>0||backgroundbackupY<0){
                My = My-backgroundbackupY
                backgroundYA = backgroundmY
                }



                // Caixas de colisão
                // O valor absoluto dos requerimentos é para o ajuste da caixa em relação ao sprite e seu tamanho
                // sendo: (Coordenada da magia+Coordenada do jogador+posição base>Coordenada inimigo-ajuste base-diferença do fundo-ajuste tamanho)
                // O tipo de caixa de colisão é definido pelo sprite do personagem, que por sua vez define de onde a magia sai
                // O valor absoluto de magias que vem de cima para baixo usam um valor Y diferente do padrão 40 para ajustar 
                // a caixa de colisão em relação ao sprite 
                // Diagonais usam parametros levemente diferentes do padrão nesse caso a diferença é de 25 em relação ao X
                // Para calcular a diferença do tamanho de cada magia do combo (30,45,60) foi reduzido em 4.5 o valor absoluto 
                // da caixa de colisão para cada 15 de aumento

        if(Etangivel){
            if(OlharMagia){
                if( Mx+Xx+110>MEx-5-backgroundmX&&
                    My+Yy+40>MEy-10-backgroundmY&&   
                    Mx+Xx+110<MEx+90-backgroundmX&&
                    My+Yy+40<MEy+100-backgroundmY) 
                {
                    this.enemydmg += 15
                    if(!inferno)
                    manacharge+=25
                    dano()
                    Fcolision = true
                    Mx = 0
                    My = 0
                    if(rodas){
                        if(!inferno)
                        rodasflam--
                        else
                        rodasflam-=2}
                    setTimeout(() => {
                        Fcolision = false
                    }, 500)
            }
            }
            else{
                if(LadoM==6){
                if( Mx+Xx+35>MEx+10-backgroundmX&&
                    My+Yy+30>MEy-10-backgroundmY&&
                    Mx+Xx+50<MEx+110-backgroundmX&&
                    My+Yy+30<MEy+100-backgroundmY) 
                {
                    if(!inferno)
                    manacharge+=25
                    this.enemydmg += 15
                    dano()
                    Fcolision = true
                    Mx = 0
                    My = 0
                    if(rodas){
                        if(!inferno)
                        rodasflam--
                        else
                        rodasflam-=2}
                    setTimeout(() => {
                        Fcolision = false
                    }, 500);
                }
                }
                else{
                if( Mx+Xx+55>MEx+10-backgroundmX&&
                    My+Yy+40>MEy-10-backgroundmY&&
                    Mx+Xx+55<MEx+110-backgroundmX&&
                    My+Yy+40<MEy+100-backgroundmY) 
                {
                    if(!inferno)
                    manacharge+=25
                    this.enemydmg += 15
                    dano()
                    Fcolision = true
                    Mx = 0
                    My = 0
                    if(rodas){
                        if(!inferno)
                        rodasflam--
                        else
                        rodasflam-=2}
                    setTimeout(() => {
                        Fcolision = false
                    }, 500);
                }
                }
                }
        }

            if(distancia>600)
            {
                Fcolision = true
                Mx = 0
                My = 0
                setTimeout(() => {
                    Fcolision = false
                
                }, 500);
            }
                }
        }

function magia2()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magVQ = new Image()
        magVQ.src = "skills/skillQ.png"
        var magHQ = new Image()
        magHQ.src = "skills/skillQH.png"
        var magDQ = new Image()
        magDQ.src = "skills/skillQD.png"
            fpsmagiasq2(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                var MEx = Ex
                var MEy = Ey
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>3)
                animaQ = 0;
                    switch(LadoM){ 
                        case 1:
                        context.save()
                        context.scale(-1,1)
                        // Alteração do padrão 55 por questões estéticas
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, 0-Mx-Xx-75,My+Yy+40, 45,45)
                        context.restore()
                        Mx-=3.5
                        break;
                        case 2:
                        if(OlharMagia)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+110,My+Yy+40, 45,45)
                        else
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+55,My+Yy+40, 45,45)
                        My-=3.5
                        break;
                        case 3:
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, Mx+Xx+110,My+Yy+40, 45,45)                
                        Mx+=3.5
                        break;
                        case 4:
                        if(OlharMagia){
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+110,0-My-Yy-60, 45,45) 
                        context.restore()
                        }
                        else{
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+55,0-My-Yy-60, 45,45)
                        context.restore()
                        }
                        My+=3.5
                        break;
                        case 5:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-75,My+Yy+40, 45,45)
                        context.restore()
                        My-=3.5
                        Mx-=3.5
                        break;
                        case 6:
                        context.save()
                        context.scale(-1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-75,0-My-Yy-60, 45,45)
                        context.restore()
                        My+=3.5
                        Mx-=3.5
                        break;
                        case 7:
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx+95,My+Yy+40, 45,45)
                        My-=3.5
                        Mx+=3.5
                        break;
                        case 8:
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx+95,0-My-Yy-60, 45,45)
                        context.restore()
                        My+=3.5
                        Mx+=3.5
                    }

                    
                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }
                
                if(Etangivel){
                    if(OlharMagia){
                        if( Mx+Xx+110>MEx-5-backgroundmX-10&&
                            My+Yy+40>MEy-10-backgroundmY-6&&   
                            Mx+Xx+110<MEx+90-backgroundmX+10&&
                            My+Yy+40<MEy+100-backgroundmY+5) 
                        {
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 20
                            dano()
                            Fcolision2 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                Fcolision2 = false
                            }, 500);
                    }
                    }
                    else{
                        if(LadoM==6){
                            if( Mx+Xx+35>MEx+10-backgroundmX-10&&
                                My+Yy+30>MEy-10-backgroundmY-6&&
                                Mx+Xx+50<MEx+110-backgroundmX+10&&
                                My+Yy+30<MEy+100-backgroundmY+5) 
                            {
                                if(!inferno)
                                manacharge+=25
                                this.enemydmg += 20
                                dano()
                                Fcolision2 = true
                                Mx = 0
                                My = 0
                                if(rodas){
                                    if(!inferno)
                                    rodasflam--
                                    else
                                    rodasflam-=2}
                                setTimeout(() => {
                                    Fcolision2 = false
                                }, 500);
                            }}
                        else{
                        if( Mx+Xx+55>MEx+10-backgroundmX-10&&
                            My+Yy+40>MEy-10-backgroundmY-6&&
                            Mx+Xx+55<MEx+110-backgroundmX+10&&
                            My+Yy+40<MEy+100-backgroundmY+5) 
                        {
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 20
                            dano()
                            Fcolision2 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                Fcolision2 = false
                            }, 500);
                        }
                        }
                    }
                }
                if(distancia>600)
                {
                    Fcolision2 = true
                    Mx = 0
                    My = 0
                    setTimeout(() => {
                        Fcolision2 = false
                
                    }, 500);
                }
        }
        }

function magia3()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magVQ = new Image()
        magVQ.src = "skills/skillQ.png"
        var magHQ = new Image()
        magHQ.src = "skills/skillQH.png"
        var magDQ = new Image()
        magDQ.src = "skills/skillQD.png"
            fpsmagiasq3(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>3)
                animaQ = 0;
                    switch(LadoM){ 
                        case 1:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, 0-Mx-Xx-75,My+Yy+40, 60,60)
                        context.restore()
                        Mx-=3.5
                        break;
                        case 2:
                        if(OlharMagia)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+110,My+Yy+40, 60,60)
                        else
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+55,My+Yy+40, 60,60)
                        My-=3.5
                        break;
                        case 3:
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, Mx+Xx+110,My+Yy+40, 60,60)                
                        Mx+=3.5
                        break;
                        case 4:
                        if(OlharMagia){
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+110,0-My-Yy-60, 60,60) 
                        context.restore()
                        }
                        else{
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+55,0-My-Yy-60, 60,60)
                        context.restore()
                        }
                        My+=3.5
                        break;
                        case 5:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-75,My+Yy+40, 60,60)
                        context.restore()
                        My-=3.5
                        Mx-=3.5
                        break;
                        case 6:
                        context.save()
                        context.scale(-1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-75,0-My-Yy-60, 60,60)
                        context.restore()
                        My+=3.5
                        Mx-=3.5
                        break;
                        case 7:
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx+95,My+Yy+40, 60,60)
                        My-=3.5
                        Mx+=3.5
                        break;
                        case 8:
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx+95,0-My-Yy-60, 60,60)
                        context.restore()
                        My+=3.5
                        Mx+=3.5
                    }
                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }

                if(Etangivel){  
                    if(OlharMagia){
                        if( Mx+Xx+115>MEx-5-backgroundmX-15&&
                            My+Yy+40>MEy-10-backgroundmY-11&&   
                            Mx+Xx+110<MEx+90-backgroundmX+15&&
                            My+Yy+40<MEy+100-backgroundmY+10) 
                        {
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 25
                            dano()
                            Fcolision3 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                Fcolision3 = false
                            }, 500);
                    }
                    }
                    else{
                        if(LadoM==6){
                            if( Mx+Xx+30>MEx+10-backgroundmX-15&&
                                My+Yy+30>MEy-10-backgroundmY-11&&
                                Mx+Xx+50<MEx+110-backgroundmX+15&&
                                My+Yy+30<MEy+100-backgroundmY+10) 
                            {
                                if(!inferno)
                                manacharge+=25
                                this.enemydmg += 25
                                dano()
                                Fcolision3 = true
                                Mx = 0
                                My = 0
                                if(rodas){
                                    if(!inferno)
                                    rodasflam--
                                    else
                                    rodasflam-=2}
                                setTimeout(() => {
                                    Fcolision3 = false
                                }, 500);
                            }
                            }
                            else
                        if( Mx+Xx+60>MEx+10-backgroundmX-15&&
                            My+Yy+40>MEy-10-backgroundmY-11&&
                            Mx+Xx+55<MEx+110-backgroundmX+15&&
                            My+Yy+40<MEy+100-backgroundmY+10) 
                        {
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 25
                            dano()
                            Fcolision3 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                Fcolision3 = false
                            }, 500);
                        }
                        }
                }
                if(distancia>600)
                {
                    Fcolision3 = true
                    Mx = 0
                    My = 0
                    setTimeout(() => {
                        Fcolision3 = false
                
                    }, 500);
                }
        }
        }

function magia4()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        var Wt11 = 20
        var Wt12 = 20
        var AceMx = 0
        var AceMy = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magVQ = new Image()
        magVQ.src = "skills/skillQ.png"
        var magHQ = new Image()
        magHQ.src = "skills/skillQH.png"
        var magDQ = new Image()
        magDQ.src = "skills/skillQD.png"
            fpsmagiasw(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>3)
                animaQ = 0;
                    switch(LadoM){ 
                        case 1:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, 0-Mx-Xx-225,My+Yy+10, Wt11,Wt12)
                        context.restore()
                        if(Wt11<60||Wt12<60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                            Mx-=3.5
                            if(My+Yy+10<MEy-backgroundmY)
                            My+=0.25;
                            else if(My+Yy+10>MEy-backgroundmY)
                            My-=0.25;
                            }
                        break;

                        case 2:
                        if(OlharMagia){
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx-40,My+Yy+10, Wt11,Wt12)
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2
                            Wt12+=2
                            }
                        else{
                            My-=3.5
                            if(Mx+Xx-40<MEx-backgroundmX)
                            Mx+=0.25;
                            else if(Mx+Xx-40>MEx-backgroundmX)
                            Mx-=0.25;
                            }
                            }

                        if(!OlharMagia){
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+205,My+Yy+10, Wt11,Wt12)
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                            My-=3.5
                            if(Mx+Xx+205<MEx-backgroundmX)
                            Mx+=0.25;
                            else if(Mx+Xx+205>MEx-backgroundmX)
                            Mx-=0.25;
                            }
                            }
                        break;

                        case 3:
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, Mx+Xx-40,My+Yy+10, Wt11,Wt12)            
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                        }
                        else{
                                Mx+=3.5
                            if(My+Yy+10<MEy-backgroundmY)
                                My+=0.25;
                            if(My+Yy+10>MEy-backgroundmY)
                                My-=0.25;
                            }    
                        break;

                        case 4:
                        if(OlharMagia){
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx-40,0-My-Yy-30, Wt11,Wt12) 
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                            My+=3.5
                            if(Mx+Xx-40<MEx-backgroundmX)
                            Mx+=0.25;
                            else if(Mx+Xx-40>MEx-backgroundmX)
                            Mx-=0.25;
                        }
                        }

                        if(!OlharMagia){
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+205,0-My-Yy-30, Wt11,Wt12)
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                            My+=3.5
                            if(Mx+Xx+205<MEx-backgroundmX)
                            Mx+=0.25;
                            else if(Mx+Xx+205>MEx-backgroundmX)
                            Mx-=0.25;
                        }
                        }
                        break;

                        case 5:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-225,My+Yy+10, Wt11,Wt12)
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                                My-=3.1+AceMy
                                Mx-=3.1+AceMx
                            if(Mx+Xx-225>MEx-backgroundmX){
                                AceMx = 0.25
                                AceMy = 0}
                            if(My+Yy+10>MEy-backgroundmY){
                                AceMy = 0.25
                                AceMx = 0}
                            }
                        break;

                        case 6:
                        context.save()
                        context.scale(-1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-225,0-My-Yy-30, Wt11,Wt12)
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                                My+=3.1+AceMy
                                Mx-=3.1+AceMx
                            if(Mx+Xx-225>MEx-backgroundmX){
                                AceMx = 0.25
                                AceMy = 0}
                            if(My+Yy-30<MEy-backgroundmY){
                                AceMy = 0.25
                                AceMx = 0}
                            }
                        break;

                        case 7:
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx-55,My+Yy+10, Wt11,Wt12)
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                                My-=3.1+AceMy
                                Mx+=3.1+AceMx
                            if(Mx+Xx-55<MEx-backgroundmX){
                                AceMx = 0.25
                                AceMy = 0}
                            if(My+Yy+10>MEy-backgroundmY){
                                AceMy = 0.25
                                AceMx = 0}
                            }
                        break;

                        case 8:
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx-55,0-My-Yy-30, Wt11,Wt12)
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                                My+=3.1+AceMy
                                Mx+=3.1+AceMx
                            if(Mx+Xx-55<175){
                                AceMx = 0.25
                                AceMy = 0}
                            else if(My+Yy-30<175){
                                AceMy = 0.25
                                AceMx = 0}
                            }

                    }

                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }

                if(Etangivel){

                    if(Wt11>=60||Wt12>=60){
                    if(OlharMagia){
                        if( Mx+Xx-40>MEx-5-backgroundmX-15&&
                            My+Yy+15>MEy-10-backgroundmY-11&&   
                            Mx+Xx-40<MEx+90-backgroundmX+15&&
                            My+Yy+15<MEy+100-backgroundmY+10) 
                        {
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 30
                            dano()
                            Fcolision41 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                Fcolision41 = false
                            }, 500);
                    }
                    }
                    else{
                        if(LadoM==6){
                            if( Mx+Xx+155>MEx+10-backgroundmX-15&&
                                My+Yy+5>MEy-10-backgroundmY-11&&
                                Mx+Xx+205<MEx+110-backgroundmX+15&&
                                My+Yy+15<MEy+100-backgroundmY+10) 
                            {
                                if(!inferno)
                                manacharge+=25
                                this.enemydmg += 30
                                dano()
                                Fcolision41 = true
                                Mx = 0
                                My = 0
                                if(rodas){
                                    if(!inferno)
                                    rodasflam--
                                    else
                                    rodasflam-=2}
                                setTimeout(() => {
                                    Fcolision41 = false
                                }, 500);
                            }
                            }
                            else{
                        if( Mx+Xx+205>MEx+10-backgroundmX-15&&
                            My+Yy+15>MEy-10-backgroundmY-11&&
                            Mx+Xx+205<MEx+110-backgroundmX+15&&
                            My+Yy+15<MEy+100-backgroundmY+10) 
                        {
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 30
                            dano()
                            Fcolision41 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                Fcolision41 = false
                            }, 500);
                        }}
                        }
                                      
                    if(distancia>1200)
                    {
                        Fcolision41 = true
                        Mx = 0
                        My = 0
                        setTimeout(() => {
                            Fcolision41 = false
                    
                        }, 500);
                    }}
        }}
        }

function magia42()
        { 
       var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        var Wt11 = 20
        var Wt12 = 20
        var AceMx = 0
        var AceMy = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magVQ = new Image()
        magVQ.src = "skills/skillQ.png"
        var magHQ = new Image()
        magHQ.src = "skills/skillQH.png"
        var magDQ = new Image()
        magDQ.src = "skills/skillQD.png"
            fpsmagiasw2(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>3)
                animaQ = 0;
                    switch(LadoM){ 
                        case 1:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, 0-Mx-Xx-225,My+Yy+60, Wt11,Wt12)
                        context.restore()
                        if(Wt11<60||Wt12<60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                            Mx-=3.5
                            if(My+Yy+60<MEy-backgroundmY)
                            My+=0.25;
                            else if(My+Yy+60>MEy-backgroundmY)
                            My-=0.25;
                            }
                        break;

                        case 2:
                        if(OlharMagia){
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx-40,My+Yy+60, Wt11,Wt12)
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2
                            Wt12+=2
                            }
                        else{
                            My-=3.5
                            if(Mx+Xx-40<MEx-backgroundmX)
                            Mx+=0.25;
                            else if(Mx+Xx-40>MEx-backgroundmX)
                            Mx-=0.25;
                            }
                            }

                        if(!OlharMagia){
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+205,My+Yy+60, Wt11,Wt12)
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                            My-=3.5
                            if(Mx+Xx+205<MEx-backgroundmX)
                            Mx+=0.25;
                            else if(Mx+Xx+205>MEx-backgroundmX)
                            Mx-=0.25;
                            }
                            }
                        break;

                        case 3:
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, Mx+Xx-40,My+Yy+60, Wt11,Wt12)            
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                        }
                        else{
                                Mx+=3.5
                            if(My+Yy+60<MEy-backgroundmY)
                                My+=0.25;
                            if(My+Yy+60>MEy-backgroundmY)
                                My-=0.25;
                            }    
                        break;

                        case 4:
                        if(OlharMagia){
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx-40,0-My-Yy-80, Wt11,Wt12) 
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                            My+=3.5
                            if(Mx+Xx-40<MEx-backgroundmX)
                            Mx+=0.25;
                            else if(Mx+Xx-40>MEx-backgroundmX)
                            Mx-=0.25;
                        }
                        }

                        if(!OlharMagia){
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+205,0-My-Yy-80, Wt11,Wt12)
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                            My+=3.5
                            if(Mx+Xx+205<MEx-backgroundmX)
                            Mx+=0.25;
                            else if(Mx+Xx+205>MEx-backgroundmX)
                            Mx-=0.25;
                        }
                        }
                        break;

                        case 5:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-225,My+Yy+60, Wt11,Wt12)
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                                My-=3.1+AceMy
                                Mx-=3.1+AceMx
                            if(Mx+Xx-225>MEx-backgroundmX){
                                AceMx = 0.25
                                AceMy = 0}
                            if(My+Yy+60>MEy-backgroundmY){
                                AceMy = 0.25
                                AceMx = 0}
                            }
                        break;

                        case 6:
                        context.save()
                        context.scale(-1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-225,0-My-Yy-80, Wt11,Wt12)
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                                My+=3.1+AceMy
                                Mx-=3.1+AceMx
                            if(Mx+Xx-225>MEx-backgroundmX){
                                AceMx = 0.25
                                AceMy = 0}
                           if(My+Yy-80<MEy-backgroundmY){
                                AceMy = 0.25
                                AceMx = 0}
                            }
                        break;

                        case 7:
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx-55,My+Yy+60, Wt11,Wt12)
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                                My-=3.1+AceMy
                                Mx+=3.1+AceMx
                            if(Mx+Xx-55<MEx-backgroundmX){
                                AceMx = 0.25
                                AceMy = 0}
                            if(My+Yy+60>MEy-backgroundmY){
                                AceMy = 0.25
                                AceMx = 0}
                            }
                        break;

                        case 8:
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx-55,0-My-Yy-80, Wt11,Wt12)
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                                My+=3.1+AceMy
                                Mx+=3.1+AceMx
                            if(Mx+Xx-55<175){
                                AceMx = 0.25
                                AceMy = 0}
                            if(My+Yy-80<175){
                                AceMy = 0.25
                                AceMx = 0}
                            }

                    }

                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }

                if(Etangivel){
                    
                    if(Wt11>=60||Wt12>=60){
                    if(OlharMagia){
                        if( Mx+Xx-40>MEx-5-backgroundmX-15&&
                            My+Yy+65>MEy-10-backgroundmY-11&&   
                            Mx+Xx-40<MEx+90-backgroundmX+15&&
                            My+Yy+60<MEy+100-backgroundmY+10) 
                        {
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 30
                            dano()
                            Fcolision42 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                Fcolision42 = false
                            }, 500);
                    }
                    }
                    else{
                        if(LadoM==6){
                            if( Mx+Xx+155>MEx+10-backgroundmX-15&&
                                My+Yy+50>MEy-10-backgroundmY-11&&
                                Mx+Xx+205<MEx+110-backgroundmX+15&&
                                My+Yy+60<MEy+100-backgroundmY+10) 
                            {
                                if(!inferno)
                                manacharge+=25
                                this.enemydmg += 30
                                dano()
                                Fcolision42 = true
                                Mx = 0
                                My = 0
                                if(rodas){
                                    if(!inferno)
                                    rodasflam--
                                    else
                                    rodasflam-=2}
                                setTimeout(() => {
                                    Fcolision42 = false
                                }, 500);
                            }
                            }
                            else{
                        if( Mx+Xx+205>MEx+10-backgroundmX-15&&
                            My+Yy+60>MEy-10-backgroundmY-11&&
                            Mx+Xx+205<MEx+110-backgroundmX+15&&
                            My+Yy+60<MEy+100-backgroundmY+10) 
                        {
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 30
                            dano()
                            Fcolision42 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                Fcolision42 = false
                            }, 500);
                        }}
                        }
                        
                    if(distancia>1200)
                    {
                        Fcolision42 = true
                        Mx = 0
                        My = 0
                        setTimeout(() => {
                            Fcolision42 = false
                    
                        }, 500);
                    }
        }}}
        }

function magia43()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        var Wt11 = 20
        var Wt12 = 20
        var AceMx = 0
        var AceMy = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magVQ = new Image()
        magVQ.src = "skills/skillQ.png"
        var magHQ = new Image()
        magHQ.src = "skills/skillQH.png"
        var magDQ = new Image()
        magDQ.src = "skills/skillQD.png"
            fpsmagiasw3(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>3)
                animaQ = 0;
                    switch(LadoM){ 
                        case 1:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, 0-Mx-Xx-235,My+Yy+35, Wt11,Wt12)
                        context.restore()
                        if(Wt11<60||Wt12<60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                            Mx-=3.5
                            if(My+Yy+35<MEy-backgroundmY)
                            My+=0.25;
                            else if(My+Yy+35>MEy-backgroundmY)
                            My-=0.25;
                            }
                        break;

                        case 2:
                        if(OlharMagia){
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx-50,My+Yy+35, Wt11,Wt12)
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2
                            Wt12+=2
                            }
                        else{
                            My-=3.5
                            if(Mx+Xx-50<MEx-backgroundmX)
                            Mx+=0.25;
                            else if(Mx+Xx-50>MEx-backgroundmX)
                            Mx-=0.25;
                            }
                            }

                        if(!OlharMagia){
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+215,My+Yy+35, Wt11,Wt12)
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                            My-=3.5
                            if(Mx+Xx+215<MEx-backgroundmX)
                            Mx+=0.25;
                            else if(Mx+Xx+215>MEx-backgroundmX)
                            Mx-=0.25;
                            }
                            }
                        break;

                        case 3:
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, Mx+Xx-50,My+Yy+35, Wt11,Wt12)            
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                        }
                        else{
                                Mx+=3.5
                            if(My+Yy+35<MEy-backgroundmY)
                                My+=0.25;
                            if(My+Yy+35>MEy-backgroundmY)
                                My-=0.25;
                            }    
                        break;

                        case 4:
                        if(OlharMagia){
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx-50,0-My-Yy-55, Wt11,Wt12) 
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                            My+=3.5
                            if(Mx+Xx-50<MEx-backgroundmX)
                            Mx+=0.25;
                            else if(Mx+Xx-50>MEx-backgroundmX)
                            Mx-=0.25;
                        }
                        }

                        if(!OlharMagia){
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+215,0-My-Yy-55, Wt11,Wt12)
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                            My+=3.5
                            if(Mx+Xx+215<MEx-backgroundmX)
                            Mx+=0.25;
                            else if(Mx+Xx+215>MEx-backgroundmX)
                            Mx-=0.25;
                        }
                        }
                        break;

                        case 5:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-235,My+Yy+35, Wt11,Wt12)
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                                My-=3.1+AceMy
                                Mx-=3.1+AceMx
                            if(Mx+Xx-235>MEx-backgroundmX){
                                AceMx = 0.25
                                AceMy = 0}
                            if(My+Yy+35>MEy-backgroundmY){
                                AceMy = 0.25
                                AceMx = 0}
                            }
                        break;

                        case 6:
                        context.save()
                        context.scale(-1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-235,0-My-Yy-55, Wt11,Wt12)
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                                My+=3.1+AceMy
                                Mx-=3.1+AceMx
                            if(Mx+Xx-235>MEx-backgroundmX){
                                AceMx = 0.25
                                AceMy = 0}
                            if(My+Yy-55<MEy-backgroundmY){
                                AceMy = 0.25
                                AceMx = 0}
                            }
                        break;

                        case 7:
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx-65,My+Yy+35, Wt11,Wt12)
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                                My-=3.1+AceMy
                                Mx+=3.1+AceMx
                            if(Mx+Xx-65<MEx-backgroundmX){
                                AceMx = 0.25
                                AceMy = 0
                                }
                            if(My+Yy+35>MEy-backgroundmY){
                                AceMy = 0.25
                                AceMx = 0
                                }
                            }
                        break;

                        case 8:
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx-65,0-My-Yy-55, Wt11,Wt12)
                        context.restore()
                        if(Wt11<=60||Wt12<=60){
                            Wt11+=2.4
                            Wt12+=2.4
                            }
                        else{
                                My+=3.1+AceMy
                                Mx+=3.1+AceMx
                            if(Mx+Xx-65<175){
                                AceMx = 0.25
                                AceMy = 0}
                            if(My+Yy-55<175){
                                AceMy = 0.25
                                AceMx = 0}
                            }

                    }

                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }
                    
                if(Etangivel){

                    if(Wt11>=60||Wt12>=60){
                    if(OlharMagia){
                        if( Mx+Xx-50>MEx-5-backgroundmX-15&&
                            My+Yy+30>MEy-10-backgroundmY-11&&   
                            Mx+Xx-50<MEx+90-backgroundmX+15&&
                            My+Yy+30<MEy+100-backgroundmY+10) 
                        {
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 30
                            dano()
                            Fcolision43 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                Fcolision43 = false
                            }, 500);
                    }
                    }
                    else{
                        if(LadoM==6){
                            if( Mx+Xx+165>MEx+10-backgroundmX-15&&
                                My+Yy+20>MEy-10-backgroundmY-11&&
                                Mx+Xx+215<MEx+110-backgroundmX+15&&
                                My+Yy+30<MEy+100-backgroundmY+10) 
                            {
                                if(!inferno)
                                manacharge+=25
                                this.enemydmg += 30
                                dano()
                                Fcolision43 = true
                                Mx = 0
                                My = 0
                                if(rodas){
                                    if(!inferno)
                                    rodasflam--
                                    else
                                    rodasflam-=2}
                                setTimeout(() => {
                                    Fcolision43 = false
                                }, 500);
                            }
                            }
                            else{
                        if( Mx+Xx+215>MEx+10-backgroundmX-15&&
                            My+Yy+30>MEy-10-backgroundmY-11&&
                            Mx+Xx+215<MEx+110-backgroundmX+15&&
                            My+Yy+30<MEy+100-backgroundmY+10) 
                        {
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 30
                            dano()
                            Fcolision43 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                Fcolision43 = false
                            }, 500);
                        }}
                        }
                        
                    if(distancia>1200)
                    {
                        Fcolision43 = true
                        Mx = 0
                        My = 0
                        setTimeout(() => {
                            Fcolision43 = false
                    
                        }, 500);
                    }
        }}}
        }

function magiaULT(){
    inferno = true
    manacharge = -125
    combo = 1 
    comboCD1 = false
    comboCD2 = false
    var contadorfpsmagia = 0
    var animaQ = 0
    setTimeout(() => {
            inferno = false
            combo = 1
            comboCDqR1 = false
            comboCDqR2 = false
    }, 15000) 
    var magAura = new Image()
    magAura.src = "skills/skillR.png"
    fpsmagiasauraR(Aura,60)
    function Aura(){
        if(contadorfpsmagia<5)
        contadorfpsmagia++
        else
        contadorfpsmagia = 0
        if(contadorfpsmagia==5)
        animaQ++
        if(animaQ>8)
        animaQ = 0;
        if(OlharDireita)
        context.drawImage(magAura,0+(animaQ*760),0, 760,730, x+20+trueX,y+trueY, 90,120)
        else
        context.drawImage(magAura,0+(animaQ*760),0, 760,730, x+40+trueX,y+trueY, 90,120)
    }
}

function magiaULTq1()
        {
        var distancia = 0 
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magVQ = new Image()
        magVQ.src = "skills/skillQ.png"
        var magHQ = new Image()
        magHQ.src = "skills/skillQH.png"
        var magDQ = new Image()
        magDQ.src = "skills/skillQD.png"
            fpsmagiasrq1(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>3)
                animaQ = 0;
                    switch(LadoM){ 
                        case 1:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, 0-Mx-Xx-75,My+Yy+40, 60,60)
                        context.restore()
                        Mx-=3.5
                        break;
                        case 2:
                        if(OlharMagia)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+110,My+Yy+40, 60,60)
                        else
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+55,My+Yy+40, 60,60)
                        My-=3.5
                        break;
                        case 3:
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, Mx+Xx+110,My+Yy+40, 60,60)                
                        Mx+=3.5
                        break;
                        case 4:
                        if(OlharMagia){
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+110,0-My-Yy-60, 60,60) 
                        context.restore()
                        }
                        else{
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+55,0-My-Yy-60, 60,60)
                        context.restore()
                        }
                        My+=3.5
                        break;
                        case 5:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-75,My+Yy+40, 60,60)
                        context.restore()
                        My-=3.5
                        Mx-=3.5
                        break;
                        case 6:
                        context.save()
                        context.scale(-1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-75,0-My-Yy-60, 60,60)
                        context.restore()
                        My+=3.5
                        Mx-=3.5
                        break;
                        case 7:
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx+95,My+Yy+40, 60,60)
                        My-=3.5
                        Mx+=3.5
                        break;
                        case 8:
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx+95,0-My-Yy-60, 60,60)
                        context.restore()
                        My+=3.5
                        Mx+=3.5
                    }
                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }

                if(Etangivel){

                    if(OlharMagia){
                        if( Mx+Xx+115>MEx-5-backgroundmX-15&&
                            My+Yy+40>MEy-10-backgroundmY-11&&   
                            Mx+Xx+110<MEx+90-backgroundmX+15&&
                            My+Yy+40<MEy+100-backgroundmY+10) 
                        {
                            this.enemydmg += 25
                            dano()
                            FcolisionRq1 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                FcolisionRq1 = false
                            }, 500);
                    }
                    }
                    else{
                        if(LadoM==6){
                            if( Mx+Xx+30>MEx+10-backgroundmX-15&&
                                My+Yy+30>MEy-10-backgroundmY-11&&
                                Mx+Xx+50<MEx+110-backgroundmX+15&&
                                My+Yy+30<MEy+100-backgroundmY+10) 
                            {
                                this.enemydmg += 25
                                dano()
                                FcolisionRq1 = true
                                Mx = 0
                                My = 0
                                if(rodas){
                                    if(!inferno)
                                    rodasflam--
                                    else
                                    rodasflam-=2}
                                setTimeout(() => {
                                    FcolisionRq1 = false
                                }, 500);
                            }
                            }
                            else
                        if( Mx+Xx+60>MEx+10-backgroundmX-15&&
                            My+Yy+40>MEy-10-backgroundmY-11&&
                            Mx+Xx+55<MEx+110-backgroundmX+15&&
                            My+Yy+40<MEy+100-backgroundmY+10) 
                        {
                            this.enemydmg += 25
                            dano()
                            FcolisionRq1 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                FcolisionRq1 = false
                            }, 500);
                        }
                        }
                if(distancia>700)
                {
                    FcolisionRq1 = true
                    Mx = 0
                    My = 0
                    setTimeout(() => {
                        FcolisionRq1 = false
                
                    }, 500);
                }
        }}
        }

function magiaULTq2()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magVQ = new Image()
        magVQ.src = "skills/skillQ.png"
        var magHQ = new Image()
        magHQ.src = "skills/skillQH.png"
        var magDQ = new Image()
        magDQ.src = "skills/skillQD.png"
            fpsmagiasrq2(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>3)
                animaQ = 0;
                    switch(LadoM){ 
                        case 1:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, 0-Mx-Xx-75,My+Yy+40, 60,60)
                        context.restore()
                        Mx-=3.5
                        break;
                        case 2:
                        if(OlharMagia)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+110,My+Yy+40, 60,60)
                        else
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+55,My+Yy+40, 60,60)
                        My-=3.5
                        break;
                        case 3:
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, Mx+Xx+110,My+Yy+40, 60,60)                
                        Mx+=3.5
                        break;
                        case 4:
                        if(OlharMagia){
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+110,0-My-Yy-60, 60,60) 
                        context.restore()
                        }
                        else{
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+55,0-My-Yy-60, 60,60)
                        context.restore()
                        }
                        My+=3.5
                        break;
                        case 5:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-75,My+Yy+40, 60,60)
                        context.restore()
                        My-=3.5
                        Mx-=3.5
                        break;
                        case 6:
                        context.save()
                        context.scale(-1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-75,0-My-Yy-60, 60,60)
                        context.restore()
                        My+=3.5
                        Mx-=3.5
                        break;
                        case 7:
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx+95,My+Yy+40, 60,60)
                        My-=3.5
                        Mx+=3.5
                        break;
                        case 8:
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx+95,0-My-Yy-60, 60,60)
                        context.restore()
                        My+=3.5
                        Mx+=3.5
                    }
                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }

                if(Etangivel){
                    if(OlharMagia){
                        if( Mx+Xx+115>MEx-5-backgroundmX-15&&
                            My+Yy+40>MEy-10-backgroundmY-11&&   
                            Mx+Xx+110<MEx+90-backgroundmX+15&&
                            My+Yy+40<MEy+100-backgroundmY+10) 
                        {
                            this.enemydmg += 25
                            dano()
                            FcolisionRq2 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                FcolisionRq2 = false
                            }, 500);
                    }
                    }
                    else{
                        if(LadoM==6){
                            if( Mx+Xx+30>MEx+10-backgroundmX-15&&
                                My+Yy+30>MEy-10-backgroundmY-11&&
                                Mx+Xx+50<MEx+110-backgroundmX+15&&
                                My+Yy+30<MEy+100-backgroundmY+10) 
                            {
                                this.enemydmg += 25
                                dano()
                                FcolisionRq2 = true
                                Mx = 0
                                My = 0
                                if(rodas){
                                    if(!inferno)
                                    rodasflam--
                                    else
                                    rodasflam-=2}
                                setTimeout(() => {
                                    FcolisionRq2 = false
                                }, 500);
                            }
                            }
                            else
                        if( Mx+Xx+60>MEx+10-backgroundmX-15&&
                            My+Yy+40>MEy-10-backgroundmY-11&&
                            Mx+Xx+55<MEx+110-backgroundmX+15&&
                            My+Yy+40<MEy+100-backgroundmY+10) 
                        {
                            this.enemydmg += 25
                            dano()
                            FcolisionRq2 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                FcolisionRq2 = false
                            }, 500);
                        }
                        }
                if(distancia>700)
                {
                    FcolisionRq2 = true
                    Mx = 0
                    My = 0
                    setTimeout(() => {
                        FcolisionRq2 = false
                
                    }, 500);
                }
        }}
        }

function magiaULTq3()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magVQ = new Image()
        magVQ.src = "skills/skillQ.png"
        var magHQ = new Image()
        magHQ.src = "skills/skillQH.png"
        var magDQ = new Image()
        magDQ.src = "skills/skillQD.png"
            fpsmagiasrq3(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>3)
                animaQ = 0;
                    switch(LadoM){ 
                        case 1:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, 0-Mx-Xx-75,My+Yy+40, 60,60)
                        context.restore()
                        Mx-=3.5
                        break;
                        case 2:
                        if(OlharMagia)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+110,My+Yy+40, 60,60)
                        else
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+55,My+Yy+40, 60,60)
                        My-=3.5
                        break;
                        case 3:
                        context.drawImage(magVQ,0+(animaQ*24.5),0, 24.5,24.5, Mx+Xx+110,My+Yy+40, 60,60)                
                        Mx+=3.5
                        break;
                        case 4:
                        if(OlharMagia){
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+110,0-My-Yy-60, 60,60) 
                        context.restore()
                        }
                        else{
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magHQ,0+(animaQ*12.75),0, 12.75,15, Mx+Xx+55,0-My-Yy-60, 60,60)
                        context.restore()
                        }
                        My+=3.5
                        break;
                        case 5:
                        context.save()
                        context.scale(-1,1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-75,My+Yy+40, 60,60)
                        context.restore()
                        My-=3.5
                        Mx-=3.5
                        break;
                        case 6:
                        context.save()
                        context.scale(-1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, 0-Mx-Xx-75,0-My-Yy-60, 60,60)
                        context.restore()
                        My+=3.5
                        Mx-=3.5
                        break;
                        case 7:
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx+95,My+Yy+40, 60,60)
                        My-=3.5
                        Mx+=3.5
                        break;
                        case 8:
                        context.save()
                        context.scale(1,-1)
                        context.drawImage(magDQ,0+(animaQ*14.75),0, 14.75,15, Mx+Xx+95,0-My-Yy-60, 60,60)
                        context.restore()
                        My+=3.5
                        Mx+=3.5
                    }
                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }

                if(Etangivel){

                    if(OlharMagia){
                        if( Mx+Xx+115>MEx-5-backgroundmX-15&&
                            My+Yy+40>MEy-10-backgroundmY-11&&   
                            Mx+Xx+110<MEx+90-backgroundmX+15&&
                            My+Yy+40<MEy+100-backgroundmY+10) 
                        {
                            this.enemydmg += 25
                            dano()
                            FcolisionRq3 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                FcolisionRq3 = false
                            }, 500);
                    }
                    }
                    else{
                        if(LadoM==6){
                            if( Mx+Xx+30>MEx+10-backgroundmX-15&&
                                My+Yy+30>MEy-10-backgroundmY-11&&
                                Mx+Xx+50<MEx+110-backgroundmX+15&&
                                My+Yy+30<MEy+100-backgroundmY+10) 
                            {
                                this.enemydmg += 25
                                dano()
                                FcolisionRq3 = true
                                Mx = 0
                                My = 0
                                if(rodas){
                                    if(!inferno)
                                    rodasflam--
                                    else
                                    rodasflam-=2}
                                setTimeout(() => {
                                    FcolisionRq3 = false
                                }, 500);
                            }
                            }
                            else
                        if( Mx+Xx+60>MEx+10-backgroundmX-15&&
                            My+Yy+40>MEy-10-backgroundmY-11&&
                            Mx+Xx+55<MEx+110-backgroundmX+15&&
                            My+Yy+40<MEy+100-backgroundmY+10) 
                        {
                            this.enemydmg += 25
                            dano()
                            FcolisionRq3 = true
                            Mx = 0
                            My = 0
                            if(rodas){
                                if(!inferno)
                                rodasflam--
                                else
                                rodasflam-=2}
                            setTimeout(() => {
                                FcolisionRq3 = false
                            }, 500);
                        }
                        }
                if(distancia>700)
                {
                    FcolisionRq3 = true
                    Mx = 0
                    My = 0
                    setTimeout(() => {
                        FcolisionRq3 = false
                
                    }, 500);
                }
        }}
        }


function magia51()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magE = new Image()
        magE.src = "skills/skillE.png"
            fpsmagiase1(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>11)
                animaQ = 0;
                switch(LadoM){ 
                    case 1:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)               
                    Mx-=3.5
                    break;
                    case 2:
                    if(OlharMagia)
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    else
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My-=3.5
                    break;
                    case 3:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)                
                    Mx+=3.5
                    break;
                    case 4:
                    if(OlharMagia)
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    else
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My+=3.5
                    break;
                    case 5:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My-=3.5
                    Mx-=3.5
                    break;
                    case 6:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My+=3.5
                    Mx-=3.5
                    break;
                    case 7:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    My-=3.5
                    Mx+=3.5
                    break;
                    case 8:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    My+=3.5
                    Mx+=3.5
                }
                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }

                if(Etangivel){
                    if(OlharMagia){
                        if( Mx+Xx+110>MEx-5-backgroundmX-10&&
                            My+Yy+60>MEy-10-backgroundmY-20&&   
                            Mx+Xx+110<MEx+90-backgroundmX+5&&
                            My+Yy+60<MEy+100-backgroundmY) 
                        {
                            
                            if(!rodasdmgcap){
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 25
                            rodasdmgcap = true
                            }
                            else
                            this.enemydmg += 10
                            dano()
                            FcolisionE1 = true
                            Mx = 0
                            My = 0
                            setTimeout(() => {
                                FcolisionE1 = false
                                
                            }, 500);
                    }
                    }
                    else
                        if( Mx+Xx>MEx-5-backgroundmX-10&&
                            My+Yy+60>MEy-10-backgroundmY-20&&   
                            Mx+Xx<MEx+90-backgroundmX+5&&
                            My+Yy+60<MEy+100-backgroundmY) 
                        {
                            
                            if(!rodasdmgcap){
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 25
                            rodasdmgcap = true
                            }
                            else
                            this.enemydmg += 10
                            dano()
                            FcolisionE1 = true
                            Mx = 0
                            My = 0
                            setTimeout(() => {
                                FcolisionE1 = false
                                
                            }, 500);
                        }
                if(distancia>900)
                {
                    FcolisionE1 = true
                    Mx = 0
                    My = 0
                    setTimeout(() => {
                        FcolisionE1 = false
                    }, 500);
                }
        }}
        }

        
function magia52()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magE = new Image()
        magE.src = "skills/skillE.png"
            fpsmagiase2(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>11)
                animaQ = 0;
                switch(LadoM){ 
                    case 1:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)               
                    Mx-=3.5
                    My-=3.5
                    break;
                    case 2:
                    if(OlharMagia)
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    else
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My-=3.5
                    Mx+=3.5
                    break;
                    case 3:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)                
                    Mx+=3.5
                    My-=3.5
                    break;
                    case 4:
                    if(OlharMagia)
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    else
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My+=3.5
                    Mx+=3.5
                    break;
                    case 5:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My-=3.5
                    break;
                    case 6:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    Mx-=3.5
                    break;
                    case 7:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    Mx+=3.5
                    break;
                    case 8:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    My+=3.5
                }
                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }

                if(Etangivel){
                    if(OlharMagia){
                        if( Mx+Xx+110>MEx-5-backgroundmX-10&&
                            My+Yy+60>MEy-10-backgroundmY-20&&   
                            Mx+Xx+110<MEx+90-backgroundmX+5&&
                            My+Yy+60<MEy+100-backgroundmY) 
                        {
                            
                            if(!rodasdmgcap){
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 25
                            rodasdmgcap = true
                            }
                            else
                            this.enemydmg += 10
                            dano()
                            FcolisionE2 = true
                            Mx = 0
                            My = 0
                            setTimeout(() => {
                                FcolisionE2 = false
                                
                            }, 500);
                    }
                    }
                    else
                        if( Mx+Xx>MEx-5-backgroundmX-10&&
                            My+Yy+60>MEy-10-backgroundmY-20&&   
                            Mx+Xx<MEx+90-backgroundmX+5&&
                            My+Yy+60<MEy+100-backgroundmY) 
                        {
                            
                            if(!rodasdmgcap){
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 25
                            rodasdmgcap = true
                            }
                            else
                            this.enemydmg += 10
                            dano()
                            FcolisionE2 = true
                            Mx = 0
                            My = 0
                            setTimeout(() => {
                                FcolisionE2 = false
                                
                            }, 500);
                        }
                if(distancia>900)
                {
                    FcolisionE2 = true
                    Mx = 0
                    My = 0
                    setTimeout(() => {
                        FcolisionE2 = false
                        
                    }, 500);
                }
        }}
        }


function magia53()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magE = new Image()
        magE.src = "skills/skillE.png"
            fpsmagiase3(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>11)
                animaQ = 0;
                switch(LadoM){ 
                    case 1:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)               
                    Mx-=3.5
                    My+=3.5
                    break;
                    case 2:
                    if(OlharMagia)
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    else
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My-=3.5
                    Mx-=3.5
                    break;
                    case 3:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)                
                    Mx+=3.5
                    My+=3.5
                    break;
                    case 4:
                    if(OlharMagia)
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    else
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My+=3.5
                    Mx-=3.5
                    break;
                    case 5:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    Mx-=3.5
                    break;
                    case 6:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My+=3.5
                    break;
                    case 7:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    My-=3.5
                    break;
                    case 8:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    Mx+=3.5
                }
                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }

                if(Etangivel){
                    if(OlharMagia){
                        if( Mx+Xx+110>MEx-5-backgroundmX-10&&
                            My+Yy+60>MEy-10-backgroundmY-20&&   
                            Mx+Xx+110<MEx+90-backgroundmX+5&&
                            My+Yy+60<MEy+100-backgroundmY) 
                        {
                            
                            if(!rodasdmgcap){
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 25
                            rodasdmgcap = true
                            }
                            else
                            this.enemydmg += 10
                            dano()
                            FcolisionE3 = true
                            Mx = 0
                            My = 0
                            setTimeout(() => {
                                FcolisionE3 = false
                                
                            }, 500);
                    }
                    }
                    else
                        if( Mx+Xx>MEx-5-backgroundmX-10&&
                            My+Yy+60>MEy-10-backgroundmY-20&&   
                            Mx+Xx<MEx+90-backgroundmX+5&&
                            My+Yy+60<MEy+100-backgroundmY) 
                        {
                            
                            if(!rodasdmgcap){
                            if(!inferno)
                            manacharge+=25
                            this.enemydmg += 25
                            rodasdmgcap = true
                            }
                            else
                            this.enemydmg += 10
                            dano()
                            FcolisionE3 = true
                            Mx = 0
                            My = 0
                            setTimeout(() => {
                                FcolisionE3 = false
                                
                            }, 500);
                        }
                if(distancia>900)
                {
                    FcolisionE3 = true
                    Mx = 0
                    My = 0
                    setTimeout(() => {
                        FcolisionE3 = false
                        
                    }, 500);
                }
        }}
        }


function magia54()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var VHRMxy = Math.random() * (3 + 3) - 3;
        var RMxy = Math.random() * (3 + 3) - 3
        if(RMxy<0)
        RMxy = RMxy * -1
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magE = new Image()
        magE.src = "skills/skillE.png"
            fpsmagiase4(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>11)
                animaQ = 0;
                switch(LadoM){ 
                    case 1:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)               
                    Mx-=3.5
                    My+=VHRMxy
                    break;
                    case 2:
                    if(OlharMagia)
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    else
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My-=3.5
                    Mx+=VHRMxy
                    break;
                    case 3:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)                
                    Mx+=3.5
                    My+=VHRMxy
                    break;
                    case 4:
                    if(OlharMagia)
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    else
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My+=3.5
                    Mx+=VHRMxy
                    break;
                    case 5:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My-=3.5
                    Mx-=RMxy
                    break;
                    case 6:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My+=3.5
                    Mx-=RMxy
                    break;
                    case 7:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    My-=3.5
                    Mx+=RMxy
                    break;
                    case 8:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    My+=3.5
                    Mx+=RMxy
                }
                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }

                if(Etangivel){
                    if(OlharMagia){
                        if( Mx+Xx+110>MEx-5-backgroundmX-10&&
                            My+Yy+60>MEy-10-backgroundmY-20&&   
                            Mx+Xx+110<MEx+90-backgroundmX+5&&
                            My+Yy+60<MEy+100-backgroundmY) 
                        {
                            if(!rodasdmgcap){
                            this.enemydmg += 25
                            rodasdmgcap = true
                            }
                            else
                            this.enemydmg += 10
                            dano()
                            FcolisionE4 = true
                            Mx = 0
                            My = 0
                            setTimeout(() => {
                                FcolisionE4 = false
                                
                            }, 500);
                    }
                    }
                    else
                        if( Mx+Xx>MEx-5-backgroundmX-10&&
                            My+Yy+60>MEy-10-backgroundmY-20&&   
                            Mx+Xx<MEx+90-backgroundmX+5&&
                            My+Yy+60<MEy+100-backgroundmY) 
                        {
                            if(!rodasdmgcap){
                            this.enemydmg += 25
                            rodasdmgcap = true
                            }
                            else
                            this.enemydmg += 10
                            dano()
                            FcolisionE4 = true
                            Mx = 0
                            My = 0
                            setTimeout(() => {
                                FcolisionE4 = false
                                
                            }, 500);
                        }
                if(distancia>900)
                {
                    FcolisionE4 = true
                    Mx = 0
                    My = 0
                    setTimeout(() => {
                        FcolisionE4 = false
                        
                    }, 500);
                }
        }}
        }

        
function magia55()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var VHRMxy = Math.random() * (3 + 3) - 3;
        var RMxy = Math.random() * (3 + 3) - 3;
        if(RMxy<0)
        RMxy = RMxy * -1
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magE = new Image()
        magE.src = "skills/skillE.png"
            fpsmagiase5(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>11)
                animaQ = 0;
                switch(LadoM){ 
                    case 1:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)               
                    Mx-=3.5
                    My+=VHRMxy
                    break;
                    case 2:
                    if(OlharMagia)
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    else
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My-=3.5
                    Mx+=VHRMxy
                    break;
                    case 3:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)                
                    Mx+=3.5
                    My+=VHRMxy
                    break;
                    case 4:
                    if(OlharMagia)
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    else
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My+=3.5
                    Mx+=VHRMxy
                    break;
                    case 5:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My-=3.5
                    Mx-=RMxy
                    break;
                    case 6:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My+=RMxy
                    Mx-=3.5
                    break;
                    case 7:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    My-=RMxy
                    Mx+=3.5
                    break;
                    case 8:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    My+=3.5
                    Mx+=RMxy
                }
                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }

                if(Etangivel){
                    if(OlharMagia){
                        if( Mx+Xx+110>MEx-5-backgroundmX-10&&
                            My+Yy+60>MEy-10-backgroundmY-20&&   
                            Mx+Xx+110<MEx+90-backgroundmX+5&&
                            My+Yy+60<MEy+100-backgroundmY) 
                        {
                            if(!rodasdmgcap){
                            this.enemydmg += 25
                            rodasdmgcap = true
                            }
                            else
                            this.enemydmg += 10
                            dano()
                            FcolisionE5 = true
                            Mx = 0
                            My = 0
                            setTimeout(() => {
                                FcolisionE5 = false
                                
                            }, 500);
                    }
                    }
                    else
                        if( Mx+Xx>MEx-5-backgroundmX-10&&
                            My+Yy+60>MEy-10-backgroundmY-20&&   
                            Mx+Xx<MEx+90-backgroundmX+5&&
                            My+Yy+60<MEy+100-backgroundmY) 
                        {
                            if(!rodasdmgcap){
                            this.enemydmg += 25
                            rodasdmgcap = true
                            }
                            else
                            this.enemydmg += 10
                            dano()
                            FcolisionE5 = true
                            Mx = 0
                            My = 0
                            setTimeout(() => {
                                FcolisionE5 = false
                                
                            }, 500);
                        }
                if(distancia>900)
                {
                    FcolisionE5 = true
                    Mx = 0
                    My = 0
                    setTimeout(() => {
                        FcolisionE5 = false
                        
                    }, 500);
                }
        }}
        }

        
function magia56()
        { 
        var distancia = 0
        var LadoM = 0   
        var Mx = 0
        var My = 0
        var Xx = x+trueX
        var Yy = y+trueY
        var VHRMxy = Math.random() * (3 + 3) - 3
        var RMxy = Math.random() * (3 + 3) - 3
        if(RMxy<0)
        RMxy = RMxy * -1
        var OlharMagia
        var contadorfpsmagia = 0
        var backgroundXA = backgroundX
        var backgroundYA = backgroundY
        var backgroundbackupX = 0
        var backgroundbackupY = 0
        LadoM = Lado
        OlharMagia = OlharDireita 
        var magE = new Image()
        magE.src = "skills/skillE.png"
            fpsmagiase6(magiaT,60)
            function magiaT(){
                distancia+=3.5
                var backgroundmX = backgroundX
                var backgroundmY = backgroundY
                var MEx = Ex
                var MEy = Ey
                backgroundbackupX  = backgroundmX-backgroundXA
                backgroundbackupY  = backgroundmY-backgroundYA
                if(contadorfpsmagia<2)
                contadorfpsmagia++
                else
                contadorfpsmagia = 0
                if(contadorfpsmagia==2)
                animaQ++
                if(animaQ>11)
                animaQ = 0;
                switch(LadoM){ 
                    case 1:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)               
                    Mx-=3.5
                    My+=VHRMxy
                    break;
                    case 2:
                    if(OlharMagia)
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    else
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My-=3.5
                    Mx+=VHRMxy
                    break;
                    case 3:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)                
                    Mx+=3.5
                    My+=VHRMxy
                    break;
                    case 4:
                    if(OlharMagia)
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    else
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My+=3.5
                    Mx+=VHRMxy
                    break;
                    case 5:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My-=3.5
                    Mx-=RMxy
                    break;
                    case 6:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx,My+Yy+60, 60,60)
                    My+=RMxy
                    Mx-=3.5
                    break;
                    case 7:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    My-=RMxy
                    Mx+=3.5
                    break;
                    case 8:
                    context.drawImage(magE,0+(animaQ*79),0, 79,79, Mx+Xx+110,My+Yy+60, 60,60)
                    My+=RMxy
                    Mx+=3.5
                }
                    if(backgroundbackupX>0||backgroundbackupX<0){
                        Mx = Mx-backgroundbackupX
                        backgroundXA = backgroundmX
                    }
                        
                    if(backgroundbackupY>0||backgroundbackupY<0){
                        My = My-backgroundbackupY
                        backgroundYA = backgroundmY
                    }

                if(Etangivel){
                    if(OlharMagia){
                        if( Mx+Xx+110>MEx-5-backgroundmX-10&&
                            My+Yy+60>MEy-10-backgroundmY-20&&   
                            Mx+Xx+110<MEx+90-backgroundmX+5&&
                            My+Yy+60<MEy+100-backgroundmY) 
                        {
                            if(!rodasdmgcap){
                            this.enemydmg += 25
                            rodasdmgcap = true
                            }
                            else
                            this.enemydmg += 10
                            dano()
                            FcolisionE6 = true
                            Mx = 0
                            My = 0
                            setTimeout(() => {
                                FcolisionE6 = false
                                
                            }, 500);
                    }
                    }
                    else
                        if( Mx+Xx>MEx-5-backgroundmX-10&&
                            My+Yy+60>MEy-10-backgroundmY-20&&   
                            Mx+Xx<MEx+90-backgroundmX+5&&
                            My+Yy+60<MEy+100-backgroundmY) 
                        {
                            if(!rodasdmgcap){
                            this.enemydmg += 25
                            rodasdmgcap = true
                            }
                            else
                            this.enemydmg += 10
                            dano()
                            FcolisionE6 = true
                            Mx = 0
                            My = 0
                            setTimeout(() => {
                                FcolisionE6 = false
                                
                            }, 500);
                        }
                if(distancia>900)
                {
                    FcolisionE6 = true
                    Mx = 0
                    My = 0
                    setTimeout(() => {
                        FcolisionE6 = false
                        
                    }, 500);
                }
        }}
        }