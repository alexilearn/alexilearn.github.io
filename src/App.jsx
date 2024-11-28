import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LessonCreator from './pages/LessonCreator';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lesson-creator" element={<LessonCreator />} />
            </Routes>
        </Router>
    );
}
