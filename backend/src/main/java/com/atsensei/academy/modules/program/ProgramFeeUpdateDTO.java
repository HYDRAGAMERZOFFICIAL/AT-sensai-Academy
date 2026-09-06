package com.atsensei.academy.modules.program;

public class ProgramFeeUpdateDTO {
    private String feeDisplay;
    private String feeSubtext;
    private String validity;
    private String timings;

    public ProgramFeeUpdateDTO() {}

    public String getFeeDisplay() { return feeDisplay; }
    public void setFeeDisplay(String feeDisplay) { this.feeDisplay = feeDisplay; }

    public String getFeeSubtext() { return feeSubtext; }
    public void setFeeSubtext(String feeSubtext) { this.feeSubtext = feeSubtext; }

    public String getValidity() { return validity; }
    public void setValidity(String validity) { this.validity = validity; }

    public String getTimings() { return timings; }
    public void setTimings(String timings) { this.timings = timings; }
}
