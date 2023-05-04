const hamburger = document.querySelector(".btn3");

const menu = document.querySelector(".menu");

function toggleNavbar() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

function updateSize() {
  if (window.innerWidth >= 1100) {
    menu.classList.remove("showMenu");
  }
}

updateSize();
window.addEventListener("resize", updateSize);

hamburger.addEventListener("click", toggleNavbar);

// parallax

document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    let speed = layer.getAttribute("data-speed");
    let x = (window.innerWidth - e.pageX - 40 * speed) / 100;
    let y = (window.innerWidth - e.pageY * speed) / 100;
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
}
