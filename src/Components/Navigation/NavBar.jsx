import React from "react";
import { Box, Flex, Stack ,Image  } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "./imgs/logo.png";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props} backgroundColor={'#red'}>
            <Image
                src={Logo}
                alt="Image description"
                width="7rem"
                height="5rem"

                // boxSize="rem"
                // viewBox="0 0 20 20"
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle} backgroundColor={'#333'}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

// const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
//     return (
//         <Link href={to}>
//             <Text display="block" {...rest}>
//                 {children}
//             </Text>
//         </Link>
//     );
// };

const MenuLinks = ({ isOpen }) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
            backgroundColor={'#333'}

        >
            <Stack
                spacing={{ base: 8, md: 8, xl: 16 }}
                align="center"
                mb="0"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
                
            >
                <Link className="nav-link" to="/" _hover={{
                            bg: ["#4CAF50"]
                        }}>Home</Link>
                <Link className="nav-link" to="/Adopt">Adopt</Link>

                <Link className="nav-link" to="/Donate">Donate</Link>

                <Link className="nav-link" to="/ExerciseLibrary/ExerciseLibrary">Volunteer</Link>
                <Link className="nav-link" to="/SymptomPrediction/SymptomPrediction">About</Link>
                <Link className="nav-link" to="/Feedback/Feedback">Contact</Link>

                {/* <MenuItem to="/" text-size="1.3rem" isLast>
                    <Button
                        csize="sm"
                        rounded="md"
                        color={["primary.500", "primary.500", "white", "white"]}
                        bg={["white", "white", "primary.500", "primary.500"]}
                        _hover={{
                            bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
                        }}
                    >
                        <Link className="nav-link" to="/Components/Signuppage">Sign in</Link>
                    </Button>
                </MenuItem> */}
            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            padding={'10px'}
            mb={0}
            // pt={{ base: "2rem", md: "2rem", xl: "5rem" }}
            // pb={{ base: "2rem", md: "2rem", xl: "5rem" }}
            // pr={{ base: "2rem", md: "3rem", xl: "10rem" }}
            // pl={{ base: "2rem", md: "3rem", xl: "10rem" }}
            bg={["#333", "#333", "transparent", "transparent"]}
            color={["#fff"]}
            {...props}
        >
            {children}
        </Flex>
    );
};

export default NavBar;