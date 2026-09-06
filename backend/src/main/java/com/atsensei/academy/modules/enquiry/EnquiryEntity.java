package com.atsensei.academy.modules.enquiry;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "enquiries")
public class EnquiryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String studentName;

    @Column(nullable = false, length = 15)
    private String phone;

    private String email;

    @Column(nullable = false, length = 50)
    private String courseCode;

    private String batchPreference;

    private String locality;

    @Column(nullable = false, length = 20)
    private String status = "NEW";

    @Column(length = 1000)
    private String adminNotes;

    private LocalDateTime contactedAt;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "guardian_consent_id")
    private GuardianConsentEntity guardianConsent;

    public EnquiryEntity() {
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getStudentName() { return studentName; }
    public void setStudentName(String studentName) { this.studentName = studentName; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getCourseCode() { return courseCode; }
    public void setCourseCode(String courseCode) { this.courseCode = courseCode; }

    public String getBatchPreference() { return batchPreference; }
    public void setBatchPreference(String batchPreference) { this.batchPreference = batchPreference; }

    public String getLocality() { return locality; }
    public void setLocality(String locality) { this.locality = locality; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getAdminNotes() { return adminNotes; }
    public void setAdminNotes(String adminNotes) { this.adminNotes = adminNotes; }

    public LocalDateTime getContactedAt() { return contactedAt; }
    public void setContactedAt(LocalDateTime contactedAt) { this.contactedAt = contactedAt; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public GuardianConsentEntity getGuardianConsent() { return guardianConsent; }
    public void setGuardianConsent(GuardianConsentEntity guardianConsent) { this.guardianConsent = guardianConsent; }
}
