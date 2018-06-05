$( document ).ready(function() {
    $('.img-bg').each(function (e) {
        var bg = 'url(' + $(this).find('> img').attr('src') + ')';
        $(this).css('background-image', bg);
    });
});



//TOP PAGE SLIDESHOW

var slideIndex = 0;
var textIndex = 0;
showSlides();

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
	var i;
	var text = document.getElementsByClassName("image-text");
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

		for (i = 0; i < slides.length; i++) {
		    slides[i].style.display = "none";  
		}
		    slideIndex++;
		    
		for (i = 0; i < text.length; i++) {
		    text[i].style.display = "none";  
		}
		    textIndex++;

		if (slideIndex > slides.length) {
		    slideIndex = 1;
		    textIndex =1;
		}

		for (i = 0; i < dots.length; i++) {
		    dots[i].className = dots[i].className.replace(" active", "");
		}
		    slides[slideIndex-1].style.display = "block";  
		    text[textIndex-1].style.display = "block"; 
		    dots[slideIndex-1].className += " active";
		    setTimeout(showSlides, 6000); // Change image every 6 seconds
		}



//USER REVIEWS SLIDESHOW

function plusSlides(n) {
  showReviews(userIndex += n);
  showReviews(reviewIndex += n);
}

function currentSlide(n) {
  showReviews(userIndex = n);
  showReviews(reviewIndex = n);
}

	
var userIndex = 0;
var reviewIndex = 0;
showReviews();


function showReviews() {
	var i;
	var userText = document.getElementsByClassName("user-review");
	var reviews = document.getElementsByClassName("user-image");
		    
		for (i = 0; i < reviews.length; i++) {
		    reviews[i].style.display = "none";  
		}
		    reviewIndex++; 
		    
		for (i = 0; i < userText.length; i++) {
		    userText[i].style.display = "none";  
		}
		    userIndex++;

		    console.log(userText);

		if (reviewIndex > reviews.length) {
		    reviewIndex = 1;
		    userIndex = 1;
		}

		    reviews[reviewIndex-1].style.display = "block";  
		    userText[userIndex-1].style.display = "block"; 
		    setTimeout(showReviews, 8000); // Change image every 8 seconds

}



// FORM VALIDATION 

function validateForm() {
	nameInput = document.getElementById("name-required");
	emailInput = document.getElementById("email-required");
	subjectInput = document.getElementById("subject-required");
	messageInput = document.getElementById("message-required");
    var w = document.forms["myForm"]["username"].value;
    var x = document.forms["myForm"]["emailaddress"].value;
    var y = document.forms["myForm"]["subject"].value;
    var z = document.forms["myForm"]["message"].value;
	
    if (w == "") {
    	nameInput.innerHTML = "Please enter your name";
        return false;
    }
	 else if (x == "") {
	   	emailInput.innerHTML = "Please enter your email address";
	        return false;
	    }

	else if (y == "") {
	    	subjectInput.innerHTML = "Please enter the subject";
	        return false;
	    }

	else if (z == "") {
	    	messageInput.innerHTML = "Please enter the message";
	        return false;
	    }
}	


















