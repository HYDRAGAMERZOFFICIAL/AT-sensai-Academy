package com.atsensei.academy.modules.enquiry;

import java.util.List;

public class BulkEnquiryActionDTO {
    private List<Long> ids;
    private String status;

    public BulkEnquiryActionDTO() {}

    public BulkEnquiryActionDTO(List<Long> ids, String status) {
        this.ids = ids;
        this.status = status;
    }

    public List<Long> getIds() {
        return ids;
    }

    public void setIds(List<Long> ids) {
        this.ids = ids;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
