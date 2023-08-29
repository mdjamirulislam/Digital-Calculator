const Delete = document.querySelector("#clear");
const Reset = document.querySelector("#reset");
const Allinput = document.querySelector("#col");

Delete.addEventListener("click", function () {
  document.querySelector("#inputwra").value = "";
});

Allinput.map((val) => {
  const vall = val;
  function namee(dy) {
    vall.value = dy;
  }
  namee();
});
