// components/LogoutButton.js
import { useAuth } from '../context/AuthContext'

export default function LogoutButton() {
  const { signOut } = useAuth()

  return (
    <button onClick={signOut}>
      Logout
    </button>
  )
}