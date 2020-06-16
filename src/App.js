import React from "react";
import "./styles.css";
// import CustomSlider from "./Components/CustomSlider";
// import CustomButton from "./Components/CustomButton";
import SearchScreen from "./Screens/SearchScreen";

export default function App() {
  return (
    <div className="App">
      {/* <CustomSlider label1="Distance" label2="5km" points={30} />
      <CustomSlider label1="Price" label2="500-1000" points={[20, 50]} />
      <CustomButton text="Search" /> */}
      <SearchScreen />
    </div>
  );
}
