const LinkedList = () => {
  let listHead = null;

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

  const head = () => {
    return listHead ? listHead.value : null;
  };

  const tail = () => {
    currentNode = listHead;
    while (currentNode !== null && currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode ? currentNode : null;
  };

  const at = (index) => {
    currentNode = listHead;
    temp = 0;
    while (currentNode !== null) {
      if (temp < index) {
        currentNode = currentNode.nextNode;
        temp += 1;
        continue;
      }
      return currentNode.value;
    }
    return null;
  };

  const pop = () => {};

  const contains = (value) => {
    currentNode = listHead;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  };

  const find = (value) => {
    currentNode = listHead;
    temp = -1;
    while (currentNode !== null) {
      temp += 1;
      if (currentNode.value === value) {
        return temp;
      }
      currentNode = currentNode.nextNode;
    }
    return null;
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
ll.prepend(28);
console.log(ll.find(28));
console.log(ll.toString());
