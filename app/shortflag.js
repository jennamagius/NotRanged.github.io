document.addEventListener("click", function() {
  try {
    window.short_style_flag = document.querySelector("#short-style-checkbox").checked;
  } catch (e) {
    console.log(e);
  }
});
