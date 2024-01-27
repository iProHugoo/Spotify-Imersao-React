import React from 'react';
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="header_navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta à esquerda" />
                </button>
                <button className="arrow-left">
                    <img src={smallRight} alt="Seta à direita" />
                </button>
            </div>

            <div className="header_search">
                <img src={search} alt="" />
                <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
                    placeholder="O que você quer ouvir?" value="" />
            </div>

            <div className="header_login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
}

export default Header;