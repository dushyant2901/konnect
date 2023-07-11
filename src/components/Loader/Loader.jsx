import { SpinnerCircularFixed } from "spinners-react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <SpinnerCircularFixed
        size={50}
        thickness={180}
        speed={136}
        color="#0d9488"
        secondaryColor={"rgba(0, 0, 0, 0.3)"}
      />
    </div>
  );
};
export default Loader;
