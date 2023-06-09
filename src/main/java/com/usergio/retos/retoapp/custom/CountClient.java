package com.usergio.retos.retoapp.custom;

import com.usergio.retos.retoapp.modelo.entidad.Client;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
@Builder
public class CountClient {
    private long total;
    private Client client;
}
