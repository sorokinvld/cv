import { css, Global } from '@emotion/react';
import { config } from '@nextui-org/react';
import { codeHighlight } from './codeHighlight';

const globalStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    word-break: keep-all;
    word-wrap: break-word;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    transition: background-color 0.9s, color 0.3s;
    background: linear-gradient(91deg, rgba(231,0,239,0.2),transparent);
  }

  ul,
  ol {
    color: inherit;
  }

  ul:not(.contains-task-list) {
    list-style-type: disc;
  }

  ${codeHighlight};

  @media ${config.media.xsMax} {
    html {
      font-size: 14px;
    }
  }
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};
