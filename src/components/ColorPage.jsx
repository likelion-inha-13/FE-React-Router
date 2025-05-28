import { useParams } from 'react-router-dom';
import '../styles/ColorPage.css';



function ColorPage() {
  const {id} = useParams(); 

  return (
    <div className="color-page"
    style={{backgroundColor:id}}>
    {id} 배경 페이지입니다 
    </div>
  ); // id를 받아와서 그 id에 맞는 색으로 스타일을 적용
     // {id} 배경 페이지입니다 << 여기에서 {id}는 그 색의 이름을 뜻함
}

export default ColorPage;
