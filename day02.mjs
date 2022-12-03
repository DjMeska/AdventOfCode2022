import { readFileSync } from "node:fs";

const symbols = readFileSync("day02.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n\n");


  //A rock X
  //B paper Y
  //C scissors Z
function part1() {
    let sum = 0;
    const calories = symbols.map((symbolLine) => {
        const letterComboArray = symbolLine.split("\n").map(String);
        letterComboArray.forEach(letterCombo => {
            const twoLetters = letterCombo.split(" ");
            //Draw
            if( (twoLetters[0] === 'A' && twoLetters[1] === 'X') ||
                (twoLetters[0] === 'B' && twoLetters[1] === 'Y') ||
                (twoLetters[0] === 'C' && twoLetters[1] === 'Z')) 
                {
                    console.log("Draw");
                    sum += 3;
                }
            //I lose
            if( (twoLetters[0] === 'B' && twoLetters[1] === 'X') ||
                (twoLetters[0] === 'C' && twoLetters[1] === 'Y') ||
                (twoLetters[0] === 'A' && twoLetters[1] === 'Z')) 
                {
                    console.log("I lost");
                    sum += 0;
                }
            //I win
            if( (twoLetters[0] === 'C' && twoLetters[1] === 'X') ||
                (twoLetters[0] === 'A' && twoLetters[1] === 'Y') ||
                (twoLetters[0] === 'B' && twoLetters[1] === 'Z')) 
                {
                    console.log("I won");
                    sum += 6;
                }

            if(twoLetters[1] === 'X') {
                sum += 1;
            }
            if(twoLetters[1] === 'Y') {
                sum += 2;
            }
            if(twoLetters[1] === 'Z') {
                sum += 3;
            }
            })
           
    });
    console.log(sum);
}

//A rock X
  //B paper Y
  //C scissors Z
function part2() {
    let sum = 0;
    const calories = symbols.map((symbolLine) => {
        const letterComboArray = symbolLine.split("\n").map(String);
        letterComboArray.forEach(letterCombo => {
            const twoLetters = letterCombo.split(" ");
            let isChanged = true
            if(twoLetters[1] === 'X' && isChanged)
            {
                if(twoLetters[0] === 'A')
                {
                    twoLetters[1] = 'Z'
                    isChanged = false;
                }
                else if(twoLetters[0] === 'B')
                {
                    twoLetters[1] = 'X';
                    isChanged = false;
                }
                else
                {
                    twoLetters[1] = 'Y';
                    isChanged = false;
                }
            }
            else if(twoLetters[1] === 'Y' && isChanged)
            {
                if(twoLetters[0] === 'A')
                {
                    twoLetters[1] = 'X'
                    isChanged = false;
                }
                else if(twoLetters[0] === 'B')
                {
                    twoLetters[1] = 'Y';
                    isChanged = false;
                }
                else
                {
                    twoLetters[1] = 'Z';
                    isChanged = false;
                }
            }
            else if(twoLetters[1] === 'Z' && isChanged)
            {
                if(twoLetters[0] === 'A')
                {
                    twoLetters[1] = 'Y'
                    isChanged = false;
                }
                else if(twoLetters[0] === 'B')
                {
                    twoLetters[1] = 'Z';
                    isChanged = false;
                }
                else
                {
                    twoLetters[1] = 'X';
                    isChanged = false;
                }
            }

            //Paimk ir pakeisk twoLetters[1] i tinkama simboli kad galetum laimet prapist arba lygiosios

            // akmuo > zirkles
            // zirkles > popierius
            // popierius > rock



            //Draw
            if( (twoLetters[0] === 'A' && twoLetters[1] === 'X') ||
                (twoLetters[0] === 'B' && twoLetters[1] === 'Y') ||
                (twoLetters[0] === 'C' && twoLetters[1] === 'Z')) 
                {
                    console.log("Draw");
                    sum += 3;
                }
            //I lose
            if( (twoLetters[0] === 'B' && twoLetters[1] === 'X') ||
                (twoLetters[0] === 'C' && twoLetters[1] === 'Y') ||
                (twoLetters[0] === 'A' && twoLetters[1] === 'Z')) 
                {
                    console.log("I lost");
                    sum += 0;
                }
            //I win
            if( (twoLetters[0] === 'C' && twoLetters[1] === 'X') ||
                (twoLetters[0] === 'A' && twoLetters[1] === 'Y') ||
                (twoLetters[0] === 'B' && twoLetters[1] === 'Z')) 
                {
                    console.log("I won");
                    sum += 6;
                }

            if(twoLetters[1] === 'X') {
                sum += 1;
            }
            if(twoLetters[1] === 'Y') {
                sum += 2;
            }
            if(twoLetters[1] === 'Z') {
                sum += 3;
            }
        })
           
    });
    console.log(sum);

}

part1();
part2();
