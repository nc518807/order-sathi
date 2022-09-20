import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands } from '../../Redux/ActionNames/ActionCreator';
import Tantra_Logo from '../../../assets/images/Tantra_Logo.png';
import kasa_Logo from '../../../assets/images/kasa.png';
import inch_Logo from '../../../assets/images/inch.png';
import virjeans_Logo from '../../../assets/images/virjeans.png';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

const options = {
    margin: 12,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    },
};

function ShopBrand() {

    const dispatch = useDispatch();
    const { brands } = useSelector((state) => state.brands);

    useEffect(() => {
        dispatch(getAllBrands())
    }, [getAllBrands])

    const Renderbrands = () => {
        return (
            <>
                {brands && (
                    <OwlCarousel {...options}>
                        {brands.map((item, index) => {
                            return (
                                <div className="brand-box" key={index}>
                                    <Link to={`/product/all/${item.id}`}>
                                        <img src={item.brand_image} alt={item.name} />
                                    </Link>
                                </div>
                            )
                        })
                        }
                    </OwlCarousel>
                )}
            </>
        )
    }

    return (
        <>
            <div className="brand-slider container">
                <div className='brand-heading'>
                    <div className='shop-by-brand'>
                        <h4>Shop By Brand</h4>
                    </div>
                </div>

                <div className='brand-owl-carousel'>
                    {/* <Renderbrands /> */}
                    <OwlCarousel {...options}>
                        <div className="brand-box" >
                            <Link to="/product/all/">
                                <img src={Tantra_Logo} alt="Tantra" />
                            </Link>
                        </div>
                        <div className="brand-box" >
                            <Link to="/product/all/">
                                <img src={kasa_Logo} alt="kasa" />
                            </Link>
                        </div>
                        <div className="brand-box" >
                            <Link to="/product/all/">
                                <img src={inch_Logo} alt="inch" />
                            </Link>
                        </div>
                        <div className="brand-box" >
                            <Link to="/product/all/">
                                <img src={virjeans_Logo} alt="virjeans" />
                            </Link>
                        </div>
                    </OwlCarousel>
                </div>

            </div>
        </>
    )
}


export default ShopBrand;