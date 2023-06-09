package com.usergio.retos.retoapp.service;

import com.usergio.retos.retoapp.modelo.entidad.Gama;
import com.usergio.retos.retoapp.modelo.repositorio.GamaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GamaService {
    /**
     * Metodo getAll listo los registros de la tabla gama
     * @return List Objeto Gama
     */
    @Autowired

    private GamaRepository repository;

    public List<Gama> getAll(){
        return repository.findAll();
    }

    public Gama save (Gama gama){
        return repository.save(gama);
    }

    /**
     * metodo para encontrar un objeto por id(primary key) tipo long
     * @param id (primary key)
     * @return Optional<Gama>
     */
    public Optional<Gama> getFindById(Long id){

        return repository.findById(id);
    }
    public Gama updateGama(Gama gama){
        Optional<Gama> gamaUpdate = getFindById(gama.getIdGama());
        if(gamaUpdate.isPresent()){
            gamaUpdate.get().setDescription(gama.getDescription());
            gamaUpdate.get().setName(gama.getName());
            return repository.save(gamaUpdate.get());
        }
        else{
            return gama;
        }
    }
    public void deleteGama(long id){
        repository.deleteById(id);
    }

}
