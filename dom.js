var total = Number(document.getElementById("total").innerText);
var quantity_total = Number(document.getElementById("quantity_total").innerText);

var plus = document.querySelectorAll(".plus");
for (let btn of plus){
    btn.addEventListener("click",function(){
        let prix = Number(document.getElementById(btn.getAttribute("name")+"_prix").innerHTML);
        let quantity = Number(document.getElementById(btn.getAttribute("name")+"_quantity").innerHTML);
        quantity++;
        total+=prix;
        quantity_total++;
        document.getElementById(btn.getAttribute("name")+"_quantity").innerHTML=quantity;
        document.getElementById("total").innerText = total;
        document.getElementById("quantity_total").innerText = quantity_total;
    });
}

var minus = document.querySelectorAll(".minus");
for(let btn of minus){
    btn.addEventListener("click",function(){
        let prix = Number(document.getElementById(btn.getAttribute("name")+"_prix").innerHTML);
        let quantity = Number(document.getElementById(btn.getAttribute("name")+"_quantity").innerHTML);
        if(quantity <= 0){
            quantity=0;
            total=total;
            quantity_total=quantity_total;
        }
        else{
            quantity--;
            total-=prix;
            quantity_total--;
        }
        document.getElementById(btn.getAttribute("name")+"_quantity").innerHTML=quantity;
        document.getElementById("total").innerText = total;
        document.getElementById("quantity_total").innerText = quantity_total;
    });
}

var deleteb = document.querySelectorAll(".delete");
for(let btn of deleteb){
    btn.addEventListener("click",function(){
        let prix = Number(document.getElementById(btn.getAttribute("name")+"_prix").innerHTML);
        let quantity = Number(document.getElementById(btn.getAttribute("name")+"_quantity").innerHTML);
        total-=prix*quantity;
        quantity_total-=quantity;
        document.getElementById(btn.getAttribute("name")).remove();
        document.getElementById("total").innerText = total;
        document.getElementById("quantity_total").innerText = quantity_total;
    });
}

var fav = document.querySelectorAll(".enregistre");
for(let btn of fav){
    btn.addEventListener("click",function(){
    let fav_act =  document.getElementById(btn.getAttribute("name")+"_enregistre").src;
    if (fav_act == "https://cdn3.iconfinder.com/data/icons/vote/16/star_bookmark-512.png"){
        document.getElementById(btn.getAttribute("name")+"_enregistre").src="https://img2.pngio.com/favorite-stars-favourite-shapes-ribbon-communications-lace-icon-favourite-png-512_512.png";
    }
    else if (fav_act == "https://img2.pngio.com/favorite-stars-favourite-shapes-ribbon-communications-lace-icon-favourite-png-512_512.png"){
        document.getElementById(btn.getAttribute("name")+"_enregistre").src="https://cdn3.iconfinder.com/data/icons/vote/16/star_bookmark-512.png";
    }
    })
}

var over = document.querySelectorAll(".product");
for(let btn of over){
    btn.addEventListener("mouseover",function(){
    document.getElementById(btn.getAttribute("id")).style.border = "solid";
})
}

for(let btn of over){
    btn.addEventListener("mouseout",function(){
    document.getElementById(btn.getAttribute("id")).style.border = "none";
})
}