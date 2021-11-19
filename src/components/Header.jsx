import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Header() {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');

    const [isSmallScreen, setIsSmallScreen] = useState(mediaQuery.matches);
    const [isVerticalMenuVisible, setIsVerticalMenuVisible] = useState(false);

    useEffect(() => {
        const onMediaChange = (e) => {
            setIsSmallScreen(e.matches);
        };

        mediaQuery.addEventListener('change', onMediaChange);

        return () => {
            mediaQuery.removeEventListener('change', onMediaChange);
        };
    }, []);

    const Links = () => (
        <>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#trainers">Trainers</Link>
            <Link href="#blogs">Blogs</Link>
        </>
    );

    return (
        <Container data-component="header">
            <Logo href="#">
                <span>Be</span>Fit
            </Logo>

            {isSmallScreen && <VerticalMenu isVerticalMenuVisible={isVerticalMenuVisible} onClick={() => setIsVerticalMenuVisible(false)}>
                <Links />
            </VerticalMenu>}

            {isSmallScreen && <MenuIcon className="bx bx-menu" onClick={() => setIsVerticalMenuVisible(!isVerticalMenuVisible)}></MenuIcon>}

            {!isSmallScreen && <HorizontalMenu>
                <Links />
            </HorizontalMenu>}
        </Container>
    );
}

const Container = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--black);
    padding: 1rem 2rem;

    @media(min-width: 1024px) {
        padding: 1rem 4rem;
    }
`;

const Logo = styled.a`
    font-weight: 600;
    font-size: 2rem;
    color: var(--white);
    text-decoration: none;

    span {
        color: var(--red);
    }
`;

const VerticalMenu = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: var(--black);
    padding: 2rem 0 0 2rem;
    display: flex;
    flex-direction: column;
    transition: 250ms;
    transform: translate3d(${({ isVerticalMenuVisible }) => isVerticalMenuVisible ? '0' : '-100%'}, 0, 0);
`;

const HorizontalMenu = styled.nav`

`;

const Link = styled.a`
    color: var(--white);
    margin-bottom: 1rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    text-decoration: none;

    :hover {
        color: var(--red);
    }
`;

const MenuIcon = styled.i`
    color: var(--white);
    font-size: 2.5rem;
    cursor: pointer;
`;

