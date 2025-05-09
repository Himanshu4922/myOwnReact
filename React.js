export const React = {
  createElement(type, props, ...children) {
    const reactObject = {
      type,
      props: {
        ...props,
        children,
      },
    };
    return reactObject;
  },
};
