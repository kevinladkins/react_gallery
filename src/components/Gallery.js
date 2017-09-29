import React, {Component} from 'react';
import GalleryItem from './GalleryItem';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
  renderItems() {
    return this.props.items.map(function(item) {
      return <GalleryItem key={item.id} {...item} />;
    });
  }
}

export default Gallery;
