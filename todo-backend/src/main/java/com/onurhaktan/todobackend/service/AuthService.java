package com.onurhaktan.todobackend.service;

import com.onurhaktan.todobackend.dto.JwtAuthResponse;
import com.onurhaktan.todobackend.dto.LoginDto;
import com.onurhaktan.todobackend.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    JwtAuthResponse login(LoginDto loginDto);
}
