var btn = document.querySelector("#btn"),
  obsh = document.querySelector("#obsh"),
  simple = document.querySelector("#simple"),
  nulevka = document.querySelector("#nulevka"),
  deist = document.querySelector("#deist"),
  btn = document.querySelector("#btn"),
  services = document.querySelector("#services"),
  proizv = document.querySelector("#proizv"),
  ved = document.querySelector("#ved"),
  another = document.querySelector("#another"),
  torg = document.querySelector("#torg"),
  count = document.querySelector("#count");

// Basic function
btn.onclick = function () {
  if (obsh.checked) {
    if (nulevka.checked) {
      nulevka.value = 10000;
    } else {
      nulevka.value = 0;
    }
    if (deist.checked) {
      deist.value = 20000;
    } else {
      deist.value = 0;
    }
  } else {
    if (nulevka.checked) {
      nulevka.value = 5000;
    } else {
      nulevka.value = 0;
    }
    if (deist.checked) {
      deist.value = 15000;
    } else {
      deist.value = 0;
    }
  }

  if (services.checked) {
    services.value = 15000;
  } else {
    services.value = 0;
  }
  if (proizv.checked) {
    proizv.value = 20000;
  } else {
    proizv.value = 0;
  }
  if (ved.checked) {
    ved.value = 25000;
  } else {
    ved.value = 0;
  }
  if (another.checked) {
    another.value = 15000;
  } else {
    another.value = 0;
  }
  if (torg.checked) {
    torg.value = 25000;
  } else {
    torg.value = 0;
  }

  var sum =
    Number(services.value) +
    Number(proizv.value) +
    Number(ved.value) +
    Number(another.value) +
    Number(torg.value) +
    Number(nulevka.value) +
    Number(deist.value) +
    count.value * 20000;
  out.innerHTML = sum;
};
