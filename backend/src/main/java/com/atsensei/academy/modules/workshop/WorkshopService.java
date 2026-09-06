package com.atsensei.academy.modules.workshop;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class WorkshopService {

    private final WorkshopRepository workshopRepository;

    public WorkshopService(WorkshopRepository workshopRepository) {
        this.workshopRepository = workshopRepository;
    }

    public WorkshopBookingEntity bookWorkshop(WorkshopBookingDTO dto) {
        WorkshopBookingEntity booking = new WorkshopBookingEntity();
        booking.setBookingType(dto.getBookingType());
        booking.setAttendeeName(dto.getAttendeeName());
        booking.setPhone(dto.getPhone());
        booking.setInstitutionName(dto.getInstitutionName());
        booking.setExpectedAttendees(dto.getExpectedAttendees());
        return workshopRepository.save(booking);
    }

    @Transactional(readOnly = true)
    public List<WorkshopBookingEntity> getAllBookings() {
        return workshopRepository.findAll();
    }
}
