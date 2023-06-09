package com.usergio.retos.retoapp.custom;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
@Builder
public class StatusAmount {
    private int completed;
    private int cancelled;
}
