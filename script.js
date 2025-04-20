//scroll into view
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  //matching target
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//scroll top
document.querySelector(".top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
