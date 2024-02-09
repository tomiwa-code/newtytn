import LoginSignUp from "@/components/auth/loginSignup/LoginSignup";

export const metadata = {
  title: "Sign in or sign up",
  description: "tytn login/sign or login page",
};

const Auth = () => {
  return (
    <div className="w-full">
      <LoginSignUp />
    </div>
  );
};

export default Auth;
