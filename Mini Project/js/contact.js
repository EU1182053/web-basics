$("#formValidation").validate({
    rules:{
        
        email:{
            email:true
        },
        phone:{
            number: true,
            minlength:10,
            maxlength:10
        },
        
        formMessage:{
            minlength:5,
            maxlength:500
        }
    },
    messages:{
        
        email:"Please Enter Valid Email address",
        phone:"Please Enter a Valid Phone number",
       
        formMessage:"Please enter Your message"
    },

    submitHandler: function(form) {
      form.submit();
    }
   });