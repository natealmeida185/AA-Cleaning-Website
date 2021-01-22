import React from 'react';
import Gallery from '../gallery-section/gallery';
import Navbar from '../navbar/navbar2';
import SimpleReactLightbox from 'simple-react-lightbox';

export default function GalleryPage() {
    return (
        <>
        <SimpleReactLightbox>
            <Navbar />
            <Gallery />
        </SimpleReactLightbox>
        </>
    )
}