//TODO: add error message
import { validation } from '../../../shared/utils/validation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  // FormErrorMessage,
} from '@chakra-ui/react'
import {
  CreateGolfInput,
  useCreateGolfMutation,
  useGolfsQuery,
} from 'graphql/generated'

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
      navigate('/admin/signin')
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl textAlign="center">
          <FormLabel htmlFor="title" textAlign="center">
            　タイトル(ゴルフ場名等)
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
            size="md"
            {...register('params.description', {
              required: validation.required,
            })}
          />
        </FormControl>
        <Box textAlign="center">
          <Button
            mt={4}
            colorScheme="gray"
            isLoading={isSubmitting}
            type="submit"
          >
            ゴルフ場紹介を投稿する
          </Button>
        </Box>
      </form>
    </>
  )
}
