function login(event) {
    event.preventDefault();
  
    var userEmail = document.getElementById("useremail").value;
    var userPassword = document.getElementById("userpassword").value;
    var loginuser = {};
  
    var Ls = JSON.parse(localStorage.getItem("flipkartusers"));
  
    var flag = false;
    for (var i = 0; i < Ls.length; i++) {
      if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
        flag = true;
        loginuser = Ls[i];
      }
    }
    if (flag == true) {
      localStorage.setItem("flipkartCurrentUser", JSON.stringify(loginuser));
  
      alert("login successfull");
      window.location.href = `./multiproduct.html`;
    } else {
      alert("credintials not matched");
    }
  }
  