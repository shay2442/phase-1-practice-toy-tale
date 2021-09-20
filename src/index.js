
let addToy = false;
let toyCollectionDiv = document.querySelector('div#toy-collection')
let toyForm = document.querySelector('')
console.log(toyCollectionDiv)

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
      ++toy.likes 
      likesNum.textContent = `${toy.likes} Likes`
      console.log(likesNum)


      fetch(BASE_URL + `/${toy.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({likes: toy.likes + 1})
      })
      .then(res => res.json())
      .then(function(updatedToyObj){
        toy.likes = updatedToyObj.likes
      })
    
    }


  }



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


 