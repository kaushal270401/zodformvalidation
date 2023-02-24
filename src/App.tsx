import DataFeild from "./component/DataFeild";
import SignUpForm from "./component/SignUpform";
import ThemeSelector from "./Themeselector";

function App() {
  return (
    <div className="App">
      <>
          <ThemeSelector />
          <SignUpForm />
          <DataFeild/>
      </>
    </div>
  );
}

export default App;
