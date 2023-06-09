function getAllGamas() {
  $.ajax({
    url: "/api/Gama/all",
    type: "GET",
    dataType: "json",
    success: function (gamas) {
      // Crear una tabla para mostrar los carros
      var table = $("<table>");

      // Crear encabezado de la tabla
      var thead = $("<thead>").appendTo(table);
      var headerRow = $("<tr>").appendTo(thead);
      $("<th>").text("ID").appendTo(headerRow);
      $("<th>").text("Nombre").appendTo(headerRow);
      $("<th>").text("Descripción").appendTo(headerRow);

      // Crear cuerpo de la tabla
      var tbody = $("<tbody>").appendTo(table);

      // Recorrer los carros y agregar filas a la tabla
      for (var i = 0; i < gamas.length; i++) {
        var gama = gamas[i];
        var row = $("<tr>").appendTo(tbody);
        $("<td>").text(gama.idGama).appendTo(row);
        $("<td>").text(gama.name).appendTo(row);
        $("<td>").text(gama.description).appendTo(row);
      }

      // Limpiar el contenido existente antes de mostrar la tabla
      $("#gama-list").empty();

      // Agregar la tabla al contenedor
      $("#gama-list").append(table);
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function saveGamaForm(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  var name = $("#name").val();
  var description = $("#description").val();

  // Crear un objeto JSON con los valores
  var newGama = {
    name: name,
    description: description
  };

  // Realizar la petición POST para guardar el carro
  $.ajax({
    url: "/api/Gama/save",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(newGama),
    success: function () {
      // Vaciar el formulario después de guardar el carro
      $("#gama-form")[0].reset();
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function validateForm() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;

  if (name === "" || description === "") {
    // Mostrar un mensaje de error o tomar la acción que desees
    alert("Por favor, completa todos los campos requeridos.");
    return false; // Indica que la validación falló
  }

  return true; // Indica que la validación fue exitosa
}

function validateForm() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;

  if (name === "" || description === "") {
    // Mostrar un mensaje de error o tomar la acción que desees
    alert("Por favor, completa todos los campos requeridos.");
    return false; // Indica que la validación falló
  }

  return true; // Indica que la validación fue exitosa
}

  
  