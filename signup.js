function register(){
    var firstName = fm.f_name.value;                   // getting values
    var lastName = fm.l_name.value;
    var emailAdress = fm.email.value;
    var password = fm.pass.value;
    var phoneNumber = fm.phone.value;

    var exp1 = /^[a-zA-Z" "]{3,20}$/                  //regular expression restriction
    var exp2 = /^[a-zA-Z" "]{3,20}$/
    var exp3  = /^[a-zA-Z" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"0-9]{4,20}[@gmail.com]{10}$/
    var exp4 = /^[a-zA-Z" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"0-9]{5,25}$/
    var exp5 = /^[0][3][0-9]{2}[-][0-9]{7}$/


    if(firstName.length == 0){
        document.getElementById("lb_1").innerHTML = "Please enter your first name";     // FORM VALIDATION
        document.getElementById("box_1").style.borderColor ="red";
        document.getElementById("lb_1").style.color = "#f23548";
    }
    else if(exp1.test(firstName)==false){
        document.getElementById("lb_1").innerHTML = "Please enter valid name";          // REGULAR EXPRESSION
        document.getElementById("box_1").style.borderColor ="red";
        document.getElementById("lb_1").style.color = "#f23548";
    }
    else if(firstName.length!=0){                                                      // FORM VALIDATION
        document.getElementById("lb_1").innerHTML = "";
        document.getElementById("box_1").style.borderColor ="green";
    }




    if(lastName.length == 0){                                                         // FORM VALIDATION
        document.getElementById("lb_2").innerHTML = "Please enter your last name";
        document.getElementById("box_2").style.borderColor ="red";
        document.getElementById("lb_2").style.color = "#f23548";
    }
    else if(exp2.test(lastName)==false){
        document.getElementById("lb_2").innerHTML = "Please enter valid name";          // REGULAR EXPRESSION
        document.getElementById("box_2").style.borderColor ="red";
        document.getElementById("lb_2").style.color = "#f23548";
    }
    else if(lastName.length!=0){
        document.getElementById("lb_2").innerHTML = "";                                 // FORM VALIDATION
        document.getElementById("box_2").style.borderColor ="green";
    }




    if(emailAdress.length == 0){                                                        // FORM VALIDATION
        document.getElementById("lb_3").innerHTML = "Please enter your email";                                          
        document.getElementById("box_3").style.borderColor ="red";
        document.getElementById("lb_3").style.color = "#f23548";
    }
    else if(exp3.test(emailAdress)==false){
        document.getElementById("lb_3").innerHTML = "Please enter valid email";         // REGULAR EXPRESSION
        document.getElementById("box_3").style.borderColor ="red";
        document.getElementById("lb_3").style.color = "#f23548";
    }
    else if(emailAdress.length!=0){                                                     // FORM VALIDATION
        document.getElementById("lb_3").innerHTML = "";
        document.getElementById("box_3").style.borderColor ="green";
    }





    if(password.length == 0){                                                           // FORM VALIDATION
        document.getElementById("lb_4").innerHTML = "Please enter your password";
        document.getElementById("box_4").style.borderColor ="red";
        document.getElementById("lb_4").style.color = "#f23548";
    }
    else if(exp4.test(password)==false){
        document.getElementById("lb_4").innerHTML = "Please enter valid password";         // REGULAR EXPRESSION
        document.getElementById("box_4").style.borderColor ="red";
        document.getElementById("lb_4").style.color = "#f23548";
    }
    else if(password.length!=0){                                                           // FORM VALIDATION
        document.getElementById("lb_4").innerHTML = "";
        document.getElementById("box_4").style.borderColor ="green";
    }





    if(phoneNumber.length == 0){                                                             // FORM VALIDATION
        document.getElementById("lb_5").innerHTML = "Please enter your phone number";
        document.getElementById("box_5").style.borderColor ="red";
        document.getElementById("lb_5").style.color = "#f23548";
    }
    else if(exp5.test(phoneNumber)==false){                                                 // REGULAR EXPRESSION
        document.getElementById("lb_5").innerHTML ="Please enter valid phone number"+"<br>"+"format 03##-#######"; 
             
        document.getElementById("box_5").style.borderColor ="red";
        document.getElementById("lb_5").style.color = "#f23548";
        document.getElementById("lb_5a").style.color = "#f23548";
    }
    else if(phoneNumber.length!=0){                                                             // FORM VALIDATION
        document.getElementById("lb_5").innerHTML = "";
        document.getElementById("box_5").style.borderColor ="green";
    }
}