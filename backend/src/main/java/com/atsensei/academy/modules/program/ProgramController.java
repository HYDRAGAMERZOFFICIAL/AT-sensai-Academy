package com.atsensei.academy.modules.program;

import com.atsensei.academy.common.ApiResponse;
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
                .orElseGet(() -> ResponseEntity.status(404)
                        .body(ApiResponse.error("Program not found with code: " + code)));
    }
}
