import HeaderWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";

import Logo from "../../../assets/images/logo-3.png";
import { HiMenuAlt3 } from "react-icons/hi";
import Whitepaper from "../../../assets/pdf/whitepaper.pdf";

import { useState } from "react";
import ConnectWalletButton from "../../button/ConnectWalletButton";
import DropdownDemo from "../dropdownDemo/DropdownDemo";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <>
      <HeaderWrapper className="header-section">
        <div className="container">
          <div className="gittu-header-content">
            <div className="gittu-header-left">
              <a className="gittu-header-logo" href="/">
                <img src={Logo} alt="Logo" />
              </a>

              <DropdownDemo />
            </div>
            <div className="gittu-header-right">
              <div className="gittu-header-menu-toggle">
                <button className="menu-toggler" onClick={handleMobileMenu}>
                  <HiMenuAlt3 />
                </button>
              </div>
              <div className="gittu-header-right-menu">
                <ul className="gittu-header-menu">
                 
                </ul>

                <ConnectWalletButton />
              </div>
            </div>
          </div>
        </div>
      </HeaderWrapper>
      {isMobileMenu && <MobileMenu mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
