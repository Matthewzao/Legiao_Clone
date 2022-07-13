import { Box, Flex, Text } from "@chakra-ui/react";
import CaixaBusca from "../CaixaDeBusca";
import Logo from "../Logo";
import MenuHeader from "../MenuHeader";


export default function Header() {
    return (
        <>
            <Flex bg="#1E3D4E" h="100px" w="100%">
                <Logo />
            </Flex>

            <Flex alignItems="center" gap="" justifyContent="space-between" bg="#224557" h="50px" w="100%" px="610px">
                <MenuHeader />
                <CaixaBusca />
            </Flex>
        </>
    )
}