import {
  Box,
  Container,
  Stack,
  Image,
  Button,
  useColorModeValue,
  Input,
} from '@chakra-ui/react'
import {
  UpdateGolfInput,
  // useDeleteGolfMutation,
  useUpdateGolfMutation,
} from 'graphql/generated'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

export const UpdateGolfForm = (props: any) => {
  const { golf } = props
  const [updateGolf] = useUpdateGolfMutation({ refetchQueries: ['golf'] })
  // const [deleteGolf] = useDeleteGolfMutation({ refetchQueries: ['golf'] })
  const navigate = useNavigate()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<UpdateGolfInput>({ criteriaMode: 'all' })

  const onSubmit: SubmitHandler<UpdateGolfInput> = (params) => {
    void updateGolf({
      variables: {
        input: {
          id: golf.id,
          params: {
            title: params.params.title,
            description: params.params.description,
          },
        },
      },
    }).then(() => {
      navigate(`/golfs/${golf.id}`)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxW={'7xl'}>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          {/* </Flex> */}
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Input
                id="params.title"
                placeholder="title"
                width="auto"
                size="md"
                defaultValue={golf.title}
                {...register('params.title', {
                  // required: validation.required,
                })}
              />
              <Input
                id="params.description"
                // name="params.description"
                placeholder="description"
                width="auto"
                size="md"
                defaultValue={golf.description}
                {...register('params.description', {
                  // required: validation.required,
                })}
              />
            </Box>

            <Button
              mt={4}
              colorScheme="gray"
              isLoading={isSubmitting}
              type="submit"
            >
              ゴルフ場紹介を更新する
            </Button>

            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              // bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
            >
              <Link to="/golfs">一覧ページへ戻る</Link>
            </Button>

            {/* <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack> */}
          </Stack>
          {/* </SimpleGrid> */}
        </Container>
      </form>
    </>
  )
}
