//pending, fulfilled, rejected
//pending - initial state
//fulfilled- resolved successfully
//rejected - unsuccessful

console.log ("-------Promises---------------");

//const delay = (ms) => {
  //  return new Promise((resolve) => {
  //  setTimeout(resolve, ms);
    //});
  //};
  
  //console.log("Start");
  
  //delay(2000)
    //.then(() => {
     // console.log("2 seconds have passed");
    //})
    //.catch((err) => {
     // console.log(err);
    //});
  
  //console.log("End");
  
  //console.log("------Promise Reject--------");
  
  //const delayReject = (ms) => {
    //return new Promise((resolve, reject) => {
      //setTimeout(() => {
        //const random = Math.random();
  
        //if (random < 0.5) {
          //reject("Delay failed! Random number is less than 0.5");
        //} else {
          //resolve();
        //}
      //}, ms);
    //});
  //};
  
  //console.log("Start");
  
  //delayReject(2000)
   // .then(() => {
    //  console.log("2 seconds have passed");
    //})
    //.catch((err) => {
     // console.log("Error: " + err);
    //});
  
 // console.log("End");
  
//API
//Application Programming Interface
//A set of functions and procedures that allow the creation of applications
// which access the features or data of an operating system, application, or other service.


// pending, fulfilled, rejected

// Structure of a promise in JS
// const myPromise = new Promise((resolve, reject) => {})

// console.log("-------- Promises ----------");

// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// };

// console.log("Start");

// delay(2000)
//   .then(() => {
//     console.log("2 seconds have passed");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("End");

// console.log("-------- Promise Reject ----------");

// const delayReject = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const random = Math.random();

//       if (random < 0.5) {
//         reject("Delay failed! Random number is less than 0.5");
//       } else {
//         resolve();
//       }
//     }, ms);
//   });
// };

// console.log("Start");

// delayReject(500)
//   .then(() => {
//     console.log("2 seconds have passed");
//   })
//   .catch((err) => {
//     console.log("Error: " + err);
//   });

// console.log("End");

// API
// Application Programming Interface
// A set of functions and procedures that allow the creation of applications which access the features or data of an operating system, application, or other service.

console.log("-------- Fetch API ----------");
const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://odds.p.rapidapi.com/v4/sports", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8ac3f44a7fmsh8e3ec9dd74ebc78p12eb21jsnb205a1c64819",
        "X-RapidAPI-Host": "odds.p.rapidapi.com",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

fetchData()
  .then((data) => {
    console.log("Fetched Data: ", data);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
