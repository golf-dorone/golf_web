import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
  FormLabel,
  FormControl,
  Input,
  Container,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { CreateInquiryInput, useCreateInquiryMutation } from 'graphql/generated'
import { FaEdit } from 'react-icons/fa'
import { SharedButton } from 'shared/components/SharedButton'
import { validation } from 'shared/utils/validation'

export const InquiryForm = () => {
  const [createInquiry] = useCreateInquiryMutation({
    refetchQueries: ['inquiry'],
  })
  const navigate = useNavigate()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<CreateInquiryInput>({ criteriaMode: 'all' })

  const onSubmit: SubmitHandler<CreateInquiryInput> = (params) => {
    void createInquiry({ variables: { input: params } }).then(() => {
      navigate('/customer')
    })
  }

  return (
    <>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" fontSize={'12px'}>
            トップページ
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="inquiry_form" fontSize={'12px'}>
            お問い合わせ
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxW={'7xl'}>
          <FormControl textAlign="center">
            <FormLabel htmlFor="title" textAlign="center" fontWeight="bold">
              　問い合わせ要件
            </FormLabel>
            <Input
              placeholder="例：ゴルフ場の撮影について"
              width="300px"
              size="md"
              {...register('params.title', {
                required: validation.required,
              })}
            />
            <FormLabel htmlFor="title" textAlign="center" fontWeight="bold">
              　問い合わせ内容
            </FormLabel>
            <Input
              placeholder="例：ドローン撮影をお願いします"
              width="300px"
              height="200px"
              size="md"
              {...register('params.description', {
                required: validation.required,
              })}
            />
            <FormLabel htmlFor="title" textAlign="center" fontWeight="bold">
              　名前
            </FormLabel>
            <Input
              placeholder="例：山田太郎"
              width="auto"
              size="md"
              {...register('params.name', {
                required: validation.required,
              })}
            />
            <FormLabel htmlFor="title" textAlign="center" fontWeight="bold">
              　連絡先
            </FormLabel>
            <Input
              placeholder="例：090-XXXX-XXXX"
              width="auto"
              size="md"
              {...register('params.contact', {
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
