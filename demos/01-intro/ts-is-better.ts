let x: number = 100;

let title: string = "TypeScript is better than JavaScript";

let isAdult: boolean = true;
// x = "hello";

let y = 20; // type inference
y = 5;

let isNew = true;

function calcArea(length: number, breadth: number): number {
  let area: number = length * breadth;
  return area;
}

let area: number = calcArea(4, 5);
console.log(area);

area = calcArea(10, 11)

area = calcArea(1,2);
