package com.atsensei.academy.modules.enquiry;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class EnquiryRequestDTO {

    @NotBlank(message = "Student full name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    private String name;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[6-9]\\d{9}$", message = "Phone must be a valid 10-digit Indian mobile number")
    private String phone;

    private String email;

    @NotBlank(message = "Target course selection is required")
    private String courseCode;

    private String batchPreference;

    // Minor / Parent Guardian fields
    private String parentName;
    private String parentPhone;
    private Boolean parentConsentGiven;

    public EnquiryRequestDTO() {}

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getCourseCode() { return courseCode; }
    public void setCourseCode(String courseCode) { this.courseCode = courseCode; }

    public String getBatchPreference() { return batchPreference; }
    public void setBatchPreference(String batchPreference) { this.batchPreference = batchPreference; }

    public String getParentName() { return parentName; }
    public void setParentName(String parentName) { this.parentName = parentName; }

    public String getParentPhone() { return parentPhone; }
    public void setParentPhone(String parentPhone) { this.parentPhone = parentPhone; }

    public Boolean getParentConsentGiven() { return parentConsentGiven; }
    public void setParentConsentGiven(Boolean parentConsentGiven) { this.parentConsentGiven = parentConsentGiven; }
}
