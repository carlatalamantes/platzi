const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("This is true!");
    } else {
      reject("Something went wrong");
    }
  });
};

somethingWillHappen()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("This is true!");
      }, 3000);
    } else {
      const error = new Error("Wrong!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//Ejecutar promises al mismo tiempo
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
