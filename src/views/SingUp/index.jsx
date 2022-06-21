import { Box, Input, Icon, Text, Spacer, FormControl } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

import { userRegister } from "../../services/userServices";
import ShowAlert from "../../components/ShowAlert";
import ButtonGradient from '../../components/ButtonGradient';

export default function SingUp() {
    const [input, setInput] = useState({});
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [show, setShow] = useState(false);

    function handleInputChange(text, name) {
        setInput(prev => ({ ...prev, [name]: text }));
    }
    
    const handleSendForm = async () => {
        if (input.email && input.password && input.name && input.lastname && input.dateOfBirth) {
            const user = await userRegister(input);
            if (!user.ok) setError(user.data);
            else {
                navigation.navigate('Main');
            }
        }
        else setError("Datos incompletos");
    }
    
    const onDateChange = (event, selectedDate) => {
        setShow(Platform.OS === "ios");
        if (selectedDate) { setInput((prev) => ({ ...prev, dateOfBirth: selectedDate.toISOString().slice(0, -14) })) };
    };
    
    return (
        <Box h="100%" bg="white" alignItems="center" justifyContent="center">
            <Spacer />
            <FormControl isInvalid={input.name ? false : true} w={{ base: "75%", md: "25%" }} m="5">
                <Input InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Nombre" onChangeText={(text) => handleInputChange(text, "name")} />
                {!input?.name && <FormControl.ErrorMessage position="absolute" bottom="0" right="0">
                    Nombre requerido.
                </FormControl.ErrorMessage>}
            </FormControl>
            <FormControl isInvalid={input.lastname ? false : true} w={{ base: "75%", md: "25%" }} m="5">
                <Input InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Apellido" onChangeText={(text) => handleInputChange(text, "lastname")} />
                {!input?.lastname && <FormControl.ErrorMessage position="absolute" bottom="0" right="0">
                    Apellido requerido.
                </FormControl.ErrorMessage>}
            </FormControl>
            <ButtonGradient title="Fecha de nacimiento" onPress={() => setShow(true)} />
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
            <ButtonGradient title="Registrar" onPress={handleSendForm} />
            <Spacer />
            <Text fontSize="xl" mt="10">Ya tienes una cuenta?</Text>
            <Text fontSize="xl">Ingresa</Text>
            <Spacer />
            {error && <ShowAlert text={error} onPress={() => setError("")} />}
            {show && (<DateTimePicker value={new Date()} mode="date" display="default" onChange={onDateChange} />)}
        </Box>
    )
}