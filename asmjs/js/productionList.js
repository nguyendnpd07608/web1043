// function cart(ten, gia, hinhanh){
//     this.ten = ten ;
//     this.gia = gia;
//     this.hinhanh = hinhanh;
// }
// var arrSp = [];

// var arrBtn = document.getElementsByClassName("nutthem");
// console.log(arrBtn);

// for(var t = 0;t<arrBtn.length;t++){
//     var btn = arrBtn[t]
//     btn.addEventListener('click', (event)=>{
//         var btnC = event.target
//         var hinhanh = btnC.parentElement.parentElement.querySelector('.hinhanh-card').src
//         console.log(hinhanh)
//         var gia = btnC.parentElement.parentElement.querySelector('.gia').innerHTML
//         var ten = btnC.parentElement.parentElement.querySelector('h1').innerHTML
//         arrSp.push(new cart(ten,gia,hinhanh))
//         console.log(arrSp)
//     })
// }
var arrProduct = [
    {   
        name: "A-Class",
        price: "2,429,000,000 đ",
        img: "img/sp1-a.jpg"
    },

    {
        name: "S-Class",
        price: "5,059,000,000 đ",
        img: "img/sp2-a.jpg",
        
    },

    {
        name: "Mercedes-Maybach S-Class",
        price: "8,199,000,000 đ",
        img: "img/sp3-a.jpg",
    },

]

function Render() {
    var showcart = document.getElementById("cart")
    showcart.innerHTML = ''
    arrProduct.forEach((v,i)=> {
       showcart.innerHTML += `
       <div class="Production-card">
        <img width="100"
          class="cardImg"
          src="${v.img}"
          alt=""
          onclick="showVideo()"
        />
        <h1>${v.name}</h1>
        <p class="price">${v.price}</p>
        <p>
          AMG’s high-performance version of Mercedes's legendary G-wagen is a
          hot-rod of3f-roader that's as charming as it is crazy.
        </p>
        <p><button class="btnAdd" onclick='Add("${i}")' >Add to Cart</button></p>
      </div>
       `
    })
    changeImg()
}

window.onload = Render;   

var control = []
function Add(i) {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Bạn đã thêm vào giỏ hàng',
        showConfirmButton: false,
        timer: 1000
      })
    control =[...control,arrProduct[i]]
    document.getElementById("number").innerHTML = `${control.length}`
    document.getElementById("number").style.opacity = '1'
    
    var show1 = document.getElementById("text")
        show1.innerHTML =''
        control.forEach((v,i)=> {
            show1.innerHTML += `
            <div class="Production-card">
        <img width="90%"
          class="cardImg"
          src="${v.img}"
          alt="Mercedes G63"
        />
        <h1>${v.name}</h1>
        <p class="price">${v.price}</p>
        <p>
          AMG’s high-performance version of Mercedes's legendary G-wagen is a
          hot-rod of3f-roader that's as charming as it is crazy.
        </p>
      </div>
      `
         })
}

function mouse() {
    if(control == '') {
        // alert("Bạn chưa thêm sản phẩm nào vào giỏ hàng")
        Swal.fire({
            title: 'Bạn chưa thêm sản phẩm vào giỏ hàng',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else {
        var show1 = document.getElementById("text")
        show1.innerHTML =''
        control.forEach((v,i)=> {
            show1.innerHTML += `
            <div class="Production-card">
        <img width="90%"
          class="cardImg"
          src="${v.img}"
          alt="Mercedes G63"
        />
        <h1>${v.name}</h1>
        <p class="price">${v.price}</p>
        <p>
          AMG’s high-performance version of Mercedes's legendary G-wagen is a
          hot-rod of3f-roader that's as charming as it is crazy.
        </p>
      </div>
      `
         })
    }

}