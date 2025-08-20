const productContainer =document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showCard=(products)=>{

     if(!products){
        return false ;
     }

     products.forEach((currProd)=>{
        const {id, name,price,brand,category,description,image,stock}=currProd;
 
         const productClone =document.importNode(productTemplate.content,true);

         productClone.querySelector(".productName").textContent=name;
              productClone.querySelector(".productDescription").textContent=description;
              productClone.querySelector(".productImage").src=image;
              productClone.querySelector(".productPrice").textContent=`₹${price}`;
              productClone.querySelector(".productActualPrice").textContent=`₹${price *4}`;
                productClone.querySelector(".productStock").textContent=stock;
         productContainer.append(productClone);
     });

};