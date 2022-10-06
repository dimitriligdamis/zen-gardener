// ACTION TYPES

// Handled by middleware
export const FETCH_SHEET_BY_ID = 'FETCH_SHEET_BY_ID';
export const FETCH_SHEETS_BY_QUERY = 'FETCH_SHEET_BY_QUERY';

// Handled by reducer
export const SHEET_COLLECTION_RECEIVED = 'SHEET_COLLECTION_RECEIVED';
export const SHEET_RECEIVED = 'SHEET_RECEIVED';
export const SHEET_FETCH_FAILED = 'SHEET_FETCH_FAILED';

// ACTION CREATORS

/** Action dispatched when fetching a sheet by ID
 * (typically when fetching sheets from task details) */
export const actionFetchSheetById = (id) => ({
  type: FETCH_SHEET_BY_ID,
  id,
});

/** Action dispatched when fetching multiple tasks
 * from sheet page and search bar
 */
export const actionFetchSheetsByQuery = (
  query,
  numberOfSheetsByQuery,
  zeroBasedPageNumber,
  add,
) => ({
  type: FETCH_SHEETS_BY_QUERY,
  query,
  numberOfSheetsByQuery,
  zeroBasedPageNumber,
  add,
});

/** Action dispatched when multiple sheets have been received */
export const actionSheetCollectionReceived = (sheetData, add) => ({
  type: SHEET_COLLECTION_RECEIVED,
  sheetData,
  add,
});

/** Action dispatched when one sheet has been received */
export const actionSheetReceived = (sheet) => ({
  type: SHEET_RECEIVED,
  sheet,
});

/** Action dispatched when any fetch request fails */
export const actionSheetFetchFailed = (failed = true) => ({
  type: SHEET_FETCH_FAILED,
  failed,
});
