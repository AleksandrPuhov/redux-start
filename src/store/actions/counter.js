import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = (newValue) => {
  return {
    type: actionTypes.ADD,
    value: newValue
  };
};

export const subtract = (newValue) => {
  return {
    type: actionTypes.SUBTRACT,
    value: newValue
  };
};
