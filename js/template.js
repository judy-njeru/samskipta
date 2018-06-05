
// $(function(){
//   $("#header").load("header.html"); 
//   $("#footer").load("footer.html"); 
// });
 
//HEADER AND FOOTER LOAD FUNCTION

$(document).ready(function(){
  	$("#header").load("header.html",function(){
  	
  		//HAMBURGER MENU FUNCTION FOR MOBILE SITE

		$('<span class="fader"/>').appendTo('header');

		$('.openMenu').on("click", function() {
			$('body').toggleClass('menu-opened');
			console.log('hello');
		return false;
		}); 

		$('.fader').click(function() {
			$('body').removeClass('menu-opened');
		});		
	});
}); 


$(document).ready(function(){
  $("#footer").load("footer.html",function(){
  });  
});
	

// DROPDOWN MENU

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}







