package com.atsensei.academy.modules.enquiry;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "guardian_consents")
public class GuardianConsentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String parentName;

    @Column(nullable = false, length = 15)
    private String parentPhone;

    @Column(nullable = false)
    private boolean consentGiven;

    @Column(nullable = false)
    private LocalDateTime consentedAt;

    public GuardianConsentEntity() {
        this.consentedAt = LocalDateTime.now();
    }

    public GuardianConsentEntity(String parentName, String parentPhone, boolean consentGiven) {
        this.parentName = parentName;
        this.parentPhone = parentPhone;
        this.consentGiven = consentGiven;
        this.consentedAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getParentName() { return parentName; }
    public void setParentName(String parentName) { this.parentName = parentName; }

    public String getParentPhone() { return parentPhone; }
    public void setParentPhone(String parentPhone) { this.parentPhone = parentPhone; }

    public boolean isConsentGiven() { return consentGiven; }
    public void setConsentGiven(boolean consentGiven) { this.consentGiven = consentGiven; }

    public LocalDateTime getConsentedAt() { return consentedAt; }
    public void setConsentedAt(LocalDateTime consentedAt) { this.consentedAt = consentedAt; }
}
