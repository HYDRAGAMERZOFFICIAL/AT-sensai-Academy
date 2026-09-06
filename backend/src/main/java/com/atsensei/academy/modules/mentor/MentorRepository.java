package com.atsensei.academy.modules.mentor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MentorRepository extends JpaRepository<MentorEntity, Long> {
    List<MentorEntity> findByActiveTrue();
}
