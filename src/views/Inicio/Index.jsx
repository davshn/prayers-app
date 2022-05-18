import { Button } from "react-native";
//import { postRegister } from "../../services/userServices";
//import { postLogin } from "../../services/userServices";
//import { postRefresh } from "../../services/userServices";
import { getInfo } from "../../services/userServices";

export default function Inicio() {

    function prueba() {
        /* const body = {                    
             name: "Pruebas",
             lastname: "Probando",
             dateOfBirth: "10/12/2000",
             email: "probando@gmail.com",
             password: "1q2w3e4R*",
         };
         postRegister(body);
         */
/*
        const body = {
            email: "probando@gmail.com",
            password: "1q2w3e4R*",
            deviceInfo: "asdadsads"
        }
        postLogin(body);
        */
        /*
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkzMzUwZjU0LWQzZGUtNDAwNS05NTg4LWMyY2U3ZDZiNTA0YSIsImVtYWlsIjoicHJvYmFuZG9AZ21haWwuY29tIiwiZGV2aWNlSW5mbyI6IiQyYiQxMCRyRlpLRmd1NFZYUE9mdmxwMERNQ0NlMWlDTVRCLnh5Y1hoc2d0SmouNUMwaUpURjdWR0FEQyIsImlhdCI6MTY1Mjg0ODk2NCwiZXhwIjoxNjUyODUyNTY0fQ.RvUb_VXu3jV20gj9nGy3ftW4TfN1kQHOmJ4bXCFy9Y0"
        const refresh = "asdadsads"
        postRefresh(token, refresh);
        */
        /*
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkzMzUwZjU0LWQzZGUtNDAwNS05NTg4LWMyY2U3ZDZiNTA0YSIsImVtYWlsIjoicHJvYmFuZG9AZ21haWwuY29tIiwiZGV2aWNlSW5mbyI6IiQyYiQxMCRyRlpLRmd1NFZYUE9mdmxwMERNQ0NlMWlDTVRCLnh5Y1hoc2d0SmouNUMwaUpURjdWR0FEQyIsImlhdCI6MTY1Mjg0ODk2NCwiZXhwIjoxNjUyODUyNTY0fQ.RvUb_VXu3jV20gj9nGy3ftW4TfN1kQHOmJ4bXCFy9Y0"
        getInfo(token)
        */
    }

    return (
        <>
            <Button onPress={prueba}
                title="Pruebas" />
        </>
    )
}