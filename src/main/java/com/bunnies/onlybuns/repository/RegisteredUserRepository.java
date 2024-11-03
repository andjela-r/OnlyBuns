package com.bunnies.onlybuns.repository;

import com.bunnies.onlybuns.entity.RegisteredUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, UUID> {
    Optional<RegisteredUser> findByEmail(String email); //Optional is for not returning nulls

    Optional<RegisteredUser> findByUsername(String username);
}
