// Array

// Q1

// let n = +prompt("Enter a number: ");
// let a = [];
// for (let i =0; i<=n; i++){
//   if(i%2!==0){
//     a[a.length] = i;
//   }
// }
// console.log(a);


// Q2

// let n = +prompt("Enter a number: ");
// let a = [];
// for (let i =0; i<=n; i++){
//   let b = 2**i;
//   a[a.length] = b;
// }
// console.log(a);


// Q3

// let A = 2;
// let D = 10;
// let n = 6;
// let a = [];

// for(let i=A; i<=n*D; i+=D){
//   a[a.length] = i;
// }
// console.log(a);


// Q4

// let A = 2;
// let D = 3;
// let n = 7;
// let c = A;
// let a = [];

// for(let i=0; i<n; i++){
//   a[a.length] = c;
//   c = A *= D;

// }
// console.log(a);


// Q5

// let a = 0;
// let k1 = 0;
// let k2 = 1;
// let n = 10;
// let FibonachiArray =[]

// for (let i=0; i<n; i++){
//   FibonachiArray[FibonachiArray.length] = k1;
//   a=k1+k2;
//   k1=k2;
//   k2=a;
// }
// console.log(FibonachiArray);


// Q6

// let a = 2;
// let b = 3;
// let c = a;
// let n = 10;
// let newArray = [];
// for(let i = 0; i<n; i++){
 
//   c=c+b;
//   newArray[newArray.length] = a;
//   a=b;
//   b=c;
// }
// console.log(newArray);


// Q7

// let newArray = [11,34,23,56,76,23,12,2];
// let reversedArray = [];
// for (let i = newArray.length-1; i >= 0; i--) {
//   reversedArray[reversedArray.length]=newArray[i];
// }
// console.log(reversedArray);


// Q8

// let newArray = [4,5,7,8,6,9];
// let oddNums = [];
// let a;

// for (let i=0; i<newArray.length; i++){
//   if(newArray[i]%2!==0){
//     a = newArray[i];
//    oddNums[oddNums.length]=a;
//   }
// }
// oddNums = oddNums.sort(function (a, b) {  return a - b;  });
// console.log(oddNums);
// console.log(`To'q raqamlar soni: ${oddNums.length}`);


// Q9

// let newArray = [4,5,7,8,6,9];
// let evenNums = [];
// let a;

// for (let i=0; i<newArray.length; i++){
//   if(newArray[i]%2==0){
//     a = newArray[i];
//    evenNums[evenNums.length]=a;
//   }
// }
// evenNums = evenNums.sort(function (a, b) {  return b - a;  });
// console.log(evenNums);
// console.log(`Juft raqamlar soni: ${evenNums.length}`);


// Q10

// let newArray = [4,5,7,8,6,9];
// let evenNums = [];
// let oddNums = [];
// let a;

// for (let i=0; i<newArray.length; i++){
//   if(newArray[i]%2!==0){
//     a = newArray[i];
//    oddNums[oddNums.length]=a;
//   }
// }

// for (let i=0; i<newArray.length; i++){
//   if(newArray[i]%2==0){
//     a = newArray[i];
//    evenNums[evenNums.length]=a;
//   }
// }

// console.log(evenNums + " Even numbers");
// console.log(oddNums + " Odd numbers");


// Q18

// let newArray = [18,13,5,7,20,32,3,12,10];
// let end = newArray[newArray.length-1];
// let flag = true;
// for (let i=0; i<newArray.length; i++){
//   if(end>newArray[i]){
//     console.log(newArray[i]);
//     flag= false;
//     break;
//   }
// }
// if (flag == true){
//   console.log("0");
// }


// Q19

// let newArray = [18,13,5,7,40,32,5,12,10];
// let end = newArray[newArray.length-1];
// let start = newArray[0];
// let flag = true;

// for (let i = newArray.length-1; i >= 0; i--){
//     if(end<newArray[i] && start < newArray[i]){
//     console.log(newArray[i]);
//     flag= false;
//     break;
//   }
// }
// if (flag == true){
//   console.log("0");
// }


// Q20

// let newArray = [18,13,5,7,5,12,10];
// let K = 2;
// let L = 5;
// let sum = 0;
// for ( let i = K; i<=L; i++){
//   sum += newArray[i];
// }
// console.log(`Sum of numbers between indexes K and L is equal ${sum}`);


// Q21

// let newArray = [18,13,5,7,5,12,10];
// let K = 2;
// let L = 5;
// let sum = 0;
// let avarage;
// for ( let i = K; i<=L; i++){
//   sum += newArray[i];
//   avarage= sum / (L-K);
// }
// console.log(`Avarege of numbers between indexes K and L is equal ${avarage}`);


// Q22

// let newArray = [18,13,5,7,5,12,10];
// let K = 2;
// let L = 5;
// let sum = 0;
// let allSum = 0;
// let avarage;
// for ( let i = K; i<=L; i++){
//   sum += newArray[i];
// }
// for(let i=0; i<newArray.length; i++){
//   allSum += newArray[i];
// }
// let c = allSum-sum;
// console.log(c);


// Q23

// let newArray = [18,13,5,7,5,12,10];
// let K = 2;
// let L = 5;
// let sum = 0;
// let allSum = 0;
// let mainAvarage;
// let list;
// for ( let i = K; i<=L; i++){
//   sum += newArray[i];
// }
// for(let i=0; i<newArray.length; i++){
//   allSum += newArray[i];
//   list= newArray.length - (L-K);
// }
// let c = (allSum-sum)/list;
// console.log("Avarage is equal to "+ c);