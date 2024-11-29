import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import LessonCreator from './pages/LessonCreator';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lesson-creator" element={<LessonCreator />} />
            </Routes>
        </HashRouter>
    );
}
