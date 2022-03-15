import { Nav, Dropdown, Row, Col } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type MenuProps = {
    showDownload?: boolean;
    navClass?: string;
    buttonClass?: string;
    loggedInUser?: {};
};

const Menu = ({ navClass, buttonClass, showDownload, loggedInUser }: MenuProps) => {
    let location = useLocation();

    const isActiveRoute = (path: string) => {
        if (location.pathname) {
            return location.pathname.includes(path);
        }
        return false;
    };

    return (
        <Nav as="ul" className={classNames('align-items-lg-center justify-content-center', navClass)}>
            <Nav.Item as="li">
                <NavLink to="/home" end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Home
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink to="/exchange" end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Exchange
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink to="/trade" end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Trade
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink to="/products" end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Products
                </NavLink>
            </Nav.Item>

            <Dropdown as={'li'} className="nav-item">
                <Dropdown.Toggle
                    as={Nav.Link}
                    id="navbarMarkets"
                    className={classNames(
                        isActiveRoute('/trade/BTC/USD') ||
                            isActiveRoute('/trade/ETH/USD') ||
                            isActiveRoute('/trade/SOL/USD')
                            ? 'active'
                            : ''
                    )}
                >
                    Markets <FeatherIcon icon="chevron-down" className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1" />
                </Dropdown.Toggle>

                <Dropdown.Menu renderOnMount>
                    <Nav as={'ul'} navbar={false}>
                        <Nav.Item as="li">
                            <NavLink
                                to="/trade/BTC/USD"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                            >
                                Bitcoin
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink
                                to="/trade/ETH/USD"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                            >
                                Ethereum
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink
                                to="/trade/SOL/USD"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                            >
                                Solana
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink
                                to="/markets"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                            >
                                All Markets
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    );
};

export default Menu;
