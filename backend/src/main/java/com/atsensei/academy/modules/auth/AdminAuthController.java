package com.atsensei.academy.modules.auth;

import com.atsensei.academy.common.ApiResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin/auth")
public class AdminAuthController {

    @Value("${admin.access.password:sensei@admin2026}")
    private String adminPassword;

    @PostMapping("/verify")
    public ResponseEntity<ApiResponse<Map<String, Object>>> verifyAdminPassword(@RequestBody(required = false) Map<String, String> payload) {
        String inputPassword = (payload != null) ? payload.get("password") : null;
        if (inputPassword != null && inputPassword.trim().equals(adminPassword.trim())) {
            String sessionToken = "sensei_adm_" + UUID.randomUUID().toString().replace("-", "");
            Map<String, Object> data = new HashMap<>();
            data.put("authenticated", true);
            data.put("token", sessionToken);
            data.put("role", "SUPER_ADMIN");
            data.put("adminName", "Academy Administrator");
            return ResponseEntity.ok(ApiResponse.ok("Authentication successful. Welcome Sensei Admin.", data));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ApiResponse.error("Invalid Admin Access Password. Access Denied."));
    }
}
