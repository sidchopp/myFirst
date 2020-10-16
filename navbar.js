// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size 
// and TOP Button dispaly
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "12px 10px";
    document.getElementById("logo").style.fontSize = "20px";
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("iconsInNavbar").fontSize = "20px";

    
   } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "65px";
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("iconsInNavbar").fontSize = "5px";

   
 }
} 




// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
