//1. Buatkan Algoritma untuk menentukan tahun yang di input merupakan tahun kabisat atau bukan
/**
    1. Deklarasikan tahun yang akan diperiksa
    2. Jika tahun dapat dibagi habis oleh 4, lanjutkan ke langkah 4. Jika tidak, lanjutkan ke langkah 6.
    3. Jika tahun dapat dibagi habis oleh 100, lanjutkan ke langkah 5. Jika tidak, lanjutkan ke langkah 7.
    4. Jika tahun dapat dibagi habis oleh 400, lanjutkan ke langkah 6. Jika tidak, lanjutkan ke langkah 7.
    5. Tampilkan "Tahun adalah tahun kabisat."
    6. Tampilkan "Tahun bukan tahun kabisat."
    7. Selesai.
 */
//2.
function hapusSimbol(kalimat) {
    let output = '';
    let simbol = '!+@#$%^&*()=-~ ';
    
    for (let i = 0; i < kalimat.length; i++) {
        let isSymbol = false;

        for (let j = 0; j < simbol.length; j++) {
            if (kalimat[i] === simbol[j]) {
                isSymbol = true;
            }
        }

        if (!isSymbol) {
            output += kalimat[i];
        }
    }

    return output;
}
// TEST CASE
console.log(hapusSimbol("test%$4aa")); // test4aa
console.log(hapusSimbol("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbol("ma@#k!an~")); // makan
console.log(hapusSimbol("coding")); // coding
console.log(hapusSimbol("1+3-5*2=100")); // 1352100

//3.
function MajoritySweeper(arr) {
   var frekuen = {};
    var max = 0;

    // Count the frequency of each element
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (frekuen[num] === undefined) {
            frekuen[num] = 1;
        } else {
            frekuen[num]++;
        }
        if (frekuen[num] > max) {
            max = frekuen[num];
        }
    }

    var result = [];
    // Filter out elements with frequency equal to maxFrequency
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (frekuen[num] !== max) {
            result.push(num);
        }
    }
    return result;
}
console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])); // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])); // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])); // [ 1, 1, 1, 2, 2 ]
