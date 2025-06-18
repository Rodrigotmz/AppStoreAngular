export interface LoginResponse{
    messaage: string;
    user:{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
    };
}