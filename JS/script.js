let expandModal = function (modal, span) {
    document.getElementById(modal).style.display = "block";

    document.getElementById(span).addEventListener("click", function () {
        document.getElementById(modal).style.display = "none";
    });
};


let showHide = function (type, id) {
    if (type == "show") {
        document.getElementById(id).style.visibility = 'visible';
    } else {
        document.getElementById(id).style.visibility = 'hidden';
    }
}

function change(type) {
    switch (type) {
        case "page1":
            document.getElementById("laptop").src = 'https://res.cloudinary.com/kimchidrwas/image/upload/v1646248030/Portafolio%20UI%20%2A/Web/WebEjemplo1_ygrlk1.png';
            break;
        case "page2":
            document.getElementById("laptop").src = 'https://res.cloudinary.com/kimchidrwas/image/upload/v1646248025/Portafolio%20UI%20%2A/Web/WebEjemplo2_mynwyv.png';
            break;
        case "page3":
            document.getElementById("laptop").src = 'https://res.cloudinary.com/kimchidrwas/image/upload/v1646248027/Portafolio%20UI%20%2A/Web/WebEjemplo3_hcl6ml.png';
            break;
        case "page4":
            document.getElementById("laptop").src = 'https://res.cloudinary.com/kimchidrwas/image/upload/v1646248027/Portafolio%20UI%20%2A/Web/WebEjemplo4_bo1jdw.png';
            break;
    }
}