package com.atsensei.academy.modules.mentor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class MentorService {

    private final MentorRepository mentorRepository;

    public MentorService(MentorRepository mentorRepository) {
        this.mentorRepository = mentorRepository;
    }

    public List<MentorEntity> getActiveMentors() {
        return mentorRepository.findByActiveTrue();
    }
}
