import React from 'react';

interface IAuthenticationProps extends TBaseProp {}

const Authentication: React.FC<IAuthenticationProps> = (
    props,
): React.ReactElement => {
    return props.children;
};

export default Authentication;
