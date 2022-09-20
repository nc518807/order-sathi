import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { getAllCategory } from '../Redux/ActionNames/ActionCreator';


const CustomNavItem = ({ menu }) => {

  // const dispatch = useDispatch();

  // const { categories} = useSelector((state) => state.categories)

  // console.log(categories,"================");

  // const { id } = useParams();

  // React.useEffect(() => {
  //   dispatch(getSingleCategory(id))
  // })

  const [isDropdown, setIsDropdown] = React.useState(false);

  return <NavItem >
    <NavLink onMouseEnter={() => setIsDropdown(true)}
      onMouseLeave={() => setIsDropdown(false)} to="#">
      {menu.name}
      {isDropdown && menu.children.length ?
        <div className='dropdown-menu-desktop'>
          {/* <Link to={`/product/detail/${menu.id}`}> */}
          <Link to={`/categories/product/${menu.id}`}>
            {menu.children.map(childMenu => <CustomNavItem menu={childMenu} />)}
          </Link>
        </div> : <></>}
    </NavLink>
  </NavItem>
}


const findMyChildren = (id, cats) => {
  let children = cats.filter(cat => cat.parent === id);
  if (children.length) {
    children = children.map(({ id, name }) => {
      const children = findMyChildren(id, cats);
      return { id, name, children };
    });
  }
  return children;
}

const mapCategoriesIntoTree = cats => {
  let categories = [];
  cats.forEach(cat => {
    if (!cat.parent) {
      categories.push(cat);
    }
  });

  return categories.map(({ id, name }) => {
    const children = findMyChildren(id, cats);
    return { id, name, children };
  });

}

const OrderSathiNavbar = () => {


  const dispatch = useDispatch();

  const { categories } = useSelector((state => state.categories));

  const [tree, setTree] = useState([]);

  React.useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  React.useEffect(() => {
    if (categories.length > 0) {
      setTree(mapCategoriesIntoTree(categories));
    }
  }, [categories.length])

  const RenderNavbar = () => {
    return <>
      {
        tree.map((menu, index) => {

          return <CustomNavItem menu={menu} key={index} />
        })}
    </>
  }

  return (
    <Nav>
      <RenderNavbar />
    </Nav>
  )

}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSathiNavbar)