import Container from "@/components/created/container";
import { Toaster } from "@/components/ui/toaster";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Toaster />
      <Container />
    </div>
  );
};

export default page;
