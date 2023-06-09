package com.usergio.retos.retoapp.api;

import com.usergio.retos.retoapp.modelo.entidad.Client;
import com.usergio.retos.retoapp.modelo.entidad.Message;
import com.usergio.retos.retoapp.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/Message")
@CrossOrigin("*")
public class ApiMessage {
    @Autowired
    private MessageService service;
    @GetMapping("/all")
    public List<Message> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Message> getMessage(@PathVariable long id){
        return service.findById(id);
    }
    @PostMapping("/save")
    public ResponseEntity save(@RequestBody Message message){
        service.save(message);
        return ResponseEntity.status(201).build();
    }
    @PutMapping("/update")
    public ResponseEntity update(@RequestBody Message message){
        service.updateMessage(message);
        return ResponseEntity.status(201).build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable long id){
        service.deleteMessage(id);
        return ResponseEntity.status(204).build();
    }
}
