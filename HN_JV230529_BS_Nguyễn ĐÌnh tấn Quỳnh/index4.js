// Bài 4 : Viết một chương sắp xếp các phần tử trong mảng theo thứ tự giảm dần bằng 2 cách: sử
// dụng và không sử dụng hàm sort [30 điểm]
// ● Đầu vào: 1 mảng bất kỳ
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự giảm dần
// ● Ví dụ: Cho arr=[3, 25, 38, 49, 12]; In ra arr=[49,38,25,12,3]


// Cách 1 : Dùng vòng lặp for
let numbersArr1 = [3, 25, 38, 49, 12];
for(i = 0; i <numbersArr1.length; i++) {
    for(j = i; j < numbersArr1.length; j++){
        if(numbersArr1[i] < numbersArr1[j]) {
            let change = numbersArr1[i];
            numbersArr1[i] = numbersArr1[j];
            numbersArr1[j] = change;
        }
    }
}
console.log(numbersArr1)


// Cách 2 : dùng hàm
let numbersArr2 = [3, 25, 38, 49, 12];
numbersArr2.sort(
    function(a, b) {
        return b - a;
    }
);
console.log(numbersArr2)