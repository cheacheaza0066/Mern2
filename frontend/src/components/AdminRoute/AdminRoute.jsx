// import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes
import { getUser } from "../../service/authorize";

const PrivateRoute = ({ element, ...rest }) => {
  if (getUser()) {
    return <Route {...rest} element={element} />;
  } else {
    return <Navigate to="/Login" />;
  }
};

// Define PropTypes for PrivateRoute
PrivateRoute.propTypes = {
  element: PropTypes.node, // Prop 'element' should be a valid React node
};

export default PrivateRoute;
