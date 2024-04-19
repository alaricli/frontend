import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Account() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/SignIn');
    }
  }, [isSignedIn, router]);

  return <div>My Account</div>;
} 

export default Account;
