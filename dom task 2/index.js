const para = document.getElementById("p")
const toggle = document.getElementById("toggle-btn")

toggle.addEventListener('click' , ()=>{
    document.body.classList.toggle('dark')
    para.classList.toggle('dark')
})