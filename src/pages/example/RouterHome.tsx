import React from 'react';
import { useHistory } from 'react-router-dom';

const RouterHome: React.FC = (): React.ReactElement => {
    const history = useHistory();
    return (
        <div>
            <span>首页</span>
            <button
                onClick={() => {
                    history.push('/demo/routerDetail');
                }}
            >
                详情
            </button>
        </div>
    );
};

export default RouterHome;
