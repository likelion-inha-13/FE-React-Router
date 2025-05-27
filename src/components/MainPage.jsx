import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';

const Mainpage = () => {
  const navigate = useNavigate();

  const colors = ['red', 'blue', 'yellow', 'pink', 'orange'];

  return (
    <div className="container">
      <h2>React 색상 선택</h2>
      <hr />
      {colors.map((color) => (
        <button 
        key={color} 
        className="color-box" 
        style={{backgroundColor: color}}
        onClick={() => navigate(`/color/${color}`)}>
        {color}
        </button>
      ))}
    </div>
  );
};

export default Mainpage;
