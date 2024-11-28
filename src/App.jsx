import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import Features from './components/Features/Features';
import Research from './components/Research/Research';

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Testimonials />
            <Features />
            <Research />
        </div>
    );
}
