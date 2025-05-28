import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/ColorPage.css';

function ColorPage() {
  const { id } = useParams(); // URL에서 id 가져오기

  useEffect(() => {
    document.body.style.backgroundColor = id;

  }, [id]);

  return (
    <div id="color-page" className="color-page">
     컬러 페이지 입니다 .
    </div>
  );
}

export default ColorPage;
