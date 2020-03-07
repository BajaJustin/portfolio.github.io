const FOCUSEDLINK = document.querySelector("p a");

FOCUSEDLINK.onmouseover = MouseOver;
FOCUSEDLINK.onmouseout = MouseOut;

function MouseOver() {
  FOCUSEDLINK.classList.add("focused");
}

function MouseOut() {
  FOCUSEDLINK.classList.remove("focused");
}