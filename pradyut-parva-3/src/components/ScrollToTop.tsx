import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Scrolls to top when navigating between different routes
 * Does NOT scroll when only search params change (like filters)
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    // This happens on actual page navigation, not filter changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
