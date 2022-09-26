// ACTION TYPES

// Handled by middleware
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

// Handled by reducer
export const USER_DATA_RECEIVED = 'USER_DATA_RECEIVED';
export const USER_DATA_UPDATED = 'USER_DATA_UPDATED';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

// ACTION CREATORS

/** Action dispatched when user submits profile data update */
export const actionUpdateUserData = () => ({
  type: UPDATE_USER_DATA,
  address: null,
  city: null,
  postalCode: null,
  phoneNumber: null,
  sendTaskEmails: null,
  sendWeeklyEmails: null,
});

/** Action dispatched when user data successfully fetched from API */
export const actionUserDataReceived = (userData) => ({
  type: USER_DATA_RECEIVED,
  userData,
});

/** Action dispatched when user data successfully updated by API */
export const actionUserDataUpdated = (updatedAt) => ({
  type: USER_DATA_UPDATED,
  updatedAt,
});

/** Action dispatched when user logged out => we need to clear any use info from app */
export const actionUserLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});