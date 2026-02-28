import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Demo from './Demo';

export default function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/demo" element={<Demo />} />
            </Routes>
        </BrowserRouter>
    );
}
