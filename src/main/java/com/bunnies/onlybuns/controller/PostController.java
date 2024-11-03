package com.bunnies.onlybuns.controller;

import com.bunnies.onlybuns.entity.Post;
import com.bunnies.onlybuns.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/public")
    public ResponseEntity<List<Post>> getPublicPosts() {
        List<Post> posts = postService.getRecentPosts();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }
}
