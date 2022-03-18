import { useNavigate } from 'react-router-dom';
import { ImageLogo } from '../../images/ImageLogo';
import { LinkComponent } from '../../routes/LinkComponent'
import { NavLinkComponent } from '../../routes/NavLinkComponent'


export const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login', {
      replace: true
    });
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <LinkComponent path='/' content={<ImageLogo size='100%'/>} />
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLinkComponent path='/about' content={'Nosotros'} />
          <NavLinkComponent path='/blog' content={'Blog'} />
          <NavLinkComponent path='/contactus' content={'Contáctanos'} />
          <NavLinkComponent path='/FAQ' content={'FAQ'} />
        </div>
      </div>
      <div style={{marginRight: '5%'}} className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className='nav-item nav-link text-info'>JuanJo</span>
          <button className="btn btn-outline-success" onClick={handleLogout} >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}