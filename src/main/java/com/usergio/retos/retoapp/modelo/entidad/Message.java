package com.usergio.retos.retoapp.modelo.entidad;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

    @AllArgsConstructor
    @NoArgsConstructor
    @ToString
    @Data
    @Entity
    @Table(name="message")
    public class Message implements Serializable {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long idMessage;
        private String messageText;
        @ManyToOne
        @JoinColumn(name = "carId")
        @JsonIgnoreProperties({"messages","reservations"})
        private Car car;
        @ManyToOne
        @JoinColumn(name = "clientId")
        @JsonIgnoreProperties({"messages","reservations"})
        private Client client;

}
