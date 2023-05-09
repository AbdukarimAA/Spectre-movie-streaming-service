import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import upload from "../../utils/uploadCloud/uploadFiles";
import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import {authRegister} from "../../store/slices/authSlice/authSlice";
import {IUserRegister} from "../../utils/types/userRegisterType";
import {isAuthSelector} from "../../store/slices/authSlice/selectors";
import './Register.scss';
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";

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
    const isAuth = useAppSelector(isAuthSelector);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

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
            await dispatch<any>(authRegister({...user, img: url}))
            navigate('/');
        } catch (e) {
            console.log(e)
        }
    };

    console.log(file)

    return (
        <div className='register'>
            <form onSubmit={handleSubmit} className="register-modal">
                <img className='register-logo' src="https://res.cloudinary.com/dedeobaxo/image/upload/v1678183157/Job_Market_proj/2560px-Logo_spectre_int.svg_qfxgdb.png" alt=""/>
                <span className='register-enter'>Регистрация </span>
                <div className="register-inputs">
                    <div className="register-inputs-left">
                        <div className="register-inputs-left-div">
                            <input type="email" name='email' placeholder='Email' onChange={handleChange}/>
                            <span>Example@gmail.com</span>
                        </div>
                        <div className="register-inputs-left-div">
                            <input type="text" name='username' placeholder='Username' onChange={handleChange}/>
                            <span>От 5 до 20 букв</span>
                        </div>
                        <div className="register-inputs-left-div">
                            <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
                            <span>Пароль должен содержать: от 6 букв, 1 заглавная и 1 строчная, 1 число, 1 символ</span>
                        </div>
                    </div>
                    <div className="register-inputs-right">
                        <div className="register-inputs-left-div">
                            <input type="text" name='age' placeholder='Age' onChange={handleChange}/>
                            <span>2 цифры</span>
                        </div>
                        <div className="register-inputs-left-div">
                            <input type="text" name='phone' placeholder='Phone' onChange={handleChange}/>
                            <span>Пример: 79991234567, 89991234567</span>
                        </div>
                        <div className="register-inputs-left-div">
                            <input type="file" name='file' placeholder='File' className='register-file-input' onChange={(e: any) => setFile(e.target.files[0])}/>
                        </div>
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