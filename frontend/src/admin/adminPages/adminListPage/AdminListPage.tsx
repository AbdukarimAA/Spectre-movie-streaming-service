import React, {useState} from 'react';
import './AdminList.scss';
import {DataGrid} from "@mui/x-data-grid";
import {productRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {DeleteOutline} from "@mui/icons-material";
import SideBar from "../../adminComponents/sideBar/SideBar";

const AdminListPage = () => {
    const [data, setData] = useState<any>(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 150 },
        {
            field: "list",
            headerName: "List",
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="actorListItem">
                        <img className="actorListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 160,
        },
        {
            field: "price",
            headerName: "Price",
            width: 200,
        },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/admin/actor/" + params.row.id}>
                            <button className="actorListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="actorListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="actorList">

            <SideBar />
            <div className="datagrid">
                <DataGrid
                    rows={data}
                    autoHeight={true}
                    disableRowSelectionOnClick
                    columns={columns}
                    // pageSize={8}
                    checkboxSelection
                />
            </div>
        </div>
    );
};

export default AdminListPage;