
function displayPage() {
  document.getElementById('personalpage').innerHTML = "You are inside Personal Page";
}

function displaySmallBusinessPage() {
  var i=1;
  var j=3;
  var k=i+j;
  console.log(k);
  // document.body.style.backgroundImage = "url('./staticcontents/smallbusinesspageimage.jpg')";
}

function createLoginDiv() {
  var logindiv = document.createElement("div");
  document.getElementById("loginformdiv").appendChild(logindiv);

  var form = logindiv.appendChild(document.createElement("form"));
  form.name= "login";
  form.type= 'text';

  var username = form.appendChild(document.createElement("input"));
  username.name = 'Username field';
  username.type = 'text';
  username.placeholder = 'Username';


}
