package com.bunnies.onlybuns.repository;

import com.bunnies.onlybuns.composite_key.LikeId;
import com.bunnies.onlybuns.entity.Like;
import com.bunnies.onlybuns.entity.Post;
import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Like, LikeId> {
    int countByPostId(Long postId);
}