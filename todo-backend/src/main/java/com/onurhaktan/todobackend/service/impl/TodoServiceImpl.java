package com.onurhaktan.todobackend.service.impl;

import com.onurhaktan.todobackend.dto.TodoDto;
import com.onurhaktan.todobackend.entity.Todo;
import com.onurhaktan.todobackend.repository.TodoRepository;
import com.onurhaktan.todobackend.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;

    private final ModelMapper modelMapper;
    @Override
    public TodoDto addTodo(TodoDto todoDto) {

        // convert TodoDto into Todo Jpa entity
        Todo todo = modelMapper.map(todoDto, Todo.class);

        // Todo Jpa Entity
        Todo savedTodo = todoRepository.save(todo);

        return modelMapper.map(savedTodo, TodoDto.class);
    }
}
