import Header from "../components/Header";
import logo from "../assets/khadamatylogomcd.png";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  return (
    <div >
      <Header />
      <div className="grid grid-cols-1 xl:grid-cols-2 h-[92.5vh]">
        {/* Hide the logo on medium screens and show it only on xl screens */}
        <div className="hidden xl:flex bg-[#146551] items-center justify-center">
          <img src={logo} alt="Khadamaty Logo" className="w-80" />
        </div>
        <div className="flex items-center justify-center">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
