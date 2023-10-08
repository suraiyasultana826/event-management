

const Gallery = ({event}) => {
    const {image_url} = event;
    return (
        <div>
            <img src={image_url} alt="" />
        </div>
    );
};

export default Gallery;


// const Gallery = ({event}) => {
//     return (
//         const {image_url} = event;
//         <div className="w-3/4 mx-auto">
//             <img src={image_url} alt="" />
            
            
//         </div>
//     );
// };

// export default Gallery;