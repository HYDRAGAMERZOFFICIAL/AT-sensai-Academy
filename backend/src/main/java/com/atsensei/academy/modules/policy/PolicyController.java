package com.atsensei.academy.modules.policy;

import com.atsensei.academy.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/policies")
public class PolicyController {

    private final PolicyService policyService;

    public PolicyController(PolicyService policyService) {
        this.policyService = policyService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<PolicyEntity>>> getAllPolicies() {
        return ResponseEntity.ok(ApiResponse.ok("Policies retrieved", policyService.getAllPolicies()));
    }

    @GetMapping("/{key}")
    public ResponseEntity<ApiResponse<PolicyEntity>> getPolicyByKey(@PathVariable String key) {
        return policyService.getPolicyByKey(key)
                .map(policy -> ResponseEntity.ok(ApiResponse.ok("Policy found", policy)))
                .orElseGet(() -> ResponseEntity.status(404)
                        .body(ApiResponse.error("Policy not found: " + key)));
    }
}
