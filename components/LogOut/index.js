import { useEffect, useContext } from 'react'
import { makeRequest } from '../../utils/RequestUtils'
import Router from 'next/router'
import UserContext from '../../context/UserContext'

const LogOut = () => {
  const { setAuthenticated, setEmail } = useContext(UserContext)

  useEffect(() => {
    makeRequest({
      url: '/api/sessions',
      method: 'delete'
    }).then(
      () => {
        setAuthenticated(false)
        setEmail(null)
        Router.push('/users/sign_in')
      },
      () => {
        Router.push('/users/sign_in')
      }
    )
  }, [])

  return <></>
}

export default LogOut
