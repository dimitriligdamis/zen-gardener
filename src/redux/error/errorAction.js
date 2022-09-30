export const DISPLAY_ERROR = 'DISPLAY_ERROR';
export const DELETE_ERROR = 'DELETE_ERROR';

export const actionDisplayError = (message) => ({
  type: DISPLAY_ERROR,
  message,
});

export const actionDeleteError = () => ({
  type: DELETE_ERROR,
});
