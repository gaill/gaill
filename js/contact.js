$(function(){
    $('form').submit(function(e){
        var thisForm = $(this);
        //Prevent the default form action
        e.preventDefault();
       
        //Display the "loading" message
        $("#loading").fadeIn(function(){
        //Post the form to the send script
            $.ajax({
                type: 'POST',
                url: thisForm.attr("action"),
                data: thisForm.serialize(),
                //Wait for a successful response
                success: function(data){
                    //Hide the "loading" message
                    $("#loading").fadeOut(function(){
                    //Display the "success" message
                    $("#success").text(data).fadeIn(function(){
                        thisForm.find(".input").val("");
                        $(this).delay(1500).fadeOut();
                    });
                    });
                },

            });
        });
    })
});
(function($){

$(document).ready(function () {
var form = $("form");
var name = $("#name");
var email = $("#email");
var message = $("#message");
var dom = $("body");

function leaveField() {
    if( name.val() === "" ) {
        name.css("border", "none");
    }
    if ( email.val() === "") {
        email.css("border", "none");
    }
    if( message.val() === "") {
        message.css("border", "none");
    }
}

function validateName(){

    if(name.val().length < 3){
        name.css('borderLeft', '3px solid red').attr('placeholder', 'Enter your name');
        return false;
    }
    else{
        name.css('borderLeft', '3px solid #99cc66').attr('placeholder', 'Your name');
        return true;
    }
}

function validateEmail(){
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var demail= email.attr("value");
    if(!regex.test(demail)){
        email.css('borderLeft', '3px solid red').attr('placeholder', 'Enter your email');
        return false;
    }
    else{
        email.css('borderLeft', '3px solid #99cc66').attr('placeholder', 'Your email');
        return true;
    }
}

function validateMessage(){

    if(message.val().length < 1){
        message.css('borderLeft', '3px solid red').attr('placeholder', 'Feel free to enter text here');
        return false;
    }
    else{           
        message.css('borderLeft', '3px solid #99cc66').attr('placeholder', 'Your message');
        return true;
    }
}

name.blur(validateName);
message.blur(validateMessage);
email.blur(validateEmail);
dom.click(leaveField);
name.keyup(validateName);
email.keyup(validateEmail);
message.keyup(validateMessage);
$('#contact #submit').click(function(){
    if (validateName() && validateEmail() &&validateMessage())
    {
        return true;
    }
    else 
    {
        return false;
    }
});
});

})(jQuery)