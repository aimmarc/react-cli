import React, { useEffect } from 'react';

/**
 * 一个类似vue onMounted的hook
 * @param callback
 */
function useFirstEffect(callback: React.EffectCallback) {
    useEffect(() => {
        return callback?.();
    }, []);
}

export default useFirstEffect;
