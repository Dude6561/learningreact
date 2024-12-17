import Header from "./header";
import List from "./list";
import UserGreeting from "./userGreeting";
import "./index.css";
import Mycomponent from "./Mycomponent";
export default function App() {
  return (
    <div>
      <Header Fruits="Apple, Papaya" Paisa="500Rs" />
      <Header Fruits="Mango, Papaya" Paisa="400Rs" />
      <UserGreeting isloggedin={true} />
      <List />
      <Mycomponent />
    </div>
  );
}
