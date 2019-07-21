import React from 'react';

class ImageList extends React.Component {
    render() {
        let { filterResult, onClickImage } = this.props;

        let images = null;
        if (!!filterResult) {
            images = filterResult.map((image) => (
                <li key={image.id} className="text-image">
                    <p id="pcity">
                        {image.address.city}, {image.address.country}
                    </p>
                    <p id="paddress">
                        {image.address.line1}
                        {image.address.line2 ? image.address.line1 : ''}
                    </p>
                    <div className="img-group">
                        <img src={image.imageUrl}></img>
                        <div className="img-tip">
                            <button>View on Map</button>
                            <button onClick={() => onClickImage(image.imageUrl)}>Go to Explore -></button>
                        </div>
                    </div>
                </li>
            ));
        }
        return (
            <div id="filter-result">
                <ul>
                    {images}
                </ul>
            </div>
        );
    }
}

export { ImageList }