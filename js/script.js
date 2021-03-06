const hamburger = document.getElementById("hamburger");
const navDrop = document.querySelector("#nav-drop");
const navLinks = document.querySelector("#nav-links");

hamburger.addEventListener("click", ()=>{
  navDrop.style.display === "block";
  if(navDrop.style.display === "block"){
    navDrop.style.display = "none";
  }else{
    navDrop.style.display = "block";
  }
});


const removeActive = ()=>{
  let buttonList = document.querySelectorAll(".nav-button");
  for(let i = 0; i < buttonList.length; i++){
    buttonList[i].classList.remove("active");
  }
};

// on click if nav button is clicked, make active.
navLinks.addEventListener("click", e =>{
  const element = e.target;
  removeActive();
  if(element.tagName === "A"){
    element.classList.toggle("active");
  }
});