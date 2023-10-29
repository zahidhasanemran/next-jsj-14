import Link from 'next/link'
import React from 'react';

const Login = () => {
  return (
    <div>
      Login page 
      <br/>
      <Link href="/dashboard" >Dashboard</Link>
    </div>
  );
};

export default Login;