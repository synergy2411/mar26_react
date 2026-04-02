// Extension of JavaScript with Types
// Code completion
// Great Developer Experience
// Better readability
// Build tool integration

// JavaScript Types
// - Primitive : number, string, boolean
// - Reference : Array, Object, Function, Date

// Various Types in TypeScript
// - any, void, unknown, union, tuple, never, null, undefined
// - Custom types : type, interface, class

let x: number;
x = 99;
console.log(typeof x);

let varStr: string;
varStr = "Hello World";
console.log(typeof varStr);

let varBool: boolean;
varBool = true;
console.log(typeof varBool);

let varAge: string | number; // Union type
varAge = "Twenty Two";
varAge = 22;
console.log(typeof varAge);

// let varStrArray: string[];
let varStrArray: Array<string>;
varStrArray = ["Monica", "Joey", "Ross"];
console.log(typeof varStrArray[0]);

let varTuple: [string, number];
varTuple = ["Monica", 22];
console.log(typeof varTuple[0]);

let varAny: any;
varAny = 99;
varAny = "Hello";
varAny = true;

let varUnknown: unknown;
varUnknown = 22;
varUnknown = "Hello";

if (typeof varUnknown === "string") {
  console.log(varUnknown.toUpperCase());
}

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function throwError(): never {
  throw new Error("Something went wrong;");
}

type MyType = {
  id: number;
  name: string;
  isAdmin: boolean;
};

let userOne: MyType;

userOne = {
  id: 101,
  name: "John",
  isAdmin: true,
};

let demoFn: Function;
demoFn = () => {
  console.log("Demo Function one");
};

let demoFn2: () => void;
demoFn2 = () => {
  return "Hello";
};
const greet = demoFn2();
console.log("Greet : ", greet);

// let varX: string;
// varX = 99;

// console.log("Var X : ", varX);

// Generics
// - placeholder for datatypes <T>
// - code reusability

function addAtBeginning<T>(item: T, arr: T[]): T[] {
  return [item, ...arr];
}

const strArray = addAtBeginning<string>("Ross", ["Joey"]);
console.log(typeof strArray[0]);

const numArray = addAtBeginning<number>(99, [98, 92]);
console.log(typeof numArray[0]);

const myTypeArray: MyType[] = [
  { id: 10, name: "Ross", isAdmin: false },
  { id: 11, name: "Joey", isAdmin: true },
];

const customTypeArray = addAtBeginning<MyType>(userOne, myTypeArray);
console.log(typeof customTypeArray[0]);
