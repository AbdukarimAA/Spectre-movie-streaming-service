import React, {useEffect, useCallback, useMemo, useState, SyntheticEvent} from 'react';
import { useDropzone, FileWithPath, DropzoneState  } from 'react-dropzone';
import ImageIcon from '@mui/icons-material/Image';
import './UserEdit.scss';
import {IUserRegister} from "../../utils/types/userRegisterType";
import upload from "../../utils/uploadCloud/uploadFiles";
import {authRegister, updateUser} from "../../store/slices/authSlice/authSlice";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "../../store/redux-hook";

export type TUpdateUser = Pick<IUserRegister, 'email' | 'username' | 'age' | 'phone' | 'img' | '_id'>

const UserEditPage = () => {
    const [file, setFile] = useState<File | string | null>(null);
    const [user, setUser] = useState<TUpdateUser | null>();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {id} = useParams();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev: TUpdateUser) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const url = await upload(file);
        console.log(url)
        try {
            await dispatch<any>(updateUser({...user, _id: id, img: url}))
            window.location.reload();
            // navigate('/');
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='user-edit-page'>
            <span>Edit Profile</span>
            <form onSubmit={handleSubmit} className="user-edit-page-container">
                <form className="user-edit-page-container-inputs">
                    <div className="user-edit-page-container-inputs-top">
                        <input type="email" name='email' placeholder='email' onChange={handleChange} required={false}/>
                        <input type="text" name='username' placeholder='username' onChange={handleChange} required={false}/>
                    </div>
                    <div className="user-edit-page-container-inputs-bottom">
                        <input type="text" name='phone' placeholder='phone' onChange={handleChange} required={false}/>
                        <input type="text" name='age' placeholder='age' onChange={handleChange} required={false}/>
                    </div>
                </form>
                <div className="user-edit-page-container-drag">
                    <input name='file' type='file' onChange={(e: any) => setFile(e.target.files[0])}/>
                </div>
                <button>Update</button>
            </form>
        </div>
    );
};

export default UserEditPage;