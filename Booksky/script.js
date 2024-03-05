
   var overlay = document.querySelector(".popupoverlay")
   var box = document.querySelector(".popupbox")

var addbtn = document.querySelector("#addpopup")

addbtn.addEventListener("click",function() {
overlay.style.display="block"
box.style.display="block"
  
}
)

var cbutton = document.querySelector(".cbtn")
cbutton.addEventListener("click",function(event){
event.preventDefault()
overlay.style.display="none"
box.style.display="none"
})

var container = document.querySelector(".container")

var bt=document.getElementById("booktitle")
var author = document.getElementById("bookauthor")
var desc = document.getElementById("desc")
var addbbtn= document.querySelector(".bbtn")

addbbtn.addEventListener("click",function (event) {
event.preventDefault()
  var div = document.createElement("div")
  div.setAttribute("class","bookcontainer")
  div.innerHTML=`<h1>${bt.value}</h1>
  <h5 >${author.value}</h5>
  <p>${desc.value}</p>
  <button  onclick="delbook(event)">Delete</button>`
container.append(div)
overlay.style.display="none"
box.style.display="none"
})

function delbook(event){
  event.target.parentElement.remove()
}



  
