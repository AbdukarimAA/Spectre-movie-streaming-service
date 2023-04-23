import React, {useState} from 'react';
import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom";
import {Interface, userRows} from "../../../dummyData";
import './AdminUserPage.scss';
import SideBar from "../../../adminComponents/sideBar/SideBar";

export const AdminUserPage = () => {
    const [data, setData]: any = useState(userRows);
    
    const handleDelete = (id: number) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 130 },
        {
            field: "user",
            headerName: "User",
            width: 240,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 240 },
        {
            field: "status",
            headerName: "Status",
            width: 160,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 200,
        },
        {
            field: "action",
            headerName: "Action",
            width: 190,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/admin/user/" + params.row.id}>
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
            <DataGrid
                sx={{color: 'black'}}
                rows={data}
                autoHeight={true}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
};

export default AdminUserPage;