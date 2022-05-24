import { Alert, VStack, HStack, Text, IconButton, CloseIcon } from "native-base";

export default function ShowAlert({ text, onPress}) {

    return (
        <Alert w="100%" status={"error"}>
            <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} justifyContent="space-between">
                    <HStack space={2} flexShrink={1}>
                        <Alert.Icon mt="1" />
                        <Text fontSize="md" color="coolGray.800">
                            {text}
                        </Text>
                    </HStack>
                    <IconButton variant="unstyled" _focus={{
                        borderWidth: 0
                    }} icon={<CloseIcon size="3" color="coolGray.600" />} onPress={onPress}/>
                </HStack>
            </VStack>
        </Alert>
    )
}