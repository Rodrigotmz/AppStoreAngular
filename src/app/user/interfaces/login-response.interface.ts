export interface LoginResponse{
    messaage: string;
    user:{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
    };
}