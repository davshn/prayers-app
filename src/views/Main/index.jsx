import { Box, Image, Text } from "native-base";

import ButtonGradient from '../../components/ButtonGradient';

export default function Main({navigation}) {

    return (
        <Box h="100%" bg="white" alignItems="center" justifyContent="center">
            <Image source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} alt="Logo" size="xl" m="100" />
            <ButtonGradient title="Ingresa" onPress={()=>navigation.navigate('SingIn')}/>
            <Text fontSize="xl" mt="100">Aun no tienes una cuenta?</Text>
            <ButtonGradient title="Registrate" onPress={() => navigation.navigate('SingUp')}/>
        </Box>
    )
}