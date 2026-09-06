package com.atsensei.academy.modules.enquiry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnquiryRepository extends JpaRepository<EnquiryEntity, Long> {
}
