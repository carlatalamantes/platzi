const doSomething = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Resolved");
        }, 5000)
      : reject(new Error("Error!!"));
  });
};

const doSomething2 = async () => {
  try {
    const something = await doSomething();
    console.log(something);
  } catch (error) {
    console.log("Error!", error);
  }
};

console.log("1");
doSomething2();
console.log("2");
