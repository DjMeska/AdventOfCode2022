import { readFileSync } from "node:fs";

const elves = readFileSync("day04.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n\n");

function part1() {
  let sum = 0;
  elves.map((line) => {
    const parts = line.split('\n');
    parts.forEach((part) => {
      const bit = part.split(',');
      const firstRange = bit[0].split('-');
      const secondRange = bit[1].split('-');
      if((parseInt(firstRange[0]) <= parseInt(secondRange[0]) && parseInt(firstRange[1]) >= parseInt(secondRange[1])) 
      || (parseInt(firstRange[0]) >= parseInt(secondRange[0]) && parseInt(firstRange[1]) <= parseInt(secondRange[1]))) {
        sum += 1;
      }
    });
  });
  console.log("Part1:",sum);
}

function part2() {
  let sum = 0;
  elves.map((line) => {
    let parts = line.split('\n');
    parts.forEach((part) => {
      const bit = part.split(',');
      const firstRange = bit[0].split('-');
      const secondRange = bit[1].split('-');
      if((parseInt(firstRange[0]) >= parseInt(secondRange[0]) && parseInt(firstRange[1]) <= parseInt(secondRange[1])) ||
         (parseInt(firstRange[0]) >= parseInt(secondRange[0]) && parseInt(firstRange[0]) <= parseInt(secondRange[1])) ||
         (parseInt(firstRange[0]) <= parseInt(secondRange[0]) && parseInt(firstRange[1]) >= parseInt(secondRange[1])) ||
         (parseInt(firstRange[0]) <= parseInt(secondRange[0]) && parseInt(firstRange[1]) >= parseInt(secondRange[0]))) {
          sum += 1;
      }
    });
  });
  console.log("Part2:",sum);
}
part1();
part2();
