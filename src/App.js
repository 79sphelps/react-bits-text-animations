import "./App.css";
import SplitText from "./SplitText";
import BlurText from "./BlurText";
import CircularText from "./CircularText";
import TextType from "./TextType";
import Shuffle from "./Shuffle";
import ShinyText from './ShinyText';
import TextPressure from './TextPressure';
import CurvedLoop from './CurvedLoop';
import FuzzyText from './FuzzyText';

function App() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    // <div className="background-gray-900 min-h-screen flex flex-col justify-center items-center space-y-12 p-4">
    <div className="bg-blue-500 min-h-screen">

      <CircularText
        text="CIRCULAR*TEXT*COMPONENT*"
        onHover="speedUp"
        spinDuration={20}
        className="text-5xl font-semibold text-center text-blue-900"
      />
      <SplitText
        text="SplitText Component!"
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

      <div className="justify-center items-center flex flex-col">
        <BlurText
          text="This is the BlurText component!"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl mb-8 text-center"
        />
      </div>
      <div>
        <TextType
          text={["TextType component effect", "for your websites", "Awesome!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-5xl font-medium text-center mt-8"
        />
      </div>
      <div>
        <Shuffle
          text="This is the Shuffle component effect!"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          className="text-5xl font-semibold text-center mt-8"
        />
      </div>

      <div>
        <ShinyText 
          text="This is the ShinyText component!" 
          disabled={false} 
          speed={3} 
          className='text-5xl font-semibold text-center' 
        />
      </div>

      {/* <div style={{position: 'relative', height: '300px'}}> */}
      <div className="justify-center items-center flex flex-col mt-8 mb-8">
        <TextPressure
          text="Hello!"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
          // minFontSize={24}
        />

      </div>
      <div>
        {/* Basic usage */}
        {/* <CurvedLoop marqueeText="Welcome to React Bits ✦" /> */}

        {/* With custom props */}
        <CurvedLoop 
          marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
          speed={3}
          curveAmount={500}
          direction="right"
          interactive={true}
          // className="custom-text-style"
        />

        {/* Non-interactive with slower speed */}
        {/* <CurvedLoop 
          marqueeText="Smooth Curved Animation"
          speed={1}
          curveAmount={300}
          interactive={false}
        /> */}
      </div>

      <div>
        <FuzzyText 
          baseIntensity={0.2} 
          // hoverIntensity={hoverIntensity} 
          hoverIntensity={0.5} 
          // enableHover={enableHover}
          enableHover={true}
        >
          404
        </FuzzyText>
      </div>

    </div>
  );
}

export default App;
