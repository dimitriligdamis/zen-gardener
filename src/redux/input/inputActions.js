export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CLEAR_ALL_VALUES = 'CLEAR_ALL_VALUES';

export const changeValue = (value, page, name) => ({
  type: CHANGE_VALUE,
  value: value,
  page: page,
  key: name,
});

export const clearAllValues = () => ({
  type: CLEAR_ALL_VALUES,
});
