import Header from "./header";
import List from "./list";
import UserGreeting from "./userGreeting";
import "./index.css";
import Mycomponent from "./Mycomponent";
import Colorpicker from "./colorpicker";
import Yourcomponent from "./Yourcomponent";
export default function App() {
  return (
    <div>
      <Header Fruits="Apple, Papaya" Paisa="500Rs" />
      <Header Fruits="Mango, Papaya" Paisa="400Rs" />
      <UserGreeting />
      <List />
      <Mycomponent />
      <Colorpicker />
      <Yourcomponent />
    </div>
  );
}
