
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CVProvider } from './Interface/Forms/FormContext'; 
import MainPage from './Interface/Mainpage/MainPage';
import Template from './Interface/Templates/Template1';
import Template2 from './Interface/Templates/Template2';
import Template3 from './Interface/Templates/Template3';
import Flex from './Interface/FLex/flex';
import TemplateDetails from './Interface/Addpage/Dashboard'; 
import Template4 from './Interface/Templates/Template4';
import Template5 from './Interface/Templates/Template5'; 
import Template6 from './Interface/Templates/Template6'; 
import Template7 from './Interface/Templates/Template7';
import Template8 from './Interface/Templates/Template8';
import Template9 from './Interface/Templates/Template9';
import Template10 from './Interface/Templates/Template10'; 
import Template11 from './Interface/Templates/Template11';
import Template12 from './Interface/Templates/Template12';


const App: React.FC = () => {
  return (
    <CVProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/templates" element={<Flex />} />
          <Route path="/template1" element={<Template />} />
          <Route path="/template2" element={<Template2 />} />
          <Route path="/template3" element={<Template3 />} />
          <Route path="/template4" element={<Template4 />} />
          <Route path="/template5" element={<Template5 />} />
          <Route path="/template6" element={<Template6 />} />
          <Route path="/template7" element={<Template7 />} />
          <Route path="/template8" element={<Template8 />} />
          <Route path="/template9" element={<Template9 />} />
          <Route path="/template10" element={<Template10 />} />
          <Route path="/template11" element={<Template11 />} />
          <Route path="/template12" element={<Template12 />} />
          <Route path="/template-details" element={<TemplateDetails />} />
        </Routes>
      </Router>
    </CVProvider>
  );
};

export default App;
