function getAllReservation() {
  $.ajax({
    url: "/api/Reservation/all",
    type: "GET",
    dataType: "json",
    success: function (reservations) {
      // Crear una tabla para mostrar los carros
      var table = $("<table>");

      // Crear encabezado de la tabla
      var thead = $("<thead>").appendTo(table);
      var headerRow = $("<tr>").appendTo(thead);
      $("<th>").text("ID").appendTo(headerRow);
      $("<th>").text("Fecha de inicio").appendTo(headerRow);
      $("<th>").text("Fecha de entrega").appendTo(headerRow);

      // Crear cuerpo de la tabla
      var tbody = $("<tbody>").appendTo(table);

      // Recorrer los carros y agregar filas a la tabla
      for (var i = 0; i < reservations.length; i++) {
        var reservation = reservations[i];
        var row = $("<tr>").appendTo(tbody);
        $("<td>").text(reservation.idReservation).appendTo(row);
        $("<td>").text(reservation.startDate).appendTo(row);
        $("<td>").text(reservation.devolutionDate).appendTo(row);
      }

      // Limpiar el contenido existente antes de mostrar la tabla
      $("#reservation-list").empty();

      // Agregar la tabla al contenedor
      $("#reservation-list").append(table);
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function saveReservationForm(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  var startDate = $("#startDate").val();
  var devolutionDate = $("#devolutionDate").val();

  // Crear un objeto JSON con los valores
  var newReservation = {
    startDate: startDate,
    devolutionDate: devolutionDate
  };

  // Realizar la petición POST para guardar el carro
  $.ajax({
    url: "/api/Reservation/save",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(newReservation),
    success: function () {
      // Vaciar el formulario después de guardar el carro
      $("#reservation-form")[0].reset();
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function validateForm() {
  var startDate = document.getElementById("startDate").value;
  var devolutionDate = document.getElementById("devolutionDate").value;

  if (startDate === "" || devolutionDate === "" ) {
    // Mostrar un mensaje de error o tomar la acción que desees
    alert("Por favor, completa todos los campos requeridos.");
    return false; // Indica que la validación falló
  }

  return true; // Indica que la validación fue exitosa
}

function validateForm() {
  var startDate = document.getElementById("startDate").value;
  var devolutionDate = document.getElementById("devolutionDate").value;
  
  if (startDate === "" || devolutionDate === "" ) {
    // Mostrar un mensaje de error o tomar la acción que desees
    alert("Por favor, completa todos los campos requeridos.");
    return false; // Indica que la validación falló
  }

  return true; // Indica que la validación fue exitosa
}

  
  