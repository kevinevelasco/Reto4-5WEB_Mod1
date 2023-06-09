package com.usergio.retos.retoapp.service;

import com.usergio.retos.retoapp.modelo.entidad.Car;
import com.usergio.retos.retoapp.modelo.repositorio.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {
    @Autowired
    private CarRepository repository;
    public List<Car> getAll(){
        return repository.findAll();
    }
    public Car save(Car car){
        return repository.save(car);

    }
    public Optional<Car> getFindById(Long id){
        return repository.findById(id);
    }
    public Car updateCar(Car car){
        Optional<Car> carUpdate = getFindById(car.getIdCar());
        if(carUpdate.isPresent()){
            carUpdate.get().setName(car.getName());
            carUpdate.get().setBrand(car.getBrand());
            carUpdate.get().setYear(car.getYear());
            carUpdate.get().setDescription(car.getDescription());
            //carUpdate.get().setGama(car.getGama());
            return repository.save(carUpdate.get());
        }
        else{
            return car;
        }
    }
    public void deleteCar(long id){
        repository.deleteById(id);
    }
}
