
const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});



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