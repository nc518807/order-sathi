import React from 'react';
import { Collapse, Label, NavItem } from 'reactstrap';
import './Sidebar.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../Redux/ActionNames/ActionCreator';
import { ProSidebar, SidebarContent, SidebarHeader } from 'react-pro-sidebar';


const SideNavbar = (props) => {

  const dispatch = useDispatch();

  const { categories } = useSelector(state => state.categories)

  React.useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  const RenderMobCategory = () =>
    <>
      {categories && categories.map((item, index) => {
        if (index == null) return null
        return <SidebarContent key={item.id}>
          <NavItem >
            <Label className='a-label__chevron'>
              {item.name}
            </Label>
          </NavItem>
        </SidebarContent>
      })}
    </>


  return (
    <div className='wrapper mobile_navigation'>
      <div className='secondary_nav'>
        <div className='m-menu' >
          <Collapse isOpen={props.isOpen}>
            <ProSidebar>
              <SidebarHeader>
                <div className='mob__menu_header'>
                  <h4>Categories</h4>
                  <button className='btn' onClick={props.togglemenu} style={{ fontSize: "28px" }} >×</button>
                </div>
              </SidebarHeader>

              <RenderMobCategory />
            
            </ProSidebar>
          </Collapse>

        </div>
      </div>
    </div>
  )
}

export default SideNavbar;