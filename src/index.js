
let addToy = false;
let toyCollectionDiv = document.querySelector('div#toy-collection')
let toyContainer = document.querySelector('.container')
let toyForm = document.querySelector('.add-toy-form')
let newToyButton = document.querySelector('#new-toy-btn')
// console.log(newToyButton)
// console.log(toyContainer)
// console.log(toyForm)

const BASE_URL = "http://localhost:3000/toys"

fetch(BASE_URL)
  .then(resp => resp.json())
  .then( function(toysArray) {
    toysArray.forEach(createCard)
    
  })

  function createCard(toy) {
  
    let toyDiv = document.createElement('div')
    toyDiv.className = 'card'

    let toyNameH2 = document.createElement('h2')
    toyNameH2.innerText= toy.name

    let toyImage = document.createElement('img')
    toyImage.src = toy.image 
    toyImage.className = 'toy-avatar'
    toyImage. alt = toy.name



    let likesNum = document.createElement('h5')
    likesNum.innerText = `${toy.likes} Likes`
    likesNum.className = "likesNum"
  
    let likesButton = document.createElement('button')
    likesButton.className = 'likes-button'
    likesButton.innerText = "Like <3"

    toyDiv.append(toyNameH2, toyImage, likesNum, likesButton)
    toyCollectionDiv.append(toyDiv)
  

    likesButton.addEventListener('click', () => increaseLikes(toy, likesNum))

    function increaseLikes(toy, likesNum) {
      toy.likes++
      likesNum.textContent = `${toy.likes} Likes`
      console.log(likesNum)


      fetch(BASE_URL + `/${toy.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({likes: toy.likes})
      })
      .then(res => res.json())
      .then(function(updatedToyObj){
        toy.likes = updatedToyObj.likes

      })
    
    } //increaseLikes function ends here 

  } //createCard ends here

  toyForm.addEventListener('submit', (event) => {
    createToy(event)
  })

  function createToy(event) {
    event.preventDefault()
    let name = e.target.name.value
    let image = e.target.image.value
    
    console.log(name)
    console.log(image)
  

 

    const newToy = {
      name : name,
      image : image,
      likes : 0

    }
    
  }
    createToy()

  // function createItem() {
  //   event.preventDefault()
  //   // This event handler should create a new Items object and persist data
  //   const name = document.querySelector('#items-input').value
  //   const quantity = document.querySelector('#quantity-input').value
  
  //   // event.target['items-input'].value
  //   // +event.target["quantity-input"].value
  
  //   // Create an items object
  //   const newObj = {
  //     name: name, 
  //     quantity: quantity,
  //     likes: 0,
  //     completed: false
  //   }
  
  //   // Persist this data
  
  //   fetch(BASE_URL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newObj)
  //   })
  //   .then(resp => resp.json())
  //   .then(item => renderItem(item))
  //   // .then(renderItem) // refactored line 41
    
  //   itemsForm.reset()

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


 