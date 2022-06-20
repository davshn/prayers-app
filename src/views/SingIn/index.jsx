import { useState, useEffect } from "react";
import * as Device from 'expo-device';
import { useDispatch } from "react-redux";
import { Box, Input, Icon, Text, Spacer, FormControl } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

import ShowAlert from "../../components/ShowAlert";
import { userLogin } from "../../services/userServices";
import { loginUser } from "../../stateManagement/actions/authUserActions";
import ButtonGradient from '../../components/ButtonGradient';

export default function SingIn({ navigation }) {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [input, setInput] = useState({});
    const [error, setError] = useState("");

    const deviceInfo = Device.totalMemory + Device.osBuildId;

    useEffect(() => handleInputChange(deviceInfo, "deviceInfo"), []);

    function handleInputChange(text, name) {
        setInput(prev => ({ ...prev, [name]: text }));
    }

    const handleSendForm = async () => {
        if (input.email && input.password) {
            const user = await userLogin(input);
            if (!user.ok) setError(user.data);
            else {
                dispatch(loginUser(user.data));
                navigation.navigate('Splash');
            }
        }
        else setError("Se requiere un correo y una contraseña");
    }

    return (
        <Box h="100%" bg="white" alignItems="center" justifyContent="center">
            <Spacer />
            <FormControl isInvalid={input.email ? false : true} w={{ base: "75%", md: "25%" }} m="5">
                <Input InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Correo" onChangeText={(text) => handleInputChange(text, "email")} />
                {!input?.email && <FormControl.ErrorMessage position="absolute" bottom="0" right="0">
                    Correo requerido.
                </FormControl.ErrorMessage>}
            </FormControl>
            <FormControl isInvalid={input.password ? false : true} w={{ base: "75%", md: "25%" }} m="5">
                <Input InputLeftElement={<Icon as={<MaterialIcons name="vpn-key" />} size={5} ml="2" color="muted.400" />} onChangeText={(text) => handleInputChange(text, "password")}
                    type={showPassword ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShowPassword(!showPassword)} />} placeholder="Contraseña" />
                {!input?.password && <FormControl.ErrorMessage position="absolute" bottom="0" right="0">
                    Contraseña requerida.
                </FormControl.ErrorMessage>}
            </FormControl>
            <ButtonGradient title="Ingresar" onPress={handleSendForm} />
            <Spacer />
            <Text fontSize="xl" mt="10">Aun no tienes una cuenta?</Text>
            <Text fontSize="xl">Registrate</Text>
            <Spacer />
            {error && <ShowAlert text={error} onPress={() => setError("")} />}
        </Box>
    )
}