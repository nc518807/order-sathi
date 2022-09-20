import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBrand } from '../../Redux/ActionNames/ActionCreator';
import { getAllProduct } from '../../Redux/ActionNames/ActionCreator';

const FilterProduct = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const { products } = useSelector(state => state.products);

    React.useEffect(() => {
        dispatch(getAllProduct())
    }, [getAllProduct])

    React.useEffect(() => {
        dispatch(getSingleBrand(id))
    }, [getSingleBrand])

    const RenderBrand = () =>
        <>
            {
                products.results && products.results.reduce(function (acc, item) {
                    const i = { id: item.brand.id, name: item.brand.name };
                    if (acc.map(x => x.id).indexOf(i.id) === -1) {
                        acc.push(i);
                    }
                    return acc;
                }, []).filter(function(item) {
                    return id ? id.toString() === item.id.toString() : true;
                }).map((brand, i) => {
                    return (
                        <div className="custom-control custom-checkbox" key={brand.id}>
                            <input type="checkbox" className="custom-control-input" />
                            <label className="custom-control-label" style={{ fontSize: "15px", fontWeight: "400" }} >{brand.name}</label>
                        </div>
                    )
                })
            }
        </>
    return (
        <>
            <aside className='side-bar list-sidebar d-none d-lg-block'>
                <nav className="nav" role="navigation">
                    <div className="nav__filter-menu">
                        <h6>Filter by</h6>

                        <form className="">
                            <ul className="nav__filter-menu-category">
                                <p>Price</p>
                                <div className="range-slider">
                                    <div className="range-input">
                                        <input min="2450" max="8000" step="10" type="range" name="min_value" />
                                        <input min="2450" max="8000" step="10" type="range" name="max_value" />
                                    </div>
                                    <div className="firstRangeValue">RS2450</div>
                                    <div className="secondRangeValue">Rs8000</div>
                                </div>
                            </ul>
                        </form>

                        <form className="" method="get">
                            <ul className="nav__filter-menu-brand">
                                <p>Brands</p>
                                {/*<div className="custom-control custom-checkbox" key={i}>
                                <form >
                                <input type="checkbox" value="1" className="custom-control-input" id="brand-1" name="brands" />
                                <label className="custom-control-label" style={{ fontSize: "15px", fontWeight: "400" }} >{item.name}</label> 
                            </form>
                            </div>*/}

                                <form action=''>
                                    <RenderBrand />
                                </form>

                            </ul>
                            <div className='filter-menu-search-clear'>
                                <div className='filter-menu-brand-btn d-flex justify-content-center'>
                                    <button type="submit" className="btn btn-primary btn-search"
                                    >Search</button>
                                </div>
                                <div className='filter-clear-brand'>
                                    <Link to="#">
                                        <button type="button" className="btn btn-secondary"
                                            style={{ outline: "none", boxShadow: "none" }}>
                                            Clear
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default FilterProduct;