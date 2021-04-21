// Juego ROL sencillo

function Jugador(nombre) {
    this.nombre = nombre;
    this.hp = 100;
    this.mana = 100;

    this.curar = function (jugadorObjetivo) {
        if (jugadorObjetivo.hp > 0){

            if (jugadorObjetivo.hp < 100) {
                    if (this.mana >= 40) {
                        this.mana -= 40;
                        jugadorObjetivo.hp += 20;
                    } else {
                        console.info(this.nombre + " no tiene maná");
                    }
            } else {
                console.info(jugadorObjetivo.nombre + " tiene la vida completa");

            }
        }else{
            console.info(jugadorObjetivo.nombre + " está muerto. Usa resurección.");
        }    

        this.estado(jugadorObjetivo);
    }

    this.atacar = function (jugadorObjetivo) {
        if (jugadorObjetivo.hp > 40) {
            jugadorObjetivo.hp -= 40;
        } else {
            jugadorObjetivo.hp = 0;
            console.error(jugadorObjetivo.nombre + " ha muerto");
        }
        this.estado(jugadorObjetivo);

    }

    this.res = function (jugadorObjetivo) {
        if (jugadorObjetivo.hp == 0) {
            jugadorObjetivo.hp += 60;

        } else {
            console.info(jugadorObjetivo.nombre + " no está muerto. No se puede resucitar.");
        }
        this.estado(jugadorObjetivo);
    }

    this.estado = function (jugadorObjetivo) {
        console.info(this);
        console.info(jugadorObjetivo);
    }

}

var shasiara = new Jugador("Shasiara");
var firill = new Jugador("Firill");
var enemyNPC = new Jugador("Enemy");

console.log(shasiara);
console.log(firill);
console.log(enemyNPC);


