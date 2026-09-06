package com.atsensei.academy.modules.program;

import jakarta.persistence.*;

@Entity
@Table(name = "programs")
public class ProgramEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String code;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 50)
    private String category;

    private String tag;

    @Column(nullable = false)
    private String feeDisplay;

    private String feeSubtext;

    @Column(nullable = false)
    private String validity;

    private String timings;

    private String batches;

    private String eligibility;

    @Column(length = 2000)
    private String description;

    private boolean featured;

    @Column(columnDefinition = "TEXT")
    private String subjectsJson;

    @Column(columnDefinition = "TEXT")
    private String examsJson;

    @Column(columnDefinition = "TEXT")
    private String curriculumJson;

    public ProgramEntity() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getTag() { return tag; }
    public void setTag(String tag) { this.tag = tag; }

    public String getFeeDisplay() { return feeDisplay; }
    public void setFeeDisplay(String feeDisplay) { this.feeDisplay = feeDisplay; }

    public String getFeeSubtext() { return feeSubtext; }
    public void setFeeSubtext(String feeSubtext) { this.feeSubtext = feeSubtext; }

    public String getValidity() { return validity; }
    public void setValidity(String validity) { this.validity = validity; }

    public String getTimings() { return timings; }
    public void setTimings(String timings) { this.timings = timings; }

    public String getBatches() { return batches; }
    public void setBatches(String batches) { this.batches = batches; }

    public String getEligibility() { return eligibility; }
    public void setEligibility(String eligibility) { this.eligibility = eligibility; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public boolean isFeatured() { return featured; }
    public void setFeatured(boolean featured) { this.featured = featured; }

    public String getSubjectsJson() { return subjectsJson; }
    public void setSubjectsJson(String subjectsJson) { this.subjectsJson = subjectsJson; }

    public String getExamsJson() { return examsJson; }
    public void setExamsJson(String examsJson) { this.examsJson = examsJson; }

    public String getCurriculumJson() { return curriculumJson; }
    public void setCurriculumJson(String curriculumJson) { this.curriculumJson = curriculumJson; }
}
