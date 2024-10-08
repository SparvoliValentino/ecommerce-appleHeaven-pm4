import { IRegisterProps } from "@/app/interfaces/IRegister"


export const validate = (input:IRegisterProps) => {
    const errors: Partial<IRegisterProps> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernamePattern = /^[a-zA-Z]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // Validar name
    if (!input.name) {
        errors.name = "Name is required";
    } else if (typeof input.name !== "string") {
        errors.name = "Name must be a string";
    }

    // Validar email
    if (!input.email) {
        errors.email = "Email is required";
    } else if (!emailPattern.test(input.email)) {
        errors.email = "Email is not valid";
    }

    // Validar password
    if (!input.password) {
        errors.password = "Password is required";
    } else if (!passwordPattern.test(input.password)) {
        errors.password =
            "Password must be at least 8 characters long, and include at least one number, one uppercase letter, and one lowercase letter";
    }

    // Validar repeat password
    if (!input.repeatPassword) {
        errors.repeatPassword = "Repeat password is required";
    } else if (input.password !== input.repeatPassword) {
        errors.repeatPassword = "Passwords do not match";
    }

    return errors;
};
