import React from "react";

function Header(props) {
    return (
        <header className={''}>
            <nav className={'navbar navbar-expand-sm bg-dark navbar-dark'}>
                <div className={'container-fluid'}>
                    <ul className={'navbar-nav'}>
                        <li className={'nav-item'}>
                            <a href={'#'} className={'nav-link'}>링크1</a>
                        </li>
                        <li className={'nav-item'}>
                            <a href={'#'} className={'nav-link'}>링크2</a>
                        </li>
                        <li className={'nav-item'}>
                            <a href={'#'} className={'nav-link'}>링크3</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    );
}

export default Header;