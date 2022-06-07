// const age = +prompt("enter your age");
// const newPromise = new Promise(function (resolve, reject) {
//   if (age > 18) {
//     resolve({ status: 200, data: "доступ разрешен!" });
//   } else {
//     reject({ status: 404, data: "fatal error!" });
//   }
// });
// newPromise
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log("eto byla proverka"));

// const myPromise = new Promise ((resolve, reject) => {

// })

// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// setInterval(() => {
//   console.log("hello setInterval!");
// }, 1000);

// let counter = 0;
// let func = setInterval(() => {
//   console.log("hello setInverval!");
//   counter++;
//   if (counter > 5) {
//     clearInterval(func);
//   }
// }, 1000);

// const myPromise = new Promise((resolve, reject) => {
//   console.log("preparing data...");
//   setTimeout(() => {
//     let data = {
//       server: "localhost",
//       port: 8000,
//       status: 200,
//     };
//     // let data = null;
//     if (data) {
//       resolve(data);
//     } else {
//       reject("404! data is not found!");
//     }
//   }, 2000);
// });
// // myPromise.then(data => console.log(data)).finally(() => console.log("finish!"));
// async function getData() {
//   await myPromise
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log("finish!"));
//   await myPromise
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log("finish!"));
//   console.log("Hello");
// }
// getData();

// then - lovit uspeshnyi keis
// catch - lovit oshibku
//finally - otrabotaet v lyubom sluchae pri zavershenii
// resolve - callback dlya uspeshnogo keisa - vyzyvaetsya vnutri promisa, prinimaet dannye, kotorye nujno vernut
//reject - callback dlya peredachi oshibki - prinimaet samu oshibku i vozvrashaet ee
// async await - konstruciya, kotoraya pri otpravke zaprosov (v sluchae esli nujno dojdatsya vypolneniya zaprosa i tolko potom chitat dalneishi kod)

/*
Post- dobavlenie dannyh
Put- polnaya zamena dannyh
Patch- chastichnaya zamena dannyh
Delete-udalenie
Get- polucheniye
*/
/*
komanda dlya zapuska JSON-SERVER
json-server -w db.json -p 8000
*/
