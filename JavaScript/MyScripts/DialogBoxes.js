

// alert :   ok
// bootstrap alerts: danger alert, info alert, warning alert, success alert
// confirm : ok cancel
//prompt : user input (string)  ok cancel


let showAlert=function(){
    window.alert("In next 3 days west maharashtra may have heavy rain");
}

function confirmB(){
    let confirmation=window.confirm("Do you really want to finish the exam?");
    console.log(confirmation);
    if(confirmation)
        {
        //document.write("<b>Your Exam submitted successfully</b>");
        let bNode=document.createElement("b");
        bNode.textContent="Your Exam submitted successfully";
        document.body.append(bNode);
        }
    else
        document.write("<b>You can continue with Exam</b>");
}

function test(){
    console.log("Function called");
}