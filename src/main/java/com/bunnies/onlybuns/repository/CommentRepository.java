package com.bunnies.onlybuns.repository;

import com.bunnies.onlybuns.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    int countByPostId(Long postId);
    List<Comment> findByPostId(Long postId);
}
