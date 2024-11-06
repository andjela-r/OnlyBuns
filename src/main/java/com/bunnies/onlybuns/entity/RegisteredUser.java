package com.bunnies.onlybuns.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "registereduser", schema = "public")
@Getter @Setter @NoArgsConstructor
public class RegisteredUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    public String username;

    @Column
    public String name;

    @Column
    public String password;

    @Column
    public String surname;

    @Column
    public String email;

    @Column
    public String address;

    @Column
    public int followers;

    @Column
    public int posts;

    @Column
    public int following;

    @Column
    public Boolean isactivated;

    @Column
    public Boolean isadmin;

    @Column
    public LocalDateTime datecreated = LocalDateTime.now();;

    @Column
    public LocalDateTime lastlogin;

}


