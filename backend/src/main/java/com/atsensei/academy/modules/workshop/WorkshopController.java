package com.atsensei.academy.modules.workshop;

import com.atsensei.academy.common.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/workshops")
public class WorkshopController {

    private final WorkshopService workshopService;

    public WorkshopController(WorkshopService workshopService) {
        this.workshopService = workshopService;
    }

    @PostMapping("/book")
    public ResponseEntity<ApiResponse<WorkshopBookingEntity>> bookWorkshop(@Valid @RequestBody WorkshopBookingDTO dto) {
        WorkshopBookingEntity booking = workshopService.bookWorkshop(dto);
        String message = "student".equalsIgnoreCase(dto.getBookingType())
                ? "Seat reserved for 100% Free Career Awareness Workshop!"
                : "Institutional workshop booking requested! Our director will contact you.";
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok(message, booking));
    }

    @GetMapping("/bookings")
    public ResponseEntity<ApiResponse<List<WorkshopBookingEntity>>> getAllBookings() {
        return ResponseEntity.ok(ApiResponse.ok("Bookings retrieved", workshopService.getAllBookings()));
    }
}
