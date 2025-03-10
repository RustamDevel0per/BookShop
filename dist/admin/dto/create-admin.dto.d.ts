export declare class CreateAdminDto {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
    hashed_refresh_token?: string | undefined;
}
