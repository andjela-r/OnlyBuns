package com.bunnies.onlybuns.dto;

import lombok.Getter;
import lombok.Setter;

// DTO koji preuzima podatke iz HTML forme za registraciju
@Setter
@Getter
public class UserRequest {

    private String name;

    private String surname;

    private String adress;

    private String email;

    private String username;

    private String password;

    private String confirmPassword;

}