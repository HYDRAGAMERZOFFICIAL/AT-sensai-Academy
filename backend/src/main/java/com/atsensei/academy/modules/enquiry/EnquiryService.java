package com.atsensei.academy.modules.enquiry;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class EnquiryService {

    private final EnquiryRepository enquiryRepository;

    public EnquiryService(EnquiryRepository enquiryRepository) {
        this.enquiryRepository = enquiryRepository;
    }

    public EnquiryEntity createEnquiry(EnquiryRequestDTO dto) {
        EnquiryEntity enquiry = new EnquiryEntity();
        enquiry.setStudentName(dto.getName());
        enquiry.setPhone(dto.getPhone());
        enquiry.setEmail(dto.getEmail());
        enquiry.setCourseCode(dto.getCourseCode());
        enquiry.setBatchPreference(dto.getBatchPreference() != null ? dto.getBatchPreference() : "Morning");
        enquiry.setStatus("PENDING");

        // Minor Protection Check for Foundation Course
        if ("foundation".equalsIgnoreCase(dto.getCourseCode())) {
            if (dto.getParentName() == null || dto.getParentName().trim().length() < 2) {
                throw new IllegalArgumentException("Parent/Guardian full name is mandatory for School Foundation Course enrollment.");
            }
            if (dto.getParentPhone() == null || !dto.getParentPhone().matches("^[6-9]\\d{9}$")) {
                throw new IllegalArgumentException("Valid 10-digit Parent/Guardian phone number is required.");
            }
            if (dto.getParentConsentGiven() == null || !dto.getParentConsentGiven()) {
                throw new IllegalArgumentException("Parent/Guardian consent must be explicitly granted.");
            }

            GuardianConsentEntity consent = new GuardianConsentEntity(
                    dto.getParentName().trim(),
                    dto.getParentPhone().trim(),
                    true
            );
            enquiry.setGuardianConsent(consent);
        }

        return enquiryRepository.save(enquiry);
    }

    @Transactional(readOnly = true)
    public List<EnquiryEntity> getAllEnquiries() {
        return enquiryRepository.findAll();
    }
}
