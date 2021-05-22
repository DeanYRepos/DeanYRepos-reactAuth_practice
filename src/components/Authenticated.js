import React from 'react';

export default ({context}) => {
  const authUser = context.authenticatedUser;
  return (
  <div className="bounds">
    <div className="grid-100">
      <h1>{authUser.name} is authenticated!</h1>
      <p>Your user name is {authUser.username}</p>
    </div>
  </div>
  );
}