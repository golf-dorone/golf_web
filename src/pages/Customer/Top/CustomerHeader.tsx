import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const CustomerHeader = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Golf x Dorone',
      text: 'Why not view the golf course from the sky?',
      image:
        'https://images.unsplash.com/photo-1576555928619-03d62a29e4a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
      title: 'Golf x Dorone',
      text: 'For Golf Course Managers: Why not advertise your golf course by pictured from the sky?',
      image:
        'https://images.unsplash.com/photo-1529514034604-3cf028e773ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80',
    },
    {
      title: 'Golf x Dorone',
      text: 'For Golf Players: Why not check out the course of your next round from the sky?',
      image:
        'https://images.unsplash.com/photo-1593282153762-a41e3cceb06c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ]

  return (
    <>
      <Box
        position={'relative'}
        height={'600px'}
        width={'full'}
        overflow={'hidden'}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          colorScheme="teal"
          variant="outline"
          aria-label="left-arrow"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -40%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <FaChevronLeft size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          colorScheme="teal"
          aria-label="right-arrow"
          variant="outline"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <FaChevronRight size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={'6xl'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={'full'}
                  maxW={'lg'}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    color="teal"
                    textShadow={'1px 1px 1px #FFFFFF'}
                  >
                    {card.title}
                  </Heading>
                  <Text
                    fontSize={{ base: 'md', lg: 'lg' }}
                    color="teal"
                    textShadow={'1px 1px 1px #FFFFFF'}
                  >
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  )
}
