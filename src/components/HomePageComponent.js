import React from 'react'
import './styles/HomePageComponent.css'
import temporalIcon from './sources/BrandIcon.png'
import pizzaPresentation from './sources/pizza-png.png'
import whiteWave from './sources/vectors/VectorWhite.svg'
import yelloWave from './sources/vectors/VectorYellow.svg'
import champinon from './sources/product-1.jpg'
import langostinos from './sources/product-2.jpg'
import pastas from './sources/product-4.jpg'
import doubleHamburger from './sources/product-5.jpg'
import pizzaStandard from './sources/product-6.jpg'
import drink from './sources/product-7.jpg'
import singleHamburger from './sources/product-8.jpg'
import hamburgerMostaza from './sources/special-dishes-1.png'
import avatar0 from './sources/avatars/avatar.png'
import avatar1 from './sources/avatars/avatar (1).png'
// import chefs images
import chef1 from './sources/Chefs/chef-1.jpg'
import chef2 from './sources/Chefs/chef-2.jpg'
import chef3 from './sources/Chefs/chef-3.jpg'
import chef4 from './sources/Chefs/chef-4.jpg'
// social media icons
import facebook from './sources/icons/Facebook.png'
import instagram from './sources/icons/Instagram.png'
import twitter from './sources/icons/Twitter.png'
// vectors for bottom
import yelloWaveDown from './sources/vectors/VectorYellowDown.svg'
import whiteWaveDown from './sources/vectors/VectorWhiteDown.svg'
// icons for footer contact
import placeMarker from './sources/icons/Place Marker.png'
import mailIco from './sources/icons/Mail.png'
import whatsappIco from './sources/icons/WhatsApp.png'

function AcompanamientoComponent({image}) {
    return (
          <div className="acompanamiento">
              <div className="image-container">
                  <img src={image} alt="hamburger" />
              </div>
              <h4>Hamburguesa</h4>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, labore quasi temporibus consectetur suscipit sunt </span>
          </div>);
  }

  
function MenuItemComponent({image}) {
return (<div className="menu-item">
                <div className="image-menu">
                    <img src={image} alt="pizza" />
                </div>
                <h4>Gran pizza italiana</h4>
                <span>$16.99</span>
            </div>);
}

function ClientOpinionComponent({avatarImage,clientName,clientLastName}) {
    return (<div className="opinion-container">
              <img className='client-avatar' width='100px' height='100px' src={avatarImage} alt="client avatar" />
              <span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Itaque dolore nisi ipsa neque? Dolorem incidunt fugiat temporibus animi nobis, vero expedita voluptate</span>
              <div className="client-name">
                  <h3>{clientName}</h3>
                  <h4>{clientLastName}</h4>
              </div>
          </div>);
  }
const ChefItemComponent = ({name,description,image})=>{
    return (
        <div className="chef-container">
            <img className='chef' src={image} alt="chef vertical" />
            <div className="chef-label">
                <h3>{name}</h3>
                <h5>{description}</h5>
                <div className="social-media">
                    <a href="./#">
                        <img src={facebook} alt="facebook logo" />                        
                    </a>
                    <a href="./#">
                        <img src={twitter} alt="twitter logo" />
                    </a>
                    <a href="./#">
                        <img src={instagram} alt="instagram logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export const HomePageComponent = () => {
  return (
    <div className='application'>
        <nav className='navigation-bar'>
            <img className='logo' height='56px' width='auto' src={temporalIcon} alt="Waily pizzeria logo" />
            <div className="pages-nav">
                <a href="./#">Inicio</a>
                <a href="./#">Menu</a>
                <a href="./#">Acerca de</a>
                <a href="./#">Contacto</a>
            </div>
        </nav>
        <section className='first'>
        <img id='yellow-wave' className='svg-wave' src={yelloWave} alt="SVG yellow wave" />
        <img id='white-wave' className='svg-wave' src={whiteWave} alt="SVG white wave" />
            <div className='presentation'>
                <div className="presentation-title">
                    <h2>LA MEJOR PIZZERIA</h2>
                    <h3>DE TODA LIMA</h3>
                    <span>Delivery gratis, ingredientes locales frescos nos brindan gran valor. Altos estandares de cocina.</span>
                    <button className='order-now'>Ordena ahora</button>
                </div>
                <img id='pizza' src={pizzaPresentation} width='400px' height='auto' alt="pizza with cheese triangule" />
            </div>
        </section>

        <section className='acompanamientos'>
            <h3 className='section-title'>ESCOGE UNA VARIEDAD DE ACOMPANAMIENTOS</h3>
            <div className="acompanamientos-carousel">
                <AcompanamientoComponent image={hamburgerMostaza} />
                <AcompanamientoComponent image={pizzaStandard} />
                <AcompanamientoComponent image={pastas} />
                <AcompanamientoComponent image={singleHamburger} />
            </div>
        </section>
        <section className='menu'> 
            <h3 className='section-title'>NUESTRO MENU</h3>
            <div className="menu-buttons">
                <button className='choice'>TODO</button>
                <button>Hamburguesas</button>
                <button>Pizzas</button>
                <button>Parrillas</button>
                <button>Pastas</button>
                <button>Bebidas</button>
            </div>
            <div className="menus-container">
                <MenuItemComponent image={doubleHamburger} />
                <MenuItemComponent image={pizzaStandard} />
                <MenuItemComponent image={champinon} />
                <MenuItemComponent image={drink} />
                <MenuItemComponent image={hamburgerMostaza} />
                <MenuItemComponent image={langostinos} />

                <MenuItemComponent image={hamburgerMostaza} />
                <MenuItemComponent image={pizzaStandard} />
                <MenuItemComponent image={drink} />
                <MenuItemComponent image={doubleHamburger} />
                <MenuItemComponent image={langostinos} />
                <MenuItemComponent image={champinon} />
            </div>
        </section>
        <section className='clients-opinion'>
            <h3 className='section-title'>LOS CLIENTES NOS RESPALDAN</h3>
            <div className="opinions-list">
                <ClientOpinionComponent clientName={'Alexander'} clientLastName={'Palacios'} avatarImage={avatar0} />
                <ClientOpinionComponent clientName={'Valeria'} clientLastName={'Caceres'} avatarImage={avatar1} />
            </div>
            <div className="opinion-page-counter">
                <div className="circle selected"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </section>
        <section className='chefs'>
            <h3 className='section-title'>CHEFS DE ALTA CALIDAD</h3>
            <div className="chefs-list">
                <ChefItemComponent image={chef1} name='Josefino Maza' description='Gastronomia parrillera' />
                <ChefItemComponent image={chef2} name='Jeny Clinton' description='Gastronomia repostera' />
                <ChefItemComponent image={chef3} name='Damien Mazzerati' description='Gastronomia italiana' />
                <ChefItemComponent image={chef4} name='Carlos Andres' description='Gastronomia marina' />
            </div>
            
        </section>
        <footer>
            <img className='wave-down' id='yellow-wave-down' src={yelloWaveDown} alt="yellow wave down page" />
            <img className='wave-down' id='white-wave-down' src={whiteWaveDown} alt="white wave down page" />
            <div className="foot-content">
                <h3 className='footer-title'>CONTACTO</h3>
                <div className="contact-options">
                    <div className="contact-item">
                        <img src={placeMarker} alt="imagen de contacto" />
                        <span>Ubicacion</span>
                        <p>Av. Proceres de Independencia 142</p>
                    </div>
                    <div className="contact-item">
                        <img src={whatsappIco} alt="imagen de contacto" />
                        <span>WhatsApp</span>
                        <p>939 512 732</p>
                    </div>
                    <div className="contact-item">
                        <img src={mailIco} alt="imagen de contacto" />
                        <span>Mail</span>
                        <p>pizzeriaWaily@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
