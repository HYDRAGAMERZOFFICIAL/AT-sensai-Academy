package com.atsensei.academy.modules.announcement;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnouncementRepository extends JpaRepository<AnnouncementEntity, Long> {
    List<AnnouncementEntity> findByActiveTrueOrderByDisplayOrderAsc();
    List<AnnouncementEntity> findAllByOrderByDisplayOrderAsc();
}
