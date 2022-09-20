import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../Redux/ActionNames/ActionCreator';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
// import cloth from '../../../assets/images/cloth.jpg';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllProduct({
      id
    }))
  }, [])
  console.log(products, "All Product Shown Successfully ")

  const truncate = (str) => {
    return str.length > 24 ? str.substr(0, 24) + "..." : str
  }

  const RenderList = () =>
    <>
      {products.results && products.results.map((item, i) => {
        return (
          <div className="col-12 col-md-4" key={item.id}>
            <Card>
              <div className='image-box'>
                {/* <div className="customised-badge">
                  <div className="custom-badge">
                    <span>55% Off</span>
                    <div className="badge-box top-arrow"></div>
                    <div className="badge-box bottom-arrow"></div>
                  </div>
                </div> */}
                <Link to={`/product/detail/${item.id}`}>
                  <CardImg src={item.image} alt="" height="280px" />
                  {/* <div className='quick-view'>
                    <p>Quick View</p>
                  </div> */}
                </Link>
              </div>
              <CardBody>
                <div className='card-head d-flex justify-content-between'>
                  <CardTitle style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}> {truncate(item.name)} </CardTitle>
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
        })
      }
    </>
  return (
    <>
      <RenderList />
    </>
  )
}

export default ProductDetails;