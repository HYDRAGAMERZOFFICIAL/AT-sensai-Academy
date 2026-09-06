package com.atsensei.academy.modules.workshop;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "workshop_bookings")
public class WorkshopBookingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 20)
    private String bookingType; // 'student' or 'institution'

    @Column(nullable = false)
    private String attendeeName;

    @Column(nullable = false, length = 15)
    private String phone;

    private String institutionName;

    private Integer expectedAttendees;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    public WorkshopBookingEntity() {
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBookingType() { return bookingType; }
    public void setBookingType(String bookingType) { this.bookingType = bookingType; }

    public String getAttendeeName() { return attendeeName; }
    public void setAttendeeName(String attendeeName) { this.attendeeName = attendeeName; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getInstitutionName() { return institutionName; }
    public void setInstitutionName(String institutionName) { this.institutionName = institutionName; }

    public Integer getExpectedAttendees() { return expectedAttendees; }
    public void setExpectedAttendees(Integer expectedAttendees) { this.expectedAttendees = expectedAttendees; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
