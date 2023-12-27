import * as React from 'react';

export const EmailTemplate = ({
  name,
  email,
  organization,
  services, 
  message
}) => (
  <div>
    <p>Hello Elvis, {name} sent you an email.</p>
    <p>
        name: {name} 
    </p>
    <p>
        email: {email} 
    </p>
    <p>
        organization: {organization} 
    </p>
    <p>
        services: {services} 
    </p>
    <p>
        message: {message} 
    </p>
  
  </div>
);
