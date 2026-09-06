package com.atsensei.academy.modules.auth;

import com.fasterxml.jackson.annotation.JsonAlias;

public class AdminAuthRequestDTO {

    @JsonAlias({"passkey", "adminPassword", "secret"})
    private String password;

    public AdminAuthRequestDTO() {}

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
