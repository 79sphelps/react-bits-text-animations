import logo from './logo.svg';
import './App.css';
import SplitText from "./SplitText";
import BlurText from "./BlurText";
import CircularText from './CircularText';
import TextType from './TextType';

function App() {
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

  return (
    <div className="App">
    {/* <div> */}
      <CircularText
        text="REACT*BITS*COMPONENTS*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />
      <SplitText
        text="Hello, GSAP!"
        className="text-5xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-5xl mb-8 text-center"
      />
      <TextType 
        text={["Text typing effect", "for your websites", "Happy coding!"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"

        className="text-5xl font-medium text-center mt-8"
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
