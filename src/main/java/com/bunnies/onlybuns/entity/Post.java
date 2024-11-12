package com.bunnies.onlybuns.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "post", schema = "public")
@Getter @Setter @NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "registereduserid")
    public RegisteredUser registereduser;

    @Column(nullable = false)
    public String description;

    @Column(nullable = false)
    public String image;  // Link to the image

    @Column
    public String compressedimage;

    @Column
    public String location;

    @Column
    public LocalDateTime timecreated = LocalDateTime.now();

    @Column
    public int likes;

    @Column
    public int comments;

    @Column
    public boolean isdeleted;

    @Column
    public boolean isforad;
}
