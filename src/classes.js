class Doggo {
    constructor(name) {
        this.name = name
    }
    borkBork(){
        return this.name + ": bork BORK bork BORK."
    }
    ohWait(){
        return this.name + "Oh, wait it's just mom" 
    }
}
class Corgi extends Doggo {
    constructor(name){
        super(name)
    }
    spoot(){
        return this.ohWait() + '*sploot*'
    }
}
class Aussie extends Doggo {
    constructor(name){
        super(name)
    }
    zoomies(){
        return this.borkBork() + '*runs around the house and breaks the piano*'
    }
    // set dogName(){
    // return this.name
    // }
}
let scully = new Corgi("Scully")
let maddie = new Aussie("Maddie")

//maddie.newName = "addie"
console.log(maddie.zoomies())

