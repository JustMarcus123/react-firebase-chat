import List from "./components/list/List.jsx";
import Chat from "./components/chat/Chat.jsx";
import Details from "./components/details/Details";
const App = () => {
  return (
    <div className="container">
      <List />
      <Chat />
      <Details />
    </div>
  );
};

export default App;
