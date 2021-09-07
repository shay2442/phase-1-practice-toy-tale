let addToy = false;

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



const toyContainer = document.getElementById("toy-collection");


const renderIndividualToy = toy => {
function renderIndividualToy(toy){

  let likeValue = `${toy.likes}`;

const renderIndividualToy = toy => {


const renderToys = toysArray => {
function renderToys(toysArray){

  toyContainer.innerHTML = ``;

  toysArray.forEach(toy => {
  toysArray.forEach(function(toy){

    renderIndividualToy(toy);
  })
})


const fetchToys = () => {
function fetchToys(){
  fetch(toysEndpoint)
    .then(resp => resp.json())
    .then(toysArray => {
    .then(function(resp){
      return resp.json()
    })
    .then(function(toysArray){
 
      renderToys(toysArray);
    })
    .catch(err => {
    .catch(function(err){
  
      console.log(err);
const fetchToys = () => {


const handlePostToy = e => {
function handlePostToy(e){
 
  e.preventDefault();
const handlePostToy = e => {

  fetch(toysEndpoint, reqObj)
    .then(resp => resp.json())
    .then(individualToy => {
    .then(function(resp){
      return resp.json();
    })
    .then(function(individualToy){
      renderIndividualToy(individualToy);
    })
    .catch(err => console.log(err))
    .catch(function(err){
      console.log(err);
    })
}

const handleLikeButton = e => {
function handleLikeButton(e){
  // create a variable to store the toys ID
  // we have access to the toy's ID from the card's attribute of data-id
  const toyId = e.target.parentElement.dataset.id;
const handleLikeButton = e => {
  // note that a patch request needs to go to "toys/:id"
  // we have access to the toy's ID to append to the URL
  fetch(toysEndpoint + `/${toyId}`, reqObj)
    .then(resp => resp.json())
    .then(data => {
    .then(function(resp){
      return resp.json();
    })
    .then(function(data){
      console.log(data);
      // invoke the fetchToys function to rerender all the toys
      fetchToys();
    })
    .catch(err => console.log(err))
    .catch(function(err){
      console.log(err);
    })

}
fetchToys();

addBtn.addEventListener("click", () => {
addBtn.addEventListener("click", function(){
 
  addToy = !addToy;
toyForm.addEventListener("submit", handlePostToy);


document.addEventListener("click", (e) => {
document.addEventListener("click", function(e){

  if (e.target.className === "like-btn") {
    
    handleLikeButton(e);
  }
});
