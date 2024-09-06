'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';

interface UsersDataProps {
  xacstkn?: string;
}

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = React.useState(true);

  React.useEffect(() => {
    let usersDataLocal = localStorage.getItem('user');
    let usersData: UsersDataProps | null = null;

    if (usersDataLocal) {
      try {
        usersData = JSON.parse(usersDataLocal) as UsersDataProps;
      } catch (error) {
        console.log(error);
      }
    }
    if (!usersData?.xacstkn) {
      router.push('/');
    } else {
      setIsCheckingAuth(false);
    }
  }, [router]);

  return <>{children}</>;
};
