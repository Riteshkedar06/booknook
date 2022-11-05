import React from 'react'
import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import './Authentication.css'
import Login from './Login';
import SignUp from './SignUp';

function Authentication() {
    return (
        <div className="authentication">
            <Container maxW="xl" centerContent >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p={3}
                    bg="white"
                    w="100%"
                    m="40px 0 15px 0"
                    borderRadius="lg"
                    borderWidth="1px"
                >
                    <Text fontSize="4xl" fontFamily="Work sans" alignItems='center'>
                        Book Nook
                    </Text>
                </Box>
                <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                    <Tabs isFitted variant="soft-rounded">
                        <TabList mb="1em">
                            <Tab>Login</Tab>
                            <Tab>Sign Up</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Login />
                            </TabPanel>
                            <TabPanel>
                                <SignUp />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Container>

        </div>

    )
}

export default Authentication