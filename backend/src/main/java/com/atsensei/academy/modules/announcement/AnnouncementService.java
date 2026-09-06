package com.atsensei.academy.modules.announcement;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AnnouncementService {

    private final AnnouncementRepository repository;

    public AnnouncementService(AnnouncementRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<AnnouncementEntity> getActiveAnnouncements() {
        return repository.findByActiveTrueOrderByDisplayOrderAsc();
    }

    @Transactional(readOnly = true)
    public List<AnnouncementEntity> getAllAnnouncements() {
        return repository.findAllByOrderByDisplayOrderAsc();
    }

    public AnnouncementEntity createAnnouncement(AnnouncementEntity entity) {
        return repository.save(entity);
    }

    public Optional<AnnouncementEntity> updateAnnouncement(Long id, AnnouncementEntity update) {
        return repository.findById(id).map(existing -> {
            existing.setText(update.getText());
            existing.setIcon(update.getIcon());
            existing.setCategory(update.getCategory());
            existing.setActive(update.isActive());
            existing.setDisplayOrder(update.getDisplayOrder());
            existing.setActionLink(update.getActionLink());
            existing.setActionText(update.getActionText());
            return repository.save(existing);
        });
    }

    public boolean toggleActive(Long id) {
        return repository.findById(id).map(existing -> {
            existing.setActive(!existing.isActive());
            repository.save(existing);
            return true;
        }).orElse(false);
    }

    public boolean deleteAnnouncement(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
