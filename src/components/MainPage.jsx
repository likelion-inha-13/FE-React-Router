import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';

const Mainpage = () => {
  const navigate = useNavigate(); //페이지 이동을 위해 navigate 함수 가져옴

  const colorClicked = (color) => { 
  navigate(`/color/${color}`);
  }; // 색을 클릭하면 그 컬러의 페이지로 이동하게 함

  const colors = ["red", "blue", "pink", "orange", "yellow"]; // 색들을 가져옴

  return (
    <div className="container">
      <h2>React 색상 선택</h2>
      <hr />

      {colors.map((color)=>(
        <div
         key={color}
         className="color-box"
         style={{backgroundColor : color}}
         onClick={() => colorClicked(color)}
         >
          {color}
         </div>
      ))} 

      </div>    
  ); // map을 이용하여 여러 색을 적용할 수 있게 함
     // 색을 key라고 설정, 스타일을 그 색으로 설정, 배경에 적용
     // 위에서 설정한 colorClicked 함수를 이용해 색을 누르면 그 컬러의 페이지로 이동할 수 있도록
     // 가장 밑의 {color}은 박스 안에 그 색의 이름이 뜨도록 함
}; 

export default Mainpage;
