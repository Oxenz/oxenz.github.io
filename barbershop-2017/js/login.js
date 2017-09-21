var $modal_login = document.querySelector(".modal-login");
var $login = document.querySelector(".login");
var $overlay = document.querySelector(".modal-overlay");

var $close1 = document.querySelector(".close1");

	$login.addEventListener("click", function() {
		$modal_login.classList.add("open-popup");
		$overlay.style.display = "block";
	});

	$close1.addEventListener("click", function() {
		$modal_login.classList.toggle("open-popup");
		$overlay.style.display = "none";
	});

	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if ($modal_login.classList.contains("open-popup")) {
				$modal_login.classList.remove("open-popup");
				$overlay.style.display = "none";
			}
		}
	});