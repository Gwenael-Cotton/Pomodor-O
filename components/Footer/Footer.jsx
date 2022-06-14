import { Box, HStack, Pressable, Icon, Center, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {navData} from "../../utils/NavData";
import { useState } from "react";

const Footer = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState();

    return (
        <Box bg="primary.700" width="100%" height="10%" justifyContent="center">
            <HStack>
                {navData?.map((item) => (
                    <Pressable
                        key={item.id}
                        flex="1"
                        py="3"
                        opacity={selected === item.id ? 1 : 0.3}
                        onPress={() => {
                            setSelected(item.id);
                            navigation.navigate(item.label);
                        }}
                    >
                        <Center>
                            <Icon 
                                as={<MaterialIcons name={item.label.toLowerCase()} />}
                                color="#fff"
                                size="lg"
                                mb="1"
                            />
                            <Text color="#fff" fontSize="16">{item.label}</Text>
                        </Center>
                    </Pressable>
                    ))}
            </HStack>
        </Box>
    )
}

export default Footer;