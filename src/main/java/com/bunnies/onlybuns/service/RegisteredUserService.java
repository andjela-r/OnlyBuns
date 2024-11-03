package com.bunnies.onlybuns.service;

import com.bunnies.onlybuns.entity.RegisteredUser;
import com.bunnies.onlybuns.repository.RegisteredUserRepository;

import java.util.Optional;

public class RegisteredUserService {
    private final RegisteredUserRepository registeredUserRepository;
    //private final BCryptPasswordEncoder passwordEncoder;

    public RegisteredUserService(RegisteredUserRepository registeredUserRepository /*, BCryptPasswordEncoder passwordEncoder*/) {
        this.registeredUserRepository = registeredUserRepository;
        //this.passwordEncoder = passwordEncoder;
    }

    public RegisteredUser registerUser(RegisteredUser user) {
        if (registeredUserRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email is already registered");
        }

        if (registeredUserRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new RuntimeException("Username is already taken");
        }

        // Encrypt password before saving
        //user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setIsactivated(false);  // Set active to false until email activation
        return registeredUserRepository.save(user);
    }

    public void activateUser(String email) {
        Optional<RegisteredUser> user = registeredUserRepository.findByEmail(email);
        if (user.isPresent()) {
            user.get().setIsactivated(true);
            registeredUserRepository.save(user.get());
        }
    }
}
