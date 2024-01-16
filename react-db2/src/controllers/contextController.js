const getContext = (state, contextName) => {
  return state[contextName];
};

export const getVeterinaryDataContext = (state) => {
  return getContext(state, "veterinaryPracticeData");
};

export const getCustomerDataContext = (state) => {
  return getContext(state, "customerData");
};

export const getPetDataContext = (state) => {
  return getContext(state, "petData");
};

/******************************
   This function returns an array of object-literals with the value and label property
   The value property represents the value of the picked dropdown element
   The label property represents the value that is displayed when picking an element 
   Example:
   value will be CustomerID
   label will be CustomerName
*******************************/
export const getDropdownDataArray = (
  context,
  valueColumnName,
  labelColumnName
) => {
  const dataArray = [];
  context.forEach((item) => {
    dataArray.push({
      value: item[valueColumnName].toString(),
      label: item[labelColumnName],
    });
  });

  return dataArray;
};
