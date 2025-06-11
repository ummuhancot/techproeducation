import React from "react";
import { Icon } from "./components/communication/Icon";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hamburgermenu } from "./components/menu/Hamburgermenu";
import { CarouselComponent } from "./components/carousel/CarouselComponent ";
import Programs from "./components/programs/Programs";




const App = () => {
  return (
    <div>
      <Icon/>
      <Hamburgermenu/>
      <CarouselComponent/>
     <Programs/>
    </div>
  );
};

export default App;
