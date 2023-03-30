const counterReducer = (state, action) => {
    if (action.type === 'increase') {
      return state + 1;
    } else if (action.type === 'decrease') {
      return state - 1;
    } else if (action.type === 'update') {
      return action.payload;
    };
  
    // switch (action.type) {
    //     case 'increase':
    //         return state + 1;
    //     case 'decrease':
    //         return state - 1;
    //     case 'update':
    //         return action.payload;
    //     default:
    //         return state
    // }
};

export default counterReducer;