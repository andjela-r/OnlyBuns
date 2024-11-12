package com.bunnies.onlybuns.entity;

import com.bunnies.onlybuns.composite_key.LikeId;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "like", schema = "public")
@IdClass(LikeId.class)
@Getter @Setter @NoArgsConstructor
public class Like {
    @Id
    @ManyToOne
    @JoinColumn(name = "postid")
    public Post post;

    @Id
    @ManyToOne
    @JoinColumn(name = "userid")
    public RegisteredUser registereduser;
}
