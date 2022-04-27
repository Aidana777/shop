import Header from "./components/Header/header";
import Card from "./components/Card/Card";
import Contain from "./components/Contain/Contain";
import Info from "./components/Info/Info"
import Comments from "./components/Comments/Comments";
function App() {
  return (
    <div className="App">
    <Header/>
   <Card></Card>
  <Contain></Contain>
  <Info></Info>
 <Comments></Comments>
    </div>
  );
}

export default App;
