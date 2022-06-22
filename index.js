function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
if (detectMob()) {
  console.warn("mobile!!!");
}

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

  if (detectMob()) {
    audio.volume = 0.05;
  } else {
    audio.volume = 0.4;
  }
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
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

window.onload = function () {
  // find the element that you want to drag.
  var box = document.getElementById("player");

  /* listen to the touchMove event,
  every time it fires, grab the location
  of touch and assign it to box */

  box.addEventListener("touchmove", function (e) {
    // grab the location of touch
    var touchLocation = e.targetTouches[0];

    // assign box new coordinates based on the touch.
    box.style.left = touchLocation.pageX - 63 + "px";
    box.style.top = touchLocation.pageY - 63 + "px";
  });

  /* record the position of the touch
  when released using touchend event.
  This will be the drop position. */

  box.addEventListener("touchend", function (e) {
    // current box position.
    var x = parseInt(box.style.left);
    var y = parseInt(box.style.top);
  });
};
