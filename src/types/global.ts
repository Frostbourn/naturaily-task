export type TUserDetails = {
  username: string;
  firstName: string;
  lastName: string;
};

export type TUserContextProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  userDetails: TUserDetails;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  message: { status: string; text: string };
  handleLogIn: (username: string, password: string) => void;
  handleLogOut: () => void;
};

export type TUserProviderProps = {
  children: React.ReactNode;
};

export type TUseLoginReturn = {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  message: { status: string; text: string };
  handleLogIn: (username: string, password: string) => void;
  handleLogOut: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  userDetails: TUserDetails;
  getUserDetails: (token: string) => void;
};

export type TProtectedRouteProps = {
  children: React.ReactChild;
};

export type TStatusMessageProps = {
  status: string;
  text: string;
  isActive: boolean;
};
