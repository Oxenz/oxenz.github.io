var $modal_login = document.querySelector(".modal-login");
var $login = document.querySelector(".login");
var $modal_map = document.querySelector(".modal-map");
var $btn_map = document.querySelector(".btn-map");
var $overlay = document.querySelector(".modal-overlay");

var $close1 = document.querySelector(".close1");
var $close2 = document.querySelector(".close2");

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




	$btn_map.addEventListener("click", function() {
		$modal_map.classList.add("open-popup");
		$overlay.style.display = "block";
	});

	$close2.addEventListener("click", function() {
		$modal_map.classList.toggle("open-popup");
		$overlay.style.display = "none";
	});

	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if ($modal_map.classList.contains("open-popup")) {
				$modal_map.classList.remove("open-popup");
				$overlay.style.display = "none";
			}
		}
	});
