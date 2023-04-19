import { useEffect, useCallback, useMemo, useState } from 'react';
import { useDropzone, FileWithPath, DropzoneState  } from 'react-dropzone';
import ImageIcon from '@mui/icons-material/Image';
import './UserEdit.scss';

const UserEditPage = () => {
    const [files, setFiles] = useState<(File & {preview:string})[]>([]);

    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*': []
        },
        maxFiles: 1,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const deleteOnClick = () => {
        setFiles([])
    }

    const thumbs = files.map(file => (
        <div key={file.name}>
            <div>
                <img
                    onClick={deleteOnClick}
                    src={file.preview}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                    alt=''
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    console.log(files)

    return (
        <div className='user-edit-page'>
            <span>Edit Profile</span>
            <div className="user-edit-page-container">
                <div className="user-edit-page-container-drag">
                    <div {...getRootProps({className: 'dropzone'})}>
                        <input {...getInputProps()} />
                        <ImageIcon />
                        <p>Drag 'n' drop some img files here</p>
                        <p>jpeg, jpg, png etc</p>
                    </div>
                    <div className="user-edit-page-container-drag-img">
                        <aside>
                            img
                            {thumbs}
                        </aside>
                    </div>
                </div>

                <form className="user-edit-page-container-inputs">
                    <span>Update your profile</span>
                    <input type="email" placeholder='email' required={false}/>
                    <input type="text" placeholder='username' required={false}/>
                    <input type="text" placeholder='phone' required={false}/>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default UserEditPage;