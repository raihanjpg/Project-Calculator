// soal 1
// buatlah variable input1 bernilai 1 dan input2 bernilai 2
// buatlah sebuah pengkondisian jika nilai input1 lebih besar dari input2 
// maka console.log("input 1 lebih besar dari input 2") 
// jika tidak maka console.log("input 2 lebih besar dari input 1")


let input1 = 1;
let input2 = 2;

if (input1 > input2 ) {
    console.log("input 1 lebih besar dari input 2");
} else {
    console.log("input 2 lebih besar dari input 1");
};
// ==============

// soal 2
// buatlah sebuah function dan berikan 2 parameter bernama input1 dan input2 dengan tipe data Number
// lalu buatlah sebuah pengkondisian jika input1 lebih besar dari input2
// maka console.log("input 1 lebih besar dari input 2")
// jika tidak maka console.log("input 2 lebih besar dari input 1")


function perbandingan (input1, input2){
    if (input1 > input2){
        console.log("input 1 lebih bsar dari input 2");
    }else{
        console.log("input 2 lebih besar dari input 1");
    }
}
    
perbandingan(17, 5);
perbandingan(5, 17);



// ===========


// soal 3
// buatlah sebuah function dan berikan 1 parameter input
// di dalam function berikan sebuah kondisi untuk mengecek type data

// jika parameter input itu, type datanya string maka 
// outputnya adalah: parameter input = {input} adalah sebuah string

// jika tidak tampilkan type data parameter tersebut, maka
// outputnya adalah: parameter input = {input} bukan string tetapi {tipe data input}


function typeData(input){
    console.log(typeof input)
    if (typeof input === "string") {
        let output  = " parameter input =" + input + "adalah sebuah string"
        console.log(output)
    } else{
        let output2 = "parameter input" + input + "bukan string tetapi" + input 
        console.log(output2)
    }
}

typeData(111111111)
typeData


