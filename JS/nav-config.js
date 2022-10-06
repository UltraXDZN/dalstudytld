var has_started = true;



var isMusicON = true;

function changeMusicState(){
	if (isMusicON){
		document.getElementById("Music Yasuke").src = "./Assets/Music/Music OFF.png";
		document.getElementById("Yasuke Theme").pause();
	}
	else{
		document.getElementById("Music Yasuke").src = "./Assets/Music/Music ON.png";
		document.getElementById("Yasuke Theme").play();
	}
	isMusicON = !isMusicON;	
}

document.body.addEventListener("mousemove", function () {
	if (isMusicON){
		document.getElementById("Yasuke Theme").muted = false;
		document.getElementById("Yasuke Theme").play();
		has_started = false;
	}
});

//whenever section is scrolled, i.e(website scrolled) preform this.
$(".section").scroll(function(){
  // get the top of the page position
  var scroll = $(this).scrollTop();
  
  var active = () =>{
    $(".logoBig").addClass("scrolled")
    $(".logoSmall").addClass("appear")
  }
  
  var remove = () =>{
    $(".logoBig").removeClass("scrolled")
	$(".logoSmall").removeClass("appear")
  }
  
  //shorthand if to check if we have scrolled 
  scroll > 150 ? active() : remove()
  
});

$(".awesome__slider").slick({
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: false,
	adaptiveWidth: false,
	lazyLoad: "ondemand",
	prevArrow:
			'<button class="prev-img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"/></svg></button>',
		nextArrow:
			'<button class="next-img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right next-img"><polyline points="9 18 15 12 9 6"/></svg></button>'
});

	

