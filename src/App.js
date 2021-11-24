import Homepage from "./pages/HomePage";
import background from './assets/Images/stars_transparent.png'
function App() {
  return (
    <div styles={{ backgroundImage:`url(${background})` }}>
      <Homepage />
    </div>
  );
}

export default App;
