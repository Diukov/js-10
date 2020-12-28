// метод forEach

const testArr = [1, 2, 3, 4, 'abc'];

const forEachFunction = (array, cb) => {
  for (i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) cb(array[i]);
  }
};

forEachFunction(testArr, (data) => console.log(data * 2));

// метод some

const someFunction = (array, cb) => {
  let counter = 0;
  if (array.length === 0) return false;
  else {
    for (i = 0; i < array.length; i++) {
      if (cb(array[i])) counter++;
    }
    if (counter > 0) return true;
    else return false;
  } 
};

const someResult = someFunction(testArr, (data) => data % 2 === 0);

// метод every

const everyFunction = (array, cb) => {
  let counter = 0;
  for (i = 0; i < array.length; i++) {
    if (cb(array[i])) counter++;
  }
  if (counter === array.length || array.length === 0) return true;
  else return false;
};

const everyResult = everyFunction(testArr, (data) => data % 1 === 0);