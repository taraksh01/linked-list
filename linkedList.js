const LinkedList = () => {
  let listHead = Node(4);
  listHead.nextNode = Node(425);
  listHead.nextNode.nextNode = Node(29);

  const append = (value) => {
    temp = Node(value);
    if (listHead === null) {
      listHead = temp;
      return;
    }
    currentNode = listHead;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = temp;
  };

  const prepend = (value) => {
    temp = Node(value);
    if (listHead === null) {
      listHead = temp;
      return;
    }
    temp.nextNode = listHead;
    listHead = temp;
  };

  const size = () => {
    temp = 0;
    currentNode = listHead;
    while (currentNode !== null) {
      temp += 1;
      currentNode = currentNode.nextNode;
    }
    return temp;
  };

  const head = () => {};

  const tail = () => {};

  const at = (index) => {};

  const pop = () => {
    // remove last element
  };

  const contains = (value) => {
    // return true if value is present
  };

  const find = (value) => {
    // return index of the node
  };

  const toString = () => {
    // return linked list as string
    temp = listHead;
    strList = ``;
    while (temp !== null) {
      strList += `${temp.value} -> `;
      temp = temp.nextNode;
    }
    strList += `null`;
    return strList;
  };

  const insertAt = (value, index) => {};

  const removeAt = (index) => {};

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const Node = (v) => {
  const value = v || null;
  const nextNode = null;

  return { value, nextNode };
};

const ll = LinkedList();

ll.append(5);
console.log(ll.size());
ll.prepend(28);
console.log(ll.toString());
console.log(ll.size());
