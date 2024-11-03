package com.bunnies.onlybuns.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "post", schema = "public")
@Getter @Setter @NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "registereduserid")
    public RegisteredUser registeredUser;

    @Column(nullable = false)
    public String description;

    @Column(nullable = false)
    public String image;  // Link to the image

    @Column(name="compressedimage")
    public String compressedImage;

    @Column
    public String location;

    @Column(name="timecreated")
    public LocalDateTime timeCreated = LocalDateTime.now();

    @Column
    public int likes;

    @Column
    public int comments;

    @Column(name="isdeleted")
    public boolean isDeleted;

    @Column(name="isforad")
    public boolean isForAd;
}
