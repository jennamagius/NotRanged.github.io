document.addEventListener("click", function() {
  try {
    let checkbox = document.querySelector("#short-style-checkbox");
    window.xworker.short_style_flag = checkbox.checked;
    window.simulationworker.short_style_flag = checkbox.checked; 
  } catch (e) {
    console.log(e);
  }
});
