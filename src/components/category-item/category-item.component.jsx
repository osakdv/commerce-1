import "./category-item.styles.scss";

const CategoryItem = ({
    id,
    title,
    img
}) => {
    return(
        <div className="category-container" key={id}>
            <div className="background-image" style={{backgroundImage: `url(${img})`}} />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem;