import 'bootstrap/dist/css/bootstrap.min.css';
import Created from './Components/Create';
import IntroApp from './Components/Intro';
import NavigationBar from './Components/Navigation';
import MemberJKT from './Components/profile';


function App() {
  return (
    <div style={{
      backgroundImage : "radia-linear(rgb(175, 100, 122), rgb(100, 25, 71))",
      backgroundSize : "cover"
    }}>
      <NavigationBar />
      <IntroApp />
      <div style={{}}>
        <MemberJKT />
      </div>
      <div style={{}}>
        <Created />
      </div>
    </div>
  );
}

export default App;
