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

/*
CRUD - Create(POST-request) Read(GET-request) Update(PUT/PATCH-request) Delete(DELETE-request)
*/

const API = "http://localhost:8000/todos";

// ! Create
//? получаем нужные для добавления элементы
let inpAdd = document.getElementById("inp-add");
let btnAdd = document.getElementById("btn-add");
// console.log(inpAdd, btnAdd);

//? navesili sobytie na knopku "sohranit"
btnAdd.addEventListener("click", function () {
  // ? sobiraem ob'ekt dlya dobavleniya v db.json
  let newTodo = {
    todo: inpAdd.value,
  };
  // console.log(newTodo);

  // ? proverka na zapolnennost inputa i ostanavlivaem kod s pomosh'yu return, chtoby post zapros ne vupolnyalsya
  if (newTodo.todo.trim() === ""){
    alert ("zapolnite polya!");
    return;
    }
  await fetch(API, {
    method: "POST",
    body: JSON.stringify(newTodo), //? ukazyvaem chto imenno nujno zapostit
    headers: {
      "Content-type": "application/json; charset = utf-8",
    }, //? kodirovka
  });
  //? ochishaem input posle dobavleniya 
  inpAdd.value = "";
  // ? chtob dobavlennyi task srazu otabrazilsya v liste vyzyvaem funciyu, kotoraya vypolnyaet otobrajaenie
  getTodos();
});

// ! Read
// ? poluchaem elemt, chtoby v nem otobrazit vse taski 
let list = document.getElementById("list");
// ? proveryaem v konsoli, chtob ubeditsya, chto v peremennoi
//? list seichas NE pusto
console.log(list);
// ? funkciya dlya polucheniya vseh taskov i otobrajeniya ih v div#list
// ?assync await nujen zdes', chtob pri otpravke zaprosa my snachala poluchili dannye i tolko potom zapisali vse v peremennuyu response, inache (esli my NE dojdemsya) tuda zapishetsya pending (sostoyanie promisa, kotoryi eshe ne vypolnen)
async function getTodos() {
  let response = await fetch(API) // ? esli ne ukazat metod zaprosa, to po umolchaniyu eto GET zapros
    .then(res => res.json()) //? perevodim vse v json format
    .catch(err => console.log(err)); //? otlovili oshibku 
  console.log(response);
  // ? ochishaem div#list, chtob spisok taskov korrektno otobrajalsya i ne hranil tam predydushie html-elementy so starymi dannymi
  list.innerHTML = "";
  // ? perebiraem poluchennyi iz db.json massiv i dlya kajdogo ob'ekta iz etogo massiva sozdaem div i zadaem emu soderjimoe cherez metod innerHTML, kajdyi sozdannyi element appendim v div#list 
  response.forEach(item => {
    let newElem = document.createElement("div");
    newElem.innerHTML = `<span>${item.todo}</span>`;
    list.append(newElem);
  });
}
// vyzyvaem funkciyu, chtob kak tolko otkroetsya stranica chto-to bylo otobrajeno
getTodos();
