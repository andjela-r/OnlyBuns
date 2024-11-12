package com.bunnies.onlybuns.composite_key;

import com.bunnies.onlybuns.entity.Post;
import com.bunnies.onlybuns.entity.RegisteredUser;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class LikeId implements Serializable {
    private Post post;
    private RegisteredUser registereduser;
}
