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
      return { [action.context]: action.payload };
    case actionTypes.ADD:
      return [...state[action.context], action.payload];
    case actionTypes.UPDATE:
      return {
        [action.context]: state[action.context]?.map((element) =>
          element.id === action.payload.id ? action.payload : element
        ),
      };
    case actionTypes.DELETE:
      return [
        state.context.filter((element) => element.id !== action.payload.id),
      ];
    default:
      return state;
  }
};
