function getData(){
   fetch("http://localhost:3000/shoes")
   .then(response=>response.json())
   .then(data=>{arrangeShoes(data)})
}

function arrangeShoes(shoes){
   for(shoe of shoes){
       const shoeCard = document.createElement("div")
       const shoeDetails =`
       <h3>${shoe.name}</h3>
       <img src="${shoe.image}">
       <li>${shoe.price}</li>
       `
       shoeCard.innerHTML= shoeDetails
       document.body.append(shoeCard)
   } 
   
}
getData()

function postShoes(){
   const name= document.getElementById("brand").value 
   const imageUrl = document.getElementById("imageUrl").value 
   const shoePrice = document.getElementById("shoePrice").value
   const submitButton = document.getElementById("submitButton")
   const form= document.querySelector("form")

   form.addEventListener("submit",(e)=>{
       e.preventDefault()
       let newShoe={
           id:Date.now(),
           name: name,
           image: imageUrl,
           price: shoePrice
       }
       console.log(newShoe);
       fetch("http://localhost:3000/shoes",{
           method:'POST',
           body: JSON.stringify({
               id:Date.now(),
               name: name,
               image: imageUrl,
               price: shoePrice
           }),
           headers:{
               "Content-type":"application/json",
               Accept:'application.json'
           }
       })
       .then(response=>response.json())
       .then(data=>console.log(data))
   
   })

   constform = document.querySelector('form');
const searchInput = document.querySelector('#search');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;
  // Perform search using the searchTerm
});


}