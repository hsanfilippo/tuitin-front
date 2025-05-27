import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  usePostFollowMutation,
  usePostUnfollowMutation,
  useGetIsFollowingQuery
} from '../../services/api'

import EditModal from '../EditModal'

import {
  Avatar,
  Banner,
  Container,
  Content,
  Button,
  Name,
  Username
} from './styles'

type Props = {
  bannerUrl: string
  avatarUrl: string
  name: string
  pageUsername: string
}

const Profile = ({ bannerUrl, avatarUrl, name, pageUsername }: Props) => {
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
      <Container>
        <Banner bannerUrl={bannerUrl}>
          <Avatar src={avatarUrl} alt="Avatar" />
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
          <Name>{username}</Name>
          <Username>@{username}</Username>
        </Content>
        <Content>
          <h4>Posts</h4>
        </Content>
        {showEditModal && <EditModal onClose={() => setShowEditModal(false)} />}
      </Container>
    </>
  )
}

export default Profile
