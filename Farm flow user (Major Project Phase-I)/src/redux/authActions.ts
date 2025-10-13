// Action to register a user
export const register = (data: { name: string; email: string }) => {
  return {
    type: 'REGISTER',
    payload: data,  // Ensure only serializable data is passed here
  };
};

export type RegisterAction = ReturnType<typeof register>;  // Type for the action
