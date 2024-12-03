import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const Home = React.lazy(()=> import("./pages/Home"));
const Subjects = React.lazy(()=> import("./pages/Subjects"));
const Students = React.lazy(()=> import("./pages/Students"));
const StudentForm = React.lazy(()=> import("./pages/Students/StudentForm"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<Loader/>}><Home /></Suspense>} />
      <Route path="/student" element={<Suspense fallback={<Loader/>}><Students /></Suspense>} />
      <Route path="/subject" element={<Suspense fallback={<Loader/>}><Subjects /></Suspense>} />
      <Route path="/student/add" element={<Suspense fallback={<Loader/>}><StudentForm /></Suspense>} />
    </Routes>
  );
};

export default App;
