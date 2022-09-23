import {
  Box,
  Container,
  Stack,
  Image,
  Input,
  FormControl,
  FormLabel,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import {
  UpdateGolfInput,
  useDeleteGolfMutation,
  useUpdateGolfMutation,
} from 'graphql/generated'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SharedButton } from './SharedButton'
import { FaTrashAlt, FaEdit, FaChevronLeft } from 'react-icons/fa'

export const UpdateGolfForm = (props: any) => {
  const { golf } = props
  const [updateGolf] = useUpdateGolfMutation({ refetchQueries: ['golf'] })
  const [deleteGolf] = useDeleteGolfMutation({ refetchQueries: ['golf'] })
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
      navigate('/auth/golfs')
      // navigate(`auth/golfs/${golf.id}`)
    })
  }

  return (
    <>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/auth/admin" fontSize={'12px'}>
            管理者ページトップ
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/auth/golfs" fontSize={'12px'}>
            ゴルフ場紹介一覧
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxW={'7xl'}>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1529514034604-3cf028e773ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <FormControl textAlign="center">
                <FormLabel htmlFor="title" textAlign="center">
                  　タイトル
                </FormLabel>
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
              </FormControl>
              <FormControl textAlign="center">
                <FormLabel htmlFor="password" textAlign="center">
                  紹介内容
                </FormLabel>
                <Input
                  id="params.description"
                  // name="params.description"
                  placeholder="description"
                  width="50%"
                  height="400px"
                  size="md"
                  defaultValue={golf.description}
                  {...register('params.description', {
                    // required: validation.required,
                  })}
                />
              </FormControl>
            </Box>

            <Stack spacing={4} direction="row-reverse" textAlign={'center'}>
              <SharedButton
                icon={<FaEdit />}
                label={'更新する'}
                variant={'outline'}
                isLeftIcon={true}
                type="submit"
                isLoading={isSubmitting}
              />

              <SharedButton
                icon={<FaTrashAlt />}
                label={'削除する'}
                variant={'outline'}
                isLeftIcon={true}
                onClick={() =>
                  deleteGolf({
                    variables: {
                      input: {
                        id: golf.id,
                      },
                    },
                  }).then(() => {
                    navigate('/auth/golfs')
                  })
                }
              />

              <SharedButton
                icon={<FaChevronLeft />}
                label={'一覧ページへ戻る'}
                variant={'outline'}
                isLeftIcon={true}
                onClick={() => navigate('/auth/golfs')}
              />
            </Stack>
          </Stack>
        </Container>
      </form>
    </>
  )
}
