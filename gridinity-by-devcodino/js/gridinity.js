// TEXT AREA AUTO HEIGHT
function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = element.scrollHeight + "px";
}

// Navbar Toggle
let navbar_toggle_icon = document.querySelector(".gy-nav-link-toggle");
let navbar_elements = document.querySelectorAll(".gy-nav-items");
let toggle = false;

navbar_toggle_icon.addEventListener("click", () => {
  if (toggle == false) {
    toggle = true;
    navbar_elements.forEach((element) => {
      let op = 0.1; // initial opacity
      element.style.opacity = 0;
      element.classList.add("show-nav-elements");
      let timer = setInterval(function () {
        if (op >= 1) {
          clearInterval(timer);
        }
        element.style.opacity = op;
        op += op * 0.1;
      }, 10);
    });
  } else {
    toggle = false;
    navbar_elements.forEach((element) => {
      element.classList.remove("show-nav-elements");
    });
  }
});

// NAVBAR TOGGLE
$(window).bind("mousewheel", function (event) {
  if (event.originalEvent.wheelDelta >= 0) {
    $(".gy-navbar ").fadeIn("slow");
    $(".nav-mouseover").fadeOut("fast");
    console.log("Scroll up");
  } else {
    console.log("Scroll down");
    $(".gy-navbar ").fadeOut("slow");
    $(".nav-mouseover").fadeIn("fast");
  }
});

$(".nav-mouseover").on("mouseover", () => {
  $(".gy-navbar ").fadeIn("slow");
});
