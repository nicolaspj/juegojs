//------------JUEGO-------------------------------------

var cronometro;

var score;

$("#start").click(function () {
  var golpes = 0;
  var jugadas;
  $("#vegeta2").hide();
  segundos = 30;
  minutos = 0;
  s = document.getElementById("seg");
  m = document.getElementById("min");

  cronometro = setInterval(function () {
    if (segundos == 0) {
      segundos = 30;
      minutos--;

      m.innerHTML = minutos;
      if (minutos == 0) {
        minutos = 0;
      }
    }
    s.innerHTML = segundos;
    segundos--;
    if (minutos == 0 && segundos == 0) {
      jugadas++;
      deterner();
      tablaPuntuacion();
    }
  }, 1000);

  //-----------------Onclick---------------------------------
  $(document).ready(function () {
    $("#left").click(function () {
      $("#vegeta2").show();
      $("#vegeta").hide();
      golpes++;
    });

    $("#right").click(function () {
      $("#vegeta").show();
      $("#vegeta2").hide();
      golpes++;
    });
  });

  //--------------Teclado------------------------------------
  document.addEventListener("keydown", function (event) {
    if (event.keyCode == 37) {
      // left arrow
      $("#vegeta2").show();
      $("#vegeta").hide();
      golpes++;
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.keyCode == 39) {
      // right arrow

      $("#vegeta2").hide();
      $("#vegeta").show();
      golpes++;
    }
  });

  function deterner() {
    $("#vegeta").stop();
    $("#vegeta2").stop();
    var tiempoActual = clearInterval(cronometro);
    alert("Tu marca de golpes es de :" + golpes);
  }

  function tablaPuntuacion() {
    var nom = document.getElementById("nYa").value;
    var mail = document.getElementById("email").value;
    var tbody = $("#tabla").children("tbody");
    var table = tbody.length ? tbody : $("#tabla");
    table.append("<tr><td>" + nom + "</td><td>" + golpes + "<td></tr>");
  }
});

//*-----------------------------------------------------------------------
$("#restart").click(function () {
  var url = "juego.html";
  $(location).attr("href", url);
});

//------------------------------------------------------------------------

function validarFormulario() {
  var vValido = true;
  if (document.getElementById("nYa").value.trim() == "") {
    alert("Debe ingresar el nombre");

    vValido = false;
  }

  var expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var nom = document.getElementById("nYa").value;
  var mail = document.getElementById("email").value;

  var esValido = expReg.test(mail);
  if (vValido == true) {
    if (esValido == true) {
      alert(
        "Muy bien " + nom + "" + "intentalo de nuevo y mejora tu puntuacion"
      );
    } else {
      alert("El mail " + mail + " " + " no es valido , vuelva a intentarlo ");
    }
  }
}
