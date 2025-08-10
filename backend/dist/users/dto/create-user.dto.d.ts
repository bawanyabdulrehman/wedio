import { Role } from 'generated/prisma';
export declare class CreateUserDto {
    email: string;
    name: string;
    passwordHash: string;
    role: Role;
    phone?: string;
}
