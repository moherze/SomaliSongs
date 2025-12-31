

const navBar = document.querySelector('.nav-bar')
const Button = document.querySelector('.toggle-button');
// const navLinks = document.querySelector('.navbar-links')
const aLinks = document.querySelectorAll('.navbar-links a')



Button.addEventListener('click', ()=>{
    navBar.classList.toggle('active')
  
})

aLinks.forEach(link => {
    link.addEventListener('click', function(){
         navBar.classList.remove('active')
    })
});

const toggleButton = document.querySelector("#mode-toggle")

toggleButton.addEventListener('click', ()=>{
  
    document.body.classList.toggle("dark-mode")
    toggleButton.classList.toggle("dark-mode")

   
 if(toggleButton.classList.contains('dark-mode')){
        toggleButton.innerHTML = "&#9790;";
         toggleButton.style.color= "white"
    localStorage.setItem('mode', 'dark')

 }else{
    toggleButton.textContent= "🔆"
    
    localStorage.setItem("mode", "light")
 }
})

window.addEventListener("DOMContentLoaded", ()=>{
 
    const SaveMode = localStorage.getItem('mode')

    if(SaveMode === "dark"){
        document.body.classList.add('dark-mode')
        toggleButton.classList.add("dark-mode")
        toggleButton.innerHTML = "&#9790;";
         toggleButton.style.color= "white"
    


        
    }else{
         toggleButton.textContent= "🔆"
    }
})




// singers 

// iskilaaji
 document.querySelector("#iskilaaji").addEventListener("click" , ()=>{
    window.location.href= "iskilaaji/iskilaaji.html"
 })

//  suldaan Seeraar 

document.querySelector("#suldaan-seeraar").addEventListener("click", ()=>{
     window.location.href= "suldaan seeraar/suldaan.html"
})

// nimcaaan hilaac 

document.querySelector("#nimcaan-hilaac").addEventListener("click", ()=>{
    window.location.href= "nimcaan hilaac/nimcaan.html"
})

// ilkacae

document.querySelector("#ilkacase").addEventListener("click", ()=>{
    window.location.href= "ilkacase/ilkacase.html"
})

// mohamed Bk 

document.querySelector("#maxamed-BK").addEventListener("click", ()=>{
    window.location.href= "mohamed bk/bk.html"
})

// cawaale aaden 


document.querySelector("#cawaale").addEventListener("click", ()=>{
    window.location.href= "cawaale aaden/cawaale.html"
})





