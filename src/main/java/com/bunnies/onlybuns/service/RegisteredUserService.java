package com.bunnies.onlybuns.service;

import com.bunnies.onlybuns.dto.UserRequest;
import com.bunnies.onlybuns.entity.RegisteredUser;
import com.bunnies.onlybuns.entity.Role;
import com.bunnies.onlybuns.repository.RegisteredUserRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.file.AccessDeniedException;
import java.util.List;
import java.util.Optional;

@Service
public class RegisteredUserService implements UserDetailsService {
    @Autowired
    private RegisteredUserRepository registeredUserRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private RoleService roleService;

    public RegisteredUserService(){}

    public RegisteredUserService(RegisteredUserRepository registeredUserRepository){
        this.registeredUserRepository = registeredUserRepository;
    }

    public RegisteredUser findByUsername(String username) throws UsernameNotFoundException
    {
        return registeredUserRepository.findByUsername(username);
    }

    public RegisteredUser findById(long id) throws AccessDeniedException {
        return registeredUserRepository.findById(id).orElseGet(null);
    }

    public List<RegisteredUser> findAll() throws AccessDeniedException {
        return registeredUserRepository.findAll();
    }

    public RegisteredUser registerUser(UserRequest userRequest) {
        RegisteredUser u = new RegisteredUser();

        u.setName(userRequest.getName());
        u.setSurname(userRequest.getSurname());
        u.setAddress(userRequest.getAdress());

        if (registeredUserRepository.findByEmail(userRequest.getEmail()).isPresent()) {
            throw new RuntimeException("Email is already registered");
        } else if (userRequest.getEmail().isEmpty()) {
            throw new RuntimeException("Email not provided");
        }
        u.setEmail(userRequest.getEmail());
        if (registeredUserRepository.findByUsername(u.getUsername()) != null) {
            throw new RuntimeException("Username is already taken");
        }
        u.setUsername(userRequest.getUsername());

        if (!userRequest.getPassword().equals(userRequest.getConfirmPassword()))  {
            throw new RuntimeException("Passwords do not match");
        }

        // pre nego sto postavimo lozinku u atribut hesiramo je kako bi se u bazi nalazila hesirana lozinka
        // treba voditi racuna da se koristi isi password encoder bean koji je postavljen u AUthenticationManager-u kako bi koristili isti algoritam
        u.setPassword(passwordEncoder.encode(userRequest.getPassword()));

        List<Role> roles = roleService.findByName("ROLE_USER");
        u.setRoles(roles);

        u.setIsactivated(false);
        return registeredUserRepository.save(u);

    }

    public void activateUser(String email) {
        Optional<RegisteredUser> user = registeredUserRepository.findByEmail(email);
        if (user.isPresent()) {
            user.get().setIsactivated(true);
            registeredUserRepository.save(user.get());
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        RegisteredUser user = registeredUserRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
        } else {
            return user;
        }
    }
}
