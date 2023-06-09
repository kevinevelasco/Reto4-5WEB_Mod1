function getAllClients() {
  $.ajax({
    url: "/api/Client/all",
    type: "GET",
    dataType: "json",
    success: function (clients) {
      // Crear una tabla para mostrar los carros
      var table = $("<table>");

      // Crear encabezado de la tabla
      var thead = $("<thead>").appendTo(table);
      var headerRow = $("<tr>").appendTo(thead);
      $("<th>").text("ID").appendTo(headerRow);
      $("<th>").text("Email").appendTo(headerRow);
      $("<th>").text("Password").appendTo(headerRow);
      $("<th>").text("Nombre").appendTo(headerRow);
      $("<th>").text("age").appendTo(headerRow);

      // Crear cuerpo de la tabla
      var tbody = $("<tbody>").appendTo(table);

      // Recorrer los carros y agregar filas a la tabla
      for (var i = 0; i < clients.length; i++) {
        var client = clients[i];
        var row = $("<tr>").appendTo(tbody);
        $("<td>").text(client.idClient).appendTo(row);
        $("<td>").text(client.email).appendTo(row);
        $("<td>").text(client.password).appendTo(row);
        $("<td>").text(client.name).appendTo(row);
        $("<td>").text(client.age).appendTo(row);
      }

      // Limpiar el contenido existente antes de mostrar la tabla
      $("#client-list").empty();

      // Agregar la tabla al contenedor
      $("#client-list").append(table);
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function saveClientForm(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  var email = $("#email").val();
  var password = $("#password").val();
  var name = $("#name").val();
  var age = $("#age").val();

  // Crear un objeto JSON con los valores
  var newClient = {
    email: email,
    password: password,
    name: name,
    age: age
  };

  // Realizar la petición POST para guardar el carro
  $.ajax({
    url: "/api/Client/save",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(newClient),
    success: function () {
      // Vaciar el formulario después de guardar el carro
      $("#client-form")[0].reset();
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  if (email === "" || password === "" || name === "" || age === "") {
    // Mostrar un mensaje de error o tomar la acción que desees
    alert("Por favor, completa todos los campos requeridos.");
    return false; // Indica que la validación falló
  }

  return true; // Indica que la validación fue exitosa
}

function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  if (email === "" || password === "" || name === "" || age === "") {
    // Mostrar un mensaje de error o tomar la acción que desees
    alert("Por favor, completa todos los campos requeridos.");
    return false; // Indica que la validación falló
  }

  return true; // Indica que la validación fue exitosa
}

  
  