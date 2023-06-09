package com.usergio.retos.retoapp.service;

import com.usergio.retos.retoapp.modelo.entidad.Client;
import com.usergio.retos.retoapp.modelo.repositorio.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    private ClientRepository repository;
    public List<Client> getAll(){
        return repository.findAll();

    }
    public Client save(Client client){
        return repository.save(client);
    }
    public Optional<Client> getFindById(long id){
        return repository.findById(id);
    }
    public Client updateClient(Client client){
        Optional<Client> clientUpdate = getFindById(client.getIdClient());
        if(clientUpdate.isPresent()){
            clientUpdate.get().setEmail(client.getEmail());
            clientUpdate.get().setPassword(client.getPassword());
            clientUpdate.get().setName(client.getName());
            clientUpdate.get().setAge(client.getAge());
            return repository.save(clientUpdate.get());
        }
        else{
            return client;
        }
    }
    public void deleteClient(long id){
        repository.deleteById(id);
    }

}
