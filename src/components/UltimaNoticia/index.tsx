import { Flex, VStack, Text, Image, Box, Button, Link, Avatar } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { BsClockFill, BsChatLeftTextFill } from "react-icons/bs";


export default function UltimaNoticia() {
    return (
        <Flex p="2" w="100%" justifyContent="space-between" px="610">
            <Flex flexDirection="column" gap="10px">
                <Flex p="2" gap="2" borderRadius="5" bg="#e8ecf4" justifyContent="flex-start" marginTop="1" h="40px" w="700px" alignItems="center" direction="row">
                    <Link href="/"><FaHome color="red" /></Link>
                    <Text  >  Ultimas noticias </Text>
                </Flex>
                <Flex bg="gray.300" borderRadius="5" gap="200px" alignItems="center" direction="column" justifyContent="center" border="1px solid blue" h="500px">
                    IMAGEM
                    <Text fontWeight="bold">
                        [QUIZ] SOLDIER BOY OU CAPITÃO PÁTRIA: QUAL HERÓI VILANESCO DE THE BOYS
                    </Text>
                    <Flex p="2" gap="2" alignItems="center" direction="row" w="700px" justifyContent="flex-start">
                        <Avatar size="sm" ></Avatar>
                        <Text color="#00ACF0" fontFamily="sans-serif" fontWeight="bold">Matthew</Text>
                        <BsClockFill color="gray" size="13px" />
                        <BsChatLeftTextFill color="gray" size="13px" />
                        <Button borderRadius="2" size="sm" bg="#00ACF0">Leia mais</Button>
                    </Flex>
                </Flex>
                <Flex bg="gray.300" borderRadius="5" gap="200px" alignItems="center" direction="column" justifyContent="center" border="1px solid blue" h="500px">
                    IMAGEM
                    <Text fontWeight="bold">
                        [QUIZ] SOLDIER BOY OU CAPITÃO PÁTRIA: QUAL HERÓI VILANESCO DE THE BOYS
                    </Text>
                    <Flex p="2" gap="2" alignItems="center" direction="row" w="700px" justifyContent="flex-start">
                        <Avatar size="sm" ></Avatar>
                        <Text color="#00ACF0" fontFamily="sans-serif" fontWeight="bold">Matthew</Text>
                        <BsClockFill color="gray" size="13px" />
                        <BsChatLeftTextFill color="gray" size="13px" />
                        <Button borderRadius="2" size="sm" bg="#00ACF0">Leia mais</Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex borderRadius="5" h="2100px" textAlign="start" w="300px" direction="column" border="1px solid gray">
                <Flex p="2" bg="#e8ecf4" h="40px">
                    <Text fontWeight="bold">Em Destaque</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
