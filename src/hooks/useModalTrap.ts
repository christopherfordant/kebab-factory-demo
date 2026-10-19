import { useEffect, useRef } from 'react';

interface UseModalTrapOptions {
  isOpen: boolean;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

export function useModalTrap({ isOpen, onClose, triggerElement }: UseModalTrapOptions) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Remember the element that opened the modal
    previousActiveElementRef.current = triggerElement || (document.activeElement as HTMLElement);

    // Lock background scrolling
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Helper to get focusable elements
    const getFocusableElements = (): HTMLElement[] => {
      if (!modalRef.current) return [];
      const focusableSelector =
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
      return Array.from(modalRef.current.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (el) => el.offsetParent !== null || el.offsetWidth > 0 || el.offsetHeight > 0
      );
    };

    // Focus the first focusable element on open
    const focusable = getFocusableElements();
    if (focusable.length > 0) {
      // Small timeout to allow DOM transition/mounting
      setTimeout(() => {
        focusable[0].focus();
      }, 30);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const elements = getFocusableElements();
        if (elements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = elements[0];
        const lastElement = elements[elements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement || !modalRef.current?.contains(document.activeElement)) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement || !modalRef.current?.contains(document.activeElement)) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;

      // Restore focus to trigger
      if (previousActiveElementRef.current && typeof previousActiveElementRef.current.focus === 'function') {
        previousActiveElementRef.current.focus();
      }
    };
  }, [isOpen, onClose, triggerElement]);

  return modalRef;
}
