const mongoose = require('mongoose')

const gallerySchema = mongoose.Schema({
    title: { type: String },
    galleryShow: { type: Boolean },
    currentIndex:{ type: Number },
    borderColor: { type: String },
    state: { type: String },//slide
    grid: {
        cols: { type: Number },
        cellHeight: { type: Number },
        cellHeightDesktop: { type: Number },
        useStyles: {
            root: {
                width: { type: String },
                margin: { type: String },
                flexWrap: { type: String },
                justifyContent: { type: String },
                overflow: { type: String },
                backgroundColor: { type: String },
            },
            gridList: {
                flexWrap: { type: String },
                transform: { type: String },
            },
        }
    },
    slide: {
        lazyLoad: { type: Boolean },
        showThumbnails: { type: Boolean },
        thumbnailPosition: { type: String },
        showPlayButton: { type: Boolean },
        showBullets: { type: Boolean },
        showNav: { type: Boolean },
        thumbnailPosition: { type: String },
        slideDuration: { type: Number },
        slideInterval: { type: Number },
        autoPlay: { type: Boolean },
        animation: { type: String },
        timeout: { type: Number },
        checkedRadio: { type: Boolean },
    },
    currentGallery: [{
        img: { type: String },
        thumbnail: { type: String },
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        // isSelected: true,
        // caption: "After Rain (Jeshu John - designerspics.com)"
    }
    ]
})

module.exports = mongoose.model('Gallery', gallerySchema)