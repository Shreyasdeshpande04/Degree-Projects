interface AuthState {
  user: { name: string; email: string } | null; // Define user type
}

const initialState: AuthState = {
  user: null,
};

const authReducer = (state = initialState, action: { type: string; payload: any }): AuthState => {
  console.log('Action Dispatched:', action.type); // Log the action type
  console.log('Current State:', state); // Log the current state before update

  switch (action.type) {
    case 'REGISTER':
      console.log('Register Action Payload:', action.payload);  // Log the payload of the 'REGISTER' action
      return {
        ...state,
        user: action.payload, // Store the user data from the action
      };

    default:
      return state;
  }
};

export default authReducer;
