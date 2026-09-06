package com.atsensei.academy.modules.workshop;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkshopRepository extends JpaRepository<WorkshopBookingEntity, Long> {
}
