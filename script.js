
document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".tuner-slider");

  sliders.forEach(slider => {
    slider.addEventListener("input", (e) => {
      console.log(`${e.target.id} set to: ${e.target.value}`);
    });
  });
});
