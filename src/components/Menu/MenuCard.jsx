function MenuCard({ name, price, image }) {
  return (
    <li className="menu-card">
      <div className="menu-card__photo">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <span className="menu-card__placeholder">720 × 640</span>
        )}
      </div>

      <h3 className="menu-card__name">{name}</h3>
      <p className="menu-card__price">{price}</p>
    </li>
  );
}

export default MenuCard;