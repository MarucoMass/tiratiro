//Service Worker
//###################################################
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }

//###################################################


var listos = false;
var delay;

var ladoA = document.getElementById('ladoa');
var ladoB = document.getElementById('ladob');

var campana = document.getElementById('campana');
var play = document.getElementById('play');
var anuncio = document.getElementById('cartel');
var leyenda = document.getElementById('leyenda');
var autores = document.getElementById('autores');


var tipoA = document.getElementById("tipoa");
var tipoB = document.getElementById("tipob");

var p1Hit = false;
var p1Miss = false;
var p2Hit = false;
var p2Miss = false;


var azar;
var audioAhhh1 = new Audio('./sonidos/ahhh1.mp3');
var audioAhhh2 = new Audio('./sonidos/ahhh2.mp3');
var audioAhhh3 = new Audio('./sonidos/ahhh3.mp3');
var audioBang1 = new Audio('./sonidos/bang1.mp3');
var audioBang2 = new Audio('./sonidos/bang2.mp3');
var audioCuliao1 = new Audio('./sonidos/culiao1.mp3');
var audioCuliao2 = new Audio('./sonidos/culiao2.mp3');
var audioCuliao3 = new Audio('./sonidos/culiao3.mp3');
var audioCuliao4 = new Audio('./sonidos/culiao4.mp3');
var audioDong = new Audio('./sonidos/dong.mp3');
var audioIupiii = new Audio('./sonidos/iupiii.mp3');
var audioPium1 = new Audio('./sonidos/pium1.mp3');
var audioPium2 = new Audio('./sonidos/pium2.mp3');
var audioPium3 = new Audio('./sonidos/pium3.mp3');
var audioUjuu1 = new Audio('./sonidos/ujuu1.mp3');
var audioUjuu2 = new Audio('./sonidos/ujuu2.mp3');
var audioAwww1 = new Audio('./sonidos/awww1.mp3');
var audioAwww2 = new Audio('./sonidos/awww2.mp3');
var audioAwww3 = new Audio('./sonidos/awww3.mp3');
var audioFiuuu1 = new Audio('./sonidos/fiuuu1.mp3');
var audioFiuuu2 = new Audio('./sonidos/fiuuu2.mp3');
var audioFiuuu3 = new Audio('./sonidos/fiuuu3.mp3');
var audioRecarga = new Audio('./sonidos/recarga.mp3');
var audio = document.getElementById("audio");

eventListeners(); 
function eventListeners(){
    play.addEventListener("click", jugar);
    document.addEventListener('click', function (event) {

        // para ignorar cualquier click que no sea del exit
        if (!event.target.hasAttribute('data-toggle-fullscreen')) return;

        // If there's an element in fullscreen, exit
        // Otherwise, enter it
        if (document.fullscreenElement) {
            document.exitFullscreen();
            document.getElementById("boton-pantalla").innerHTML = '↖↗<br>↙↘';
        } else {
            document.documentElement.requestFullscreen();
            document.getElementById("boton-pantalla").innerHTML = '↘↙<br>↗↖';
        }

    }, false);
}


function mostrar() {
    listos = false;
    anuncio.classList.remove('noMostrar'); 
    autores.classList.remove('noMostrar'); 
    setTimeout(() => {
        anuncio.classList.remove('invisible'); 
        autores.classList.remove('invisible'); 
        audio.src = "./sonidos/tira tiro.mp3";
    }, 500);
}
function noMostrar() {
    anuncio.classList.add('invisible'); 
    autores.classList.add('invisible'); 
    setTimeout(() => {
        anuncio.classList.add('noMostrar');  
        autores.classList.add('noMostrar');  
    }, 500);
}

audio.src = "./sonidos/tira tiro.mp3";
audio.play();

function jugar() {
    // document.documentElement.requestFullscreen();
    audio.src = "./sonidos/wind bajito.mp3";
    audioRecarga.play();
    delay = 3000 + (Math.random()*4000);
    console.log(delay);
    listos = false;
    p1Hit = false;
    p1Miss = false;
    p2Hit = false;
    p2Miss = false;


    tipoA.classList.remove('winner');
    tipoB.classList.remove('winner');
    tipoA.src="./2a.svg";
    tipoB.src="./2b.svg";


    noMostrar();

    ladoA.addEventListener("click", player1Shoot);
    document.addEventListener("keydown", presionarUno);
    ladoB.addEventListener("click", player2Shoot);
    document.addEventListener("keydown", presionarDos);

      bell();
  
 
};
let timer;
function bell() {
    timer = setTimeout(campanada, delay)
    
}


function campanada() {
    listos = true;
    audioDong.play();
    campana.classList.remove('invisible'); 
    setTimeout(() => {
        campana.classList.add('invisible'); 
    }, 1000);
};

// Casos lado A ######################################################
// 81 87 69 82 84 65 83 68 70 71 90 88 67 86 66 9 20 16 17 91 18 37 ##
// ###################################################################

    function presionarUno(evento){
        switch (evento.keyCode) {
            case 49:
                evento.preventDefault();
                player1Shoot();
                break;
            case 81:
                evento.preventDefault();
                player1Shoot();
                break;
            case 87:
                evento.preventDefault();
                player1Shoot();
                break;
            case 69:
                evento.preventDefault();
                player1Shoot();
                break;
            case 82:
                evento.preventDefault();
                player1Shoot();
                break;
            case 84:
                evento.preventDefault();
                player1Shoot();
                break;
            case 65:
                evento.preventDefault();
                player1Shoot();
                break;
            case 83:
                evento.preventDefault();
                player1Shoot();
                break;
            case 68:
                evento.preventDefault();
                player1Shoot();
                break;
            case 70:
                evento.preventDefault();
                player1Shoot();
                break;
            case 71:
                evento.preventDefault();
                player1Shoot();
                break;
            case 90:
                evento.preventDefault();
                player1Shoot();
                break;
            case 88:
                evento.preventDefault();
                player1Shoot();
                break;
            case 67:
                evento.preventDefault();
                player1Shoot();
                break;
            case 86:
                evento.preventDefault();
                player1Shoot();
                break;
            case 66:
                evento.preventDefault();
                player1Shoot();
                break;
            case 9:
                evento.preventDefault();
                player1Shoot();
                break;
            case 20:
                evento.preventDefault();
                player1Shoot();
                break;
            case 16:
                evento.preventDefault();
                player1Shoot();
                break;
            case 17:
                evento.preventDefault();
                player1Shoot();
                break;
            case 91:
                evento.preventDefault();
                player1Shoot();
                break;
            case 18:
                evento.preventDefault();
                player1Shoot();
                break;
            case 37:
                evento.preventDefault();
                player1Shoot();
                break;
            default:
                break;
        }
    }


// Casos lado B ##############################################################################################################################
// 54 55 56 57 48 8 13 16 17 93 18 89 85 73 79 80 72 74 75 76 192 78 77 38 40 39 96 110 13 99 98 97 100 101 102 107 105 104 103 109 106 111 ##
// ###########################################################################################################################################
    function presionarDos(evento){
        switch (evento.keyCode) {
            case 54:
                evento.preventDefault();
                player2Shoot();
                break;
            case 55:
                evento.preventDefault();
                player2Shoot();
                break;
            case 56:
                evento.preventDefault();
                player2Shoot();
                break;
            case 57:
                evento.preventDefault();
                player2Shoot();
                break;
            case 48:
                evento.preventDefault();
                player2Shoot();
                break;
            case 8:
                evento.preventDefault();
                player2Shoot();
                break;
            case 13:
                evento.preventDefault();
                player2Shoot();
                break;
            case 16:
                evento.preventDefault();
                player2Shoot();
                break;
            case 17:
                evento.preventDefault();
                player2Shoot();
                break;
            case 93:
                evento.preventDefault();
                player2Shoot();
                break;
            case 18:
                evento.preventDefault();
                player2Shoot();
                break;
            case 89:
                evento.preventDefault();
                player2Shoot();
                break;
            case 85:
                evento.preventDefault();
                player2Shoot();
                break;
            case 73:
                evento.preventDefault();
                player2Shoot();
                break;
            case 79:
                evento.preventDefault();
                player2Shoot();
                break;
            case 80:
                evento.preventDefault();
                player2Shoot();
                break;
            case 72:
                evento.preventDefault();
                player2Shoot();
                break;
            case 74:
                evento.preventDefault();
                player2Shoot();
                break;
            case 75:
                evento.preventDefault();
                player2Shoot();
                break;
            case 76:
                evento.preventDefault();
                player2Shoot();
                break;
            case 192:
                evento.preventDefault();
                player2Shoot();
                break;
            case 78:
                evento.preventDefault();
                player2Shoot();
                break;
            case 77:
                evento.preventDefault();
                player2Shoot();
                break;
            case 38:
                evento.preventDefault();
                player2Shoot();
                break;
            case 40:
                evento.preventDefault();
                player2Shoot();
                break;
            case 39:
                evento.preventDefault();
                player2Shoot();
                break;
            case 96:
                evento.preventDefault();
                player2Shoot();
                break;
            case 110:
                evento.preventDefault();
                player2Shoot();
                break;
            case 13:
                evento.preventDefault();
                player2Shoot();
                break;
            case 99:
                evento.preventDefault();
                player2Shoot();
                break;
            case 98:
                evento.preventDefault();
                player2Shoot();
                break;
            case 97:
                evento.preventDefault();
                player2Shoot();
                break;
            case 100:
                evento.preventDefault();
                player2Shoot();
                break;
            case 101:
                evento.preventDefault();
                player2Shoot();
                break;
            case 102:
                evento.preventDefault();
                player2Shoot();
                break;
            case 107:
                evento.preventDefault();
                player2Shoot();
                break;
            case 105:
                evento.preventDefault();
                player2Shoot();
                break;
            case 104:
                evento.preventDefault();
                player2Shoot();
                break;
            case 103:
                evento.preventDefault();
                player2Shoot();
                break;
            case 109:
                evento.preventDefault();
                player2Shoot();
                break;
            case 106:
                evento.preventDefault();
                player2Shoot();
                break;
            case 111:
                evento.preventDefault();
                player2Shoot();
                break;
            default:
                break;
        }
    }



function player1Shoot() {
    ladoA.removeEventListener("click", player1Shoot);
    document.removeEventListener("keydown", presionarUno);
    tipoA.src="./3a.svg";
    
    if (listos == true) {
        player1Win();
        }else{
        player1Miss();
    }
};

function player2Shoot() {
    ladoB.removeEventListener("click", player2Shoot);
    document.removeEventListener("keydown", presionarDos);
    tipoB.src="./3b.svg";

    if (listos == true) {
        player2Win();
        }else{
        player2Miss();
    }
};



function player1Win(){
    p1Hit = true;
    console.log("player 1 shoot");
    setTimeout(() => {
        if (p2Hit == true) {
            empate();
        } else{
            console.log("Player UNO se la puso a Player DOS");
            ladoB.removeEventListener("click", player2Shoot);
            
            tipoB.src="./4b.svg";
            (function () {
                azar = Math.random()*2
                if (azar < 1) {
                    audioBang1.play();
                }else{
                    audioBang2.play();
                }
            })();


            (function () {
                azar = Math.random()*3
            
                setTimeout(() => {
                      if (azar < 1) {
                    audioAhhh1.play();
                    }else{
                        if (azar < 2) {
                            audioAhhh2.play();
                        } else {
                            audioAhhh3.play();
                        }
                    }  
                }, 200);
            
                setTimeout(() => {
                azar = Math.random()*7
                if (azar < 1) {
                    audioCuliao1.play();
                }else{
                    if (azar < 2) {
                        // audioCuliao2.play();
                    } else {
                        if (azar < 3) {
                            audioCuliao3.play();  
                        }else{
                            if (azar < 4) {
                                audioCuliao4.play(); 
                            }
                        }
                    }
                } 
            }, 800);
            
            })();
            

            setTimeout(() => {
                document.addEventListener("keydown", presionar);
                mostrar();
                leyenda.innerText="Jugador UNO se la puso a jugador DOS";
                tipoA.src="./winner.svg";
                tipoA.classList.add('winner');

                (function () {
                    azar = Math.random()*3
                    if (azar < 1) {
                        audioUjuu1.play();
                    }else{
                        if (azar < 2) {
                            audioUjuu2.play();
                        } else {
                            audioIupiii.play();
                        }
                    }
                })();

            }, 1000);
        }
    }, 50);
};

function player2Win(){
    p2Hit = true;
    console.log("player 2 shoot");
    setTimeout(() => {
        if (p1Hit == true) {
            empate();
        }
        else{
            console.log("Player DOS se la puso a Player UNO");
            ladoA.removeEventListener("click", player1Shoot);
            tipoA.src="./4a.svg";

         (function () {
                azar = Math.random()*2
                if (azar < 1) {
                    audioBang1.play();
                }else{
                    audioBang2.play();
                }
            })();


            (function () {
                azar = Math.random()*3
            
                setTimeout(() => {
                      if (azar < 1) {
                    audioAhhh1.play();
                    }else{
                        if (azar < 2) {
                            audioAhhh2.play();
                        } else {
                            audioAhhh3.play();
                        }
                    }  
                }, 200);
            
                setTimeout(() => {
                    azar = Math.random()*7
                    if (azar < 1) {
                        audioCuliao1.play();
                    }else{
                        if (azar < 2) {
                            // audioCuliao2.play();
                        } else {
                            if (azar < 3) {
                                audioCuliao3.play();  
                            }else{
                                if (azar < 4) {
                                    audioCuliao4.play(); 
                                }
                            }
                        }
                    } 
                }, 800);
            })();
            

            setTimeout(() => {
                document.addEventListener("keydown", presionar);
                mostrar();
                leyenda.innerText="Jugador DOS se la puso a jugador UNO";
                tipoB.src="./winner.svg";
                tipoB.classList.add('winner');

                (function () {
                    azar = Math.random()*3
                    if (azar < 1) {
                        audioUjuu1.play();
                    }else{
                        if (azar < 2) {
                            audioUjuu2.play();
                        } else {
                            audioIupiii.play();
                        }
                    }
                })();
            }, 1000);
        }
    }, 50);
};



function player1Miss(){
    (function () {
        azar = Math.random()*3
        if (azar < 1) {
            audioPium1.play();
        }else{
            if (azar < 2) {
                audioPium2.play();
            } else {
                audioPium3.play();
            }
        }
    })();
    ladoA.removeEventListener("click", player1Shoot);
    console.log("player 1 miss");
    p1Miss = true;
    if (p2Miss == true) {
        empate();
            }
};

function player2Miss(){
    (function () {
        azar = Math.random()*3
        if (azar < 1) {
            audioPium1.play();
        }else{
            if (azar < 2) {
                audioPium2.play();
            } else {
                audioPium3.play();
            }
        }
    })();
    ladoB.removeEventListener("click", player2Shoot);
    console.log("player 2 miss");
    p2Miss = true;
    if (p1Miss == true) {
        empate();
            }
};


function empate() {
    
    listos = false;
    document.addEventListener("keydown", presionar);

    if (p1Hit == true && p2Hit == true) {
        setTimeout(() => {
            console.log("Ambos murieron hoy")
            mostrar();
            leyenda.innerText="Ambos han muerto";
        }, 1000);
        tipoA.src="./4a.svg";
        tipoB.src="./4b.svg";


        (function () {
            setTimeout(() => {
                audioBang1.play();
            }, 100);
            audioBang2.play();
        })();


        (function () {
            azar = Math.random()*3
        
            setTimeout(() => {
                  if (azar < 1) {
                audioAhhh1.play();
                }else{
                    if (azar < 2) {
                        audioAhhh2.play();
                    } else {
                        audioAhhh3.play();
                    }
                }  
            }, 250);
        
            setTimeout(() => {
            azar = Math.random()*3
            if (azar < 1) {
                audioCuliao1.play();
            }else{
                if (azar < 2) {
                        audioCuliao3.play();  
                }else{
                        audioCuliao4.play(); 
                }
                }
            }, 500);
        
        })();
        



    }else{
        setTimeout(() => {
            console.log("Nadie murio hoy");
            mostrar();
            leyenda.innerText="Nadie ha muerto";
            tipoA.src="./1a.svg";
            tipoB.src="./1b.svg";

            clearTimeout(timer); 

            (function () {
                setTimeout(() => {
                    audioFiuuu3.play();
                }, 400);
                audioAwww3.play();
            })();

        }, 1000);

    }

 
};




var teclas = {
    SPACE : 32,
};

function presionar(evento){
    switch (evento.keyCode) {
        case teclas.SPACE:
            document.removeEventListener("keydown", presionar);
            jugar();
            evento.preventDefault();
            break;
        default:
            break;
    }
}




