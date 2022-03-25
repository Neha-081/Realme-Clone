import { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { logoutInitiate } from '../../redux/userReducer/actions';
import { toast } from "react-toastify";
import "../../styles/header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const {  cart } = useSelector((store) => ({...store}));
  const { currentUser } = useSelector((state) => state?.user);

  
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const [navClass, setNavClass] = useState("navigation_bar");
  const [narzoClass, setNarzoClass] = useState("narzo_navigation_bar");
  const [realmeTVClass, setRealmeTVClass] = useState(
    ".realmeTV_navigation_bar"
  );
  const [laptopClass, setLaptopClass] = useState(".laptop_navigation_bar");
  const [audioClass, setAudioClass] = useState("audio_navigation_bar");
  const [smartLifeClass, setSmartLifeClass] = useState(
    "smartLife_navigation_bar"
  );

  const [accessoriesClass, setAccessoriesClass] = useState(
    "accessories_navigation_bar"
  );

  const acessoriesHandleChange = () => {
    setAccessoriesClass("accessories_navigation_bar_active");
  };
  const acessoriesHandleLeave = () => {
    setAccessoriesClass("accessories_navigation_bar");
  };

  const smartLifeHandleChange = () => {
    setSmartLifeClass("smartLife_navigation_bar_active");
  };
  const smartLifeHandleLeave = () => {
    setSmartLifeClass("smartLife_navigation_bar");
  };

  const audioHandleChange = () => {
    setAudioClass("audio_navigation_bar_active");
  };
  const audioHandleLeave = () => {
    setAudioClass("audio_navigation_bar");
  };

  const laptopHandleEnter = () => {
    console.log(laptopClass)
    setLaptopClass("laptop_navigation_bar_active");
  };
  const laptopHandleLeave = () => {
    setLaptopClass("laptop_navigation_bar");
  };
  const handleChange = () => {
    setNavClass("navigation_bar_active");
  };
  const handleLeave = () => {
    setNavClass("navigation_bar");
  };
  const narzoHandleEnter = () => {
    setNarzoClass("narzo_navigation_bar_active");
  };
  const narzoHandleLeave = () => {
    setNarzoClass("narzo_navigation_bar");
  };
  const realmeTVHandleEnter = () => {
    console.log(realmeTVClass)
    setRealmeTVClass("realmeTV_navigation_bar_active");
  };
  const realmeTVHandleLeave = () => {
    setRealmeTVClass("realmeTV_navigation_bar");
  };

  
  const handleAuth = () => {
    // console.log(currentUser,'currentUser currentUser ----- ')
    // if(currentUser){
      // console.log('enter -- ', currentUser)
      toast.success("You have successfully Logged out")
      navigate("/")
      dispatch(logoutInitiate());
    // }
    };


  return (
    <div className="navbar-main">
      
    <div className="header_container">
      <div className="mall-plus">
        <div className="header-plus">
          <div className="notResDiv">
          <ul>
            <li>
              <a href="https://www.realme.com/in/realmeow" className="tagHeader">
                realmeow
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="https://www.realme.com/in/brand" className="tagHeader">
                Brand
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="https://www.realme.com/in/support" className="tagHeader">
                Support
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="https://c.realme.com/in/" className="tagHeader">
                Community
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="https://www.realme.com/in/app-download" className="tagHeader">
                App
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="https://www.realme.com/in/bulk-order" className="tagHeader">
                Bulk Order
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="https://www.realme.com/in/realme-ui-3" className="tagHeader">
                UI 3.0
              </a>
            </li>
          </ul>
          </div>




          <div className="resposniveDiv">
          <ul>
            
            <Link to="/" className="realme-dupl" style={{textDecoration:"none"}}>  realme</Link>

            <li className="welcome">
                Welcome {currentUser.displayName.toUpperCase()}
            </li>
            <li>
              <span>|</span>
            </li>
            
            <li>
              { currentUser ? <button className="logoutButton" onClick={handleAuth}>Logout</button> :  <Link className="tagHeader" to="/login">Login</Link> }
            
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <Link to="/myorder" className="tagHeader">
                My Order 
              </Link>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
                <Link to="/Cart" className="tagHeader">Cart<span style={{color:"red"}}> ({cart.length})</span></Link>
                
            </li>
          </ul>
          </div>
        </div>
      </div>


      <div className="wrapper">
        <div className="nav">
          <ul className="nav-menu">
            <li className="false">
              <div>
                <a href="##" className="tag1">
                    <Link to="/">  realme</Link>
                
                </a>
              </div>
            </li>
            <li className="false">
              <a
               href="##"
                className="tagHeader"
                onMouseEnter={handleChange}
                onMouseLeave={handleLeave}
              >
                realme Smartphones
              </a>
              <div className={navClass}>
                <div className="navigation_bar_container">
                  <div className="navigation_flex_box">
                    <div className="flex_child_box">
                      <ul>
                        <li>9 Series</li>
                        <li>GT Series</li>
                        <li>8 Series</li>
                        <li>C Series</li>
                        <li>7 Series</li>
                        <li>X Series</li>
                        <li>6 Series</li>
                        <li>5 Series</li>
                      </ul>
                    </div>
                    <div className="flex_child_box_des">
                      <div className="des_outer">
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20220131/1643635116029.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="new_p">NEW</p>
                              <p className="des_p">realme 9 Pro+ 5G</p>
                              <p className="price_p">
                                From ₹<span>24,999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20220217/1645105009176.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="new_p">NEW</p>
                              <p className="des_p">realme 9 Pro 5G</p>
                              <p className="price_p">
                                From ₹<span>17,999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20220126/1643190140852.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="new_p">NEW</p>
                              <p className="des_p">realme 9i</p>
                              <p className="price_p">
                                From ₹<span>13,999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="false">
              <a
                href="##"
                className="tagHeader"
                onMouseEnter={narzoHandleEnter}
                onMouseLeave={narzoHandleLeave}
              >
                narzo Smartphones
              </a>
              <div className={narzoClass}>
                <div className="grid_box_outer">
                  <div className="grid_box_inner">
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20220223/1645593378506.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme narzo 50</p>
                          <p className="price_p">
                            From ₹<span>18,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210916/1631776407331.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme narzo 50i</p>
                          <p className="price_p">
                            From ₹<span>7,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210916/1631776707007.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme narzo 50A</p>
                          <p className="price_p">
                            From ₹<span>11,499</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210609/1623253153556.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme narzo 30 5G</p>
                          <p className="price_p">
                            From ₹<span>14,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210611/1623400675833.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme narzo 30</p>
                          <p className="price_p">
                            From ₹<span>13,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210223/1614061250334.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme narzo 30 Pro 5G</p>
                          <p className="price_p">
                            From ₹<span>16,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210223/1614059785066.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme narzo 30A</p>
                          <p className="price_p">
                            From ₹<span>8,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20200917/1600332417558.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme narzo 20 Pro</p>
                          <p className="price_p">
                            From ₹<span>14,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20200917/1600331889104.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme narzo 20</p>
                          <p className="price_p">
                            From ₹<span>10,499</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="false">
              <a
                href="##"
                className="tagHeader"
                onMouseEnter={audioHandleChange}
                onMouseLeave={audioHandleLeave}
              >
                Audio
              </a>
              <div className={audioClass}>
                <div className="navigation_bar_container">
                  <div className="navigation_flex_box">
                    <div className="flex_child_box">
                      <ul>
                        <li>
                          Bluetooth Speaker<i class="icon icon-arrow-down"></i>
                        </li>
                        <li>Active-Noise </li>
                        <li>True Wireless</li>
                        <li>Neckband</li>
                        <li>Wired</li>
                      </ul>
                    </div>
                    <div className="flex_child_box_des">
                      <div className="des_outer">
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20211011/1633932657542.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="new_p">NEW</p>
                              <p className="des_p">
                                realme Brick Bluetooth Speaker
                              </p>
                              <p className="price_p">
                                From ₹<span>2,999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20210903/1630653224609.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">
                                realme Pocket Bluetooth Speaker
                              </p>
                              <p className="price_p">
                                From ₹<span>1,099</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20210903/1630653121184.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">
                                realme Cobble Bluetooth Speaker
                              </p>
                              <p className="price_p">
                                From ₹<span>1,799</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="false">
              <a
                href="##"
                className="tagHeader"
                onMouseEnter={smartLifeHandleChange}
                onMouseLeave={smartLifeHandleLeave}
              >
                Smart Life
              </a>
              <div className={smartLifeClass}>
                <div className="navigation_bar_container">
                  <div className="navigation_flex_box">
                    <div className="flex_child_box">
                      <ul>
                        <li>Smart Wearable</li>
                        <li>Smart Home</li>
                      </ul>
                    </div>
                    <div className="flex_child_box_des">
                      <div className="des_outer">
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20210916/1631776028421.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">realme Band 2</p>
                              <p className="price_p">
                                ₹<span>2,999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20210715/1626361731335.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">
                                {" "}
                                <p className="new_p">NEW</p>
                              </p>
                              <p className="price_p">
                                ₹<span>4,999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20211201/1638356645950.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">realme Watch 2</p>
                              <p className="price_p">
                                ₹<span>3,599</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="des_outer">
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20210223/1614068876677.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">
                                realme Watch S Master Edition
                              </p>
                              <p className="price_p">
                                ₹<span>5,999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20201221/1608534874394.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">realme Watch S Pro</p>
                              <p className="price_p">
                                ₹<span>9,999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20210604/1622779348754.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">realme Watch S</p>
                              <p className="price_p">
                                ₹<span>4,599</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="des_outer">
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20200525/1590396462498.jpg" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">realme Watch</p>
                              <p className="price_p">
                                ₹<span>3,999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20201019/1603076052088.jpg" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">realme Band</p>
                              <p className="price_p">
                                ₹<span>1,499</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20211201/1638356645950.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">realme Watch 2</p>
                              <p className="price_p">
                                ₹<span>3,599</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="false">
              <a
                href="##"
                className="tagHeader"
                onMouseEnter={acessoriesHandleChange}
                onMouseLeave={acessoriesHandleLeave}
              >
                Accessories & Lifestyle
              </a>
              <div className={accessoriesClass}>
                <div className="navigation_bar_container">
                  <div className="navigation_flex_box">
                    <div className="flex_child_box">
                      <ul>
                        <li>Power Bank</li>
                        <li>Cable</li>
                        <li>Charger</li>
                        <li>Watch Strap</li>
                        <li>Clothing</li>
                        <li>Personal Care</li>
                        <li>Gaming Accessory</li>
                        <li>Backup & Luggage</li>
                        <li>Other Accessory</li>
                      </ul>
                    </div>
                    <div className="flex_child_box_des">
                      <div className="des_outer">
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20201027/1603804230449.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">
                                realme 10000mAh Power Bank 2i
                              </p>
                              <p className="price_p">
                                ₹<span>999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20201005/1601910584214.jpg" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">
                                realme 20000mAh Power Bank 2
                              </p>
                              <p className="price_p">
                                ₹<span>1,699</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20200514/1589437407116.jpg" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="des_p">
                                realme 10000mAh Power Bank 2
                              </p>
                              <p className="price_p">
                                ₹<span>1,199</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="false">
              <a
                href="##"
                className="tagHeader"
                onMouseEnter={realmeTVHandleEnter}
                onMouseLeave={realmeTVHandleLeave}
              >
                realme TV
              </a>
              {/* <div className={realmeTVClass}>
                <div className="grid_box_outer">
                  <div className="grid_box_inner">
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20211201/1638346373432.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">
                            realme 4K Smart Google TV Stick
                          </p>
                          <p className="price_p">
                            ₹<span>3,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210916/1631776095350.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme Smart TV Neo 32”</p>
                          <p className="price_p">
                            From ₹<span>13,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210624/1624526397083.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">
                            realme Smart TV Full HD 80cm(32")
                          </p>
                          <p className="price_p">
                            From ₹<span>17,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210531/1622446151388.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">
                            realme Smart TV 4K (43'' & 50'')
                          </p>
                          <p className="price_p">
                            ₹<span>28,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20200930/1601463930406.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme Smart TV SLED 4K</p>
                          <p className="price_p">
                            From ₹<span>48,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20200630/1593487442773.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme Smart Tv (32'' & 43'')</p>
                          <p className="price_p">
                            From ₹<span>20,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20201009/1602214787717.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme 100W Soundbar</p>
                          <p className="price_p">
                            From ₹<span>6,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </li>
            <li className="false">
              <a
                href="##"
                className="tagHeader"
                onMouseEnter={laptopHandleEnter}
                onMouseLeave={laptopHandleLeave}
              >
                Laptop & Tablet
              </a>
              {/* <div className={laptopClass}>
                <div className="grid_box_outer">
                  <div className="grid_box_inner">
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20220125/1643110048971.png" alt="" />
                        </div>
                      </div>
                      <div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme TechLife Tablet Cover</p>
                          <p className="price_p">
                            From ₹<span>699</span>
                          </p>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20211229/1640775023516.jpg" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme Wireless Mouse</p>
                          <p className="price_p">
                            From ₹<span>799</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210907/1630992241023.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme Pad</p>
                          <p className="price_p">
                            From ₹<span>13,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210812/1628766831238.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme Book (Slim)</p>
                          <p className="price_p">
                            From ₹<span>46,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: "100px",
                  }}
                ></div>
              </div> */}
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <a className="nav-search gtag" href="##">
            <span className="icon icon-search"></span>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};