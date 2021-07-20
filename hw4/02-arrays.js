let result = [];

const insertItem = (item) => {
  // insert item into result

  return item;
};

const deleteItem = (item) => {
  // remove the first occurrence of item in result

  return item;
};

const lookupItem = (index) => {
  // return the item from result at index, deleting the obtained item

  return index;
};

const printItems = () => {
  // return a string of the concatenated item in result, separated by commas
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);
console.log(printItems());
// expected: '1, 2, 3, 2, 1'
console.log(lookupItem(1));
// expected: 2
console.log(printItems());
// expected: '1, 3, 2, 1'

deleteItem(1);
console.log(printItems());
// expected: '3, 2, 1'
console.log(lookupItem(2));
// expected: 1
console.log(printItems());
// expected: '3, 2'

deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
