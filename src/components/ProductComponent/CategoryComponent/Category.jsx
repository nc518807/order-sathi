import React from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import cloth from '../../../assets/images/cloth.jpg';
import { getAllCategory } from '../../Redux/ActionNames/ActionCreator';

const Category = () => {

  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  React.useEffect(() => {
    dispatch(getAllCategory());
  },[])

  const RenderCate = () =>
    <>
      {categories && categories.map((item, index) => {
        if(index >= 5) {
          return null;
        };
        return (
          <figure className={`categorySection gallery__item gallery__item--${index + 1}`} key={item.id}>
            <Link to={"#"}>
              <img className='gallery__img' src={item.image} alt="cloth" />
            </Link>
          </figure>
        )
      })}
    </>
  return (
    <>
      <div className='container categories-sec'>
        <div className='categories-head'>
          <h3>Our Categories</h3>
        </div>
        <div className='gallery'>
          <RenderCate />
          {/* <figure className='categorySection gallery__item gallery__item--1'>
            <Link to={"#"}>
              <img className='gallery__img' src={cloth} alt="cloth" />
            </Link>
          </figure>
          <figure className='categorySection gallery__item gallery__item--2'>
            <Link to={"#"}>
              <img className='gallery__img' src={cloth} alt="cloth" />
            </Link>
          </figure>
          <figure className='categorySection gallery__item gallery__item--3'>
            <Link to={"#"}>
              <img className='gallery__img' src={cloth} alt="cloth" />
            </Link>
          </figure>
          <figure className='categorySection gallery__item gallery__item--4'>
            <Link to={"#"}>
              <img className='gallery__img' src={cloth} alt="cloth" />
            </Link>
          </figure>
          <figure className='categorySection gallery__item gallery__item--5'>
            <Link to={"#"}>
              <img className='gallery__img' src={cloth} alt="cloth" />
            </Link>
          </figure> */}
        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => ({
  categories: state.categories
})

const mapDispatchToProps = dispatch => ({
  getAllCategory: () => { dispatch(getAllCategory()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)

// export default Category;