function dropdownFunc(id_dropdown, id_btn) {
  document.getElementById(id_dropdown).classList.toggle("show");

  var dropdown = document.getElementById(id_btn);
  var dropbtn = document.getElementById(id_btn);

  dropbtn.style.background = "#008cdb";

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (
      openDropdown.classList.contains("show") &&
      openDropdown.id != id_dropdown
    ) {
      openDropdown.classList.remove("show");
      if (document.getElementsByClassName("dropbtn")[i].id != id_btn) {
        document.getElementsByClassName("dropbtn")[i].style.background =
          "#041e33";
      }
    }
  }
}

function contactSelect(type, fieldId1, fieldId2) {
  var contact = document.getElementById(type);
  if (contact.classList.contains("select-opt")) return;
  else {
    var temp = document.getElementsByClassName("select-opt");
    temp[0].classList.add("nonselect-opt");
    temp[0].classList.remove("select-opt");

    document.getElementById(fieldId1).style.display = "block";
    document.getElementById(fieldId2).style.display = "none";

    contact.classList.remove("nonselect-opt");
    contact.classList.toggle("select-opt");
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        document.getElementsByClassName("dropbtn")[i].style.background =
          "#041e33";
      }
    }
  }
};
