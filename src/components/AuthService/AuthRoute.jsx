import React from "react";

import { connect } from "react-redux";

import { Navigate, Route } from "react-router-dom";


const AuthRoute = props => {

  const { isAuthUser, type } = props;

  if (type === "guest" && isAuthUser) return <Navigate to="/login/" />;

  else if (type === "private" && !isAuthUser) return <Navigate to="/client/profile/" />;


  return <Route {...props} />;

};


const mapStateToProps = ({ isAuthUser }) => ({

  isAuthUser

});


export default connect(mapStateToProps)(AuthRoute);