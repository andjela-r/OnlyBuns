package com.bunnies.onlybuns.repository;

import com.bunnies.onlybuns.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findAllByOrderByTimecreatedDesc();  // Retrieve posts ordered by creation date (newest first)

}
