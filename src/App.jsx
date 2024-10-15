import './App.css';
import { useState, useEffect } from 'react'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './routes/routes';

function App() {

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <header>
        <h1>The Perfect Todo App</h1>
        <label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />
          Dark Mode
        </label>
      </header>
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;
