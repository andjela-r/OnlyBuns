package com.bunnies.onlybuns.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "registereduser", schema = "public")
@Getter @Setter @NoArgsConstructor
public class RegisteredUser implements UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "registereduser_id_seq")
    @SequenceGenerator(name = "registereduser_id_seq", sequenceName = "registereduser_id_seq", allocationSize = 1)
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

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private List<Role> roles;

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return this.isactivated;
    }
}


