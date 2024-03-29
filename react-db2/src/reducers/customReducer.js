export const initialState = {
  veterinaryPracticeData: null,
  customerData: null,
  petData: null,
};

export const actionTypes = {
  INIT_CONTEXT: "INIT_CONTEXT",
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

export const contextTypes = {
  veterinaryPracticeData: "veterinaryPracticeData",
  customerData: "customerData",
  petData: "petData",
};

export const customReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INIT_CONTEXT:
      return { ...state, [action.context]: action.payload };
    case actionTypes.ADD:
      return {
        ...state,
        [action.context]: [action.payload, ...state[action.context]],
      };
    case actionTypes.UPDATE:
      return {
        ...state,
        [action.context]: state[action.context]?.map((element) =>
          element[action.id] === action.payload[action.id]
            ? action.payload
            : element
        ),
      };
    case actionTypes.DELETE:
      return {
        ...state,
        [action.context]: state[action.context].filter(
          (element) => element[action.id] !== action.payload[action.id]
        ),
      };
    default:
      return state;
  }
};
