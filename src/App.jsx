import { NavLink, useRoutes } from 'react-router-dom'
import './App.css'
import routes from './routes'

function App() {

  const router = useRoutes(routes);

  return <>
    <nav>
      <ul>
        <li><NavLink to={'/'} >Tous les produits</NavLink></li>
        <li><NavLink to={'/product-form'} >Ajouter un nouveau produit</NavLink></li>
      </ul>
    </nav>
    <main>
      { router }
    </main>
  </>
}

export default App
