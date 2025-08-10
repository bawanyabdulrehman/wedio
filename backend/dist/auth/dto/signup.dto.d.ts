import { Role } from 'generated/prisma';
export declare class SignupDto {
    email: string;
    password: string;
    name: string;
    phone?: string;
    role?: Role;
}
