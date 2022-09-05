const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    // //   js code to show/hide password and change icon
    // pwShowHide.forEach(eyeIcon =>{
    //     eyeIcon.addEventListener("click", ()=>{
    //         pwFields.forEach(pwField =>{
    //             if(pwField.type ==="password"){
    //                 pwField.type = "text";

    //                 pwShowHide.forEach(icon =>{
    //                     icon.classList.replace("uil-eye-slash", "uil-eye");
    //                 })
    //             }else{
    //                 pwField.type = "password";

    //                 pwShowHide.forEach(icon =>{
    //                     icon.classList.replace("uil-eye", "uil-eye-slash");
    //                 })
    //             }
    //         }) 
    //     })
    // })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });


let firstNameNode = document.getElementById('firstName')
let mailIdNode = document.getElementById('mailId')
let pwdNode = document.getElementById('pwd')
let confirmPwdNode = document.getElementById('confirmPwd')

console.log("firstNameNode","mailIdNode","pwdNode","confirmPwdNode")
let errorNode1 = document.getElementById('error1')
let errorNode2 = document.getElementById('error2')
let errorNode3 = document.getElementById('error3')
let errorNode4 = document.getElementById('error4')
function validateName(){
    let pattern =new RegExp("^[A-Za-z]*$");
    let firstName = firstNameNode.value
    errorNode1.innerHTML="";

    if(pattern.test(firstName)=== false || firstName === ''){
        errorNode1.innerHTML = '<small>Enter a valid name.</small>'
        firstNameNode.style.borderBottom = '2px solid red'
        return false;
    }
    else{
        firstNameNode.style.borderBottom = '2px solid green'
        return true;
    }
}
function validateEmail(){
    let email=mailIdNode.value;
    errorNode2.innerHTML="";
    if(email===''){
        errorNode2.innerHTML="<small>Email is required</small>";
        mailIdNode.style.borderBottom="2px solid red";
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode2.innerHTML="<small>Please enter valid email</small>";
        mailIdNode.style.borderBottom="2px solid red";
        return false;
    }
    else{
        mailIdNode.style.borderBottom="2px solid green";
        return true 
    }
}
function validatePassword(){
    let pass=pwdNode.value;
    errorNode3.innerHTML="";
    let regx=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if(pass===''){
        errorNode3.innerHTML="<small>Password is required</small>";
        pwdNode.style.borderBottom="2px solid red";
        return false
    }
    else if(regx.test(pass)==false){
        alert('Password must be 8 character long, must contains one symbol, one capital letter, one digit, one small letter.')
        pwdNode.style.borderBottom="2px solid red";
        return false
    }
    else{
        pwdNode.style.borderBottom="2px solid green";
        return true;
    }
}

function confirmPassword(){
    let confirmPass=confirmPwdNode.value;
    let password=pwdNode.value;
    errorNode4.innerHTML="";
    if(confirmPass===''){
        errorNode4.innerHTML="<small>Password is required</small>";
        confirmPwdNode.style.borderBottom="2px solid red";
        return false;
    }
    else if(confirmPass!=password){
        errorNode4.innerHTML="<small>Both passwords should match</small>";
        confirmPwdNode.style.borderBottom="2px solid red";
        return false;
    }
    else{
        confirmPwdNode.style.borderBottom="2px solid green";
        return true;
    }
}

function validateForm() {
    let v1 = validateName();
    let v2 = validateEmail();
    let v3 = validatePassword();
    let v4 = confirmPassword();
    console.log('v1 && v2 && v3',v1 && v2 && v3 && v4)
    return (v1 && v2 && v3 && v4 )
}



function validateLogin(){
    let v2 = validateEmail();
    let v3 = validatePassword();
    return (v2 && v3)
}

function showPassword(){
    let pass = document.getElementById('pwd')
    if (pass.type === "password") {
        pass.type = "text";
      } else {
        pass.type = "password";
      }
}
