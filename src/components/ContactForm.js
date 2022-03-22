import React, {useContext} from "react";
import * as Yup from "yup";
import {
    StyledForm,
    StyledField,
    StyledTextArea,
    StyledFieldCheckbox,
    StyledErrorName,
    StyledErrorMail,
    StyledErrorSubject,
    StyledErrorTextArea,
    StyledErrorCheckbox,
    StyledButtonWrapper,
    StyledButton,
    StyledInputContainer,
    StyledCheckboxWrapper,
    StyledPrivacyPolicy,
} from "./styles/ContactFormStyles";
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import RootContext from "../context/context";


const ContactForm = () => {
    const context = useContext(RootContext);
    const { sendInformation } = context;
    const formValidationSchema = Yup.object().shape({
        name: Yup.string().required("Proszę o podanie imienia i nazwiska."),
        email: Yup.string()
            .email("Podany adres e-mail nie jest poprawny.")
            .required("Proszę o podanie adresu e-mail."),
        subject: Yup.string().required("Proszę o podanie tematu."),
        message: Yup.string().required("Proszę o wpisanie treści wiadomości. "),
        checkbox: Yup.boolean().oneOf(
            [true],
            "Musisz wyrazić zgodę na przetwarzanie danych."
        ),
    });
    const onSubmit = (data,e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                `${process.env.REACT_APP_SERVICE_ID}`,
                `${process.env.REACT_APP_TEMPLATE_ID}`,
                e.target,
                `${process.env.REACT_APP_USER_ID}`
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        reset();
        sendInformation()
    };
    const {
        control,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
            checkbox: false,
        },
        mode: 'all',
        shouldUnregister: false,
        resolver: yupResolver(formValidationSchema),
    });

    return (
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledInputContainer>
                    <Controller
                        name="name"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <StyledField
                                {...field}
                                type="text"
                                name="name"
                                placeholder="Imię i nazwisko"
                                id="name"
                            />
                        )}
                    />
                    <StyledErrorName>{errors.name?.message}</StyledErrorName>
                    <Controller
                        name="email"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <StyledField
                                {...field}
                                type="email"
                                name="email"
                                placeholder="Adres e-mail"
                                id="email"
                            />
                        )}
                    />
                    <StyledErrorMail>{errors.email?.message}</StyledErrorMail>
                </StyledInputContainer>
                <StyledInputContainer>
                    <Controller
                        name="subject"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <StyledField
                                {...field}
                                type="text"
                                name="subject"
                                placeholder="Temat wiadomości"
                                id="subject"
                            />
                        )}
                    />
                    <StyledErrorSubject>{errors.subject?.message}</StyledErrorSubject>
                </StyledInputContainer>
                <StyledInputContainer>
                    <Controller
                        name="message"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <StyledTextArea
                                {...field}
                                type="text"
                                name="message"
                                placeholder="Temat wiadomości"
                                id="message"
                            />
                        )}
                    />
                    <StyledErrorTextArea>{errors.message?.message}</StyledErrorTextArea>
                </StyledInputContainer>
                <StyledCheckboxWrapper>
                    <Controller
                        name="checkbox"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <StyledFieldCheckbox
                                {...field}
                                checked={field['value'] ?? false}
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                            />
                        )}
                    />
                    <StyledPrivacyPolicy htmlFor="acceptTerms">Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żadania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Active Mind.</StyledPrivacyPolicy>
                    <StyledErrorCheckbox>{errors.checkbox?.message}</StyledErrorCheckbox>
                </StyledCheckboxWrapper>
                <StyledButtonWrapper>
                    <StyledButton type="submit">Wyślij wiadomość</StyledButton>
                </StyledButtonWrapper>
            </StyledForm>
        </>
    );
};
export default ContactForm;
