const fs = require("fs");
const path = require("path");

// console.log("Hello World")
// console.log("============================================================================================================")
// ================================= SYNCRONOUS OPERATION ====================================================
// try {
//     const data = fs.readFileSync(path.join("C:", "Users", "surbh", "OneDrive", "Desktop", "100xdevs", "1.5-async-programming", "fileStore.txt"), "utf-8");
//     console.log(data);
// } catch (error) {
//     console.error(error);
// }

// fs.readFile(path.join("C:", "Users", "surbh", "OneDrive", "Desktop", "100xdevs", "1.5-async-programming", "fileStore.txt"), "utf-8", (error, data) => {
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// })

// console.log("Hello World")

// Promises are just syntactical sugar for callbacks, it means under the hood promises are using callback functions under the hood, why though, because it providesbetter readability, let's create a callbatch function from readfile callback function.

// const readFileCallback = (callbackFunction) => {
//     return fs.readFile(path.join("C:", "Users", "surbh", "OneDrive", "Desktop", "100xdevs", "1.5-async-programming", "fileStore.txt"), "utf-8", (error, data) => {
//         if(error){
//             console.log(error)
//         }
//         else{
//            callbackFunction(data)
//         }
//     })
// }

// const loggingFunction = (data) => {
//     const date = new Date()
//     console.log("==============Data Start===================")
//     console.log(`${data}`)
//     console.log("==============Data end===================")
//     console.log("======================================")
//     console.log(`TIME = ${date}`)
//     console.log("======================================")
// }

// readFileCallback(loggingFunction);

// Now let's convert it to message

const readFilePromise = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(
        "C:",
        "Users",
        "surbh",
        "OneDrive",
        "Desktop",
        "100xdevs",
        "1.5-async-programming",
        "fileStore.txt"
      ),
      "utf-8",
      (error, data) => {
        if (data) {
          resolve(data);
        } else {
          reject(error);
        }
      }
    );
  });
};

const successLogger = () => {
  console.log("============================");
  console.log("PROMISE FULFILLED");
  console.log("============================");
};
const errorLogger = () => {
  console.log("============================");
  console.log("PROMISE REJECTED");
  console.log("============================");
};
const loggingFunction = (data, callback) => {
  const date = new Date();
  console.log("==============Data Start===================");
  console.log(`${data}`);
  console.log("==============Data end===================");
  console.log("======================================");
  console.log(`TIME = ${date}`);
  console.log("======================================");
  callback();
};

const data = readFilePromise();

data
  .then((data) => loggingFunction(data, successLogger))
  .catch((error) => loggingFunction(error, errorLogger));
