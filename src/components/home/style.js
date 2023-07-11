import styled from "styled-components";
import background from "../../assets/background.png"
import { Link } from "react-router-dom";

export const Back=styled.div`
width: 100%;
height: 750px;
background-image: url(${background});
background-position: center;
background-size: cover;
background-repeat: no-repeat;`

export const Navlink=styled(Link)`
color: white;
cursor: pointer;
text-decoration: saddlebrown;
:hover {
    color: black;
}
`