const card = [
    {name:"project1", para:"Luxury cars:",image:"img/project1.png",redirect:"https://ms-luxury.netlify.app/",discription:"Welcome to m$-Luxury cars, where automotive dreams become reality. Our collection showcases the epitome of luxury, elegance, and innovation. Every car we feature is a testament to impeccable craftsmanship and cutting-edge technology. Discover the ultimate driving experience with us."},
    {name:"project2", para:"Book My ticket:",image:"img/project2.png",redirect:"https://cool-dieffenbachia-091565.netlify.app/",discription:"Welcome to BookMyTicket – your ultimate destination for entertainment tickets. Dive into a world of movies, plays, concerts, and sporting events with just a few clicks. Our user-friendly platform ensures seamless booking and up-to-date information on show timings, venues, and artist details. Get ready to elevate your entertainment experience with us."},
    {name:"project3", para:"E- commerce:",image:"img/project3.png",redirect:"https://amazeone.netlify.app/",discription:"Welcome to amazeone – your one-stop shop for all things you love! From trendy fashion and cutting-edge electronics to everyday essentials and unique finds, we bring you a seamless shopping experience. Enjoy easy navigation, secure payments, and speedy delivery, all from the comfort of your home."},
];

function displayCard(){
     document.getElementById('project1').innerHTML="";
     document.getElementById('project2').innerHTML="";
     document.getElementById('project3').innerHTML="";
    
 
    card.forEach(card =>{
        const cards = `
        <div class="col-md-10 mt-5">
            <div class="card">
                <div class="card-body">
                    <div class="card-items">
                        <img src="${card.image}" alt="${card.name}" style="width:350px;height:320px;border-radius: 12px;object-fit: contain;margin-top:0px;">
                        <h3 class="text" style="margin-top:-300px;margin-left:-10px;">${card.name}</h3>
                        <p><b>${card.para}</b></p>
                        <p style="margin-left:360px">${card.discription}</p>
                        <a href="${card.redirect}"><button class="btn btn-primary" style="margin-left: 400px; margin-bottom:-100px">View Project</button></a>
                    </div>
                </div>
            </div>
        </div>
            
        `;
        if(card.name === "project1"){
            document.getElementById('project1').innerHTML += cards;
        }else if(card.name === "project2"){
            document.getElementById('project2').innerHTML += cards;
        }else if(card.name === "project3"){
            document.getElementById('project3').innerHTML += cards;
        }
    })
    
};
displayCard()

//form validation js//
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit",function(event){
    let isValid = true;

    if(nameInput.value.trim() === ""){
        nameError.textContent = "name is Required"
         nameError.style.color="red"
        isValid = false;
    }else{
        nameError.textContent = "";
    }

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

    if(!emailInput.value.match(emailPattern)){
        emailError.textContent = 'please enter a valid email.';
        emailError.style.color="red"
        isValid = false;
    }else{
        emailError.textContent = "";
    }
});