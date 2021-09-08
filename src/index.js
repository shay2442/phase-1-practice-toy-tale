let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  getToys()
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
  toyFormContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    postToy(e.target.name.value, e.target.image.value)
  })
    // button.addEventListener('click', (e) => console.log(e.target.id))
  })
//   const handleLikeButton = e => {
//     function handleLikeButton(e){
//       const toyId = e.target.parentElement.dataset.id;
// const handleLikeButton = e => {
//       fetch(toysEndpoint + `/${toyId}`, reqObj)
//         .then(resp => resp.json())
//         .then(function(data){
//           console.log(data);
//           fetchToys();
//         })
//         .catch(err => console.log(err))
//         .catch(function(err){
//           console.log(err);
//         })
    
//     }
    
    

    // document.addEventListener("click", function(e){
    //   if (e.target.className === "like-btn") {
    //     handleLikeButton(e);
    //   }
    // });

function getToys() {
  fetch('http://localhost:3000/toys')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.map(t => renderToy(t))
      console.log('getToys', data)
      const likeBtns = [...document.querySelectorAll('.like-btn')];
      likeBtns.map(button => {
        button.addEventListener('click', (e) => {
          const id = e.target.id;
          const likes = e.target.getAttribute('data');
          patchToy(id, parseInt(likes) + 1);
        })
      })
    })
}

function renderToy(toy) {
  const toyCard = `<div class="card">
<h2>${toy.name}</h2>
<img src=${toy.image} class="toy-avatar" />
<p><span id="likes">${toy.likes}</span> Likes</p>
<button class="like-btn" data=${toy.likes} id="${toy.id}">Like <3</button>
</div>`

  const toyBox = document.getElementById('toy-collection');
  toyBox.innerHTML += toyCard;

}

function postToy(name, url) {

  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "name": name,
      "image": url,
      "likes": 0
    })
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log('postToy', data)
    })

}

function patchToy(id, likes) {

  fetch(`http://localhost:3000/toys/${id}`, {
    method: 'PATCH',
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "likes": likes
    })
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log('patchToy', data)
    })

}

