import './App.css'
import Landing from "./Components/Landing";
import Animation from "./Components/Animation";

const App = () => {
  return (
    <div>
      <Animation />
      <Landing />
    </div>
  )
};
export default App;




















/*
<div>
        <motion.h1 className="text-7xl mx-auto pt-[40vh] font-bold w-[700px]"
        variants={pVariants}
        initial="hidden"
        animate="visible"      
        >
        {text.split("").map((char,index)=> (
          <motion.span key={index}
          variants={spanVariants}
          >{char}
          </motion.span>
        ))}
        </motion.h1>
      </div>

       const text = "Front-End React Developer"
  const pVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  }
  const spanVariants = {
    hidden: {
      color: "blue"
    },
    visible: {
      color: "purple"
    }
  }
    */