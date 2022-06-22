import React, { useEffect, useState } from 'react';

/**
 * 一个类似vue onMounted的hook
 * @param callback
 */
function useFirstEffect(callback: React.EffectCallback) {
    const [state, setState] = useState(0);

    useEffect(() => {
        if (state > 0) {
            return;
        }
        setState((state) => state++);
        return callback();
    }, [state]);
}

export default useFirstEffect;
