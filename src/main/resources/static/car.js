function getAllCars() {
  $.ajax({
    url: "/api/Car/all",
    type: "GET",
    dataType: "json",
    success: function (cars) {
      // Crear una tabla para mostrar los carros
      var table = $("<table>");

      // Crear encabezado de la tabla
      var thead = $("<thead>").appendTo(table);
      var headerRow = $("<tr>").appendTo(thead);
      $("<th>").text("ID").appendTo(headerRow);
      $("<th>").text("Nombre").appendTo(headerRow);
      $("<th>").text("Marca").appendTo(headerRow);
      $("<th>").text("Año").appendTo(headerRow);
      $("<th>").text("Descripción").appendTo(headerRow);

      // Crear cuerpo de la tabla
      var tbody = $("<tbody>").appendTo(table);

      // Recorrer los carros y agregar filas a la tabla
      for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        var row = $("<tr>").appendTo(tbody);
        $("<td>").text(car.idCar).appendTo(row);
        $("<td>").text(car.name).appendTo(row);
        $("<td>").text(car.brand).appendTo(row);
        $("<td>").text(car.year).appendTo(row);
        $("<td>").text(car.description).appendTo(row);
      }

      // Limpiar el contenido existente antes de mostrar la tabla
      $("#car-list").empty();

      // Agregar la tabla al contenedor
      $("#car-list").append(table);
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function saveCarForm(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  var name = $("#name").val();
  var brand = $("#brand").val();
  var year = $("#year").val();
  var description = $("#description").val();

  // Crear un objeto JSON con los valores
  var newCar = {
    name: name,
    brand: brand,
    year: year,
    description: description
  };

  // Realizar la petición POST para guardar el carro
  $.ajax({
    url: "/api/Car/save",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(newCar),
    success: function () {
      // Vaciar el formulario después de guardar el carro
      $("#car-form")[0].reset();
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function validateForm() {
  var name = document.getElementById("name").value;
  var brand = document.getElementById("brand").value;
  var year = document.getElementById("year").value;
  var description = document.getElementById("description").value;

  if (name === "" || brand === "" || year === "" || description === "") {
    // Mostrar un mensaje de error o tomar la acción que desees
    alert("Por favor, completa todos los campos requeridos.");
    return false; // Indica que la validación falló
  }

  return true; // Indica que la validación fue exitosa
}

function validateForm() {
  var name = document.getElementById("name").value;
  var brand = document.getElementById("brand").value;
  var year = document.getElementById("year").value;
  var description = document.getElementById("description").value;

  if (name === "" || brand === "" || year === "" || description === "") {
    // Mostrar un mensaje de error o tomar la acción que desees
    alert("Por favor, completa todos los campos requeridos.");
    return false; // Indica que la validación falló
  }

  return true; // Indica que la validación fue exitosa
}

  
  