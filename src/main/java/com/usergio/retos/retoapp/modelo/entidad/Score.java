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
    @Table(name="score")
    public class Score implements Serializable {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long idScore;
        private String messageText;
        private int stars;

        @OneToOne
        @JsonIgnoreProperties("score")
        private Reservation reservation;
    }

