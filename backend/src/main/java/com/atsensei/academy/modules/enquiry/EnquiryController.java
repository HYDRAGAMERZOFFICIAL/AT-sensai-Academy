package com.atsensei.academy.modules.enquiry;

import com.atsensei.academy.common.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/enquiries")
public class EnquiryController {

    private final EnquiryService enquiryService;

    public EnquiryController(EnquiryService enquiryService) {
        this.enquiryService = enquiryService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<EnquiryEntity>> submitEnquiry(@Valid @RequestBody EnquiryRequestDTO dto) {
        EnquiryEntity savedEnquiry = enquiryService.createEnquiry(dto);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Enquiry registered successfully. An academic counselor will contact you shortly.", savedEnquiry));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<EnquiryEntity>>> getAllEnquiries() {
        return ResponseEntity.ok(ApiResponse.ok("Enquiries retrieved", enquiryService.getAllEnquiries()));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<ApiResponse<EnquiryEntity>> updateStatus(
            @PathVariable Long id,
            @RequestBody(required = false) EnquiryStatusUpdateDTO dto) {
        String status = (dto != null) ? dto.getStatus() : null;
        String notes = (dto != null) ? dto.getNotes() : null;
        return enquiryService.updateEnquiryStatus(id, status, notes)
                .map(updated -> ResponseEntity.ok(ApiResponse.ok("Enquiry status updated successfully", updated)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Enquiry not found with id: " + id)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Boolean>> deleteEnquiry(@PathVariable Long id) {
        boolean deleted = enquiryService.deleteEnquiry(id);
        if (deleted) {
            return ResponseEntity.ok(ApiResponse.ok("Enquiry deleted successfully", true));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error("Enquiry not found"));
    }
}
