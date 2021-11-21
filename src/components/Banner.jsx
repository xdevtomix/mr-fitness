import styled from "styled-components";

export default function Banner() {
    return (
        <Container data-component="banner">
            <p>Join Us Now</p>
            <h3>GET UP TO 50% DISCOUNT</h3>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ut deleniti ea tenetur eligendi praesentium corporis iure, in harum aspernatur.</div>
            <button>Get Discount</button>
        </Container>
    );
}

const Container = styled.section`
    margin-top: 4rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(https://images.pexels.com/photos/7674495/pexels-photo-7674495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-position: center;
    background-size: cover;
    aspect-ratio: 2 / 3;

    p {
        font-size: 2rem;
        font-weight: 700;
        color: var(--red);
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 2rem;
        color: var(--white);
        text-align: center;
        margin-bottom: 1rem;
    }

    div {
        font-size: 1rem;
        color: var(--light-white);
        text-align: center;
        margin-bottom: 2rem;
    }

    button {
        cursor: pointer;
        background: var(--red);
        color: var(--white);
        width: max-content;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        letter-spacing: 0.1rem;
        font-size: 1rem;
    }

    @media(min-width: 768px) {
        margin-top: 6rem;
        aspect-ratio: 12 / 6;
    }

    @media(min-width: 1024px) {
        margin-top: 8rem;
        aspect-ratio: 12 / 4;
    }
`;