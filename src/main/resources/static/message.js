function getAllMessages() {
  $.ajax({
    url: "/api/Message/all",
    type: "GET",
    dataType: "json",
    success: function (messages) {
      // Crear una tabla para mostrar los carros
      var table = $("<table>");

      // Crear encabezado de la tabla
      var thead = $("<thead>").appendTo(table);
      var headerRow = $("<tr>").appendTo(thead);
      $("<th>").text("ID").appendTo(headerRow);
      $("<th>").text("Mensage").appendTo(headerRow);

      // Crear cuerpo de la tabla
      var tbody = $("<tbody>").appendTo(table);

      // Recorrer los carros y agregar filas a la tabla
      for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        var row = $("<tr>").appendTo(tbody);
        $("<td>").text(message.idMessage).appendTo(row);
        $("<td>").text(message.messageText).appendTo(row);
      }

      // Limpiar el contenido existente antes de mostrar la tabla
      $("#message-list").empty();

      // Agregar la tabla al contenedor
      $("#message-list").append(table);
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function saveMessageForm(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  var messageText = $("#messageText").val();

  // Crear un objeto JSON con los valores
  var newMessage = {
    messageText: messageText
  };

  // Realizar la petición POST para guardar el carro
  $.ajax({
    url: "/api/Message/save",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(newMessage),
    success: function () {
      // Vaciar el formulario después de guardar el carro
      $("#message-form")[0].reset();
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function validateForm() {
  var messageText = document.getElementById("messageText").value;

  if ( messageText === "") {
    // Mostrar un mensaje de error o tomar la acción que desees
    alert("Por favor, completa todos los campos requeridos.");
    return false; // Indica que la validación falló
  }

  return true; // Indica que la validación fue exitosa
}

function validateForm() {
  var messageText= document.getElementById("messageText").value;

  if ( messageText === "") {
    // Mostrar un mensaje de error o tomar la acción que desees
    alert("Por favor, completa todos los campos requeridos.");
    return false; // Indica que la validación falló
  }

  return true; // Indica que la validación fue exitosa
}

  
  