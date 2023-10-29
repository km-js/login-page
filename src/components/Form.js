import React from 'react'
import { FormContainer, MainForm, FormHeading, FormLabel, FormInput, Container1, Container2, Button } from './Form.style'

function Form() {
    return (
        <FormContainer>
            <MainForm>
                <FormHeading>Login</FormHeading>
                <FormLabel color="#04072F">Login ID</FormLabel>
                <FormInput type="text" placeholder="Enter Login ID"></FormInput>
                <FormLabel color="#04072F">Password</FormLabel>
                <FormInput type="password" placeholder="Enter Password"></FormInput>

                <Container1>
                    <Container2 width="60%">
                        <FormInput type="checkbox"></FormInput>
                        <FormLabel color="#737B86">Remember Me</FormLabel>
                    </Container2>
                    <FormLabel width='200px' color="#F78719" cursor="pointer">Change Password</FormLabel>
                </Container1>

                <Container2 marginTop="-10px">
                    <FormInput type="checkbox"></FormInput>
                    <FormLabel color="#737B86">Agree to <FormLabel color="#F78719" textDecoration="underline" cursor="pointer">Terms & Conditions</FormLabel></FormLabel>
                </Container2>

                <Button type="submit">
                    Login
                </Button>

                <FormLabel color="#737B86" textAlign="center">Don't have an account<FormLabel color="#F78719" textDecoration="underline" fontWeight="bold" cursor="pointer">Register here</FormLabel></FormLabel>

            </MainForm>
        </FormContainer>
    )
}

export default Form