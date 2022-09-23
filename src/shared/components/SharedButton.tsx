import { Stack, Button } from '@chakra-ui/react'

export const SharedButton = (props: any) => {
  const { icon, label, variant, isLeftIcon, onClick, isLoading, type } = props
  // solid or outline
  return (
    <Stack>
      {isLeftIcon ? (
        <Button
          leftIcon={icon}
          colorScheme="teal"
          variant={variant}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}
          onClick={onClick}
          isLoading={isLoading}
          type={type}
        >
          {label}
        </Button>
      ) : (
        <Button
          rightIcon={icon}
          colorScheme="teal"
          variant={variant}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}
          onClick={onClick}
          isLoading={isLoading}
          type={type}
        >
          {label}
        </Button>
      )}
    </Stack>
  )
}
