package com.employee.employee.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Unfortunately User with id: " + id + " is not found!");
    }
}
