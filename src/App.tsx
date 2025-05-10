import { useState } from "react";
import MainLayout from "./components/layouts/main.layout";
import OnBoarding from "./components/onBoarding";

export default function App(){
  const [isOnBoarding, setOnBoarding] = useState(true);

  if(isOnBoarding){
    return <OnBoarding onComplete={() => setOnBoarding(false)} />
  }

  return (
    <div>
      <MainLayout />
    </div>
  )
}