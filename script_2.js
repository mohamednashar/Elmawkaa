let mashro3 = document.getElementById("mashro3");
let date = document.getElementById("date");
let matloba_2 = document.getElementById("matloba_2");
let matloba_3 = document.getElementById("matloba_3");

matloba_2.style.display = "none";
matloba_3.style.display = "none";


// If date input isn't empty border color will turn to green.

date.addEventListener("change", () => {

    date.style.border = "2px solid rgb(60, 234, 60)";
    matloba_3.style.display="none";

}
)

// If ادخل عنوان المشروع input isn't empty border color will turn to green.

mashro3.addEventListener("input", (eo) => {

    mashro3.style.border = "2px solid rgb(60, 234, 60)";
    matloba_2.style.display="none";
  
       

}
)

// Checking if the value of inputs aren't empty. if it is empty we can't go to next page and and the border color will be red.
//otherwise we can go to next page.

next_2.addEventListener("click", (eo) => {
    if (mashro3.value == '' || mashro3.value == null) {
        matloba_2.style.display = "block";
        mashro3.focus();
        mashro3.style.border = "1px solid red";
    }

    if (date.value == '' || date.value == null) {
        matloba_3.style.display = "block";
        date.focus();
        date.style.border = "1px solid red";

    }


    if (mashro3.value != '' && date.value != '') {
        window.location.href = "form_3.html"
    }

}
)


// Go to previous page when click السابق

back_2.addEventListener("click", () => {
    window.location.href = "form.html"

}
)





