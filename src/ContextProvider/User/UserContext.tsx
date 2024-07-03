import React from 'react';
import { UserContextType } from 'src/interface/user';

const initialState: UserContextType = {
  users: {
    id: -1,
    name: '',
    department: '',
    avatar: '',
  },
  loading: false,
  error: null,   
};
const UserContext = React.createContext<UserContextType>(initialState);

export default UserContext;
