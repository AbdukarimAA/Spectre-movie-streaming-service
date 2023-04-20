import React, {useState} from 'react';
import "./AdminMoviePage.scss";
import {DeleteOutline} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {DataGrid} from "@mui/x-data-grid";
import {productRows} from "../../dummyData";
import SideBar from "../../adminComponents/sideBar/SideBar";

export const AdminMoviePage = () => {
    const [data, setData] = useState<any>(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 150 },
        {
            field: "product",
            headerName: "Product",
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
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
                        <Link to={"/admin/movie/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">

            <SideBar />
            <div className="datagrid">
            <DataGrid
                rows={data}
                autoHeight={true}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
            </div>
        </div>
    );
};