import CardComponent from "./components/CardComponent/CardComponent";
import SearchBarComponent from "./components/SearchBarComponent/SearchBarComponent";
import TitleComponent from "./components/TitleComponent/TitleComponent";

function App() {
  return (
    <div>
      <TitleComponent title="Near Earth Object Finder" />
      <SearchBarComponent />
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          // alignContent: "flex-start"
        }}
      >
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default App;
