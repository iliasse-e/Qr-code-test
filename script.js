// DOM elements

const instruction = document.getElementById("instructions");
const subtitle = document.getElementById("subtitle");
const qrCode = document.getElementById("qr-code");

// functions and vars
const isTrue = Math.random() >= 0.5;

// objects

const identificationState = [
    {
        location: document.getElementById("spinner-background"),
        message: "Qr scanné",
    },
    {
        location: document.getElementById("check"),
        message: "Demande validée",
        after: "Vous allez être redirigé",
    },
    {
        location: document.getElementById("error"),
        message: "Authorisation refusée",
        after: "Veuillez recharger la page et recommencer",
    }
]



// trigger spinner

qrCode.onclick = () => {
    identificationState[0].location.style.display = "block";
    instruction.innerHTML = identificationState[0].message;
    setTimeout(() => {
        identificationState[0].location.style.display = "none";
        validate()
      }, 3000);
}


// trigger check

function validate() {
    if (isTrue) {
        identificationState[1].location.style.display = "block";
        instruction.innerHTML = identificationState[1].message;
        qrCode.setAttribute("state", identificationState[1].after);
        setTimeout(() => {
            window.location.reload();
            validate()
          }, 3000);
    }
    else {
        identificationState[2].location.style.display = "block";
        instruction.innerHTML = identificationState[2].message;
        qrCode.setAttribute("state", identificationState[2].after)
    }
}
