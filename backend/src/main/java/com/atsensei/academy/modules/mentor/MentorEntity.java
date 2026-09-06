package com.atsensei.academy.modules.mentor;

import jakarta.persistence.*;

@Entity
@Table(name = "mentors")
public class MentorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 5)
    private String initials;

    @Column(nullable = false)
    private String qualification;

    @Column(nullable = false)
    private String experience;

    @Column(length = 1000)
    private String focus;

    private boolean active = true;

    public MentorEntity() {}

    public MentorEntity(String name, String initials, String qualification, String experience, String focus) {
        this.name = name;
        this.initials = initials;
        this.qualification = qualification;
        this.experience = experience;
        this.focus = focus;
        this.active = true;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getInitials() { return initials; }
    public void setInitials(String initials) { this.initials = initials; }

    public String getQualification() { return qualification; }
    public void setQualification(String qualification) { this.qualification = qualification; }

    public String getExperience() { return experience; }
    public void setExperience(String experience) { this.experience = experience; }

    public String getFocus() { return focus; }
    public void setFocus(String focus) { this.focus = focus; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }
}
