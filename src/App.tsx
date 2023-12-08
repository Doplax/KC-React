import { LoginPage } from "@pages/LoginPage";
import { AdvertsPage } from "@pages/AdvertsPage";
import { AdvertPage } from '@pages/AdvertPage';
import { NewAdvertPage } from '@pages/NewAdvertPage';


import Layout from "@components/layout";

import { Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/adverts"
        element={
          <Layout>
            <AdvertsPage />
          </Layout>
        }
      />

      <Route
        path="/adverts/:advertId"
        element={
          <Layout>
            <AdvertPage />
          </Layout>
        }
      />

      <Route
        path="/adverts/new"
        element={
          <Layout>
            <NewAdvertPage />
          </Layout>
        }
      />
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="/404" element={<div>404 | Not found</div>} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
