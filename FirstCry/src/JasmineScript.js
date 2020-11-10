
  function showErr(ele, msg){
      $get(ele).innerText = msg;
  }
  
  function validate()
  {
      let email = document.regForm.email.value;
      let password = document.regForm.password.value;
      let confirmPassword = document.regForm.confirmPassword.value;      
      if(email == ""){
          showErr("errEmail", "Email is mandatory")
          return false;
      }else{
          showErr("errEmail", "")
      }
      let regEx = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
      if(regEx.test(email) == false){
          showErr("errEmail", "Email is not in a valid format")
          return false;
      } else {
          showErr("errEmail", "")
      }
      //password validation
      if(password == "" || password == null){
          showErr("errPassword", "Password is mandatory")
          return false;
      }else{
          showErr("errPassword", "")
      }
      //email validation    
     
      if(confirmPassword == "" || confirmPassword == null){
          showErr("errconfirmPassword", "Password is mandatory")
          return false;
      }else{
          showErr("errconfirmPassword", "")
      }                          
      return true;//After all the validations are done successfully
  }
