function login() {
    const nameEl = document.querySelector("#username");
    const passEl = document.querySelector("#password");
    localStorage.setItem("password", passEl.value);
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "gameplay.html";
  }
  