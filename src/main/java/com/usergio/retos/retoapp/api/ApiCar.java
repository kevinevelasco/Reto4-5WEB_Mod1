package com.usergio.retos.retoapp.api;

import com.usergio.retos.retoapp.modelo.entidad.Car;
import com.usergio.retos.retoapp.modelo.entidad.Client;
import com.usergio.retos.retoapp.modelo.entidad.Gama;
import com.usergio.retos.retoapp.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
    @RequestMapping("api/Car")
    @CrossOrigin("*")
    public class ApiCar {
        @Autowired
        private CarService service;

        @GetMapping("/all")
        public List<Car> getAll(){return service.getAll();}

    @GetMapping("/{id}")
    public Optional<Car> getCar(@PathVariable long id) {
        return service.getFindById(id);
    }
        @PostMapping("/save")
        public ResponseEntity save(@RequestBody Car car){
            service.save(car);
            return ResponseEntity.status(201).build();
        }
        @PutMapping("/update")
        public ResponseEntity update(@RequestBody Car car){
            service.updateCar(car);
            return ResponseEntity.status(201).build();
        }
        @DeleteMapping("/{id}")
        public ResponseEntity delete(@PathVariable long id){
            service.deleteCar(id);
            return ResponseEntity.status(204).build();
        }
    }

