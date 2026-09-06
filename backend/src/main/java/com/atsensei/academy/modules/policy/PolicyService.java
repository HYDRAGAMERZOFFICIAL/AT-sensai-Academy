package com.atsensei.academy.modules.policy;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class PolicyService {

    private final PolicyRepository policyRepository;

    public PolicyService(PolicyRepository policyRepository) {
        this.policyRepository = policyRepository;
    }

    public List<PolicyEntity> getAllPolicies() {
        return policyRepository.findAll();
    }

    public Optional<PolicyEntity> getPolicyByKey(String key) {
        return policyRepository.findByPolicyKey(key);
    }
}
