import { Flex, Link, Text } from "@chakra-ui/react"
import { FaHome } from "react-icons/fa"


export default function Feed2() {
    return (
        <Flex p="2" w="100%" justifyContent="space-between" px="610">
            <Flex flexDirection="column" gap="10px">
                <Flex bg="gray.300" borderRadius="5" gap="200px" alignItems="center" direction="column" justifyContent="center" border="1px solid blue" h="500px">
                    IMAGEM
                    <Text fontWeight="bold">
                        [QUIZ] SOLDIER BOY OU CAPITÃO PÁTRIA: QUAL HERÓI VILANESCO DE THE BOYS
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}