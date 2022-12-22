import '@brainhubeu/react-carousel/lib/style.css';
import * as React from 'react';
import { Box } from 'reflexbox';
import styled from 'styled-components';
import { MediaQueries } from '../../foundation/media';

import dynamic from 'next/dynamic';

const { default: Carousel, Dots: CarouselDots } = dynamic(
 () => require('@brainhubeu/react-carousel'),
 { ssr: false },
) as any;

// const PageControl = styled(Dots)`
//   .BrainhubCarousel__dot {
//     background-color: transparent;
//     margin: 0 4px;
//     padding: 0;

//     &::before {
//       height: 8px;
//       width: 8px;
//       background-color: grey;
//       border-radius: 4px;
//       transition: width 0.3s;
//     }

//     &.BrainhubCarousel__dot--selected {
//       &:before {
//         background: red;
//         width: 82px;
//       }
//     }
//   }
// `;

// const Carousel = styled(ReactCarousel)`
//   & > * {
//     height: 100%;
//   }

//   .BrainhubCarousel__trackContainer {
//     width: 100%;
//   }

//   .BrainhubCarouselItem {
//     justify-content: center;
//     margin-bottom: 20px;

//     @media ${MediaQueries.Medium} {
//       justify-content: flex-start;
//       flex-wrap: wrap;
//     }
//   }
// `;

// const CarouselDots = styled(PageControl)`
//   @media ${MediaQueries.Medium} {
//     display: none;
//   }
// `;

interface CarouselProps {
  children: React.ReactElement[];
}

const CarouselMobile: React.FunctionComponent<CarouselProps> = ({
  children
}) => {
  const [value, setValue] = React.useState(0);

  const onChange = (value: number) => {
    setValue(value);
  };

  return (
    <Box width={1}>
      <Carousel
        value={value}
        onChange={onChange}
        slidesPerPage={children.length}
        draggable={true}
        infinite={false}
        clickToChange={true}
        breakpoints={{
          767: {
            slidesPerPage: 1
          },
          768: {
            slidesPerPage: 2,
            draggable: true,
            clickToChange: true
          }
        }}
      >
        {children}
      </Carousel>
      {children.length > 1 && (
        <CarouselDots
          value={value}
          onChange={onChange}
          number={children.length}
        />
      )}
    </Box>
  );
};

export default CarouselMobile;
