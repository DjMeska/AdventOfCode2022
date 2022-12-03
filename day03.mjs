import { readFileSync } from "node:fs";

const elves = readFileSync("day03.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n\n");

function part1() {
  let sum = 0;
  const rucksacks = elves.map((rucksack) => {
    const lines = rucksack.split("\n").map(String);
    lines.forEach(([...line]) => {
      const middleIndex = Math.ceil(line.length / 2);
      const firstHalf = line.splice(0, middleIndex);   
      const secondHalf = line.splice(-middleIndex);

      const dupes = firstHalf.filter(letter => secondHalf.includes(letter))[0]
      let price = dupes.charCodeAt(0) - 96
      if(price < 0){
        price = price + 58
      }
      sum += price;
    });
  })
  console.log("Part1",sum);
}

function part2() {
  let sum = 0;
  const rucksacks = elves.map((rucksack) => {
    const lines = rucksack.split("\n").map(String);
    const groups = []
    let currentGroup = []
    lines.forEach(r=>{
      currentGroup.push(r.split(''))
      if(currentGroup.length==3){
        groups.push(currentGroup)
        currentGroup = []
      }
    });
 
    groups.forEach((group, index) => {
      const dupes = group[0].filter(letter => group[1].includes(letter) && group[2].includes(letter))[0]
      let price = dupes.charCodeAt(0) - 96
      if(price < 0){
        price = price + 58
      }
      sum += price;
    })
  })
  console.log("Part2",sum);
}
part1();
part2();
