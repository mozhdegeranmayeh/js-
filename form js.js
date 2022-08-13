

//TODO : Its a Completed Code
function formvalid() {
  let = document.getElementById("pass").value;

  if () {
    document.getElementById("vaild-pass").innerHTML = "you have to fill this field";
    return false;
  } else {
    document.getElementById("vaild-pass").innerHTML = "";
  }
}

function show() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("showimg").src =
      "https://static.thenounproject.com/png/777494-200.png";
  } else {
    x.type = "password";
    document.getElementById("showimg").src =
      
  }
}
