import React, {useEffect, useState} from 'react';
import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom";
import {Interface, userRows} from "../../../dummyData";
import './AdminUserPage.scss';
import SideBar from "../../../adminComponents/sideBar/SideBar";
import {axiosRequest} from "../../../../utils/Request/newAxiosRequest";

export const AdminUserPage = () => {
    const [data, setData]: any = useState<GridRowsProp<Interface>>([]);

    useEffect(() => {
        const getUsers: any = async () => {
            await axiosRequest.get('/user/getUsers')
                .then(res => {
                    setData(res)
                })
        }
        getUsers();
    }, [])

    const handleDelete = (id: number) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns: any = [
        { field: "_id", headerName: "ID", width: 130 },
        {
            field: "user",
            headerName: "User",
            width: 240,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.img} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 240 },
        {
            field: "phone",
            headerName: "Phone",
            width: 160,
        },
        {
            field: "isAdmin",
            headerName: "IsAdmin",
            width: 200,
        },
        {
            field: "age",
            headerName: "Age",
            width: 20,
        },
        {
            field: "action",
            headerName: "Action",
            width: 190,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/admin/user/" + params.row._id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <SideBar />
            { data.data &&
                <DataGrid
                sx={{color: 'black'}}
                rows={data.data && data.data}
                autoHeight={true}
                disableRowSelectionOnClick
                columns={columns}
                // pageSize={8}
                checkboxSelection
                getRowId={(r) => r._id}
            />}
        </div>
    );
};

export default AdminUserPage;