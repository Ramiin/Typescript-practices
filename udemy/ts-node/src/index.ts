// import { Hero as SuperHero } from './classes/Hero';
import * as HeroClasses from './classes/Hero'
import powers, { Power } from './data/powers'

// const ironman = new SuperHero('Tony Stark', 1, 55)
const ironman = new HeroClasses.Hero('Tony Stark', 1, 55)

console.log(ironman)

console.log(powers)




