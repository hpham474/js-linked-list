import LinkedList from "./LinkedList.mjs";

const list = new LinkedList();
const node1 = "one";
const node2 = "two";
const node3 = "three";
const node4 = "four";

list.append(node1);
list.append(node2);
list.append(node3);
list.prepend(node4);

console.log(list.toString());
console.log(list.contains("four"));
console.log(list.contains("two"));
console.log(list.contains("three"));
console.log(list.contains("five"));