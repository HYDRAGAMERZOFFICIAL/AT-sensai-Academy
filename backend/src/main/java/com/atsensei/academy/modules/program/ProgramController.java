package com.atsensei.academy.modules.program;

import com.atsensei.academy.common.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/programs")
public class ProgramController {

    private final ProgramService programService;

    public ProgramController(ProgramService programService) {
        this.programService = programService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ProgramEntity>>> getAllPrograms(
            @RequestParam(required = false) String category) {
        List<ProgramEntity> programs = (category != null && !category.isBlank())
                ? programService.getProgramsByCategory(category)
                : programService.getAllPrograms();
        return ResponseEntity.ok(ApiResponse.ok("Programs retrieved successfully", programs));
    }

    @GetMapping("/{code}")
    public ResponseEntity<ApiResponse<ProgramEntity>> getProgramByCode(@PathVariable String code) {
        return programService.getProgramByCode(code)
                .map(program -> ResponseEntity.ok(ApiResponse.ok("Program found", program)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Program not found with code: " + code)));
    }

    @PatchMapping("/{code}/fee")
    public ResponseEntity<ApiResponse<ProgramEntity>> updateProgramFee(
            @PathVariable String code,
            @RequestBody Map<String, String> payload) {
        String feeDisplay = payload.get("feeDisplay");
        String feeSubtext = payload.get("feeSubtext");
        String validity = payload.get("validity");
        String timings = payload.get("timings");

        return programService.updateProgramFee(code, feeDisplay, feeSubtext, validity, timings)
                .map(updated -> ResponseEntity.ok(ApiResponse.ok("Program fee and details updated successfully", updated)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Program not found with code: " + code)));
    }
}
