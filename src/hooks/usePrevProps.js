import React from 'react';

/**
 * Возвращает пердыдущее значение пропсов компонента.
 * Можно использовать как componentDidUpdate(prevProps) в функциональных компонентах.
 */
export const usePrevProps = (props) => {
  /**
   * Реф используется, чтобы пережить ререндер компонента, где используется хук.
   * Обычные переменные умирают с каждым новым выполнением функции, а реф сохраняется.
   * Поэтому возвращает старые пропсы.
   * @thanks https://www.youtube.com/channel/UClgj-KWiNaOo9H1rz1ISO6Q.
   */
  const prevPropsRef = React.useRef();

  React.useEffect(() => {
    // Изменит значение рефа только лишь после ренедера компонента (сначала будет отданы старые пропсы)
    prevPropsRef.current = props
  });

  return prevPropsRef.current;
};
