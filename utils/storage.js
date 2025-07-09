export const loadFromLocalStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState ? JSON.parse(serializedState) : null;
  } catch (e) {
    console.error("Failed to load state from localStorage", e);
    return null;
  }
};

export const saveToLocalStorage = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.error("Failed to save state to localStorage", e);
  }
};