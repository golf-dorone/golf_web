import { validation } from '../../../shared/utils/validation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { onSignIn, AuthType } from '../../../shared/utils/authAction'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
} from '@chakra-ui/react'

export const SignInForm = () => {
  const navigate = useNavigate()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<AuthType>({ criteriaMode: 'all' })

  const onSubmit: SubmitHandler<AuthType> = (data) => {
    void onSignIn(data).then(() => {
      navigate('/auth/admin')
    })
  }

  const isInvalidEmail = errors.email ? true : false

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={isInvalidEmail} textAlign="center">
          <FormLabel htmlFor="email" textAlign="center">
            メールアドレス
          </FormLabel>
          <Input
            id="email"
            placeholder="email"
            width="auto"
            size="md"
            {...register('email', {
              required: validation.required,
              pattern: validation.pattern.email,
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={isInvalidEmail} textAlign="center">
          <FormLabel htmlFor="password" textAlign="center">
            パスワード
          </FormLabel>
          <Input
            id="password"
            placeholder="password"
            width="auto"
            {...register('password', {
              required: validation.required,
              pattern: validation.pattern.password,
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Box textAlign="center">
          <Button
            mt={4}
            colorScheme="gray"
            isLoading={isSubmitting}
            type="submit"
          >
            Sign In
          </Button>
        </Box>
      </form>
    </>
  )
}
