import React, { useState, useEffect } from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.style.css';

const images = [
    { id: '1', imageName: 'residential1.jpg', tag: 'residential' },
    { id: '2', imageName: 'residential2.jpg', tag: 'residential' },
    { id: '3', imageName: 'residential3.jpg', tag: 'residential' },
    { id: '4', imageName: 'residential4.jpg', tag: 'residential' },
    { id: '5', imageName: 'residential5.jpg', tag: 'residential' },
    { id: '6', imageName: 'residential6.jpg', tag: 'residential' },
    { id: '7', imageName: 'residential7.jpg', tag: 'residential' },
    { id: '8', imageName: 'residential8.jpg', tag: 'residential' },
    { id: '9', imageName: 'residential9.jpg', tag: 'residential' },
    { id: '10', imageName: 'residential10.jpg', tag: 'residential' },
    { id: '11', imageName: 'residential11.jpg', tag: 'residential' },
    { id: '12', imageName: 'residential12.jpg', tag: 'residential' },
    { id: '13', imageName: 'residential13.jpg', tag: 'residential' },
    { id: '14', imageName: 'residential14.jpg', tag: 'residential' },
    { id: '15', imageName: 'residential15.jpg', tag: 'residential' },
    { id: '16', imageName: 'rental1.jpg', tag: 'rental' },
    { id: '17', imageName: 'rental2.jpg', tag: 'rental' },
    { id: '18', imageName: 'rental3.jpg', tag: 'rental' },
    { id: '19', imageName: 'rental4.jpg', tag: 'rental' },
    { id: '20', imageName: 'rental5.jpg', tag: 'rental' },
    { id: '21', imageName: 'rental6.jpg', tag: 'rental' },
    { id: '22', imageName: 'rental7.jpg', tag: 'rental' },
    { id: '23', imageName: 'rental8.jpg', tag: 'rental' },
    { id: '24', imageName: 'office1.jpg', tag: 'office' },
    { id: '25', imageName: 'office2.jpg', tag: 'office' },
    { id: '26', imageName: 'office3.jpg', tag: 'office' },
    { id: '27', imageName: 'commercial1.jpg', tag: 'commercial' },
    { id: '28', imageName: 'commercial2.jpg', tag: 'commercial' },
    { id: '29', imageName: 'commercial3.jpg', tag: 'commercial' }
];

const options = {
};

function ImageGallery() {

    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect( 
        () => {
            tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter( image => image.tag === tag))
        }, 
        [tag]
    ); 

    return (
        <div className="gallery-section">
            <h1>Cleaning Gallery</h1>
            <hr/>
            <div className="gallery-tags">
                <TagButton name="all" handleSetTag={setTag} tagActive={ tag === 'all' ? true : false}/>
                <TagButton name="residential" handleSetTag={setTag} tagActive={ tag === 'residential' ? true : false}/>
                <TagButton name="rental" handleSetTag={setTag} tagActive={ tag === 'rental' ? true : false}/>
                <TagButton name="commercial" handleSetTag={setTag} tagActive={ tag === 'commercial' ? true : false}/>
                <TagButton name="office" handleSetTag={setTag} tagActive={ tag === 'office' ? true : false}/>
            </div>
            <SRLWrapper options={options}>
                <div className="gallery container">
                {filteredImages.map(image => (
                <div key={image.id} className="gallery-image-card">
                    <a href={`/gallery-images/${image.imageName}`}>
                        <img className="gallery-image" src={`/gallery-images/${image.imageName}`} alt="" />
                    </a>
                </div>
                ))}
                </div>
            </SRLWrapper>
        </div>
    );
}

const TagButton = ( { name, handleSetTag, tagActive } ) => {
    return <button className={` tag-button ${ tagActive ? 'tag-active': null}`} onClick={() => handleSetTag(name)}>{ name.toUpperCase() }</button>;
};

export default ImageGallery;