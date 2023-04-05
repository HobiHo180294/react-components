import React from 'react';
import { Navigate } from 'react-router-dom';

const ENDPOINT_404 = '/404';

export const NotFoundPage = () => <Navigate to={`${ENDPOINT_404}`} />;
