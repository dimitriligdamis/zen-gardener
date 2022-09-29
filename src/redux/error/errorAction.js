export const DISPLAY_ERROR = 'DISPLAY_ERROR';
export const DELETE_ERROR = 'DELETE_ERROR';

export const displayError = (message) => ({
  type: DISPLAY_ERROR,
  message,
});

export const deleteError = () => ({
  type: DELETE_ERROR,
});
