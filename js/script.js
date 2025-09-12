document.addEventListener("DOMContentLoaded", function () {
  let welcomeText = document.getElementById("welcome-text");
  let name = "user";
  welcomeText.textContent = `Hi ${name}, Welcome To Website`;

  function updateTime() {
    let now = new Date();
    document.getElementById("current-time").textContent =
      "Current time : " + now.toString();
  }
  updateTime();

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let tglLahir = document.getElementById("tglLahir").value;
    let gender = document.querySelector("input[name='gender']:checked").value;
    let pesan = document.getElementById("pesan").value;

    document.getElementById("out-nama").textContent = nama;
    document.getElementById("out-tgl").textContent = tglLahir;
    document.getElementById("out-gender").textContent = gender;
    document.getElementById("out-pesan").textContent = pesan;

    updateTime();
  });
});
