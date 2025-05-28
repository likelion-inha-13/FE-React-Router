import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ColorPage.css"; // 또는 "./ColorPage.css"


function ColorPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const validColors = ["red", "blue", "pink", "orange", "yellow"];

  if (!validColors.includes(id)) {
    navigate("/");
    return null;
  }

  return (
    <div
      className="color-page"
      style={{ backgroundColor: id }}
    >
      <div>
        <p>{id} 배경입니다</p>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "white",
            color: id,
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          메인으로
        </button>
      </div>
    </div>
  );
}

export default ColorPage;

