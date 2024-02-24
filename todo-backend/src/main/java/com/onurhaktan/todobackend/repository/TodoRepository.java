package com.onurhaktan.todobackend.repository;

import com.onurhaktan.todobackend.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
