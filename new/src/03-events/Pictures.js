import React from 'react';

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import unsplash from "./api/unsplash";

class Pictures extends React.Component {

    state = {
        images: []
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get("/search/photos?query=" + term, {});

        this.setState({'images': response.data.results});
    }

    render() {
        return <div>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            Found {this.state.images.length} images
            <ImageList images={this.state.images}/>
        </div>
    }
}

export default Pictures;
