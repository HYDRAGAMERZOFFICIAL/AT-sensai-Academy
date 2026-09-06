package com.atsensei.academy.modules.announcement;

import com.atsensei.academy.common.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/announcements")
public class AnnouncementController {

    private final AnnouncementService service;

    public AnnouncementController(AnnouncementService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<AnnouncementEntity>>> getActiveAnnouncements(
            @RequestParam(required = false, defaultValue = "false") boolean all) {
        List<AnnouncementEntity> list = all ? service.getAllAnnouncements() : service.getActiveAnnouncements();
        return ResponseEntity.ok(ApiResponse.ok("Announcements retrieved", list));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<AnnouncementEntity>> createAnnouncement(@RequestBody AnnouncementEntity entity) {
        AnnouncementEntity created = service.createAnnouncement(entity);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Announcement created successfully", created));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<AnnouncementEntity>> updateAnnouncement(
            @PathVariable Long id,
            @RequestBody AnnouncementEntity entity) {
        return service.updateAnnouncement(id, entity)
                .map(updated -> ResponseEntity.ok(ApiResponse.ok("Announcement updated successfully", updated)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Announcement not found with id: " + id)));
    }

    @PatchMapping("/{id}/toggle")
    public ResponseEntity<ApiResponse<Boolean>> toggleActive(@PathVariable Long id) {
        boolean toggled = service.toggleActive(id);
        if (toggled) {
            return ResponseEntity.ok(ApiResponse.ok("Announcement status toggled", true));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error("Announcement not found"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Boolean>> deleteAnnouncement(@PathVariable Long id) {
        boolean deleted = service.deleteAnnouncement(id);
        if (deleted) {
            return ResponseEntity.ok(ApiResponse.ok("Announcement deleted successfully", true));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error("Announcement not found"));
    }
}
