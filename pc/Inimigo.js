var inimigoidle = new Image()
inimigoidle.src = "skills/raio_idle.png"
var inimigohurt = new Image()
inimigohurt.src = "skills/raio_hurt.png"
var inimigodeath = new Image()
inimigodeath.src = "skills/raio_die.png"
var inimigowalk = new Image()
inimigowalk.src = "skills/raio_walk.png"
var inimigocast = new Image()
inimigocast.src = "skills/raio_cast.png"
var inimigodash = new Image()
inimigodash.src = "skills/skillraioE.png"

var Ex = 650
var Ey = 275

var ELado = 1
var EOlharDireita = false

var contadordeframesE = 0
var contadordeframesEH = 0
var contadordeframesED = 0
var contadordeframesEW = 0
var contadordeframesEC = 0
var contadordeframesD = 0

var AnimaED = 0
var AnimaEW = 0
var AnimaE = 0
var AnimaEC = 0
var Walkanima = true
var animadash = 1
var contadordash = 0

var Ebaixo = false
var Ecima = false
var Edireita = false
var Eesquerda = false

var Ecastanima = true




function boneco2() // Inimigo 
{
    
// Sprites

    if(EOlharDireita)
        if(enemyalive){
            if(!contusaoE){
                if(Ecastanima){
                    if(Edireita==false&&Eesquerda==false&&Ecima==false&&Ebaixo==false){
                        context.drawImage(inimigoidle,0+(AnimaE*750),0, 750, 723, Ex-backgroundX,Ey-backgroundY, 150,120)
                    }
                    else{
                        context.drawImage(inimigowalk,0+(AnimaEW*750),0, 750, 723, Ex-backgroundX,Ey-backgroundY, 150,120)
                    }
                }
                else{
                    if(Etangivel)
                        context.drawImage(inimigocast,0+(AnimaEC*750),0, 750, 723, Ex-backgroundX,Ey-backgroundY, 150,120)
                    else
                        context.drawImage(inimigodash,0+(animadash*752),0, 752, 722, Ex-backgroundX,Ey-backgroundY, 150,120)

                }
            }
            else
                context.drawImage(inimigohurt,0+(AnimaEH*750),0, 750, 723, Ex-backgroundX,Ey-backgroundY, 150,120)
        }
        else{
        context.drawImage(inimigodeath,0+(AnimaED*750),0,750,720, Ex-backgroundX, Ey-backgroundY, 150, 120)
        }
    else{
    if(enemyalive){
        if(!contusaoE){
            if(Ecastanima){
                if(Edireita==false&&Eesquerda==false&&Ecima==false&&Ebaixo==false){
                    context.save()
                    context.scale(-1,1)
                    context.drawImage(inimigoidle,0+(AnimaE*750),0, 750, 723, 0-Ex+backgroundX-150,Ey-backgroundY, 150,120)
                    context.restore()
                }
                else{
                    context.save()
                    context.scale(-1,1)
                    context.drawImage(inimigowalk,0+(AnimaEW*750),0, 750, 723, 0-Ex+backgroundX-150,Ey-backgroundY, 150,120)
                    context.restore()
                }
            }
            else{
                if(Etangivel){
                context.save()
                context.scale(-1,1)
                context.drawImage(inimigocast,0+(AnimaEC*750),0, 750, 723, 0-Ex+backgroundX-150,Ey-backgroundY, 150,120)
                context.restore()
                }
                else{
                context.save()
                context.scale(-1,1)
                context.drawImage(inimigodash,0+(animadash*752),0, 752, 722, 0-Ex+backgroundX-150,Ey-backgroundY, 150,120)
                context.restore()
            }
            }
        }
        else{
            context.save()
            context.scale(-1,1)
            context.drawImage(inimigohurt,0+(AnimaEH*750),0, 750, 723, 0-Ex+backgroundX-150,Ey-backgroundY, 150,120)
            context.restore()
        }
    }
    else{
    context.save()
    context.scale(-1,1)
    context.drawImage(inimigodeath,0+(AnimaED*750),0,750,720, 0-Ex+backgroundX-150, Ey-backgroundY, 150, 120)
    context.restore()
    }
    }
    
    //Controles

        if(Edireita == true&&Ecastanima==true&&!contusaoE&&enemyalive&&heroalive){
            if(Ex<922)
            Ex+=EMovA
            ELado = 3
            EOlharDireita = true
        }
        if(Eesquerda == true&&Ecastanima==true&&!contusaoE&&enemyalive&&heroalive){
            if(Ex>-15)
            Ex-=EMovA
            ELado = 1
            EOlharDireita = false
        }
        if(Ecima == true&&Ecastanima==true&&!contusaoE&&enemyalive&&heroalive){
            if(Ey>23)
            Ey-=EMovA
            ELado = 2}
        if(Ebaixo == true&&Ecastanima==true&&!contusaoE&&enemyalive&&heroalive){
            if(Ey<510)
            Ey+=EMovA
            ELado = 4}
        if(Eesquerda==true&&Ecima==true&&Ecastanima==true&&!contusaoE&&enemyalive)
            ELado = 5;
        if(Eesquerda==true&&Ebaixo==true&&Ecastanima==true&&!contusaoE&&enemyalive)
            ELado = 6;
        if(Edireita==true&&Ecima==true&&Ecastanima==true&&!contusaoE&&enemyalive)
            ELado = 7;
        if(Edireita==true&&Ebaixo==true&&Ecastanima==true&&!contusaoE&&enemyalive)
            ELado = 8;

        if(Ey>510)
        Ey = 510

        if(Ey<23)
        Ey = 23

        if(Ex<-15)
        Ex = -15

        if(Ex>922)
        Ex = 922
        // Aceleração 

        if(Edireita==false&&Eesquerda==false&&Ecima==false&&Ebaixo==false||Ecastanima==false){
        EAce = -0.50;
        }
        else{
        EAce = 0.15
        }

        //Contadores

        if(!contusaoE){
            if(Edireita==false&&Eesquerda==false&&Ecima==false&&Ebaixo==false){
                if(contadordeframesE<18)
                contadordeframesE++
                else
                contadordeframesE = 0
                if(contadordeframesE==18)
                AnimaE++
                if(AnimaE>1)
                AnimaE = 0
            }
        }
        else{
            if(contadordeframesEH<1)
            contadordeframesEH++
            else
            contadordeframesEH = 0
            if(contadordeframesEH==1)
            AnimaEH++
            if(AnimaEH>=4)
            AnimaEH = 4}
            

        if(!Ecastanima){
            contadordeframesEC++
            if(contadordeframesEC>2){
            contadordeframesEC = 0
            if(AnimaEC==4)
            AnimaEC = 4
            else
            AnimaEC++
            }}
            else{
            AnimaEC = 0
        }

        if(!enemyalive){
            if(contadordeframesED<1)
            contadordeframesED++;
            else
            contadordeframesED = 0;
            if(contadordeframesED==1)
            AnimaED++
            if(AnimaED>9)
            AnimaED = 9
        }

        if(Edireita||Eesquerda||Ecima||Ebaixo){
            contadordeframesEW++
            if(contadordeframesEW>1){
                contadordeframesEW = 0
            if(Walkanima)
                AnimaEW++
            else
                AnimaEW--
            if(AnimaEW>=9)
                Walkanima = false
            if(AnimaEW<=0)
                Walkanima = true                      
        }}

        if(contadordeframesD<1)
        contadordeframesD++;
        else{
        if(dashanimationdebug){      
        animadash++
        if(animadash>10)
        animadash = 6
        contadordeframesD = 0
        }
        else{
        if(!Etangivel)
        {
            contadordash++
            if(contadordash<10){
            animadash++
            if(animadash>10)
            animadash = 6
            }
            else{
            if(animadash>5)
            animadash = 5
            else if(animadash>0)
            animadash--
            }
            
        }
        else{
        animadash = 0
        contadordash = 0}
        contadordeframesD = 0
        }}
}




