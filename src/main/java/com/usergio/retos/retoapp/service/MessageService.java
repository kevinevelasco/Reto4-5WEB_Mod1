package com.usergio.retos.retoapp.service;

import com.usergio.retos.retoapp.modelo.entidad.Message;
import com.usergio.retos.retoapp.modelo.repositorio.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {
    @Autowired
    private MessageRepository repository;

    public List<Message> getAll(){
        return repository.findAll();
    }
    public Message save(Message message){
        return repository.save(message);
    }
    public Optional<Message> findById(long id){
    return repository.findById(id);
    }
    public Message updateMessage(Message message){
        Optional<Message>messageUpdate = findById(message.getIdMessage());
        if(messageUpdate.isPresent()){
            messageUpdate.get().setMessageText(message.getMessageText());
            messageUpdate.get().setCar(message.getCar());
            messageUpdate.get().setClient(message.getClient());
            return repository.save(messageUpdate.get());
        }
        else{
            return message;
        }
    }
    public void deleteMessage(long id){
        repository.deleteById(id);
    }
}
