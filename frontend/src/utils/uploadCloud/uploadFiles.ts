import axios from "axios";

const upload = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'Spectre');

    try {
        const res = await axios.post(import.meta.env.VITE_CLOUDINARY_USER, data);
        const {url} = res.data;
        return url;
    } catch (e: any) {
        console.log(e);
    }
};

export default upload;