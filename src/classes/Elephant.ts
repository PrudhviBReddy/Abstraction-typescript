import Animal from "./Animal";

class Elephant extends Animal{
    
    noOfEyes: Number=2;
    noOfLegs: Number=4;
    sound: string="Trumpet";
    diet: string="Herbivore";
    habitat: string="Savannah";

    move(action:string) {
        switch(action){
            case "walk":
            console.log(`${this.name} is walking on its four legs`)
            break;
            case "run":
            console.log(`${this.name} is running at a speed of 15 km/h`)
            break;
            case "swim":
            console.log(`${this.name} is swimming in the river`)
            break;
            default:
            console.log(`${this.name} is standing still`)
        }
        // console.log(`${this.name} is Walking on its four legs`)
        
    }
    eatingHabits(): void {
        console.log(`${this.name}    is a pure-vegetarion`)
    }
    constructor(name:string){
        super(name);
        console.log(`Inside ${this.name}  Constructor`)
    }
}
export default Elephant;