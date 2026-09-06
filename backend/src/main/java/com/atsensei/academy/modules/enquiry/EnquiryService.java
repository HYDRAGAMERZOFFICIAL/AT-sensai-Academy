package com.atsensei.academy.modules.enquiry;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

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
        enquiry.setLocality(dto.getLocality());
        enquiry.setStatus("NEW");

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

    public Optional<EnquiryEntity> updateEnquiryStatus(Long id, String newStatus, String adminNotes) {
        return enquiryRepository.findById(id).map(enquiry -> {
            if (newStatus != null && !newStatus.isBlank()) {
                enquiry.setStatus(newStatus.toUpperCase().trim());
                if ("CONTACTED".equalsIgnoreCase(newStatus) || "COUNSELED".equalsIgnoreCase(newStatus) || "ENROLLED".equalsIgnoreCase(newStatus)) {
                    if (enquiry.getContactedAt() == null) {
                        enquiry.setContactedAt(LocalDateTime.now());
                    }
                }
            }
            if (adminNotes != null) {
                enquiry.setAdminNotes(adminNotes.trim());
            }
            return enquiryRepository.save(enquiry);
        });
    }

    public boolean deleteEnquiry(Long id) {
        if (enquiryRepository.existsById(id)) {
            enquiryRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public int bulkDeleteEnquiries(List<Long> ids) {
        if (ids == null || ids.isEmpty()) return 0;
        int count = 0;
        for (Long id : ids) {
            if (enquiryRepository.existsById(id)) {
                enquiryRepository.deleteById(id);
                count++;
            }
        }
        return count;
    }

    public int bulkUpdateStatus(List<Long> ids, String newStatus) {
        if (ids == null || ids.isEmpty() || newStatus == null || newStatus.isBlank()) return 0;
        int count = 0;
        String statusFormatted = newStatus.toUpperCase().trim();
        for (Long id : ids) {
            Optional<EnquiryEntity> opt = enquiryRepository.findById(id);
            if (opt.isPresent()) {
                EnquiryEntity e = opt.get();
                e.setStatus(statusFormatted);
                if ("CONTACTED".equalsIgnoreCase(statusFormatted) || "COUNSELED".equalsIgnoreCase(statusFormatted) || "ENROLLED".equalsIgnoreCase(statusFormatted)) {
                    if (e.getContactedAt() == null) {
                        e.setContactedAt(LocalDateTime.now());
                    }
                }
                enquiryRepository.save(e);
                count++;
            }
        }
        return count;
    }
}
