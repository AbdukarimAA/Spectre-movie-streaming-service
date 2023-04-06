import React, {SyntheticEvent, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import upload from "../../utils/uploadCloud/uploadFiles";
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import {IUserRegister} from "../../utils/types/userRegisterType";
import './Register.scss';

const Register = () => {
    const [file, setFile] = useState<File | string | null>(null);
    const [user, setUser] = useState<IUserRegister>({
        email: '',
        username: '',
        password: '',
        img: '',
        age: '',
        phone: '',
        isAdmin: false
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev: IUserRegister) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleAdmin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev: IUserRegister) => {
            return {...prev, isAdmin: e.target.checked}
        })
    }

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    };

    const onClickUrl = (url: string): (() => void) => () => openInNewTab(url);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const url = await upload(file);
        try {
            await axiosRequest.post('auth/register', {
                ...user,
                img: url
            });
            navigate('/');
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className='register'>
            <form onSubmit={handleSubmit} className="register-modal">
                <img className='register-logo' src="https://res.cloudinary.com/dedeobaxo/image/upload/v1678183157/Job_Market_proj/2560px-Logo_spectre_int.svg_qfxgdb.png" alt=""/>
                <span className='register-enter'>Регистрация </span>
                <div className="register-inputs">
                    <div className="register-inputs-left">
                        <input type="email" name='email' placeholder='Email' onChange={handleChange}/>
                        <input type="text" name='username' placeholder='Username' onChange={handleChange}/>
                        <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
                    </div>
                    <div className="register-inputs-right">
                        <input type="file" name='file' placeholder='File' className='register-file-input' onChange={(e: any) => setFile(e.target.files[0])}/>
                        <input type="text" name='age' placeholder='Age' onChange={handleChange}/>
                        <input type="text" name='phone' placeholder='Phone' onChange={handleChange}/>
                    </div>
                </div>
                <button>Зарегистрироваться</button>
                <div className="register-block">
                    <div className="register-login">
                        <Link className='Link' to={'/login'}>
                            <span className='register-forgot'>Есть аккаунт? Войдите!</span>
                        </Link>
                    </div>
                    <span></span>
                    <span className='net'>Войдите с помощью социальных сетей</span>
                </div>
                <div className="register-ic">
                    <Link to='' onClick={onClickUrl(import.meta.env.VITE_GIT_URL)}>
                        <img className='register-icons' src="/img/vk.svg" alt=""/>
                        <img className='register-icons' src="/img/ok.svg" alt=""/>
                        <img className='register-icons' src="/img/yandex.svg" alt=""/>
                        <img className='register-icons' src="/img/google.svg" alt=""/>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;