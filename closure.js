console.log("JavaScript is working");
let arr = [];
    for( let i=1; i<=1000;i++){
        arr.push(i);
    }
    console.log(arr);

    // here please start your solution
    // using closures, functions and (map,filter,reduce)
    const divisibleFactoryX = arr.map(function(x){
      return x * 2;
    });

    const divisibleFactoryY = arr.filter(function(y){
      return y % 2;
    });

    const divisibleFactoryZ = arr.filter(function(z,y){
      return z + y
    });

    console.log(divisibleFactoryX);
    console.log(divisibleFactoryY);
    console.log(divisibleFactoryZ);

//The old function i used and it returned Array and the numbers
// let arr2 = [];
//     for( let i=1; i<=30;i++){
//         arr2.push(i);
//   // console.log(divisibleFactory(arr2[i]));
//     }
//     const newArr = [];
//     for(i=0; i<arr2.length; i++) {
//       newArr.push(divisibleFactory(arr2[i]));
//     }
//       console.log(newArr);
