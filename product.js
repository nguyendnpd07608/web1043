var productArr = [
    'img/sp1-a.jpg',
    'img/sp2-a.jpg',
    'img/sp3-a.jpg',
    'img/sp4-a.jpg',
];


var index = 0;

function rightNext(){
    index++;
    if(index >= productArr.length) {index=0};
    let img = document.getElementById("productImg-1");
    img.src = productArr[index];
}

function leftPrevious(){
    index--;
    if(index<0) {index = productArr.length-1};
    let img = document.getElementById("productImg-1");
    img.src = productArr[index];
}

var a=0;
var timeone;
var productA = [
    'img/sp1-a.jpg',
    'img/sp1-b.jpg',
    'img/sp1-c.jpg',
];
var productB = [
    'img/sp2-a.jpg',
    'img/sp2-b.jpg',
    'img/sp2-c.jpg',
]
var productC = [
    'img/sp3-a.jpg',
    'img/sp3-b.jpg',
    'img/sp3-c.jpg',
]
var productD = [
    'img/sp4-a.jpg',
    'img/sp4-b.jpg',
    'img/sp4-c.jpg',
]
functi0on changeA(){
    if(index==0){
        document.sp1.src = productA[a];
        if (a < productA.length - 1 ) { // so sánh hình ảnh 
            a++;
        }else {
            a=0;
        }
        timeone = setTimeout('changeA()',1000); 
        document.getElementById("priceProduct").innerHTML=" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp>A-Class< <br>From : 2,429,000,000 đ";
    }else if(index==1){
        document.sp1.src = productB[a];
        if (a < productB.length - 1 ) { // so sánh hình ảnh 
            a++;
        }else {
            a=0;
        }
        timeone = setTimeout('changeA()',1000); 
        document.getElementById("priceProduct").innerHTML=" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp>S-Class< <br>  From : 5,059,000,000 đ";
    }else if(index==2){
        document.sp1.src = productC[a];
        if (a < productC.length - 1 ) { // so sánh hình ảnh 
            a++;
        }else {
            a=0;
        }
        timeone = setTimeout('changeA()',1000); 
        document.getElementById("priceProduct").innerHTML=">Mercedes-Maybach S-Class< <br>  &nbsp &nbsp &nbsp From : 8,199,000,000 đ";
    }else{
        document.sp1.src = productD[a];
        if (a < productD.length - 1 ) { // so sánh hình ảnh 
            a++;
        }else {
            a=0;
        }
        timeone = setTimeout('changeA()',1000); 
        document.getElementById("priceProduct").innerHTML=" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp>GLA SUV< <br>  From : 3,430,000,000 đ";
    }

}

function stopA(){
    document.getElementById("priceProduct").innerHTML="";
    clearTimeout(timeone);
    // document.getElementById("productImg-1").innerHTML="";
}