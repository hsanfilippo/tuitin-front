import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import {
  Modal,
  Overlay,
  ModalContainer,
  InputItem,
  ButtonsContainer
} from './styles'
import {
  useGetUserDataQuery,
  usePatchUpdateMeMutation
} from '../../services/api'

type EditProfileModalProps = {
  onClose: () => void
}

const EditModal = ({ onClose }: EditProfileModalProps) => {
  const { username } = useParams<{ username: string }>()
  const { data: userData, refetch } = useGetUserDataQuery(username!)
  const [updateProfile] = usePatchUpdateMeMutation()

  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [avatar, setAvatar] = useState('')
  const [cover, setCover] = useState('')
  const [newUsername, setNewUsername] = useState('')

  const [newData, setNewData] = useState({
    username: '',
    profile: {
      avatar: '',
      bio: '',
      birthdate: '',
      cover: '',
      name: ''
    }
  })

  useEffect(() => {
    if (userData) {
      setName(userData.profile?.name || '')
      setBio(userData.profile?.bio || '')
      setBirthdate(userData.profile?.birthdate || '')
      setAvatar(userData.profile?.avatar || '')
      setCover(userData.profile?.cover || '')
      setNewUsername(userData.username || '')
    }
  }, [userData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await updateProfile({
        username: newUsername,
        profile: {
          avatar,
          bio,
          birthdate,
          cover,
          name
        }
      })
      await refetch()
      onClose()
    } catch (err) {
      console.error('Erro ao atualizar perfil:', err)
    }
  }

  return (
    <Overlay>
      <ModalContainer>
        <Modal>
          <h2>Editar Perfil</h2>
          <form onSubmit={handleSubmit}>
            <InputItem>
              <label>Imagem de fundo</label>
              <input value={cover} onChange={(e) => setCover(e.target.value)} />
            </InputItem>
            <InputItem>
              <label>Imagem de perfil</label>
              <input
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </InputItem>
            <InputItem>
              <label>Nome</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </InputItem>
            <InputItem>
              <label>Nome de usuário</label>
              <input
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </InputItem>
            <InputItem>
              <label>Bio</label>
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            </InputItem>
            <InputItem>
              <label>Nascimento</label>
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </InputItem>
            <ButtonsContainer>
              <button type="submit">Salvar</button>
              <button type="button" onClick={onClose}>
                Cancelar
              </button>
            </ButtonsContainer>
          </form>
        </Modal>
      </ModalContainer>
    </Overlay>
  )
}

export default EditModal
