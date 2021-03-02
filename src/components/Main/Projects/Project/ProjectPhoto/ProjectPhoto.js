import React from 'react';
import styled from 'styled-components';
import Picture from '../../../../UI/Picture/Picture';
import sizing from '../../../../../styles/config/sizing';

const PictureContainer = styled.div`
  max-width: ${sizing.size13};
  min-height: 0;
`;

const Photo = ({image}) => {
  return (
    <PictureContainer>
      <Picture url={image.url} alt={image.alt}/>
    </PictureContainer>
  )
}

export default Photo;