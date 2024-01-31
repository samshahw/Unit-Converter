import './Menu.css';
import {useNavigate} from "react-router-dom";
import Header from "./Header";
import {Button} from "@mui/material";

export const Menu = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="page-body">
        <div className="menu-row">
          <Button variant="contained" className="menu-button"
                  onClick={() => navigate('/converter/length')}>
            <span className="btn-text">Length</span><br />
            <span className="btn-subtext">Kg, lb</span>
          </Button>
          <Button variant="contained" className="menu-button"
                  onClick={() => navigate('/converter/weight')}>
            <span className="btn-text">Weight</span><br />
            <span className="btn-subtext">Kg, lb</span>
          </Button>
        </div>
        <div className="menu-row">
          <Button variant="contained" className="menu-button"
                  onClick={() => navigate('/converter/speed')}>
            <span className="btn-text">Speed</span><br />
            <span className="btn-subtext">Km/h, MPH</span>
          </Button>
          <Button variant="contained" className="menu-button"
                  onClick={() => navigate('/converter/temperature')}>
            <span className="btn-text">Temperature</span><br />
            <span className="btn-subtext">°C, °F, K</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
