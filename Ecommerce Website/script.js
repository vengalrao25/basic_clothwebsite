var menuItems = document.getElementById('menuItems');
menuItems.style.maxHeight = '0px';

function menutoggle(){
    if (menuItems.style.maxHeight == '0px'){
        menuItems.style.maxHeight = '200px';
    }
    else{
        menuItems.style.maxHeight = '0px';
    }
}

var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName('smallImg');

for(let i=0; i< smallImg.length ; i++){
    smallImg[i].onclick = function (){
        productImg.src = smallImg[i].src ; 
    }
}





// --------js for toggle form -----------

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register(){
    RegForm.style.transform = 'translateX(0px)' ;
    LoginForm.style.transform = 'translateX(0px)';
    Indicator.style.transform = 'translateX(100px)';
}

function login(){
    RegForm.style.transform = 'translateX(300px)' ;
    LoginForm.style.transform = 'translateX(300px)';
    Indicator.style.transform = 'translateX(0px)';
}