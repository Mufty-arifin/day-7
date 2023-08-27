// import { API } from './url';
// function login(username, login) {
//     console.log(`${API.BASE_URL}${API.AUTH.LOGIN}`);
// }
// login("lala", 123)


//SPREAD

// const number = [1, 2, 3];
// const newNumber = [4, 5, 6];

// for (let i = 0; i < newNumber.length; i++) {
//     number.push(newNumber[i])
    
// }
// console.log(number);
// console.log([...number, ...newNumber]);
// console.log(number,newNumber);
// console.log([...number, ...newNumber, 7, 8, 9]);

// REKURSI
function hitung(a, b) {
    if (b == 1) {
        return a
    }else {
        return a * hitung(a, b-1)
    }
}
console.log(hitung(2, 3));
