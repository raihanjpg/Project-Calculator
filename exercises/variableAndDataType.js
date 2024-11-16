// soal 1.a
// buatkan nama variable dengan masing2 nama "bebas" 
// dengan masing2 value tipe data: number, string, boolean, array, object, null, undefined
// dan dikasih keterangan di masing2 variable

let hanNumber = 17; // tipe data number
let hanString = "Han"; // tipe data string
let hanBoolean = true; //tipe data boolean
let hanArray = [1, 2, 3]; //tipe data array
let hanObjct = {nama: "han"}; // tipe data object
let hanNull = null; // tipe data null
let hanUndefined = undefined; //tipe data undefined 

console.log("tipe data hanNumber : ", typeof hanNumber); 
console.log("tipe data hanString :", typeof hanString);
console.log("tipe data HanBoolean : ", typeof hanBoolean);
console.log("tipe data hanArray :",typeof hanArray);
console.log("tipe data hanObjct : ", typeof hanObjct);
console.log("tipe data hanNull :", typeof hanNull);
console.log("tipe data hanUndefined : ", typeof hanUndefined);


// soal 1.b 
// berikan contoh cara memanggil value/nilai pada object
// contoh object {age: 17, city: "bekasi"}
// keluarkan/console.log value "bekasi"
// output: bekasi

let han = {
    age: 17,
    city: "bekasi"
};
console.log("output :",han.city);


// ===========================

// soal 1.c
// berikan contoh cara memanggil value/nilai pada array
// contoh array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// keluarkan/console.log nilai 5 pada array tersebut
// output: 5

let rai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
console.log ("output :", 5)// percobaan pertama
console.log("output :",rai [4]);// percobaan kedua


// ======================


