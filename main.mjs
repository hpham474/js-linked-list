import LinkedList from "./LinkedList.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.insertAt("dolphin", 3);

console.log(list.toString());

// list.insertAt("whale", 0);

// console.log(list.toString());

// list.insertAt("octopus", 6);

// console.log(list.toString());