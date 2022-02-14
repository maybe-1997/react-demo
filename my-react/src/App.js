import { NavLink, Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import { createBrowserHistory } from 'history'
import './App.css'

const history = createBrowserHistory();

function App() {
  return (
    <Router history={ history }>
      <div style={{textAlign: 'center'}}>
        <NavLink to='/' replace>首页</NavLink>
        <NavLink to='/about' replace>关于</NavLink>
        {renderRoutes(routes)}
      </div>
    </Router>
  );
}

export default App;
