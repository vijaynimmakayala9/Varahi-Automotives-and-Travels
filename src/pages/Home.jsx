import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light gap-3">
      <button
        onClick={() => navigate("/privacy-and-policy")}
        className="btn btn-primary btn-lg"
      >
        Privacy And Policy
      </button>

      <button
        onClick={() => navigate("/terms-and-conditions")}
        className="btn btn-success btn-lg"
      >
        Terms And Conditions
      </button>

      <button
        onClick={() => navigate("/shipping-policy")}
        className="btn btn-warning btn-lg text-white"
      >
        Shipping Policy
      </button>

      <button
        onClick={() => navigate("/cancellation-refund-policy")}
        className="btn btn-danger btn-lg"
      >
        Cancellation Policy
      </button>
    </div>
  );
};

export default Home;
