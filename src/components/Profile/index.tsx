import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  usePostFollowMutation,
  usePostUnfollowMutation,
  useGetIsFollowingQuery,
  useGetUserDataQuery
} from '../../services/api'

import EditModal from '../EditModal'

import {
  Avatar,
  Banner,
  Container,
  Content,
  Button,
  Name,
  Username,
  StockBanner,
  StockAvatar
} from './styles'

const Profile = () => {
  // Estados locais
  const [localFollowing, setLocalFollowing] = useState<boolean | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)

  // Desestruturacao da store
  const userLogedIn = localStorage.getItem('userLogedIn')
  const { username } = useParams<{ username: string }>()
  console.log(`Voce esta visitando o perfil de: ${username}`)

  // Alias dos Hooks
  const [followUser] = usePostFollowMutation()
  const [unfollowUser] = usePostUnfollowMutation()
  const { data } = useGetIsFollowingQuery(username!)
  const { data: userData } = useGetUserDataQuery(username!)

  const handleFollowToggle = async () => {
    if (!username || localFollowing === null) return

    try {
      if (localFollowing) {
        await unfollowUser(username)
        setLocalFollowing(false)
      } else {
        await followUser(username).unwrap()
        setLocalFollowing(true)
      }
    } catch (error) {
      console.error('Erro ao seguir/deixar de seguir:', error)
    }
  }

  const isOwnProfile = userLogedIn === username

  useEffect(() => {
    if (data && localFollowing === null) {
      setLocalFollowing(data.is_following)
    }
  }, [data])

  return (
    <>
      {userData ? (
        <Container>
          <Banner bannerUrl={`${userData.profile?.cover}`} className="no-image">
            {userData.profile?.avatar === '' ? (
              <StockAvatar>
                {userData.username?.charAt(0).toUpperCase()}
              </StockAvatar>
            ) : (
              <Avatar src={`${userData.profile?.avatar}`} />
            )}
          </Banner>
          <Content>
            {isOwnProfile ? (
              <Button onClick={() => setShowEditModal(true)}>
                Editar perfil
              </Button>
            ) : (
              <Button onClick={handleFollowToggle}>
                {localFollowing ? 'Seguindo' : 'Seguir'}
              </Button>
            )}
            {userData.profile?.name === '' ? (
              <Name>{userData.username}</Name>
            ) : (
              <Name>{userData.profile?.name}</Name>
            )}
            <Username>@{userData.username}</Username>
          </Content>
          <Content>
            <h4>Posts</h4>
          </Content>
          {showEditModal && (
            <EditModal onClose={() => setShowEditModal(false)} />
          )}
        </Container>
      ) : (
        <h3>carregando...</h3>
      )}
    </>
  )
}

export default Profile
