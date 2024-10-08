import { ILoginProps } from "@/app/interfaces/ILogin";

export const validate = (input:ILoginProps) => {
    const errors: Partial<ILoginProps> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

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

    return errors;
};
