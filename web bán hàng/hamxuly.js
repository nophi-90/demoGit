// const btn = document.querySelectorAll("button")
// btn.forEach(function(button,index){
//     button.addEventListener("click",function(event){
//         var btnItem = event.target
//         var product = btnItem.parentElement
//         var productimg = product.querySelector("img").src
//         var productten = product.querySelector("h3").innerText
//         var productgia = product.querySelector("p").innerText
//         addcart(productimg, productten, productgia)
//     })
// })
// //xử lý khi bấm vào thêm giỏ hàng
// function addcart(productimg, productten, productgia){
//     var addtr = document.createElement("tr")
//     var trcontent = '<tr><td style="align-items: center;"><img src="'+productimg+'" width="200px"></td><td><p>'+productten+'</p></td><td><p>'+productgia+'</p></td><td><input style="color: #9E958A; font-size: 20px; font-family: serif; width: 60px;" type="number" value="1" min="1"></td><td style="cursor: pointer;">bỏ chọn</td></tr>'
//     addtr.innerHTML = trcontent
//     var carttable = document.querySelector("tbody")
//     carttable.append(addtr)
//     carttotal()
// }
// // tính tổng tiền
// function carttotal(){
//     var cartItem = document.querySelectorAll("tbody tr")
//     for(var i = 0; i < cartItem.length; i++){
//         var inputValue = cartItem[i].querySelector("input").value

//         var productPrice = cartItem[i].querySelector("p").innerText
//         console.log(productPrice);
//     }
// }

