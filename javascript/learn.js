
function light(sw) {
  let pic;
  if (sw == 0) {
    pic = "th-removebg-preview.png"
  } else {
    pic = "th (1).jpg"
  }
  document.getElementById('myImage').src = pic;
}
