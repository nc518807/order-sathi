import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Card, CardImg,
  //  CardText, CardBody, CardTitle
   } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
// import Cloth from '../../../assets/images/cloth.jpg';
import { getSingleCategory } from '../../Redux/ActionNames/ActionCreator';

const SingleCategories = (props) => {

  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getSingleCategory(id))
  }, [])


  const RenderList = () =>
    <>
      {categories.product && categories.product.map((item, i) => {
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
                {/* <Link to={`/product/detail/${item.id}`}> */}
                <Link to="">
                  <CardImg src={item.image} alt="" height="280px" />
                </Link>
                <p>{item.name}</p>
              </div>
              {/* <CardBody>
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
              </CardBody> */}
            </Card>
          </div>
        )
      })
      }
    </>
  return (
    <div className='container'>
      <div className='row'>
        <RenderList />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategories)