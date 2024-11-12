package com.bunnies.onlybuns.exception;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ResourceConflictException extends RuntimeException {
    private static final long serialVersionUID = 1791564636123821405L;

    private Long resourceId;

    public ResourceConflictException(Long resourceId, String message) {
        super(message);
        this.setResourceId(resourceId);
    }

}
