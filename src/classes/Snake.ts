import Animal from "./Animal";

class Sanke extends Animal{
    noOfEyes: Number=2;
    noOfLegs: Number=0;
    sound: string="Hiss";
    diet: string="Carnivore";
    habitat: string="Desert";
   
    eatingHabits(): void {
        console.log(`${this.name}  is a veg and non vegetarion`)
    }
    move=(action:string)=> {
        switch(action){
            case "slither":
                console.log(`${this.name} is slithering`);
                break;
                case "crawl":
                    console.log(`${this.name} is crawling`);
                    break;
                    case "glide":
                        console.log(`${this.name} is gliding`);
                        break;
                        case "climb":
                            console.log(`${this.name} is climbing`);
                            break;
                            case "swim":
                                console.log(`${this.name} is swimming`);
                                break;
                                case "burrow":
                                    console.log(`${this.name} is burrowing`);
                                    break;
                                    default:
                                        console.log(`${this.name} is resting`);


        }
      }


}

export default Sanke;