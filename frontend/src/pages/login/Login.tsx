import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import {authLogin} from "../../store/slices/authSlice/authSlice";
import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // const res = await axiosRequest.post('/auth/login', {email, password});
            // localStorage.setItem('currentUser', JSON.stringify(res.data));
            dispatch(authLogin({email, password}));
            navigate('/')
        } catch (e) {
            setError(e.response.data);
        }
    };

    return (
        <div className='login'>
            <form className="login-modal" onSubmit={handleSubmit}>
                <img src={import.meta.env.VITE_CLOUDINARY+ '/2560px-Logo_spectre_int.svg_qfxgdb.png'} alt=""/>
                <span className='login-enter'>Вход в аккаунт </span>
                <input
                    type="email"
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}
                />
                <button>Войти</button>
                {error && error}
                <div className="login-block">
                    <div className="login-register">
                        <Link className='Link' to={'/register'}>
                            <span className='login-forgot'>Нет аккаута? Зарегистрируйтесь!</span>
                        </Link>
                    </div>
                    <span></span>
                    <span className='login-forgot'>Забыли пароль?</span>
                    <span className='net'>Войдите с помощью социальных сетей</span>
                </div>
                <div className="login-ic">
                    <img className='login-icons' src="/img/vk.svg" alt=""/>
                    <img className='login-icons' src="/img/ok.svg" alt=""/>
                    <img className='login-icons' src="/img/yandex.svg" alt=""/>
                    <img className='login-icons' src="/img/google.svg" alt=""/>
                </div>
            </form>
        </div>
    );
};

export default Login;