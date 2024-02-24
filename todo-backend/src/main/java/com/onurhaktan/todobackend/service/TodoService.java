package com.onurhaktan.todobackend.service;

import com.onurhaktan.todobackend.dto.TodoDto;
import com.onurhaktan.todobackend.entity.Todo;

import java.util.List;

public interface TodoService {
    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodo(Long id);

    List<TodoDto> getAllTodos();

    TodoDto updateTodo(Long id, TodoDto todoDto);

    void deleteTodo(Long id);

    TodoDto completeTodo(Long id);

    TodoDto inCompleteTodo(Long id);
}
