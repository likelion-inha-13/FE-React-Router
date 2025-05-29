import { useParams } from 'react-router-dom';
import '../styles/ColorPage.css';

<Route path="/mainpage/:id" element={<mainpage />} />
function ColorPage() {

  return (
    <div
     className="color-page"
     style={{
        backgroundColor: id,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '2rem',
     }}
     >
    배경 페이지입니다 : {id}
    </div>
  );
}

export default ColorPage;
