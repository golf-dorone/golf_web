import { useForm, SubmitHandler } from 'react-hook-form'
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom'
import { onSignUp, SignUpAuthType } from '../../../shared/utils/authAction'
import { validation } from '../../../shared/utils/validation'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  useColorModeValue,
  Flex,
  Stack,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react'
import { FaHandPointRight, FaDove } from 'react-icons/fa'
import { SharedButton } from 'shared/components/SharedButton'

export const SignUp = () => {
  const navigate = useNavigate()
  const [isAuthorized] = useOutletContext<[boolean]>()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
  } = useForm<SignUpAuthType>({ criteriaMode: 'all' })
  const password = watch('password', '')

  const onSubmit: SubmitHandler<SignUpAuthType> = (data) => {
    void onSignUp(data).then(() => {
      navigate('/auth/signin')
    })
  }

  if (isAuthorized) return <Navigate to="/auth/admin" />

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>管理者新規登録</Heading>
              <Text fontSize={'md'} color={'gray.600'}>
                カスタマーページは{' '}
                <Link color={'blue.400'} href="/customer">
                  こちら
                </Link>{' '}
                <FaHandPointRight />
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              // bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl textAlign="center">
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
                  {/* <input
              {...register('email', {
                required: validation.required,
                pattern: validation.pattern.email,
              })}
                errors={errors}
            /> */}
                </FormControl>
                <FormControl textAlign="center">
                  <FormLabel htmlFor="password" textAlign="center">
                    パスワード
                  </FormLabel>
                  <Input
                    id="password"
                    placeholder="password"
                    type="password"
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
                <FormControl textAlign="center">
                  <FormLabel htmlFor="passwordConfirmation" textAlign="center">
                    パスワード（確認）
                  </FormLabel>
                  <Input
                    id="passwordConfirmation"
                    placeholder="password"
                    type="password"
                    width="auto"
                    {...register('passwordConfirmation', {
                      required: validation.required,
                      pattern: validation.pattern.password,
                    })}
                  />
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>
                <Stack spacing={5}>
                  <Stack
                    // direction={{ base: 'row', sm: 'row' }}
                    align={'center'}
                    // justify={'space-between'}
                  >
                    <Link color={'blue.400'} href="/auth/signin">
                      サインインはこちら
                    </Link>
                  </Stack>
                  <Box textAlign="center">
                    <SharedButton
                      icon={<FaDove />}
                      label={'新規登録'}
                      variant={'outline'}
                      isLeftIcon={true}
                      type="submit"
                      isLoading={isSubmitting}
                    />
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </>
  )
}
