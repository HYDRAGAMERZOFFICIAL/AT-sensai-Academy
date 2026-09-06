package com.atsensei.academy.modules.program;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProgramService {

    private final ProgramRepository programRepository;

    public ProgramService(ProgramRepository programRepository) {
        this.programRepository = programRepository;
    }

    @Transactional(readOnly = true)
    public List<ProgramEntity> getAllPrograms() {
        return programRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<ProgramEntity> getProgramsByCategory(String category) {
        return programRepository.findByCategory(category);
    }

    @Transactional(readOnly = true)
    public Optional<ProgramEntity> getProgramByCode(String code) {
        return programRepository.findByCode(code);
    }

    public Optional<ProgramEntity> updateProgramFee(String code, String feeDisplay, String feeSubtext, String validity, String timings) {
        return programRepository.findByCode(code).map(program -> {
            if (feeDisplay != null && !feeDisplay.isBlank()) {
                program.setFeeDisplay(feeDisplay.trim());
            }
            if (feeSubtext != null) {
                program.setFeeSubtext(feeSubtext.trim());
            }
            if (validity != null && !validity.isBlank()) {
                program.setValidity(validity.trim());
            }
            if (timings != null && !timings.isBlank()) {
                program.setTimings(timings.trim());
            }
            return programRepository.save(program);
        });
    }
}
