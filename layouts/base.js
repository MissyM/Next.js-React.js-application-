import Link from 'next/prefetch'

export default ({ children }) => (
  <div className="main"> 
    <div>
      <h2><Link><a>Sucursales</a></Link></h2>
    </div>
  

    { children }
    
    { /*Estilos globales*/ }
    <style jsx>{`
      .main {
        paddyng: 10px 50px;
        font-family: sans-serif;
      }
      .logo a {
        clor: inherit;
      }
      a {
        text-decoration: none;
      }
    `}</style>
  </div>
)