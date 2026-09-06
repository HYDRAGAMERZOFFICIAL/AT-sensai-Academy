package com.atsensei.academy.modules.program;

import com.atsensei.academy.common.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
            @RequestBody(required = false) ProgramFeeUpdateDTO dto) {
        String feeDisplay = (dto != null) ? dto.getFeeDisplay() : null;
        String feeSubtext = (dto != null) ? dto.getFeeSubtext() : null;
        String validity = (dto != null) ? dto.getValidity() : null;
        String timings = (dto != null) ? dto.getTimings() : null;

        return programService.updateProgramFee(code, feeDisplay, feeSubtext, validity, timings)
                .map(updated -> ResponseEntity.ok(ApiResponse.ok("Program fee and details updated successfully", updated)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Program not found with code: " + code)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ProgramEntity>> createProgram(@RequestBody ProgramEntity program) {
        ProgramEntity saved = programService.createProgram(program);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Program created successfully", saved));
    }

    @DeleteMapping("/{code}")
    public ResponseEntity<ApiResponse<Boolean>> deleteProgram(@PathVariable String code) {
        boolean deleted = programService.deleteProgram(code);
        if (deleted) {
            return ResponseEntity.ok(ApiResponse.ok("Program deleted successfully", true));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error("Program not found with code: " + code));
    }
}
