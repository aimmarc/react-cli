import React, { useEffect } from 'react';

/**
 * 一个类似vue onMounted的hook
 * @param callback
 */
const useFirstEffect = (callback: React.EffectCallback) => {
    useEffect(() => {
        return callback?.();
    }, []);
};

export default useFirstEffect;
