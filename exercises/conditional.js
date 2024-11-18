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