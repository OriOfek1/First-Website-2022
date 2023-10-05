"use strict";

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav =document.querySelector('.nav-links');
   
burger.addEventListener('click',() =>{
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');


});
}

function imageGallery(){
    const highlight = document.querySelector(".gallery-highlight");
    const previews = document.querySelectorAll(".food-previews img");
    previews.forEach(preview =>{
        preview.addEventListener('click',function(){
            highlight.src = this.src;
            previews.forEach(preview => preview.classList.remove('food-active'));
            preview.classList.add("food-active");
        }); 
    });
}

function ValidateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    return true;
}


navSlide();
imageGallery();
