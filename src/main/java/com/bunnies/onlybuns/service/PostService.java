package com.bunnies.onlybuns.service;

import com.bunnies.onlybuns.entity.Post;
import com.bunnies.onlybuns.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getRecentPosts() {
        return postRepository.findAllByOrderByTimeCreatedDesc();  // Return the latest posts
    }
}
