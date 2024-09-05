// style
import "./directory.styles.scss";
// component
import CategoryItem from "../category-item/category-item.component";

const Directory = ({categories}) => {
    return(
        <div className="directory-container">
            {
                categories.map(({id, title, imageUrl}) => (
                    <CategoryItem key={id} title={title} img={imageUrl} />
                ))
            }
        </div>
    )
}

export default Directory;