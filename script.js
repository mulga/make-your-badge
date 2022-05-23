// name

function changeName() {
  var name = document.getElementById("name");
  var nameBadge = document.getElementById("nameBadge");
  nameBadge.innerHTML = name.value;
}

// roles

document.getElementById("roles").onchange = function () {
  var role = document.getElementById("roles").value;
  var roleBadge = document.getElementById("roleBadge");

  if (role == "teacher") {
    roleBadge.innerHTML = "Teacher";
  } else if (role == "student") {
    roleBadge.innerHTML = "Student";
  } else if (role == "manager") {
    roleBadge.innerHTML = "Manager";
  } else if (role == "asisstant") {
    roleBadge.innerHTML = "Asisstant";
  } else if (role == "accountant") {
    roleBadge.innerHTML = "Accountant";
  }
};

// colors

document.getElementById("colors").onchange = function () {
  var clr = document.getElementById("colors").value;

  if (clr == "red") {
    document.getElementById("displayBadge").style.background =
      "linear-gradient(262deg, rgba(247,38,38,0.3) 0%, rgba(86,67,204,0.6) 100%)";
  } else if (clr == "green") {
    document.getElementById("displayBadge").style.background =
      "linear-gradient(262deg, rgba(38,247,41,0.3) 0%, rgba(86,67,204,0.6) 100%)";
  } else if (clr == "pink") {
    document.getElementById("displayBadge").style.background =
      "linear-gradient(262deg, rgba(247,38,228,0.3) 0%, rgba(204,67,67,0.6) 100%)";
  } else if (clr == "gold") {
    document.getElementById("displayBadge").style.background =
      "linear-gradient(262deg, rgba(247,38,38,0.3) 0%, rgba(203,204,67,0.6) 100%)";
  } else if (clr == "orange") {
    document.getElementById("displayBadge").style.background =
      "linear-gradient(262deg, rgba(247,167,38,0.3) 0%, rgba(203,204,67,0.61) 100%)";
  }
};

// user image settings

const imageInput = document.getElementById("fileInput");

imageInput.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploadedImage = reader.result;
    document.querySelector(
      "#userImageBadge"
    ).style.backgroundImage = `url(${uploadedImage})`;
  });
  reader.readAsDataURL(this.files[0]);
});

// download image

function download() {
  // auswählen vom Bereich, welcher man Screenshotten möchte
  const screenShotTarget = document.querySelector(".displayBadge");

  // screenshot bereich angeben
  // cdn einfügen im head Bereich
  html2canvas(screenShotTarget).then((canvas) => {
    const baseImageLink = canvas.toDataURL("image/png"); // erstellt einen Link zum herunterladen
    var aTag = document.createElement("a"); // erstellt ein A tag
    aTag.setAttribute("href", baseImageLink); // setzt einen Link, welcher heruntergeladen werden soll
    aTag.setAttribute("download", "Lebenslauf.png"); // lässt zu damit man etwas herunterladen kann
    aTag.click(); // es wird dadruch automatisch auf das aTag geklickt, welcher den download startet

    //Beispiel html  <a href="baseImageLink" download="Lebenslauf.png"></a>
  });
}
