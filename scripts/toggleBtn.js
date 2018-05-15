var navicon = document.getElementById('toggleIcon');
var navEl = document.getElementById('nav');

// function toggleMenu(){
	// if(navEl.style.display == "block") {
		// navEl.style.display = "none";
	// } else {
		// navEl.style.display = "block";
	// }
// };

function toggleMenu(){
	navEl.classList.toggle('shown');
};

navicon.addEventListener("click", toggleMenu, false);