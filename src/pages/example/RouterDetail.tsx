import React from 'react';
import { useHistory } from 'react-router-dom';

const RouterDetail: React.FC = (): React.ReactElement => {
    const history = useHistory();
    return (
        <div>
            <span>详情页</span>
            <button
                onClick={() => {
                    history.goBack();
                }}
            >
                退回
            </button>
        </div>
    );
};

export default RouterDetail;
