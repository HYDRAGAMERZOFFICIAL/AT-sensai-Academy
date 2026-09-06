package com.atsensei.academy.modules.mentor;

import com.atsensei.academy.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/mentors")
public class MentorController {

    private final MentorService mentorService;

    public MentorController(MentorService mentorService) {
        this.mentorService = mentorService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<MentorEntity>>> getAllMentors() {
        List<MentorEntity> mentors = mentorService.getActiveMentors();
        return ResponseEntity.ok(ApiResponse.ok("Mentors retrieved successfully", mentors));
    }
}
