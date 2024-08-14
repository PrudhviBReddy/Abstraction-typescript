import Animal from "./Animal";

class Lion extends Animal{
    noOfEyes: Number=2;
    noOfLegs: Number=4;
    sound: string="Roar";
    diet: string="Conivore";
    habitat: string="Grassland";
    
    eatingHabits(): void {
        console.log(`${this.name}  is a pure-non vegetarion`)
    }
    constructor(name:string){
        super(name);
        console.log(`Inside ${this.name}  Constructor`)
    }
    move(action:string): void {
        switch(action){
            case "walk":
                console.log(`${this.name} is walking`)
                break;
                case "run":
                    console.log(`${this.name} is running at 50 km/h`)
                    break;
                    case "stalk":
                        console.log(`${this.name} is staking prey`)
                        break;
                        case "pounce":
                            console.log(`${this.name} pounces on prey`)
                            break;
                            default:
                                console.log(`${this.name} is resting`)
                                break;
                               


        }
    }
    

}
export default Lion;