import './App.css';
import Header from "./components/jsx/HeaderFooter/header";
import Footer from "./components/jsx/HeaderFooter/footer";
import {useState} from "react";
import Main from "./components/pages/MainPages/main";
import {Route, Routes} from "react-router-dom";
import Help from "./components/pages/MainPages/help";
import Catalogue from "./components/pages/MainPages/catalogue";
import About from "./components/pages/MainPages/about";
import Order from "./components/pages/PaymentPages/order";
import OrderAdress from "./components/pages/PaymentPages/orderAdress";

function App() {
    let itemsArray = [{
        id: 0,
        img: 'https://b2cfurniture.com.au/pub/media/catalog/product/cache/3fb871f48f7af5e44260f2d9fd3932a9/e/l/elm-modern-hardwood-dining-chair-black-hardwood-frame-eco-friendly-beige-fabric_3_.jpg',
        name: 'Chair Dark-Gray',
        price: 169,
        weight: 3.5,
        color: 'gray',
        theme: 'chair'
    }, {
        id: 1,
        img: 'https://www.stammdesign.at/fileadmin/_processed_/6/a/csm_RLS_2316_35a6290376.jpg',
        name: 'Table Oak-Brown',
        price: 369,
        weight: 30,
        color: 'brown',
        theme: 'table'
    }, {
        id: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgl0VHOrld4C-33sF-1bP8_fsYdchB8jNiDFUU4sQFixG8fv7lV-SZWo908JKbaTOAGkc&usqp=CAU',
        name: 'Chair Light-Gray',
        price: 169,
        weight: 3.5,
        color: 'gray',
        theme: 'chair'
    }, {
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNNQP1hzQ5ilyq7FvZl3HcDszi7C8RZNdVn64BCu_GaPXR_nevUJ315vit6GVTbAPLJw&usqp=CAU',
        name: 'Chair Oak-Brown',
        price: 179,
        weight: 3.5,
        color: 'brown',
        theme: 'chair'
    }, {
        id: 4,
        img: 'https://www.polihome.gr/ontheflyresizer.php?zc=2&w=1066&h=800&src=pub/media/catalog/product/0/2/02_59_3.jpg',
        name: 'Sofa Light-Gray',
        price: 669,
        weight: 45,
        color: 'gray',
        theme: 'sofa'
    }, {
        id: 5,
        img: 'https://www.polihome.gr/ontheflyresizer.php?zc=2&w=1066&h=800&src=pub/media/catalog/product/0/2/02_59_3.jpg',
        name: 'Sofa Light-Gray',
        price: 669,
        weight: 45,
        color: 'gray',
        theme: 'sofa'
    }, {
        id: 6,
        img: 'https://www.polihome.gr/ontheflyresizer.php?zc=2&w=1066&h=800&src=pub/media/catalog/product/0/2/02_59_3.jpg',
        name: 'Sofa Light-Gray',
        price: 669,
        color: 'gray',
        weight: 45,
        theme: 'sofa'
    }, {
        id: 7,
        img: 'https://www.polihome.gr/ontheflyresizer.php?zc=2&w=1066&h=800&src=pub/media/catalog/product/0/2/02_59_3.jpg',
        name: 'Sofa Light-Gray',
        weight: 55,
        price: 669,
        color: 'gray',
        theme: 'sofa'
    }, {
        id: 8,
        img: 'https://images.sofology.co.uk/c_scale,w_460,q_70,dpr_3,fl_lossy,f_auto/productmedia/lifestyle/sku001032404.jpg',
        name: 'Sofa Gray',
        weight: 45,
        price: 504,
        color: 'gray',
        theme: 'sofa'
    }, {
        id: 9,
        img: 'https://www.bestar.com/wp-content/uploads/products/images/produit-versatile-40852-8.jpeg',
        name: 'Closet White',
        price: 664,
        weight: 75,
        color: 'white',
        theme: 'closet'
    }, {
        id: 10,
        img: 'https://images.squarespace-cdn.com/content/v1/57a8bd14f7e0abfd89cda80c/9e455601-e0e1-4c6b-b7d0-4e684528ee14/Closets+of+Tulsa+Custom+Closet+Design',
        name: 'Closet Dark-Gray',
        weight: 75,
        price: 764,
        color: 'Brown',
        theme: 'gray'
    }, {
        id: 11,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHku2Ol0yn8Qt_sPnf1XiEuKUmA7I3wpPfNmilbH-jHIV9wXIF0nTRxGdCTZswSayYVrQ&usqp=CAU',
        name: 'Closet Brown',
        price: 664,
        weight: 75,
        color: 'Brown',
        theme: 'closet'
    }, {
        id: 12,
        img: 'https://images.squarespace-cdn.com/content/v1/57a8bd14f7e0abfd89cda80c/9e455601-e0e1-4c6b-b7d0-4e684528ee14/Closets+of+Tulsa+Custom+Closet+Design',
        name: 'Closet Brown',
        price: 664,
        color: 'Brown',
        weight: 75,
        theme: 'closet'
    }, {
        id: 13,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHku2Ol0yn8Qt_sPnf1XiEuKUmA7I3wpPfNmilbH-jHIV9wXIF0nTRxGdCTZswSayYVrQ&usqp=CAU',
        name: 'Closet Brown',
        price: 664,
        color: 'Brown',
        weight: 75,
        theme: 'closet'
    }, {
        id: 14,
        img: 'https://www.stammdesign.at/fileadmin/_processed_/6/a/csm_RLS_2316_35a6290376.jpg',
        name: 'Table Oak-Brown',
        price: 369,
        color: 'Brown',
        weight: 35,
        theme: 'table'
    }, {
        id: 15,
        img: 'https://www.stammdesign.at/fileadmin/_processed_/6/a/csm_RLS_2316_35a6290376.jpg',
        name: 'Table Oak-Brown',
        price: 369,
        color: 'Brown',
        weight: 35,
        theme: 'table'
    }, {
        id: 16,
        img: 'https://www.stammdesign.at/fileadmin/_processed_/6/a/csm_RLS_2316_35a6290376.jpg',
        name: 'Table Oak-Brown',
        price: 369,
        color: 'Brown',
        weight: 35,
        theme: 'table'
    }, {
        id: 17,
        img: 'https://www.stammdesign.at/fileadmin/_processed_/6/a/csm_RLS_2316_35a6290376.jpg',
        name: 'Table Oak-Brown',
        price: 369,
        weight: 35,
        color: 'Brown',
        theme: 'table'
    }, {
        id: 18,
        img: 'https://www.ikea.com/es/en/images/products/stockholm-chair-walnut__0756826_pe749078_s5.jpg?f=s',
        name: 'Chair Oak-Light-Brown',
        price: 369,
        weight: 3.5,
        color: 'Brown',
        theme: 'chair'
    }, {
        id: 19,
        img: 'https://hips.hearstapps.com/hmg-prod/images/modern-kitchen-kitchen-island-green-marble-verde-tinos-carrara-mix-kitchen-1614609430.jpg?crop=0.987xw:0.371xh;0.0112xw,0.338xh&resize=1200:*',
        name: 'Kitchen Green-Stone',
        price: 2369,
        color: 'green',
        theme: 'kitchen'
    }, {
        id: 20,
        img: 'https://images.wsj.net/im-661502?width=1280&size=1',
        name: 'Kitchen Light-Oak',
        price: 2169,
        theme: 'kitchen'
    }, {
        id: 21,
        img: 'https://www.build-review.com/wp-content/uploads/2021/08/Kitchen-Remodel.jpg',
        name: 'Kitchen Sand-Stone',
        price: 2369,
        theme: 'kitchen'
    }, {
        id: 22,
        img: 'https://images.squarespace-cdn.com/content/v1/5358c6dbe4b090d1c9b457db/1634820527979-B898JZ9N6GM4PWHBNZG1/Cotswolds+Kitchen+01+-+72dpi+no+spots.jpg?format=1500w',
        name: 'Kitchen Black-Wood',
        price: 2169,
        theme: 'kitchen'
    }, {
        id: 23,
        img: 'https://i0.wp.com/www.kitchendesigncentre.com/wp-content/uploads/2022/12/a-contemporary-kitchen-for-a-newly-built-farmhouse-tile.jpg?fit=1270%2C1176&ssl=1',
        name: 'Kitchen Black-Stone',
        price: 2269,
        theme: 'kitchen'
    }, {
        id: 24,
        img: 'https://www.lochannakitchens.co.uk/wp-content/uploads/2022/07/Eterna-Shot2-FINAL-JPEG-Homepage.jpg',
        name: 'Kitchen Brown-Stone',
        price: 2269,
        theme: 'kitchen'
    }, {
        id: 25,
        img: 'https://www.thepropertycentres.co.uk/images/Blog-Images/Can_a_new_Kitchen_add_value_to_your_home/can-a-kitchen-add-value.jpg',
        name: 'Kitchen Modern-Blue',
        price: 2369,
        theme: 'kitchen'
    }, {
        id: 26,
        img: 'https://www.wrenkitchens.com/blog/wp-content/uploads/2021/12/2022-kitchen-design-trends-dark-kitchen-scaled.jpg',
        name: 'Kitchen Modern-Dark-Green',
        price: 2369,
        theme: 'kitchen'
    }, {
        id: 27,
        img: 'https://telkitchens.in/srckchn/uploads/2021/10/Whats-the-new-kitchen-design-1.jpg',
        name: 'Kitchen Basalt',
        price: 2369,
        theme: 'kitchen'
    }, {
        id: 28,
        img: 'https://www.ikea.com/ae/en/images/products/odger-chair-blue__1093056_pe863174_s5.jpg',
        name: 'Chair Basalt-Blue',
        price: 179,
        theme: 'chair'
    }, {
        id: 29,
        img: 'https://www.ikea.com/ca/en/images/products/odger-chair-white-beige__1070848_pe854751_s5.jpg',
        name: 'Chair Basalt-Coffee',
        price: 179,
        theme: 'chair'
    }, {
        id: 30,
        img: 'https://www.ikea.com/us/en/images/products/odger-chair-red__1038451_pe839685_s5.jpg',
        name: 'Chair Basalt-Red',
        price: 179,
        theme: 'chair'
    }, {
        id: 33,
        img: 'https://modern1furniture.com/wp-content/uploads/2016/01/products-01_Huppe_Fly_Dining_Table_Dining_Room_Furniture_Set.jpg',
        name: 'Table Brown-Wood',
        price: 379,
        theme: 'table'
    }, {
        id: 34,
        img: 'https://www.diotti.com/media/catalog/product/cache/3/image/163b81649b7ef7bc8a00b0066e59ae0a/p/m/pmv-tavolo-finnigan-05.jpg',
        name: 'Table Light-Brown-Wood',
        price: 379,
        theme: 'table'
    }, {
        id: 35,
        img: 'https://cb2.scene7.com/is/image/CB2/DondraQueenBedSHS21_1x1/$web_pdp_main_carousel_xs$/210203123041/dondra-teak-queen-bed.jpg',
        name: 'Bed Light-Brown-Wood',
        price: 217,
        theme: 'bed'
    }, {
        id: 36,
        img: 'https://bedworld.co.nz/wp-content/uploads/2021/05/karamea-slat-bed-1.jpg',
        name: 'Bed Dark-Brown-Wood',
        price: 217,
        theme: 'bed'
    }, {
        id: 37,
        img: 'https://naturalbeds.nz/sites/default/files/styles/product_main_image_800x450/public/product-images/Riva%20Java%20Full.jpg?itok=DrOhchQ7',
        name: 'Bed Dark-Wood',
        price: 217,
        theme: 'bed'
    }, {
        id: 31,
        img: 'https://www.ikea.com/us/en/images/products/odger-chair-anthracite__1070852_pe854755_s5.jpg',
        name: 'Chair Basalt-Dark',
        price: 179,
        theme: 'chair'
    }, {
        id: 32,
        img: 'https://www.midfurn.co.uk/wp-content/uploads/2022/08/Calligaris-Stream-compact.jpg',
        name: 'Table Basalt-Black',
        price: 379,
        theme: 'table'
    }, {
        id: 38,
        img: 'https://secure.img1-cg.wfcdn.com/im/22535608/resize-h600-w600%5Ecompr-r85/8743/87435174/Aadvik+Upholstered+Bed.jpg',
        name: 'Bed Emerald-Green',
        price: 217,
        theme: 'bed'
    }, {
        id: 39,
        img: 'https://i5.walmartimages.com/asr/bc8669d8-a987-4c50-be64-55ef20e28a3c.007ba57d284dae86f67268e12622d495.jpeg',
        name: 'Bed Diamond-Blue',
        price: 217,
        theme: 'bed'
    }, {
        id: 40,
        img: 'https://images.offerup.com/y7KzX0i74dIJiiJswPbx0RVrWX0=/768x768/9802/98020a83235145f9b6494bb4bb62aa59.jpg',
        name: 'Bed Diamond-Dark',
        price: 217,
        theme: 'bed'
    }];
    const [right, setRight] = useState(-1000)
    const [basket, setBasket] = useState([])
    const [card, setCard] = useState(false)
    const [cardData, setCardData] = useState({})

    return (<div className="flex flex-col items-center bg-slate-50 min-h-screen">
        <div className="container lg px-2 min-h-screen flex flex-col items-center relative">
            <Header setCard={setCard}/>
            <Routes>
                <Route path={'/'} element={<Main itemsArray={itemsArray} setCard={setCard}
                                                 setCardData={setCardData}
                                                 setBasket={setBasket} setRight={setRight}
                                                 card={card} cardData={cardData} right={right}/>}/>
                <Route path={'help'} element={<Help/>}/>
                <Route path={'catalogue'}
                       element={<Catalogue itemsArray={itemsArray} setCard={setCard}
                                           setCardData={setCardData}
                                           setBasket={setBasket} setRight={setRight}
                                           card={card} cardData={cardData} right={right}/>}/>
                <Route path={'about'} element={<About/>}/>
                <Route path={'order'} element={<Order/>}/>
                <Route path={'adress'} element={<OrderAdress/>}/>
            </Routes>
            <div className="mt-12 mb-8 w-full flex justify-center">
                <Footer/>
            </div>
        </div>
    </div>);
}

export default App;
