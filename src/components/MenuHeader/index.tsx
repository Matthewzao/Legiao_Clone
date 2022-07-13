import { Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import LinkMenu from "../LinksMenu";



export default function MenuHeader() {
    return (
        <Flex gap="5">
            <LinkMenu nome="Quiz" url="/" />
            <LinkMenu nome="Lista" url="/" />
            <LinkMenu nome="Equipe" url="/" />
            <LinkMenu nome="Contato" url="/" />
        </Flex>
    )
}