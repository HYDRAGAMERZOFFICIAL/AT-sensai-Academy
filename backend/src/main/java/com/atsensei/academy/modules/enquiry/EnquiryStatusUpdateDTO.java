package com.atsensei.academy.modules.enquiry;

public class EnquiryStatusUpdateDTO {
    private String status;
    private String notes;

    public EnquiryStatusUpdateDTO() {}

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }
}
