// khai báo biến 



// khai báo mảng chứa các hình ảnh cần chuyển ( Khai báo theo kiểu thủ công )
// var imgProduct = [
//     './img/x1.jpg',
//     './img/x2.jpg',
//     './img/x3.jpg',
// ];


// Khai báo mảng chứa hình ảnh nếu nó nhiều
var i=1;
var imgProduct = [];
for(i=1;i<4;i++)
{
    imgProduct[i]="./img/banner"+i+".jpg"
    // imgProduct[i]=`./img/x${i}.jpg`

}
// khai báo thời gian chuyển cảnh
var time = 3000;

// hàm 
function changeImg(){  
    if (imgProduct[i]) document.slide.src = imgProduct[i];
    if (i < imgProduct.length - 1 ) { // so sánh hình ảnh 
        i++;
    }else {
        i=1;
    }
    setTimeout('changeImg()',time); // set thời gian chuyển hình ảnh
}
// xuất ra màn hình
window.onload = changeImg;

// sản phẩm 1

