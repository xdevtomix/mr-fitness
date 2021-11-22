import styled from "styled-components";

export default function Features() {
    return (
        <Container data-component="features" id="features">
            <Title>
                <div></div>
                <h3>Gym Features</h3>
                <div></div>
            </Title>

            <BoxesContainer>
                <Box>
                    <img src="https://images.pexels.com/photos/2785408/pexels-photo-2785408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                </Box>
                <Box>
                    <i className='bx bx-body'></i>
                    <h5>Gym For Men</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, doloribus.</p>
                    <button>Read More</button>
                </Box>
                <Box>
                    <img src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                </Box>
                <Box>
                    <i className='bx bx-body'></i>
                    <h5>Gym For Women</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, doloribus.</p>
                    <button>Read More</button>
                </Box>
                <Box>
                    <img src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                </Box>
                <Box>
                    <i className='bx bx-body'></i>
                    <h5>Body Building</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, doloribus.</p>
                    <button>Read More</button>
                </Box>
            </BoxesContainer>
        </Container>
    );
}

const Container = styled.section`
    margin-top: 8rem;
    padding: 0 1rem;
`;

const Title = styled.div`   
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;

    div:nth-child(1) {
        width: 25%;
        border: 0.5px solid var(--light-white);
    }

    h3 {
        color: var(--red);
        border: 1px solid var(--light-white);
        border-radius: 0.25rem;
        width: max-content;
        padding: 0.5rem 1rem;
    }

    div:nth-child(3) {
        width: 25%;
        border: 0.5px solid var(--light-white);
    }
`;

const BoxesContainer = styled.div`
    display: grid;
    gap: 1rem;

    @media(min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media(min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    aspect-ratio: 1 / 1;

    img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }

    i {
        color: var(--light-white);
        font-size: 6rem;
    }

    h5 {
        color: var(--red);
        font-size: 1.5rem;
    }

    p {
        color: var(--light-white);
        text-align: center;
        font-size: 1rem;
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
`;