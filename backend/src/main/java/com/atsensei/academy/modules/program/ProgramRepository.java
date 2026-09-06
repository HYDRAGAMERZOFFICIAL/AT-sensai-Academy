package com.atsensei.academy.modules.program;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProgramRepository extends JpaRepository<ProgramEntity, Long> {
    Optional<ProgramEntity> findByCode(String code);
    List<ProgramEntity> findByCategory(String category);
}
