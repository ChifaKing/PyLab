// Make the DIV element draggable:
dragElement(document.getElementById("player"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  document.getElementById(elmnt.id).onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/* Toggle Animations */
const jstoggle = document.getElementById("player");
jstoggle.addEventListener("click", () => {
  const animation = document.getElementById("player");

  const running = animation.style.animationPlayState || "paused";
  animation.style.animationPlayState =
    running === "paused" ? "running" : "paused";

  const audio = document.getElementById("bgm");
  audio.volume = 0.4;
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }

  console.log(audio.onpause);
});

$(".button_reset").click(function () {
  $("#output").empty();
});

$("#output").on("DOMSubtreeModified", function () {
  $(this)
    .children()
    .filter(function (_, elem) {
      return $(elem).text() == "\n";
    })
    .remove();
});
