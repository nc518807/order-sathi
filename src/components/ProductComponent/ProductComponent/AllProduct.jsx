import React from 'react';
import FilterProduct from './FilterProduct';
import ProductDetails from './ProductDetails';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllProduct } from '../../Redux/ActionNames/ActionCreator';

const AllProduct = (props) => {

//     const dispatch = useDispatch();
//   const { products } = useSelector(state => state.products);

//   alert(products)

//     React.useEffect(() => {
//         dispatch(getAllProduct())
//     },[])

    return (
        <>
            <div className='main-body-all-product container p-0 pt-4'>
                <FilterProduct />
                <section className='mid-level-body'>
                    <div className='list-header'>
                        <div className='result-heading'>
                            <h4>Search Results</h4>
                            <small>8 results found</small>
                        </div>
                    </div>
                    <div className='all_product'>
                        <div className='row'>
                            <ProductDetails />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AllProduct;
