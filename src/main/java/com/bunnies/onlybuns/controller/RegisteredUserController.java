package com.bunnies.onlybuns.controller;

import com.bunnies.onlybuns.entity.RegisteredUser;
import com.bunnies.onlybuns.service.RegisteredUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import java.nio.file.AccessDeniedException;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin
public class RegisteredUserController {

    @Autowired
    private RegisteredUserService registeredUserService;

    // Za pristup ovoj metodi neophodno je da ulogovani korisnik ima ADMIN ulogu
    // Ukoliko nema, server ce vratiti gresku 403 Forbidden
    // Korisnik jeste autentifikovan, ali nije autorizovan da pristupi resursu
    @GetMapping("/user/{userId}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_USER')")

    public RegisteredUser loadById(@PathVariable Long userId) {
        try {
            return this.registeredUserService.findById(userId);
        } catch (AccessDeniedException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/user/all")
    @PreAuthorize("hasRole('ADMIN')")
    public List<RegisteredUser> loadAll() {
        try {
            return this.registeredUserService.findAll();
        } catch (AccessDeniedException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/whoami")
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    public RegisteredUser user(Principal user) {
        return this.registeredUserService.findByUsername(user.getName());
    }

    @GetMapping("/foo")
    public Map<String, String> getFoo() {
        Map<String, String> fooObj = new HashMap<>();
        fooObj.put("foo", "bar");
        return fooObj;
    }

}
