import { useState } from 'react';

function useDoubleClick(action: () => void) {
  const [clickTimeout, setClickTimeout] = useState<number | null>(null);

  const handleClick = () => {
    if (clickTimeout !== null) {
      // Se existe um timeout configurado, isso é um duplo clique
      action();
      clearTimeout(clickTimeout);
      setClickTimeout(null);
    } else {
      // Se não há timeout, inicia um. Se outro clique ocorrer antes do timeout expirar, será um duplo clique
      setClickTimeout(window.setTimeout(() => {
        setClickTimeout(null);
      }, 250)); // 250 ms para o segundo clique
    }
  }

  return handleClick;
}

export default useDoubleClick;
