 /**
 * PHP Email Form Validation - v3.5
 * URL: https://bootstrapmade.com/php-email-form/
 * Author: BootstrapMade.com
 */
//    (function () {
//      "use strict";

//     let forms = document.querySelectorAll('.php-email-form');

//     forms.forEach( function(e) {
//       e.addEventListener('submit', function(event) {
//         event.preventDefault();

//         let thisForm = this;

//         let action = thisForm.getAttribute('action');
//         let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
//        if( ! action ) {
//          displayError(thisForm, 'The form action property is not set!')
//           return;
//         }
//         thisForm.querySelector('.loading').classList.add('d-block');
//         thisForm.querySelector('.error-message').classList.remove('d-block');
//       thisForm.querySelector('.sent-message').classList.remove('d-block');

//        let formData = new FormData( thisForm );
//         if ( recaptcha ) {
//          if(typeof grecaptcha !== "undefined" ) {
//            grecaptcha.ready(function() {
//              try {
//                grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
//                .then(token => {
//                  formData.set('recaptcha-response', token);
//                  php_email_form_submit(thisForm, action, formData);
//                })
// } catch(error) {
//                displayError(thisForm, error)
//              }
//            });
//          } else {
//            displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//          }
//        } else {
//         php_email_form_submit(thisForm, action, formData);
//        }
//      });
//    });

//    function php_email_form_submit(thisForm, action, formData) {
//     fetch(action, {
//        method: 'POST',
//        body: formData,
//        headers: {'X-Requested-With': 'XMLHttpRequest'}
//      })
//     .then(response => {
//        return response.text();
//      })
//      .then(data => {
//        thisForm.querySelector('.loading').classList.remove('d-block');
//        if (data.trim() == 'OK') {
//          thisForm.querySelector('.sent-message').classList.add('d-block');
//          thisForm.reset(); 
//        } else { 
//                 throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
//        }
//      })
//      .catch((error) => {
//        displayError(thisForm, error);
//     });
//    }

//    function displayError(thisForm, error) {
//      thisForm.querySelector('.loading').classList.remove('d-block');
//      thisForm.querySelector('.error-message').innerHTML = error;
//     thisForm.querySelector('.error-message').classList.add('d-block');
//   }

//  })();
// function validate(){
//   var username=document.getElementById("name")
//   var email=document.getElementById("email")
//   var subject=document.getElementById("subject")
//   var message=document.getElementById("message")
//   var letters= /^[A-Za-z]+$/
//    if(username.value.trim()==""){
//     document.getElementById("error-message").innerHTML="The box is empty"
//     return false;
//   }
//   if(username.value.length<5){
//     document.getElementById("error-message").innerHTML="Name should contain atleast 5 Elements"
//     return false;
//   }
//   if(email.value==""){
//     document.getElementById("error-message").innerHTML="The email box is empty"
//     return false;
//   }
//   if(subject.value==""){
//     document.getElementById("error-message").innerHTML="subject box is empty"
//     return false;
//   }
//   if(subject.value.length<5){
//     document.getElementById("error-message").innerHTML="Subject should contain atleast 5 Elements"
//     return false;
//   }
//   if(message.value==""){
//     document.getElementById("error-message").innerHTML="Message box is empty"
//     return false;
//   }
//   if(message.value.length<10){
//     document.getElementById("error-message").innerHTML="messege should contain atleast 10 Elements"
//     return false; 
//   }
//   return true;
//   
//  }