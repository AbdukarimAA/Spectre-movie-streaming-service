interface IError {
    status?: number
    message?: string
}

export const createError = (status: number, message: string): IError=> {
    const err = new Error();
    (err as IError).status = status;
    err.message = message;

    return err;
};