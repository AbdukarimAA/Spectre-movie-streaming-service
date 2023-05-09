import React, {useEffect, useState} from 'react';
import "./AdminMoviePage.scss";
import {DeleteOutline} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {DataGrid, GridRowsProp} from "@mui/x-data-grid";
import {Interface, productRows} from "../../../dummyData";
import SideBar from "../../../adminComponents/sideBar/SideBar";
import {axiosRequest} from "../../../../utils/Request/newAxiosRequest";
import {useAppDispatch} from "../../../../store/redux-hook";
import {deleteMovie} from "../../../../store/slices/movieSlice/movieSlice";

export const AdminMoviePage = () => {
    const [data, setData]: any = useState<GridRowsProp<Interface>>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getUsers: any = async () => {
            await axiosRequest.get('/movie/getAllMovies')
                .then(res => {
                    setData(res)
                })
        }
        getUsers();
    }, [])

    // const handleDelete = async ({id}) => {
    //     console.log(id)
    //     await dispatch<any>(deleteMovie({id}))
    // }

    const columns: any = [
        { field: "id", headerName: "ID", width: 50 },
        {
            field: "title",
            headerName: "Title",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.posterImg} alt="" />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "rating", headerName: "Rating", width: 120 },
        { field: "releaseDate", headerName: "ReleaseDate", width: 120 },
        { field: "originalTitle", headerName: "OriginalTitle", width: 120 },
        { field: "language", headerName: "Language", width: 120 },
        { field: "typeOfMovie", headerName: "TypeOfMovie", width: 120 },
        { field: "year", headerName: "Year", width: 120 },
        {
            field: "country",
            headerName: "Country",
            width: 120,
        },
        {
            field: "ageLimit",
            headerName: "AgeLimit",
            width: 120,
        },
        {
            field: "genre",
            headerName: "Genre",
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/admin/movie/" + params.row._id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        {/*<DeleteOutline*/}
                        {/*    className="productListDelete"*/}
                        {/*    onClick={() => handleDelete({id: params.row.id})}*/}
                        {/*/>*/}
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">

            <SideBar />
            <div className="datagrid">
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
        </div>
    );
};