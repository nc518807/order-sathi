import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../Redux/ActionNames/ActionCreator';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import SingleModal from '../ModalComponent/SingleModal';
import { postCart } from '../../Redux/ActionNames/ActionCreator';
import { useNavigate } from 'react-router-dom';

const NewProduct = (props) => {

    const [modal, setModal] = React.useState(false);
    const navigate = useNavigate()

    // const [ editData, setEditData ] = React.useState();

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);

    React.useEffect(() => {
        dispatch(getAllProduct())
    }, [])

    const handleSubmit = (product,counter) => {
        dispatch(postCart(product, counter=1, navigate))
    }

    const truncate = (str) => {
        return str.length > 24 ? str.substr(0, 24) + "..." : str;
    }

    const [ prod, setProd] = React.useState(null);

    const toggle = (prod) => {
        setModal(!modal)
        setProd(prod)
    }

    const toggleClose = () => setModal(false)

    const RenderList = () => {
        return (
            <>
                {products.results && (
                    <div className='d-flex overflow-hidden'>
                        {products.results.map((item) => {
                            return (
                                <div className='col-md-3 col-12 new_product_body' key={item.id}>
                                    <Card>
                                        <div className='image-box'>
                                            <Link to={`/product/detail/${item.id}`}>
                                                <CardImg src={item.image} alt="" height="280px" />
                                            </Link>
                                            <div className='quick-view'>
                                                <p onClick={() => toggle(item)} >Quick View</p>
                                            </div>
                                        </div>
                                        <form id='add_to_cart'>
                                            <div className='addtocart-sec'>
                                                <span className='addtocart-link' id='cartTooltip' onClick={() => handleSubmit(item.product[0]["id"])}>
                                                    <i className='fa fa-shopping-bag'></i>
                                                </span>
                                            </div>
                                        </form>
                                        <CardBody className='p-2'>
                                            <div className='card-head d-flex justify-content-between'>
                                                <CardTitle style={{ overflow: 'hidden', textOverflow: 'ellipsis', textTransform: "capitalize" }}> {truncate(item.name)} </CardTitle>
                                                <span className="cart-heart">
                                                    <i className="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            {item.product && (
                                                item.product.map((prod, index) => {
                                                    if (index !== 0) return null
                                                    return (
                                                        <CardText key={prod.id}>Rs. {prod.price}
                                                            <span className='card-old-price'> Rs. {prod.old_price}</span>
                                                        </CardText>
                                                    )
                                                })
                                            )}
                                        </CardBody>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                )}
                <SingleModal isOpen={modal} toggleclose={toggleClose} toggle={toggle} prod={prod}/>
            </>

        )
    }


    return (
        <>
            <div className='container product-container'>
                <div className='product primary-content '>
                    <div className='new_product d-flex justify-content-between align-items-center mb-2'>
                        <div className='new-product-heading'>
                            <h4>New Product</h4>
                        </div>
                        <div className='view-product'>
                            <Link to="/product/all">View All &nbsp;
                                <i className="fa fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="All-product-details">
                        <div className='row'>
                            <RenderList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewProduct;