import { useState } from "react";

/**
 * useLibrary Hook
 * Handles layout presentation logic.
 *
 * Returns:
 * isGridView - determines grid or list layout
 * toggleView - switches layout
 */
export function useLibrary() {
  const [isGridView, setIsGridView] = useState(false);

  const toggleView = () => setIsGridView(prev => !prev);

  return {
    isGridView,  // my current layout mode
    toggleView, // switching the layout.
  };
}
