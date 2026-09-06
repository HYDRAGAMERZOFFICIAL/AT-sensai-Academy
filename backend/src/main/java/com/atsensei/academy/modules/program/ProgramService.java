package com.atsensei.academy.modules.program;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class ProgramService {

    private final ProgramRepository programRepository;

    public ProgramService(ProgramRepository programRepository) {
        this.programRepository = programRepository;
    }

    public List<ProgramEntity> getAllPrograms() {
        return programRepository.findAll();
    }

    public List<ProgramEntity> getProgramsByCategory(String category) {
        return programRepository.findByCategory(category);
    }

    public Optional<ProgramEntity> getProgramByCode(String code) {
        return programRepository.findByCode(code);
    }
}
