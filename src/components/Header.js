import './Header.css';
import {Button} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header">
      <span>Units of Measurement Converter</span>
      <span>
        {location.pathname !== '/' &&
          <Button variant="contained" className="header-btn"
                  onClick={() => navigate('/')}>
            Menu
          </Button>
        }
      </span>
    </div>
  );
}
