import styled from '@emotion/styled';
import { Avatar, Text, useTheme } from '@nextui-org/react';
// import { ThemeSwitch } from 'core';
import { authorImage, authorName } from 'core/constants';

import { IHeader } from '../../../_content/Header';

function Header({ heading, description }: IHeader) {
  const { theme } = useTheme();

  return (
    <header>
      <HeadingWrapper>
        <H1 h1 css={{ textGradient: `70deg, $blue300 -15%, $pink500 -25%, $purple500 90%` }}>
          {heading}
        </H1>

        
      </HeadingWrapper>
      <DescriptionWrapper>
        <Avatar src={authorImage.default.src} alt={authorName} text={authorName} size="xl" />
        <P dangerouslySetInnerHTML={{ __html: description }}></P>
      </DescriptionWrapper>
    </header>
  );
}

export default Header;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  & > label:last-of-type {
    margin-top: 8px;
  }
`;

const H1 = styled(Text)`
  font-size: 2.5rem;
  line-height: 7rem;
  margin-bottom: 8px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin-left: 0.875rem;
`;
