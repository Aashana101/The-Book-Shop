let ArrProducts=[
    {
        id:1,
        name:"HTML",
        price:1000,
        img:"img1.png",
        rating:3.9
    },
    {
        id:2,
        name:"  CSS",
        price:3000,
        img:"img2.png",
        rating: 4.1
    },
    {
        id:3,
        name:"Java Script",
        price:7000,
        img:"img3.png",
        rating: 4.9
    },
    {
        id:4,
        name:"jQuery",
        price:500,
        img:"img4.png",
        rating: 4

    },
    {
        id:5,
        name:"React",
        price:1000,
        img:"img5.png",
        rating: 4.5

    },
    {
        id:6,
        name:"Angular",
        price:4000,
        img:"img6.png",
        rating: 4.1
    },
    {
        id:7,
        name:"The Reality",
        price:10,
        img:"img7.png",
        rating: 4.1
    }

];

const body=document.querySelector("body");
products=document.querySelector(".products");
shoppingbasket=document.querySelector(".shoppingbasket");
closeCart=document.querySelector(".close");
ProductList=document.querySelector(".ProductList");
quantity=document.querySelector(".quantity");
total=document.querySelector(".total small");

let checkOutList=[];
shoppingbasket.onclick=()=>{
    body.classList.add("active");
}
closeCart.onclick=()=>{
    body.classList.remove("active");
}
function BookDetails(){
    ArrProducts.forEach((item, key)=>{
        let div=document.createElement("div");
        div.classList.add("item");
        let star="";
        for(i=0; i<item.rating; i++)
    {
        star+="<i class='fa fa-star'></i>";
    }

        div.innerHTML=`<img src="${item.img}"/>
        <div class="name">${item.name}</div>
        <div class="rating">${star}</div>
        <div class="price"><small>₹</small>${item.price}</div>
        <button class="addtocart" onclick="addToCart(${key})"><i class="fa fa-cart-plus"></i>Add To Cart</button>
        `;
        products.appendChild(div);
    });
}
BookDetails();
function addToCart(id){
    if(checkOutList[id]==null)
        {
            checkOutList[id]=ArrProducts[id];
            checkOutList[id].quantity=1;
        }
        else{
            checkOutList[id].quantity+=1;
        }
        reloadCart();
}
function reloadCart(){
    ProductList.innerHTML="";
    let count=0;
    let totalPrice=0;

    checkOutList.forEach((item, key)=>{
        count+=item.quantity;
        totalPrice+=parseInt(item.price*item.quantity); 
        let li=document.createElement("li");
        li.innerHTML=`
        <img src="${item.img}">
        <div>${item.name}</div>
        <div><small>₹</small>${item.price}</div>
        <div>
        <button onclick="changequantity(${key}, ${item.quantity-1})"> - </button>
        <div class="count">${item.quantity}</div>
        <button onclick="changequantity(${key}, ${item.quantity+1})"> + </button>
        </div>
        `;

        ProductList.appendChild(li);
    });
    quantity.innerHTML=count;
    total.innerHTML=`<small>Subtotal( ${count} items)₹</small>`+totalPrice;
}
function changequantity(key, quantity){
    if(quantity==0){
        delete checkOutList[key];
    }
    else{
        checkOutList[key].quantity=quantity;
    }
    reloadCart();
}


