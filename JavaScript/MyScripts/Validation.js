let fNameNode=document.getElementById('fname')
let ageNode=document.getElementById('age')
let contactNode=document.getElementById('contact')
let mailNode=document.getElementById('mail')
let unameNode=document.getElementById('uname')
let passNode=document.getElementById('pass')
let confirmpassNode=document.getElementById('confirmpass')

let errorNode1 = document.getElementById('error1')
let errorNode2 = document.getElementById('error2')
let errorNode3 = document.getElementById('error3')
let errorNode4 = document.getElementById('error4')
let errorNode5 = document.getElementById('error5')
let errorNode6 = document.getElementById('error6')
let errorNode7 = document.getElementById('error7')

let array = [errorNode1, errorNode2, errorNode3, errorNode4, errorNode5, errorNode6, errorNode7]

function validate1() {
    let pattern =new RegExp("^[A-Za-z]*$");
    let fname = fNameNode.value
    errorNode1.innerHTML="";

    if(pattern.test(fname)== false || fname === ''){
        errorNode1.innerHTML = '<small>Enter a valid name.</small>'
        fNameNode.style.border = '2px solid red'
        return false;
    }
    else{
        fNameNode.style.border = 'red'
        return true;
    }
    
}
function validate2() {
    let age=ageNode.value;
    errorNode2.innerHTML="";
    if(age===''){
        errorNode2.innerHTML="<small>Age is required</small>";
        ageNode.style.border="2px solid red";
        return false;
    }
    else if(age<20 || age>60){
        errorNode2.innerHTML="<small>Age must be between 20 to 60</small>";
        ageNode.style.border="2px solid red";
        return false;
    }
    else{
        ageNode.style.border="2px solid green"; 
        return true;
    }
}
function validate3() {
    let mobile=contactNode.value;
    errorNode3.innerHTML="";
    let regex=new RegExp("^[0-9]{10}$");
    console.log(mobile);
    console.log(regex.test("mobile"));
    if(mobile===''){
        errorNode3.innerHTML="<small>Mobile number is required</small>";
        contactNode.style.border="2px solid red";
        return false;
    }
    else if(regex.test(mobile)===false){
        errorNode3.innerHTML="<small>Mobile number must be 10 digits number</small>";
        contactNode.style.border="2px solid red";
        return false;
    }
    else{
        contactNode.style.border="2px solid green";
        return true;
    }
}
function validate4() {
    let email=mailNode.value;
    errorNode4.innerHTML="";
    if(email===''){
        errorNode4.innerHTML="<small>Email is required</small>";
        mailNode.style.border="2px solid red";
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode4.innerHTML="<small>Please enter valid email</small>";
        mailNode.style.border="2px solid red";
        return false;
    }
    else{
        mailNode.style.border="2px solid green";
        return true 
    }
}
function validate5() {
    let uname=unameNode.value;
    errorNode5.innerHTML="";
    if(uname===''){
        errorNode5.innerHTML="<small>username is required</small>";
        unameNode.style.border="2px solid red";
        return false;
    }
    else if(uname.length<3 || uname.length>10){
        errorNode5.innerHTML="<small>username must be 3 to 10 characters long</small>";
        unameNode.style.border="2px solid red";
        return false;
    }
    else{
        unameNode.style.border="2px solid green";
        return true;
    }
}
function validate6() {
    let pass=passNode.value;
    errorNode6.innerHTML="";
    let regx=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if(pass===''){
        errorNode6.innerHTML="<small>Password is required</small>";
        passNode.style.border="2px solid red";
        return false
    }
    else if(regx.test(pass)==false){
        errorNode6.innerHTML="<small>Password should be 6 to 12 characters long Password should have atleast</small>";
        let ulNode=document.createElement('ul');
        errorNode6.append(ulNode);
        ulNode.style.fontSize="10px";
        let ar=['Capital Letter','Small Letter','Digit','Special Symbol'];
        for(let val of ar){
            let liNode=document.createElement('li');
            liNode.textContent=val;
            ulNode.append(liNode);
        }
        passNode.style.border="2px solid red";
        return false
    }
    else{
        passNode.style.border="2px solid green";
        return true;
    }
}
function validate7() {
    let cpass=confirmpassNode.value;
    let pass=passNode.value;
    errorNode7.innerHTML="";
    if(cpass===''){
        errorNode7.innerHTML="<small>Password is required</small>";
        confirmpassNode.style.border="2px solid red";
        return false;
    }
    else if(cpass!=pass){
        errorNode7.innerHTML="<small>Both passwords should match</small>";
        confirmpassNode.style.border="2px solid red";
        return false;
    }
    else{
        confirmpassNode.style.border="2px solid green";
        return true;
    }
}

function validateForm() {
    let v1 = validate1();
    let v2 = validate2();
    let v3 = validate3();
    let v4 = validate4();
    let v5 = validate5();
    let v6 = validate6();
    let v7 = validate7();
    return (v1 && v2 && v3 && v4 && v5 && v6 && v7)
}