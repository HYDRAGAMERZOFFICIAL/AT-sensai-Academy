package com.atsensei.academy.modules.policy;

import jakarta.persistence.*;

@Entity
@Table(name = "policies")
public class PolicyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String policyKey;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String contentHtml;

    public PolicyEntity() {}

    public PolicyEntity(String policyKey, String title, String contentHtml) {
        this.policyKey = policyKey;
        this.title = title;
        this.contentHtml = contentHtml;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPolicyKey() { return policyKey; }
    public void setPolicyKey(String policyKey) { this.policyKey = policyKey; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getContentHtml() { return contentHtml; }
    public void setContentHtml(String contentHtml) { this.contentHtml = contentHtml; }
}
