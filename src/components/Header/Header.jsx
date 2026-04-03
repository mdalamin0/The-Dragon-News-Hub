import { format } from "date-fns";
import newsLogo from "../../assets/logo.png";


const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img className="w-[470px]" src={newsLogo} alt="News Logo" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-accent font-semibold">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;