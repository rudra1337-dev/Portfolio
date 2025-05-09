




//Dark and Light Mode

let color = "white";
document.querySelector(".mode").addEventListener('click',()=>{
    console.log(color)
    if(color === "white"){
        color = "dark";
    }else{
        color = "white";
    }
    
    
    let section = document.querySelectorAll(".section");
let box = document.querySelectorAll(".box");

if(color === "white"){ //White mode on
    for(let i of section){
        i.style.backgroundColor = "whitesmoke";
    }
    
    for(let i of box){
        i.style.backgroundColor = "white";
        
        document.querySelector("html").style.color = "black";
        
    }
    
    for(let i of document.querySelectorAll("input")){
        i.style.color="black";
        i.style.backgroundColor="whitesmoke";
    }
        
    

    document.querySelector(".submit").style.backgroundColor="#1E88E5";
    
    if(color=="white"){
        document.querySelector(".my-skills").style.color="black";
    }else{
        document.querySelector(".my-skills").style.color="white";
    }
    
    
}else{ //Dark mode on---===============================
    for(let i of section){
        i.style.backgroundColor = "#121010";
    }
    
    for(let i of box){
        i.style.backgroundColor = "black";
    }
    document.querySelector("html").style.color = "white";
    
    for(let i of document.querySelectorAll("input")){
        i.style.color="white";
        i.style.backgroundColor="#121010";
    }
    
    document.querySelector(".submit").style.backgroundColor="#1E88E5";
    
    if(color=="white"){
        document.querySelector(".my-educations").style.color="black";
    }else{
        document.querySelector(".my-educations").style.color="white";
    }
}
})






document.querySelector(".my-skills").addEventListener('click',()=>{
    document.querySelector(".detail-text")
    .innerHTML ="->HTML->CSS->JavaScrip->C Programming language";
    document.querySelector(".my-skills").style.color="#1E88E5";
    if(color=="white"){
        document.querySelector(".my-educations").style.color="black";
    }else{
        document.querySelector(".my-educations").style.color="white";
    }
});

document.querySelector(".my-educations").addEventListener('click',()=>{
    document.querySelector(".detail-text")
    .innerHTML ="->B.Tech(8.45 last SGPA)->Secondary Education(73%)->matric(80%)";
    document.querySelector(".my-educations").style.color="#1E88E5";
    if(color=="white"){
        document.querySelector(".my-skills").style.color="black";
    }else{
        document.querySelector(".my-skills").style.color="white";
    }
    
});






//Form

document.querySelector("form").addEventListener('submit',(event)=>{
    
    setTimeout(()=>{
        for(let i of document.querySelectorAll(".visitor")){
        i.value="";
    }
    
    document.querySelector(".message").value="";
    
    },1500);
});