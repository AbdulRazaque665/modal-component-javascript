const modalBox = document.getElementById("modal");
const openButton = document.getElementById("modal-btn");
const closeButton = document.getElementById("close-button")

openButton.addEventListener("click",function(){
    modalBox.style.display = "block";
});

closeButton.addEventListener("click",function(){
   modalBox.style.display = "none"
});

window.addEventListener("click",function(event){
    if (event.target === modal) {
        modal.style.display = "none"
        
    }
})