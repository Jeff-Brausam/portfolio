import React from 'react';
import styled from 'styled-components';
import breakpoint from '../../../styles/config/breakpoints';

const StyledPicture = styled.picture`
  max-width: 100%;
  height: auto;
`;

const Image = styled.img`
  max-width: 100%;
  align-self: center;
  height: auto;
`;

const Source = styled.source`
  width: 100%;
`;

const Picture = ({url, alt}) => {
  return (
    <StyledPicture>
      <Source
        srcSet={url.large}
        media={`(min-width: ${breakpoint.screenXl})`}
      />
      <Source
        srcSet={url.medium}
        media={`(min-width: ${breakpoint.screenMed})`}
      />
      <Image srcSet={url.small} alt={alt} />
    </StyledPicture>
  );
};

export default Picture;
