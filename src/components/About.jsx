import styled from "styled-components";

export default function About() {
    return (
        <Container data-component="about" id="about">

            <ImageContainer>
                <div></div>
                <img src="https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                <div></div>
            </ImageContainer>

            <Content>
                <span>About Us</span>
                <h4>Every Day Is A Chance to Become Better</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam odio soluta ea, iste eveniet eum. Tempora doloribus qui cupiditate nam.</p>

                <BoxesContainer>
                    <Box>
                        <div>
                            <ion-icon name="checkmark-sharp"></ion-icon>
                            <h5>Body And Mind</h5>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, aspernatur?</p>
                    </Box>

                    <Box>
                        <div>
                            <ion-icon name="checkmark-sharp"></ion-icon>
                            <h5>Healthy Life</h5>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, aspernatur?</p>
                    </Box>

                    <Box>
                        <div>
                            <ion-icon name="checkmark-sharp"></ion-icon>
                            <h5>Strategies</h5>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, aspernatur?</p>
                    </Box>

                    <Box>
                        <div>
                            <ion-icon name="checkmark-sharp"></ion-icon>
                            <h5>Workouts</h5>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, aspernatur?</p>
                    </Box>
                </BoxesContainer>

                <button>Read More</button>
            </Content>

        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 8rem;

    @media(min-width: 768px) {
        gap: 4rem;
    }

    @media(min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 2rem;
        gap: 0;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    position: relative;

    @media(min-width: 768px) {
        width: 75%;
    }

    div:nth-child(1) {
        position: absolute;
        top: 0;
        left: 0;
        width: 10rem;
        height: 10rem;
        border: 0.5rem solid var(--red);
    }

    img {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        z-index: 1;
        width: calc(100% - 1rem);
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }

    div:nth-child(3) {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10rem;
        height: 10rem;
        border: 0.5rem solid var(--red);
    }
`;

const Content = styled.div`
    padding: 0 1rem;

    >span {
        color: var(--red);
        font-size: 1rem;
        display: inline-block;
        margin-bottom: 0.5rem;
    }

    >h4 {
        color: var(--white);
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    >p {
        color: var(--light-white);
        font-size: 1rem;
    }

    >button {
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
        padding: 0 4rem;
    }

    @media(min-width: 1024px) {
        margin-top: 0;
    }
`;

const BoxesContainer = styled.div`
    margin: 2rem 0;
    display: grid;
    gap: 2rem;

    @media(min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;

        ion-icon {
            color: var(--red);
            font-size: 1.5rem;
            margin-right: 0.5rem;
        }
    
        h5 {
            color: var(--white);
            font-size: 1rem;
        }
    }
    
    p {
        color: var(--light-white);
        font-size: 1rem;
    }
`;