import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import FilterProfile from '../FilterProfile'
import Profile from './Profile'

const ClientProfile = () => {
  return (
    <section className='user__detail container'>
      <div className='breadcrum'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/" >Home</Link>
            <span> &nbsp;
              <i className="fa fa-angle-right" aria-hidden="true">
              </i>
            </span>&nbsp;
          </BreadcrumbItem>
          <BreadcrumbItem style={{ fontSize: "13px", paddingTop: "3px" }}>Profile</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className='d-flex'>
        <div className='user__detail-list d-none d-lg-block'>
          <FilterProfile />
        </div>
        <div className='user__detail-status'>
          <Profile />
        </div>
      </div>
    </section>
  )
}

export default ClientProfile;