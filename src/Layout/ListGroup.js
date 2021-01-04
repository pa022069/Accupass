import React from 'react';
import { Link } from 'react-router-dom';

const ListGroup = (props) => {
    const getImage = (e) => {
        if (e.images.length > 0) {
            return `url(${props.item.images[0].src})`
        } else {
            return 'url(dist/images/no-image.png)'
        }
    }
    return (
        <Link className="group" to={`${props.item.id}`}>
            <span className="group__img" style={{
                backgroundImage: getImage(props.item)
            }}></span>
            <span className="group__info">
                <h2 className="title">{props.item.name}</h2>
                <p className="address">{props.item.address}</p>
            </span>
        </Link>
    );
}

export default ListGroup;