import "./App.scss";
import Carousel from "./components/Carousel";
import GiftSection from "./components/GiftSection";
import Header from "./components/Header";
import Section from "./components/Section";
import SmallSection from "./components/SmallSection";
import { Data } from "./components/Data";
import Footer from "./components/Footer";
function App() {
    return (
        <div>
            <Header />
            <Section />
            <SmallSection />
            <GiftSection />
            <Carousel slides={Data} />
            <Footer />
        </div>
    );
}

export default App;
