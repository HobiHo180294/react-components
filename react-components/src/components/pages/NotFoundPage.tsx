import React from 'react';
import { Navigate } from 'react-router-dom';

const ENDPOINT_404 = '/404';

class NotFoundPage extends React.Component {
  render() {
    return <Navigate to={`${ENDPOINT_404}`} />;
  }
}

export default NotFoundPage;
