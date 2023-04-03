import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes () {
if (!isLoggedIn) {
return <Navigate to="/login" replace />;
}
return children
}

export default ProtectedRoutes; 