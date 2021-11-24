import styled from "styled-components";

export default function Trainers() {
    return (
        <Container data-component="trainers" id="trainers">

            <Title>
                <div></div>
                <h3>Expert Trainers</h3>
                <div></div>
            </Title>

            <BoxesContainer>

                <Box>
                    <img src="https://images.pexels.com/photos/5275033/pexels-photo-5275033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                    <div>
                        <span>Expert Trainer</span>
                        <h5>John Doe</h5>
                        <div></div>
                        <ul>
                            <li>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </li>
                        </ul>
                    </div>
                </Box>

                <Box>
                    <img src="https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                    <div>
                        <span>Expert Trainer</span>
                        <h5>John Doe</h5>
                        <div></div>
                        <ul>
                            <li>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </li>
                        </ul>
                    </div>
                </Box>

                <Box>
                    <img src="https://images.pexels.com/photos/8810074/pexels-photo-8810074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                    <div>
                        <span>Expert Trainer</span>
                        <h5>John Doe</h5>
                        <div></div>
                        <ul>
                            <li>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </li>
                        </ul>
                    </div>
                </Box>

                <Box>
                    <img src="https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                    <div>
                        <span>Expert Trainer</span>
                        <h5>John Doe</h5>
                        <div></div>
                        <ul>
                            <li>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </li>
                        </ul>
                    </div>
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 4rem;
`;

const Box = styled.div`
    width: 90%;
    max-width: 20rem;

    img {
        width: 100%;
        height: 70%;
        object-fit: cover;
        margin-bottom: 1rem;
    }

    >div {
        span {
            color: var(--red);
            display: inline-block;
            margin-bottom: 0.25rem;
            font-size: 1rem;
        }
    
        h5 {
            color: var(--white);
            margin-bottom: 1rem;
            font-size: 1.25rem;
        }
    
        div {
            width: 100%;
            border: 0.5px solid var(--light-white);
            margin-bottom: 1rem;
            opacity: 0.5;
        }
    
        ul {
            display: flex;
            align-items: center;
            list-style-type: none;
    
            li {
                margin-right: 1rem;

                ion-icon {
                    color: var(--white);
                    cursor: pointer;
                    font-size: 1.5rem;
                    opacity: 0.75;
                }
            }
        }
    }
`;