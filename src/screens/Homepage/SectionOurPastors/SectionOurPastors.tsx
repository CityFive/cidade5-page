import React, { useEffect, useRef, useState } from "react";
import { Box, Flex } from "reflexbox";
import { Pastor } from "../../../api/data";
import CarouselMobile from "../../../components/CarrouselMobile";
import Grid from "../../../components/Grid";
import HiddenOnMedium from "../../../components/Grid/HiddenOnMedium";
import HiddenOnSmall from "../../../components/Grid/HiddenOnSmall";
import ProfileCard from "../../../components/ProfileCard";
import Typography from "../../../components/Typography";
import { CarouselContainer, CarouselDot, CarouselDotList, CarouselItem, PageContainer } from "./SectionOurPastors.styles";

interface Props {
  pastors: Pastor[];
}

const SectionOurPastors: React.FC<Props> = ({ pastors }) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>();

  const handleDotClick = (dotNumber: number) => {
    carouselRef.current.scrollLeft = dotNumber * 320;
  };

  const handleScrollChange = () => {
    setActiveItem(Math.round(carouselRef.current.scrollLeft / 320));
  };

  useEffect(() => {
    carouselRef.current.addEventListener('scroll', handleScrollChange);

    return () => {
      carouselRef.current.removeEventListener('scroll', handleScrollChange);
    };
  }, [carouselRef.current?.scrollLeft]);

  return (
    <PageContainer id="seminaristas">
      <Flex flexDirection="column" alignItems="center">
        <Typography.HeadingLarge>
          Pastores e seminaristas
        </Typography.HeadingLarge>

        <HiddenOnSmall>
          <Flex mt="61px">
            {pastors.map((pastor, idx) => (
              <Box mr="16px">
                <ProfileCard
                  imageUrl={pastor.imageUrl}
                  description={pastor.description}
                  position={pastor.title}
                  social={pastor.social}
                  title={pastor.fullName}
                />
              </Box>
            ))}
          </Flex>
        </HiddenOnSmall>

        <CarouselContainer ref={carouselRef}>
            {pastors.map((pastor) => (
              <CarouselItem>
                <ProfileCard
                  imageUrl={pastor.imageUrl}
                  description={pastor.description}
                  position={pastor.title}
                  social={pastor.social}
                  title={pastor.fullName}
                />
              </CarouselItem>
            ))}
        </CarouselContainer>
        
        <CarouselDotList>
          {pastors.map((pastor, idx) => (
            <CarouselDot 
              key={pastor.fullName}
              onClick={() => handleDotClick(idx)}
              isActive={activeItem === idx}
            />
          ))}
        </CarouselDotList>
      </Flex>
    </PageContainer>
  );
};

export default SectionOurPastors;
