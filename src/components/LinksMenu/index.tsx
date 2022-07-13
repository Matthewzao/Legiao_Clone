import { Link } from "@chakra-ui/react";


interface LinkMenuProps {
    nome: string;
    url: string;
}

export default function LinkMenu({ nome, url }: LinkMenuProps) {
    return (

        <Link _hover={{ color: "white" }} href={url}
            fontWeight="bold" color='gray.400'>{nome}</Link>
    )
}