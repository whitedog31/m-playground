import { useState, useEffect } from 'react';

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log('modal');
  }, [isModalOpen]);

  return {
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
  };
}
