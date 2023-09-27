let eye = document.getElementById('eye');
eye.addEventListener('click',display);

function display()
{
  let pass = document.getElementById('password');
  if(pass.type == "password")
  {
    pass.type = "text";
    eye.className = "fa fa-eye";
  }
  else{
    pass.type = "password";
    eye.className = "fa fa-eye-slash";
  }
}


//create account validation starts

let signButton = document.querySelector('#sig_but');
signButton.addEventListener('click',validate);

function validate()
{
  let name = document.querySelector('#name');
  let suggest_name = document.querySelector('#text_valid');
  if(name.value == '')
  {
    suggest_name.innerHTML = 'name must be entered';
    suggest_name.classList.add('text_valid');
    name.style.border = "1px solid red";
  }
  else{
    suggest_name.innerHTML = '';
    name.style.border = "";
  }
  
  if(name.value.length>=20)
  {
    suggest_name.innerHTML = "enter a valid name";
    suggest_name.classList.add('text_valid');
  }

  //email validation
  let email = document.querySelector('#email');
  let e_valid = document.querySelector('#email_valid');
  if(email.value == '')
  {
    e_valid.innerHTML = 'email must be entered';
    email.style.border = '1px solid red';
    e_valid.classList.add('text_valid');
  }
  else if(email.value.includes('@'))
  {
    e_valid.innerHTML = '';
    email.style.border = '';
  }
   else{
    e_valid.innerHTML = 'email must includes @';
    e_valid.classList.add('text_valid');
  }

  //password validation
  let password = document.querySelector('#password');
  let pass_validation = document.querySelector('#password_valid');
  if(password.value == '')
  {
    password.style.border = "1px solid red";
    pass_validation.innerHTML = "must enter password atleast 8 characters";
    pass_validation.classList.add('text_valid');
  }
  else{
    password.style.border = '';
    pass_validation.innerHTML = '';
  }
}
// create account validation ends


//login account validation starts
let logButton = document.querySelector('#log_but');
logButton.addEventListener('click',valid);

function valid()
{
 let Lname = document.querySelector("#log_name");
 let lname_valid = document.querySelector('#lname_valid');

 if(Lname.value == '')
 {
    lname_valid.innerHTML = "Enter a valid name";
    lname_valid.classList.add('text_valid');
    Lname.style.border = "1px solid red";
 }
 else{
    lname_valid.innerHTML = '';
    Lname.style.border = '';
 }

 let l_password = document.querySelector('#l_password');
 let pass_valid = document.querySelector('#pass_valid');

 if(l_password.value == '')
 {
    pass_valid.innerHTML = 'Enter a password';
    l_password.style.border = "1px solid red";
    pass_valid.classList.add('text_valid');
 }

 else{
    pass_valid.innerHTML = '';
    l_password.style.border = '';
 }

 if(l_password.value.length<8)
 {
    pass_valid.innerHTML = 'password must be atleast 8 characters';
    pass_valid.classList.add('text_valid');
 }
}

// login account validation ends
