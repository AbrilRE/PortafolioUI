
let expandModal = function (modal,span) {
    document.getElementById(modal).style.display = "block";

    document.getElementById(span).addEventListener("click", function () {
        document.getElementById(modal).style.display = "none";
      });
  };

  
let showHide = function(type,id){
    if (type == "show"){
        document.getElementById(id).style.visibility = 'visible';
    }

    else{
        document.getElementById(id).style.visibility = 'hidden';
    }
}

