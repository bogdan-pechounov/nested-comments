import { useSession, signIn, signOut } from 'next-auth/react'
import { Button, Navbar } from 'react-bootstrap'

export default function SignInButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Navbar.Text className='me-1'>{session.user?.email}</Navbar.Text>
        <Button variant='primary' onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    )
  }
  return (
    <Button variant='primary' onClick={() => signIn()}>
      Sign in
    </Button>
  )
}
