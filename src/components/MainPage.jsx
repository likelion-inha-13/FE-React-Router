import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';

const colors = ["red", "blue", "pink", "orange", "yellow"];

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>React 색상 선택</h2>
      <hr />
      {colors.map((color) => (
        <button>
           key={color}
           onClick={() => navigate(`/color/${color}`)}
           styled={{
            backgroundColor: color,
            color: color === "yellow" ? "black" : "white",
            margin: "5px",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
           }}
           
          {color}
        </button>
      ))}
      
    </div>
  );
};

export default MainPage;
