import "./App.css";
import MobileShell from "./app/layouts/MobileShell";
import AppRouter from "./app/router/AppRouter";

function App() {
  return (
    <MobileShell>
      <AppRouter />
    </MobileShell>
  )
}

export default App;
