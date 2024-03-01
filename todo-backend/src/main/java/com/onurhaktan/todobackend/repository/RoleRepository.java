package com.onurhaktan.todobackend.repository;

import com.onurhaktan.todobackend.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findByName(String name);

}
