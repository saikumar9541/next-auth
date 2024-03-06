import { RegisterForm } from "@/components/auth/register-form";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="flex h-screen">
    <div className="w-1/2 bg-gray-800 flex items-center justify-center">
    <Image
      src="/MagswayLogo.svg"
      width={300}
      height={300}
      alt="Picture of the author"
    />      </div>
    <div className="w-1/2 flex items-center justify-center">
    <RegisterForm />
    </div>
  </div>
  
  );
}
 
export default RegisterPage;