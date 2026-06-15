import "./App.css";
import MobileShell from "./components/layouts/MobileShell";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <MobileShell>
      <AppRouter />
    </MobileShell>
  )
}

export default App;
