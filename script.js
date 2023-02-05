


localStorage.setItem( 'email1','husnainnazeer26@gmail.com ')
localStorage.setItem('pass1','1234')
    


function login(){   



    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;

    var email1=localStorage.getItem("email1");
    var pass1=localStorage.getItem("pass1");

    if(email==email1 && pass==pass1){
        window.location.href="Home.html";

    }
    else {
        window.location.href="signup.html";
    }

}
