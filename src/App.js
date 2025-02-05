import { Provider } from 'react-redux';
import store from './redux/store.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './Componentes/PaginaInicial.jsx';
import PaginaCards from './Componentes/PaginaCards.jsx';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaInicial/>} />
            <Route path="/cards" element={<PaginaCards/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
