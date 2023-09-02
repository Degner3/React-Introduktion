import style from "./Gallery.module.scss"




export const Gallery = (props) => {

    // const imgArray = [img1, img2, img3, img4, img5]


    return(
        <section className={style.galleryWrapper}>
            {props.input_array.map((item, index) => {
                return (
                    <img key={index} src={item} alt={"image"+index}/>
                )
            })}
        </section>
        
    )

}