
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