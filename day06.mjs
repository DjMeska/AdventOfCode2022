import { readFileSync } from "node:fs";

const lines = readFileSync("day06.txt", { encoding: "utf-8" })
.replace(/\r/g, "")
.trimEnd();

  function part1() {
    let sum = 0;
    [...lines].forEach((character, i) => {
        const [a, b, c, d] = [...lines].slice(i, (i+1) * 4)
        const set = new Set([a, b, c, d]).size !== [a, b, c, d].length
        if (!set && sum === 0)
        sum = i + 4
    })
    console.log(sum)
  }
  

function part2() {
    let sum = 0;
    [...lines].forEach((character, index) => {
        const [a, b, c, d, e, f ,g, h, i, j, k, m, n, o] = [...lines].slice(index, (index+1) * 14)
        const set = new Set([a, b, c, d, e, f ,g, h, i, j, k, m, n, o]).size !== [a, b, c, d, e, f ,g, h, i, j, k, m, n, o].length
        if (!set && sum === 0)
        sum = index + 14
    })
    console.log(sum)
}
part1();
part2();
