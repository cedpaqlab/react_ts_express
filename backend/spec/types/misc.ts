import { Response } from 'supertest';
import { IUser } from '@src/entities/User';


// Misc
export type TRes = Omit<Response, 'body'> & {
  body: {
    error?: string,
    user?: IUser,
    users?: IUser[],
  },
};
export type TApiCb = (res: TRes) => void;
