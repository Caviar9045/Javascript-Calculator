import { ADD, SUBTRACT, MULTIPLY, DIVIDE, SET, CLEAR, EVALUATE} from './actions';

const initialState = {
  currentInput: '',
  result: 0
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        currentInput: state.currentInput + '+',
      };
    case SUBTRACT:
      return {
        ...state,
        currentInput: state.currentInput + '-',
      };
    case MULTIPLY:
      return {
        ...state,
        currentInput: state.currentInput + '*',
      };
    case DIVIDE:
      return {
        ...state,
        currentInput: state.currentInput + '/',
      };
    case SET:
      return {
        ...state,
        currentInput: state.currentInput + action.payload.toString(),
      };
    case CLEAR:
      return {
        ...state,
        currentInput: '',
        result: 0,
      };
    case EVALUATE:
      return{
        ...state,
        result: eval(state.currentInput),
        currentInput: eval(state.currentInput).toString(),
      }
    default:
      return state;
  }
};

export default calculatorReducer;
