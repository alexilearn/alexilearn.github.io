import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import Features from './components/Features/Features';

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Testimonials />
            <Features />
        </div>
    );
}
