import defualtValue from '../assets/defultimgbig700.png'
import mylogo from '../assets/mylogo.svg'
export const funnel =()=>{
    return(
        {
            urlPage: '',//'http://localhost:3000'
            // urlPage:'http://funnel.dev.leader.codes',
            // userName: window.location.pathname.split('/')[2],
            newElementTypeAndValue: {},
            loading: false,
            message: false,
            myComputer:'a',
            newElement: {},
            elementInEditing: {},
            sectionInEditing: {},
            indexSectionInEditing: '',
            isOpenConfigurator: true,
            thumbtack: false,
            borderPart: false,
            isOpenAllFunnels: false,
            editMode: true,
            collapseIsOpen: '',
            posElement: '',
            imgsToUpload: [],
            imgsGallery: [],
            name: 'firstFunnel4',// window.location.pathname.split('/')[3],
            allFunnels: [],
            idFunnel: '',
            urlFunnel: '',
            newVal: [
                { index: 0, type: 'logo', border: false, path: '', opacity: '0.6', borderRadius: "", width: "", height: "", alignItem: "center",textAlign: "center" },
                { index: 1, type: 'title', border: false, text: "Welcome enter your title!", backgroundColor: "transparent", color: "black", textAlign: "center", fontSize: "25", fontFamily: 'Arial, Helvetica, sans-serif' },
                { index: 2, type: 'button', fontSize: "25", text: "Button ", color: "white", backgroundColor: "#13436c", textAlign: "center", fontFamily: 'Arial, Helvetica, sans-serif', borderRadius: '0', width: '100' },
                { index: 3, type: 'image', border: false, path: '', backgroundColor: "", width: "20", borderRadius: "", height: "10", textAlign: "center", opacity: '0.6' },
                {
                    index: 4, type: 'paragraph', text: "Welcome to the family Thanks to you we grew up and now we are over 2000 members  You are welcome to start an activity to get started Click here",
                    border: false, color: "black", textAlign: "center", fontSize: "16", fontFamily: 'Arial, Helvetica, sans-serif', backgroundColor: "transparent"
                },
                { index: 5, type: 'video', border: false, path: '', backgroundColor: "transparent", width: "20", borderRadius: "", height: "10", textAlign: "center", opacity: '0.6' },
                { index: 6, type: 'gallery', images: [], border: false, path: '', backgroundColor: "", width: "20", borderRadius: "", height: "10", alignItem: "center", opacity: '0.6' },
                { index: 7, type: 'spacer', border: false, color: "#D3D3D3", borderRadius: "2", width: "20", height: "5" },
                { index: 8, type: 'emoji', border: false, opacity: '1', fontSize: '20', color: "black", backgroundColor: "#0AB0FE", textAlign: "center", borderRadius: "2", width: "20", height: "1" },
                { index: 9, type: 'form', border: false, text: "Welcome enter your title!", color: "black", textAlign: "center", fontSize: "25px", fontFamily: 'Arial, Helvetica, sans-serif' },
                { index: 10, type: 'html', border: false, text: "", color: "white", backgroundColor: "#0AB0FE", textAlign: "center", fontFamily: "Arial, Helvetica, sans-serif", width: "20", height: "1" },
                { index: 11, type: 'sharing', border: false, text: "START ACTIVE", color: "white", backgroundColor: "#0AB0FE", textAlign: "center", borderRadius: "2", width: "20", height: "1" },
        
            ],    
            jsonPage: {
                num_elements: 1,
                num_sections: 1,
                image_funnel: '',
                settings: {
                    style: { color: '', backgroundColor: 'rgba(255,255,255,0.99)', opacity: '0.99' }
                    , opacity: '0.99'
                },
                arrSections: [
                    {arrParts:[
                        {
                            arrElements:[
                                {
                                    backgroundColor: "",
                                    border: false,
                                    id:`myId${0}`,
                                    settings: {borderStyle: "none", width: "30%", height: "30%", opacity: "0.99",maxHeight:'10vh', textAlign: "left"},
                                    textAlign: "left",
                                    type: "Logo",
                                    value: mylogo
                             },{
                                backgroundColor: "transparent",
                                border: false,
                                borderRadius: undefined,
                                color: "black",
                                fontFamily: "Acme !important",
                                fontSize: "30",
                                id: `myId${1}`,
                                settings: {},
                                textAlign: "center",
                                type: "Title",
                                value: "START CREATE \n LANDING PAGE",
                                height:"100%"
                             },{
                                backgroundColor: "transparent",
                                border: false,
                                borderRadius: undefined,
                                color: "#193880",
                                fontFamily: "Acme",
                                fontSize: "15",
                                id: `myId${2}`,
                                settings: {borderStyle: "none"},
                                textAlign: "center",
                                type: "Paragraph",
                                value: "Lorem ipsum dolor sit amet,\r\n consectetuer adipiscing elit,\r\n sed diam "
                             },
                             {
                                backgroundColor: "#13436c",
                                borderRadius: "30",
                                color: "#ffffff",
                                fontFamily: "Acme",
                                fontSize: "16",
                                id: `myId${3}`,
                                settings: {},
                                textAlign: "left",
                                type: "Button",
                                value: "Learn more",
                                // width: "50",
                                // height:"10"
                             }
                             ],
                            settings:{
                                style:{}
                            }
                        },
        
                        {
                            arrElements:[
                                {
                                    backgroundColor: "",
                                    border: false,
                                    id:`myId${4}`,
                                    settings: {borderStyle: "none", width: "auto", height: "100%", opacity: "0.99",maxHeight:'50vh'},
                                    textAlign: "center",
                                    type: "Image",
                                     value: defualtValue
                                    // value: "blob:http://localhost:3000/b18ecc35-9cb2-4b31-9d95-c3da0c0cc9dd"
        
                                    // "blob:http://localhost:3000/7d846e07-f4ea-47b"
        
                                },
                               
                            ],
                            settings:{
                                style:{}
                            }
                        }
                    ],
                    gridType:"b",
                    id:0,
                        settings:{
                        style:{
                            backgroundColor:""
                        }
                    }
                }
        
                ]
        
        
        
        
            },
        }       
    )
}