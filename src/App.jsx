import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import WeddingCover from "./components/WeddingCover.jsx";
import WeddingInvitation from "./pages/WeddingInvitation.jsx";

function WeddingCoverPage() {
  const navigate = useNavigate();

  return (
    <WeddingCover
      brideName="Anjana"
      groomName="Teveeto"
      weddingDay="14"
      weddingMonth="JANUARY"
      weddingYear="2027"
      onOpen={() => navigate("/invitation")}
    />
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WeddingCoverPage />} />
      <Route path="/invitation" element={<WeddingInvitation />} />
    </Routes>
  );
}
