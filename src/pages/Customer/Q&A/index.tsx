import { HeaderLine } from 'shared/components/HeaderLine'
import { CustomerFooter } from '../Top/CustomerFooter'
import { CustomerMenuBar } from '../Top/CustomerMenuBar'
import {
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react'

export const CustomerQAContainer = () => {
  return (
    <>
      <HeaderLine />
      <CustomerMenuBar />
      <Container maxW="container.xl">
        <Heading fontSize={'xl'} textAlign="center">
          よくあるご質問
        </Heading>
        <Container height="800px">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ドローン撮影の依頼はどのように行えばいいですか？
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                お問い合わせフォームより詳細をお送りください。
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ゴルフ場の予約は行えますか?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                現在こちらからゴルフ場の予約は行えません。
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Container>
      <CustomerFooter />
    </>
  )
}
