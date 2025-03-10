import { Model } from "sequelize-typescript";
interface IAdminCreationAttr {
    name: string;
    email: string;
    hashed_password: string;
    confirm_password: string;
}
export declare class Admin extends Model<Admin, IAdminCreationAttr> {
    id: number;
    name: string;
    hashed_password: string;
    email: string;
    hashed_refresh_token: string;
    is_active: boolean;
    is_creator: boolean;
}
export {};
