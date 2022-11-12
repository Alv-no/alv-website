declare module '*.module.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg';

declare module 'shared-components'; // TODO: type this module and remove this line
declare module 'shared-components/src/components/form';
declare module 'shared-components/src/components/header';
declare module 'shared-components/src/components/blogFilter';

// TODO: find types for theese modules
declare module 'browser-monads';
declare module 'gatsby-plugin-config';
declare module 'react-slick';
declare module 'gatsby-cookie-notice';
