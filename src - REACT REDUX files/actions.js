
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const CLEAR = 'CLEAR';
export const SET = 'SET';
export const EVALUATE = 'EVALUATE';

export const add = () => {
  return {
    type: ADD,
  };
};

export const subtract = () => {
  return {
    type: SUBTRACT,
  };
};

export const multiply = () => {
  return {
    type: MULTIPLY,
  };
};

export const divide = () => {
  return {
    type: DIVIDE,
  };
};

export const set = (value) => {
  return {
    type: SET,
    payload: value,
  };
};

export const clear = () => {
  return {
    type: CLEAR,
  };
};

export const evaluate = () => {
  return{
    type: EVALUATE,
  }
}