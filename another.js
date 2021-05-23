var o=document.getElementById("submit")
var name=document.getElementById("name")
var section1=document.getElementById("section1")
let eventual=document.getElementById("eventual")
o.addEventListener("click",function(event){
    event.preventDefault()
   
    var name=document.getElementById("name").value
    
    localStorage.setItem("name", name)
    let apple=localStorage.getItem("name");
    let ball=localStorage.getItem("score")
    let call=localStorage.getItem("time")
    section.innerHTML="Congratulation  "+apple;
    section1.innerHTML="Your Score is "+ball;
    section2.innerHTML="Your Time is "+call+" seconds";
   
    
  


})
© 2021 GitHub, Inc.
