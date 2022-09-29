//TODO: add error message
import { validation } from '../utils/validation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
  FormLabel,
  FormControl,
  Input,
  Container,
  Image,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  CreateGolfInput,
  useCreateGolfMutation,
  useGolfsQuery,
} from 'graphql/generated'
import { SharedButton } from './SharedButton'
import { FaEdit } from 'react-icons/fa'

export const CreateGolfForm = () => {
  const { data: { golfs = [] } = {} } = useGolfsQuery()
  const [createGolf] = useCreateGolfMutation({ refetchQueries: ['golf'] })
  const navigate = useNavigate()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<CreateGolfInput>({ criteriaMode: 'all' })

  const onSubmit: SubmitHandler<CreateGolfInput> = (params) => {
    void createGolf({ variables: { input: params } }).then(() => {
      navigate('/auth/admin')
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
          <BreadcrumbLink href="/auth/create" fontSize={'12px'}>
            ゴルフ紹介新規作成
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
          <FormControl textAlign="center">
            <FormLabel htmlFor="title" textAlign="center">
              　タイトル
            </FormLabel>
            <Input
              id="params.title"
              placeholder="title"
              width="auto"
              size="md"
              {...register('params.title', {
                required: validation.required,
              })}
            />
          </FormControl>
          <FormControl textAlign="center">
            <FormLabel htmlFor="password" textAlign="center">
              紹介内容
            </FormLabel>
            <Input
              id="params.description"
              placeholder="description"
              width="50%"
              height="400px"
              size="md"
              {...register('params.description', {
                required: validation.required,
              })}
            />
          </FormControl>

          <Stack spacing={4} direction="row-reverse" textAlign={'center'}>
            <SharedButton
              icon={<FaEdit />}
              label={'作成する'}
              variant={'outline'}
              isLeftIcon={true}
              type="submit"
              isLoading={isSubmitting}
            />
          </Stack>
        </Container>
      </form>
    </>
  )
}
