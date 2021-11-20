import styled from "styled-components";

export default function Pricing() {
    return (
        <Container data-component="pricing" id="pricing">

            <Title>
                <div></div>
                <h3>Pricing</h3>
                <div></div>
            </Title>

            <BoxesContainer>

                <Box>
                    <h5>Basic Plan</h5>
                    <p>$<span>30</span>/month</p>
                    <ul>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Personal Training</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Cardio Exercises</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Weight Lifting</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Diet Plans</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Overall Results</span>
                        </li>
                    </ul>
                </Box>

                <Box>
                    <h5>Medium Plan</h5>
                    <p>$<span>60</span>/month</p>
                    <ul>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Personal Training</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Cardio Exercises</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Weight Lifting</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Diet Plans</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Overall Results</span>
                        </li>
                    </ul>
                </Box>

                <Box>
                    <h5>Premium Plan</h5>
                    <p>$<span>90</span>/month</p>
                    <ul>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Personal Training</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Cardio Exercises</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Weight Lifting</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Diet Plans</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Overall Results</span>
                        </li>
                    </ul>
                </Box>
            </BoxesContainer>
        </Container>
    );
}
const Container = styled.section`
    margin-top: 4rem;
    padding: 0 1rem;

    @media(min-width: 768px) {
        margin-top: 6rem;
    }

    @media(min-width: 1024px) {
        margin-top: 8rem;
    }
`;

const Title = styled.div`   
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

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
    justify-content: center;
    gap: 2rem;
`;

const Box = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--light-white);
    border-radius: 0.25rem;
    padding: 1rem 2rem 0 2rem;

    :nth-child(2) {
        background: #333;
    }

    h5 {
        color: var(--white);
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    p {
        color: var(--white);
        font-size: 1rem;
        margin-bottom: 1rem;

        span {
            color: var(--red);
            font-size: 3rem;
        }
    }

    ul {
        list-style-type: none;

        li {
            margin-bottom: 1rem;
    
            i {
                color: var(--red);
                font-size: 1.5rem;
                margin-right: 0.5rem;
            }
    
            span {
                color: var(--light-white);
                font-size: 1rem;
            }
        }
    }
`;