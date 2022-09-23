import { validation } from '../../../shared/utils/validation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { onSignIn, AuthType } from '../../../shared/utils/authAction'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
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
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>管理者ページへログイン</Heading>
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
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}
            >
              <Stack spacing={4}>
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
                <Stack spacing={5}>
                  <Stack
                    // direction={{ base: 'row', sm: 'row' }}
                    align={'center'}
                    // justify={'space-between'}
                  >
                    <Link color={'blue.400'} href="/auth/signup">
                      新規登録はこちら
                    </Link>
                  </Stack>
                  <Box alignItems="center">
                    <SharedButton
                      icon={<FaDove />}
                      label={'サインイン'}
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
