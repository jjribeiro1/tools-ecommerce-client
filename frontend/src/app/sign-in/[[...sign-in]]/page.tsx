import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className="container mx-auto my-0 py-20 flex justify-center min-h-screen">
      <SignIn afterSignInUrl={'/'} />
    </main>
  );
}