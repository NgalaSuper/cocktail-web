import styled from "styled-components";

const Wrapper = styled.div`

        background-color: var(--grey-900);
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;


    img {
        width: 400px;
        height: 400px;
        display: block;
    }
    h3{
        color: var(--white);
    }
    p {
        color: var(--white);
    }
    .link-nav {
        text-decoration: none;
        color: var(--primary-500);
    }
`

export default Wrapper;