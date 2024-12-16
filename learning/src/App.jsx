import Header from "./header"
import UserGreeting from "./userGreeting"
import './index.css'
export default function App(){
  return(
    <div>
  <Header Fruits="Apple, Papaya" Paisa="500Rs" />
  <Header Fruits="Mango, Papaya" Paisa="400Rs" />
  <UserGreeting isloggedin ={true} />

    </div>
  )
}
 
