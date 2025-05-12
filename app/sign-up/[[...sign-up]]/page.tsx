import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <SignUp afterSignUpUrl="/lms" />
      </div>
    </main>
  );
}
