package com.bunnies.onlybuns.service;

import com.bunnies.onlybuns.entity.Post;
import com.bunnies.onlybuns.repository.CommentRepository;
import com.bunnies.onlybuns.repository.LikeRepository;
import com.bunnies.onlybuns.repository.PostRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final LikeRepository likeRepository;
    private final CommentRepository commentRepository;

    public PostService(PostRepository postRepository, LikeRepository likeRepository, CommentRepository commentRepository) {
        this.postRepository = postRepository;
        this.likeRepository = likeRepository;
        this.commentRepository = commentRepository;
    }

    public List<Post> getRecentPosts() {
        return postRepository.findAllByOrderByTimecreatedDesc();  // Return the latest posts
    }

    @PostConstruct
    public void initialize() {
        System.out.println("Starting the like count update on application startup...");

        // Update the like count for each post when the application starts
        postRepository.findAll().forEach(post -> {
            updateLikeCount(post.getId());
        });

        postRepository.findAll().forEach(post -> {
            updateCommentCount(post.getId());
        });

        System.out.println("Like counts updated.");
    }

    public void updateLikeCount(Long postid) {
        int likeCount = likeRepository.countByPostId(postid);

        Post post = postRepository.findById(postid)
                .orElseThrow(() -> new RuntimeException("Post not found"));

        post.setLikes(Math.toIntExact(likeCount));

        postRepository.save(post);
    }

    public void updateCommentCount(Long postid) {
        int commentCount = commentRepository.countByPostId(postid);

        Post post = postRepository.findById(postid)
                .orElseThrow(() -> new RuntimeException("Post not found"));

        post.setComments(Math.toIntExact(commentCount));

        postRepository.save(post);
    }
}
