class Voto {

    aFavor = 0;
    enContra = 0;
    Abstencion = 0;

    constructor() {

    }

    ContarVotosAFavor() {

        this.aFavor++
            console.log(this.aFavor);


    }
    ContarVotosEnContra() {

        this.enContra++

    }
    ContarVotosAbstencion() {

        this.Abstencion++

    }

    FinalizarVotos() {
        let print = "";
        if (this.aFavor > this.enContra) {
            print = `La mocion se acepta con: ${this.aFavor} votos a favor ${this.enContra} votos en contra y ${this.Abstencion} en abstencion`

        } else {
            print = `La mocion se rechaza con: ${this.aFavor} votos a favor ${this.enContra} votos en contra y ${this.Abstencion} votos en abstencion`
        }
    }





}