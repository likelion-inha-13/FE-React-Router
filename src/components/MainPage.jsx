import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';
import { useEffect } from 'react';


const colors = ['red', 'blue', 'pink', 'orange', 'yellow'];

const Mainpage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, []);
  
  return (
    <div className="container">
      <h2>React 색상 선택</h2>
  
      {colors.map((color) => (
        <div
          key={color}
          className="color-box"
          style={{ backgroundColor: color }}
          onClick={() => navigate(`/color/${color}`)}
        >
          {color}
        </div>
      ))}
  
      <hr /> 
    </div>
  );
  

  
};

export default Mainpage;



