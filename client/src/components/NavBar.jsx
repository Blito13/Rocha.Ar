
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import cart from "../image/cart.png";
import BlueBird from "../image/BlueBird.jpg";
import userQuest from "../image/userQuest.png";
import fav from "../image/fav.png";
import loadingNavInfo from "../image/loadingNavInfo.gif";
import styles from './NavBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getVideos } from '../redux/actions';
export default function NavBar () {
  /*   const { loginWithRedirect, logout, user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0(); */
    const [ droppedMenu, setDroppedMenu ] = useState(false);
    const [ admin, setAdmin ] = useState(false);
    const [ loadingInfo, setLoadingInfo ] = useState(false);
   /*  const favo = useSelector((state) => state.favorites)  
    const car = useSelector((state) => state.shoppingCar)  */ 
    const dispatch = useDispatch() 
    const navigation = useNavigate()
    var valit = ""
  /*   var arrayCar = JSON.parse(localStorage.getItem('carrito'))
    var arrayFav = JSON.parse(localStorage.getItem('favoritos'))
   */
    // console.log(user)
  
  
    /* const getToken = () => {
      return new Promise( (resolve, reject) => {
        getAccessTokenSilently()
          .then( async token => getApiJWT(token) )
          .then( apiToken => {
            resolve(apiToken);
            console.log(apiToken)
          })
          .catch( error => {
            reject(error)
          })
      })
    };
   
    const validation = (valit)=>{  
      if (valit ==="favorites") {
        console.log("favorito")
        if (localStorage.getItem('favoritos') === "[]") {
          return navigation(1)
        }else{
          navigation("/favorites")
        }      
      }
      if (valit ==="car") {
        if (localStorage.getItem('carrito') === "[]") {
          return navigation(1)
        }else{
          navigation("/shoppingCar")
        }    
      }  
    }
  
    const dropMenu = () => {
      if ( droppedMenu === false ) {
        setDroppedMenu(true);
        setLoadingInfo(true)
        getToken()
          .then( apiToken => getUserRoles(user.sub, apiToken) )
          .then( data => {
            // console.log(data)
            if (data.length === 0) {
              setAdmin(false)
            }
            else {
              for ( let x=0; x < data.length; x++ ) {
                if ( data[x].name === 'Admin' ) {
                  setAdmin(true);
                  break
                }
                else {
                  setAdmin(false)
                }
              }
            }
            setLoadingInfo(false);
          })
          .catch( err => console.log(err) )
      }
      else {
        setDroppedMenu(false);
      }
    }
  
    const profileRedirect = () => {
      navigation("/user-profile")
    }
  
    const administrationRedirect = () => {
      navigation("/administration")
    }
  
    const myOrdersRedirect = () => {
      navigation("/orders")
    } */
    
    // console.log(user)
    return (
      <>
        <div className={styles.container}>
          <div className={styles.leftContent}>
            <Link to="/" className={styles.divLogo}>
              <div>
                <img
                  className={styles.logo}
                  src={BlueBird}
                  alt="logo Blue Bird"
                />
              </div>
            </Link>
                <div className={styles.divLogin}/*  onClick={() => dropMenu()} */>
                {/*   <img className={styles.pictureprofile} src={user?.picture}/> */}
                  <button className={styles.loginText}>
                    {" "}
                    {/* {user.name} */}{" "}
                  </button>
                </div>
                <div className={styles.divLogin} /* onClick={() => loginWithRedirect()} */>
                  <button
                    className={styles.loginText}
                   /*  onClick={() => loginWithRedirect()} */
                  >
                    {" "}
                    Login{" "}
                  </button>
                </div>
              <div className={styles.divLogin}>
                <button className={styles.loginText}>Loading...</button>
              </div>
            {/* { !isLoading ? (
                isAuthenticated ? (
              ) : (
              )
            ) : (
            )} */}
          </div>
          <ul className={styles.menu}>
            <Link to="/">
              <button className={styles.buttonNavBar}>Home</button>
            </Link>
            <Link to="/About">
              <button className={styles.buttonNavBar}>About</button>
            </Link>
            <div className={styles.favCarBtns}>
              <div className={styles.favCarBtns}>
                <img
                  className={styles.icon}
                  src={cart}
                  alt="shoppingCar"
                 /*  onClick={() => validation((valit = "car"))} */
                />
                {/* arrayCar.length ?  */<span className={styles.iconsCartFav}>{4}</span>/*  : null */}
              </div>
              <div className={styles.favCarBtns}>
                <img
                  className={styles.icon}
                  src={fav}
                  alt="favorites"
                 /*  onClick={() => validation((valit = "favorites"))} */
                />
                {/* arrayFav.length ?  */<span className={styles.iconsCartFav}>{5}</span> /* : null */}
              </div>
            </div>
          </ul>
          <div className={styles.divSearch}>
            <SearchBar />
          </div>
          { droppedMenu && 
            <div className={styles.drpMenuStyles}>
              { loadingInfo && (
                <div className={styles.loadingInfo}>
                  <img src={loadingNavInfo} />
                </div>
              )}
  
              { !loadingInfo && (
                <>
                  <button
                    className={styles.customFont}
                   /*  onClick={() => {
                      dropMenu();
                      profileRedirect();
                    }} */
                  >
                    My Account
                  </button>
                  <button
                    className={styles.customFont}
                   /*  onClick={() => {
                      dropMenu();
                      myOrdersRedirect();
                    }} */
                  >
                    My Orders
                  </button>
                  { /* admin && */ (
                    <button
                      className={styles.customFont}
                     /*  onClick={() => {
                        dropMenu();
                        administrationRedirect();
                      }} */
                    >
                      Administration
                    </button>
                  )}
                  <button
                    className={styles.customFont}
                   /*  onClick={() => {
                      dropMenu();
                      logout();
                    }} */
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          }
        </div>
      </>
    );
}