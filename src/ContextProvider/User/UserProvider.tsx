import React, { useEffect, useState } from 'react';
import UserContext from './UserContext';
import { UserContextType, UserType } from 'src/interface/user';
import { UserService } from 'src/services/UserService';

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    UserService()
      .then((resp: UserType) => {
        setUsers(resp);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch user data');
        setLoading(false);
      });
  }, []);

  const userObject: UserContextType = React.useMemo(
    () => ({ users, loading, error }),
    [users, loading, error],
  );

  return (
    <UserContext.Provider value={userObject}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
