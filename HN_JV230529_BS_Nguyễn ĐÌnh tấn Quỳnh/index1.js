// Bài 1: Cho 1 mảng các phần tử in ra phần tử lớn nhất trong mảng [10 điểm]
// ● Đầu vào: 1 mảng
// ● Đầu ra: giá trị lớn nhất của mảng
// ● Ví dụ: [3,5,88,99,76,8,4,5,85,63] in ra 99


// Cách 1
let arrNumber = [3,5,88,99,76,8,4,5,85,63];
let max = arrNumber[0]
for(let i = 0; i < arrNumber.length; i++) {
    if(arrNumber[i] > max) {
        max = arrNumber[i];
    }
}

console.log('giá trị lớn nhất trong mảng là: '+ max )


// Cách 2 dùng hàm
arrNumber.sort(function(a, b) {
    return a - b;
  });
  console.log("giá trị lớn nhất trong mảng là : ",arrNumber[arrNumber.length-1]);




