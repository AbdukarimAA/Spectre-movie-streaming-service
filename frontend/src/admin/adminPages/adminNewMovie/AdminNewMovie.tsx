// import React from 'react';
// import "./AdminNewMovie.scss";
//
// const AdminNewMovie = () => {
//     return (
//         <div className="newProduct">
//             <h1 className="addProductTitle">New Movie</h1>
//             <form className="addProductForm">
//                 <div className="addProductItem">
//                     <label>Image</label>
//                     <input
//                         type="file"
//                         id="img"
//                         name="img"
//                         onChange={(e) => setImg(e.target.files[0])}
//                     />
//                 </div>
//                 <div className="addProductItem">
//                     <label>Title image</label>
//                     <input
//                         type="file"
//                         id="imgTitle"
//                         name="imgTitle"
//                         onChange={(e) => setImgTitle(e.target.files[0])}
//                     />
//                 </div>
//                 <div className="addProductItem">
//                     <label>Thumbnail image</label>
//                     <input
//                         type="file"
//                         id="imgSm"
//                         name="imgSm"
//                         onChange={(e) => setImgSm(e.target.files[0])}
//                     />
//                 </div>
//                 <div className="addProductItem">
//                     <label>Title</label>
//                     <input
//                         type="text"
//                         placeholder="John Wick"
//                         name="title"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="addProductItem">
//                     <label>Description</label>
//                     <input
//                         type="text"
//                         placeholder="description"
//                         name="desc"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="addProductItem">
//                     <label>Year</label>
//                     <input
//                         type="text"
//                         placeholder="Year"
//                         name="year"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="addProductItem">
//                     <label>Genre</label>
//                     <input
//                         type="text"
//                         placeholder="Genre"
//                         name="genre"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="addProductItem">
//                     <label>Duration</label>
//                     <input
//                         type="text"
//                         placeholder="Duration"
//                         name="duration"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="addProductItem">
//                     <label>Limit</label>
//                     <input
//                         type="text"
//                         placeholder="limit"
//                         name="limit"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="addProductItem">
//                     <label>Is Series?</label>
//                     <select name="isSeries" id="isSeries" onChange={handleChange}>
//                         <option value="false">No</option>
//                         <option value="true">Yes</option>
//                     </select>
//                 </div>
//                 <div className="addProductItem">
//                     <label>Trailer</label>
//                     <input
//                         type="file"
//                         name="trailer"
//                         onChange={(e) => setTrailer(e.target.files[0])}
//                     />
//                 </div>
//                 <div className="addProductItem">
//                     <label>Video</label>
//                     <input
//                         type="file"
//                         name="video"
//                         onChange={(e) => setVideo(e.target.files[0])}
//                     />
//                 </div>
//                 {uploaded === 5 ? (
//                     <button className="addProductButton" onClick={handleSubmit}>
//                         Create
//                     </button>
//                 ) : (
//                     <button className="addProductButton" onClick={handleUpload}>
//                         Upload
//                     </button>
//                 )}
//             </form>
//         </div>
//     );
// };
//
// export default AdminNewMovie;