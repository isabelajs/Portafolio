export { default as Header } from "./Header";
export { default as Menu } from "./Menu";
export { default as Footer } from "./Footer";
export { default as Layout } from "./Layout";
export { default as Loader } from "./Loader";
export { default as Social } from "./Social";
export { default as Side } from "./Side";
export { default as Email } from "./Email";
export { default as Hero } from "./sections/Hero";
export { default as About } from "./sections/About";
export { default as Jobs } from "./sections/Jobs";
export { default as Projects } from "./sections/Projects";
export { default as Contact } from "./sections/Contact";



const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) =>{ 
  previousValue + currentValue;

  console.log('prev',previousValue,'curr', currentValue)

}

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15