import React, { createContext, useContext, useState, useCallback } from 'react';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null); // 'curriculum' | 'policy' | 'workshop' | null
  const [modalData, setModalData] = useState(null);

  const openCurriculumModal = useCallback((program) => {
    setModalData(program);
    setActiveModal('curriculum');
    document.body.style.overflow = 'hidden';
  }, []);

  const openPolicyModal = useCallback((policyKey = 'privacy') => {
    setModalData(policyKey);
    setActiveModal('policy');
    document.body.style.overflow = 'hidden';
  }, []);

  const openWorkshopModal = useCallback((data = {}) => {
    setModalData(data);
    setActiveModal('workshop');
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setModalData(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <ModalContext.Provider value={{
      activeModal,
      modalData,
      openCurriculumModal,
      openPolicyModal,
      openWorkshopModal,
      closeModal
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
}
