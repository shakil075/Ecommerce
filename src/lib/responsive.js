import { css } from "styled-components";

export const mobile = (props) => {
    return css `
    @media only screen and (max-width: 640px) {
      ${props}
    }
  `;
};

export const mobile2 = (props) => {
    return css `
    @media only screen and (max-width: 450px) {
      ${props}
    }
  `;
};

export const mobile3 = (props) => {
    return css `
    @media only screen and (max-width: 360px) {
      ${props}
    }
  `;
};

export const mobile4 = (props) => {
    return css `
    @media only screen and (max-width: 320px) {
      ${props}
    }
  `;
};
export const mobile5 = (props) => {
    return css `
    @media only screen and (max-width: 400px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
    return css `
    @media only screen and (max-width: 968px) and (min-width: 641px) {
      ${props}
    }
  `;
};

export const tablet2 = (props) => {
    return css `
    @media only screen and (max-width: 768px) and (min-width: 641px) {
      ${props}
    }
  `;
};
export const laptop = (props) => {
    return css `
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};