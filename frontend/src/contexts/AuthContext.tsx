import React, { createContext, useEffect, useReducer, ReactNode } from 'react';

export const AuthContext = createContext<{ user: null | object, dispatch: React.Dispatch<Action> | undefined }>({ user: null, dispatch: undefined });

export type Action = { type: 'LOGIN', payload: object } | { type: 'LOGOUT' };

const authReducer = (state: { user: null | object }, action: Action): { user: null | object } => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
}

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as string);
    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
