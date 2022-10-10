const Ninja =  require("./Ninja");

class Sensei extends Ninja  {

    constructor(nombre, salud, velocidad, fuerza) {
        

        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = 10;
        this. salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }

    speakWisdom() {
        return  "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
    }
    

    showStats(){
        let msnfromNinjas = super.showStats();
        return msnfromNinjas
    }

    

}

const superSensei = new Sensei( "Master Splinter", "Salud")
console.log(superSensei)
console.log(superSensei.drinkSake());
console.log(superSensei.speakWisdom());
console.log(superSensei.showStats());

