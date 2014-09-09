$(document).ready(function(){
 
  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("oY4adTVLir0PWYObKTbWVUoodLvanPTBa4OCa3gS", "xNtrHbujEDhTZjYVKnBcYTySLphRpJjxsIYcbPBJ");
 
  // Setup the form to watch for the submit event
  $('#contactForm').submit(function(e){
    e.preventDefault();
 
    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = { 
      name: document.getElementById('contact-name').value, 
      email: document.getElementById('contact-email').value,
      message: document.getElementById('contact-message').value
    }
    
    // Run our Parse Cloud Code and 
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#response').html('Email sent!').addClass('success').fadeIn('fast');
      },
 
      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Email not sent!').addClass('error').fadeIn('fast');
      }
    });
  });
 
});