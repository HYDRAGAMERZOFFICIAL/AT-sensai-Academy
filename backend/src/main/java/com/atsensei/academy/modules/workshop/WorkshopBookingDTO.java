package com.atsensei.academy.modules.workshop;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class WorkshopBookingDTO {

    @NotBlank(message = "Booking type is required (student or institution)")
    private String bookingType;

    @NotBlank(message = "Attendee/Contact name is required")
    private String attendeeName;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[6-9]\\d{9}$", message = "Must be a valid 10-digit Indian phone number")
    private String phone;

    private String institutionName;
    private Integer expectedAttendees;

    public WorkshopBookingDTO() {}

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
}
