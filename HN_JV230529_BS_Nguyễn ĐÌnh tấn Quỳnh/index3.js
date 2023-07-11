// Bài 3 : Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó[30 điểm]
// ● Đầu vào : nhập tháng 8 năm 2023
// ● Đầu ra : số ngày trong tháng đó là 31

// Cách 1 : Dùng hàm
let SearchDaysInMonth = function(month,year) {
    return new Date(year, month, 0).getDate();
   };
   
   console.log('Số ngày trong tháng là', SearchDaysInMonth(5, 2023));


// Cách 2 : dùng vòng lặp

let months = +prompt('Nhập tháng bạn muốn kiểm tra:');
var input = +prompt("Mời bạn nhập năm: ");
switch (months) {
    case 1 :
        document.write('Tháng ' + months +' có 31 ngày' )
        break
    case 2 :
        var leapYear = function(year){
        if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
            document.write('Tháng ' + months +' có 29 ngày' )
        } else{
            document.write('Tháng ' + months +' có 28 ngày' )
        }
        };
        leapYear(input);
        break
    case 3 :
        document.write('Tháng ' + months +' có 31 ngày' )
        break
    case 4 :
        document.write('Tháng ' + months +' có 30 ngày' )
        break
    case 5 :
        document.write('Tháng ' + months +' có 31 ngày' )
        break
    case 6 :
        document.write('Tháng ' + months +' có 30 ngày' )
        break
    case 7 :
        document.write('Tháng ' + months +' có 31 ngày' )
        break
    case 8 :
        document.write('Tháng ' + months +' có 31 ngày' )
        break
    case 9 :
        document.write('Tháng ' + months +' có 30 ngày' )
        break
    case 10 :
        document.write('Tháng ' + months +' có 31 ngày' )
        break
    case 11 :
        document.write('Tháng ' + months +' có 30 ngày' )
        break
    case 12 :
        document.write('Tháng ' + months +' có 31 ngày' )
        break
    default :
        document.write('tháng bạn nhập không đúng, mời bạn nhập lại' )
        break
} 