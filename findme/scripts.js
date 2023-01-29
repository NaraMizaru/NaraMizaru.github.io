const text = document.querySelector(".text-type");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Muhammad Hilal";
  }, 0);
  setTimeout(() => {
    text.textContent = "NaraMizaru";
  }, 4000);
  setTimeout(() => {
    text.textContent = "@hi.lalszzz";
  }, 8000);
  setTimeout(() => {
    text.textContent = "@md.hilallsluvyaa";
  }, 12000);
}
textLoad();
setInterval(textLoad, 16000); 