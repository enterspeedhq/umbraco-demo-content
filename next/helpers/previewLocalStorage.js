export function checkPreviewLocalStorage() {
  // Check if we have access to the window object, so we can access local storage.
  const ISSERVER = typeof window === "undefined";

  if (!ISSERVER && localStorage.getItem("previewMode") === "enabled") {
    return true;
  }
}

export function managePreviewLocalStorage(previewMode) {
  // Check if we have access to the window object, so we can access local storage.
  const ISSERVER = typeof window === "undefined";

  if (previewMode === "enabled") {
    if (!ISSERVER) localStorage.setItem("previewMode", "enabled");
  }

  if (previewMode === "clear") {
    if (!ISSERVER) localStorage.removeItem("previewMode");
  }
}
