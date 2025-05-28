import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';

const colors = ["red","blue","pink","orange","yellow"]

const Mainpage = () => {
  const navigate = useNavigate();
 
  return (
    <div className="container">
      <h1>색상을 선택하세요 </h1>
      {colors.map((color) => (
        <div
          key={color}
          className="color-box"
          style={{ backgroundColor: color, cursor: "pointer" }}
          onClick={() => navigate(`/color/${color}`)}
        >
          {color}
        </div>
      ))}
    </div>
  );
}


export default Mainpage;
