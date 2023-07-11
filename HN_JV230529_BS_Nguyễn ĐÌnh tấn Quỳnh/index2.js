// Bài 2 : Viết 1 chương trình chuẩn hóa một câu: loại bỏ các khoảng trắng (space) ở đầu và cuối
// câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác
// trong từ viết thường [30 điểm]
// ● Đầu vào: Câu là một chuỗi các ký tự
// ● Đầu ra: In ra chuỗi đã được chuẩn hóa


function ConverText(textConver) {
    textConver = textConver.trim();
    let textConver1 = textConver.toLowerCase();
    let textConverArr = textConver1.split(' ');
    for (i = 0; i < textConverArr.length; i++ ) {
        let firstCharacStr = textConverArr[i][0];
        let sectionFromIndex1Str = textConverArr[i].slice(1);
        let strConvertCaptitalFirst = firstCharacStr.toUpperCase() + sectionFromIndex1Str;
        textConverArr[i] = strConvertCaptitalFirst;
    }
    return textConverArr.join(' ');
}

ConverText("  heLlo riKkei academy")

console.log(ConverText("  heLlo riKkei academy"));

