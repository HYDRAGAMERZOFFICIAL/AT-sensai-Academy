package com.atsensei.academy.modules.enquiry;

import com.fasterxml.jackson.annotation.JsonAlias;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class EnquiryRequestDTO {

    @NotBlank(message = "Student full name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    @JsonAlias({"fullName", "studentName"})
    private String name;

    @NotBlank(message = "Phone number is required")
    private String phone;

    private String email;

    @NotBlank(message = "Target course selection is required")
    @JsonAlias({"course", "courseId", "programCode"})
    private String courseCode;

    @JsonAlias({"preferredBatch", "batch"})
    private String batchPreference;

    // Minor / Parent Guardian fields
    private String parentName;
    private String parentPhone;

    @JsonAlias({"parentConsent", "consentGiven"})
    private Boolean parentConsentGiven;

    public EnquiryRequestDTO() {}

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPhone() { 
        if (phone == null) return null;
        // Clean any non-digit chars and strip +91 or leading 0
        String digits = phone.replaceAll("\\D", "");
        if (digits.length() == 12 && digits.startsWith("91")) {
            return digits.substring(2);
        } else if (digits.length() == 11 && digits.startsWith("0")) {
            return digits.substring(1);
        }
        return digits;
    }
    public void setPhone(String phone) { this.phone = phone; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getCourseCode() { return courseCode; }
    public void setCourseCode(String courseCode) { this.courseCode = courseCode; }

    public String getBatchPreference() { return batchPreference; }
    public void setBatchPreference(String batchPreference) { this.batchPreference = batchPreference; }

    public String getParentName() { return parentName; }
    public void setParentName(String parentName) { this.parentName = parentName; }

    public String getParentPhone() { 
        if (parentPhone == null) return null;
        String digits = parentPhone.replaceAll("\\D", "");
        if (digits.length() == 12 && digits.startsWith("91")) {
            return digits.substring(2);
        } else if (digits.length() == 11 && digits.startsWith("0")) {
            return digits.substring(1);
        }
        return digits;
    }
    public void setParentPhone(String parentPhone) { this.parentPhone = parentPhone; }

    public Boolean getParentConsentGiven() { return parentConsentGiven != null && parentConsentGiven; }
    public void setParentConsentGiven(Boolean parentConsentGiven) { this.parentConsentGiven = parentConsentGiven; }
}
