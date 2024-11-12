package com.bunnies.onlybuns.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "comment", schema = "public")
@Getter @Setter @NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    @Column
    public String content;

    @ManyToOne
    @JoinColumn(name = "userid")
    public RegisteredUser registereduser;

    @ManyToOne
    @JoinColumn(name = "postid")
    public Post post;

    @Column
    public LocalDateTime timecreated = LocalDateTime.now();
}
