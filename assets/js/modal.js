// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");

var i;
for (i=0;i<imgs.length-1;i++) {
    var img = imgs[i];
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 

modalImg.onclick = function() {
  modal.style.display = "none";
}