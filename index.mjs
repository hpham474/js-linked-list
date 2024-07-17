import LinkedList from "./LinkedList.mjs";
import Node from "./Node.mjs";

const list = new LinkedList();
const node1 = new Node();
const node2 = new Node();
const node3 = new Node();
node1.value = "one";
node2.value = "two";
node3.value = "three";

list.append(node1);
list.append(node2);
list.append(node3);

console.log(list);