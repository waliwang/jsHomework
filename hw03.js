// 規則：
// 如果是 3 的倍數，換成 'Fizz'
// ( i % 3 == 0 && i % 5 != 0)

// // 如果是 5 的倍數，換成 'Buzz'
// ( i % 5 == 0 && i % 3 != 0)




// // 如果是 3 而且也是 5 的倍數，換成 'FizzBuzz'
// ( i % 3 == 0 && i % 5 == 0)






// var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for (var i = 1; i <= 15; i++){
//     if ( i % 3 == 0 && i % 5 != 0){
//         list [i - 1] = 'Fizz'
//     } 
//     else if ( i % 5 == 0 && i % 3 != 0){
//         list [i - 1] = 'Buzz'
//     } 
//     else  ( i % 3 == 0 && i % 5 == 0){
//         list [i -1] = 'FizzBuzz'
//     }
// }

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


for (var i = 0; i < list.length; i++){
    if( list[i] % 3 == 0 && list[i] % 5 == 0){
        list[i] = 'FizzBuzz'
    }
    else if ( list[i] % 3 == 0) {
        list[i] = 'Fizz'
    } 
    else if ( list[i] % 5 == 0) {
        list[i] = 'Buzz'
    } 
}
console.log(list);
// 印出 [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']