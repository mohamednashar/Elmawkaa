
let kemeya = document.getElementById("kemeya");
let next = document.getElementById("next");
let back = document.getElementById("back");
let matloba = document.getElementById("matloba");
matloba.style.display = "none";





// Checking if the value of ادخل الكمية isn't empty. if it is empty we can't go to next page and and the border color will be red.
//otherwise we can go to next page.

next.addEventListener("click", (eo) => {
  if (kemeya.value == '' || kemeya.value == null) {
    matloba.style.display = "block";
    kemeya.focus();
    kemeya.style.focus = "none";

    kemeya.style.border = "1px solid red";

  }

  else {
    
    
    window.location.href = "form_2.html"
    
    
    
  }

}
)

// If input isn't empty border color will turn to green.

kemeya.addEventListener("change", (eo) => {

  kemeya.style.border = "2px solid rgb(60, 234, 60)";
  matloba.style.display = "none";

}
)




  



    

