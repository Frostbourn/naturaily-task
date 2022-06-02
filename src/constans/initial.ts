export const initialContext = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  userDetails: { username: '', firstName: '', lastName: '' },
  isLoading: false,
  setLoading: () => {},
  message: { status: '', text: '' },
  handleLogIn: () => {},
  handleLogOut: () => {},
};

export const initialFormValues = {
  username: '',
  password: '',
};
