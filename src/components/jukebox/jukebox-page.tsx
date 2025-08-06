import { useState } from "react";
import { JukeboxBackground } from "./jukebox-background";
import { JukeboxSpin } from "./jukebox-spin";
import { JukeboxVinylsSlider } from "./jukebox-vinyls-slider";



export const JukeboxPage = () => {
  const [scale, setScale] = useState(1)

  const zoomIn = () => {
      setScale(2)
  }

  return <>
  
  <JukeboxBackground zoomIn={zoomIn} scale={scale} />
  <JukeboxSpin/> 
  <JukeboxVinylsSlider/>
  </>
};

