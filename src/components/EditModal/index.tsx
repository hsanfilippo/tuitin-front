import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import {
//   useUpdateProfileMutation,
//   useGetProfileQuery
// } from '../../services/usersApi'

import {
  Modal,
  Overlay,
  ModalContainer,
  InputItem,
  ButtonsContainer
} from './styles'

type EditProfileModalProps = {
  onClose: () => void
}

const EditModal = ({ onClose }: EditProfileModalProps) => {
  const { username } = useParams<{ username: string }>()
  // const { data: profile } = useGetProfileQuery(username!)
  // const [updateProfile] = useUpdateProfileMutation()

  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [avatar, setAvatar] = useState('')
  const [cover, setCover] = useState('')

  // useEffect(() => {
  //   if (profile) {
  //     setName(profile.name || '')
  //     setBio(profile.bio || '')
  //     setBirthdate(profile.birthdate || '')
  //   }
  // }, [profile])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // try {
    //   await updateProfile({
    //     name,
    //     bio,
    //     birthdate
    //   })
    //   onClose()
    // } catch (err) {
    //   console.error('Erro ao atualizar perfil:', err)
    // }
  }

  return (
    <Overlay>
      <ModalContainer>
        <Modal>
          <h2>Editar Perfil</h2>
          <form onSubmit={handleSubmit}>
            <InputItem>
              <label>Imagem de fundo</label>
              <input value={cover} onChange={(e) => setName(e.target.value)} />
            </InputItem>
            <InputItem>
              <label>Imagem de perfil</label>
              <input value={avatar} onChange={(e) => setName(e.target.value)} />
            </InputItem>
            <InputItem>
              <label>Nome</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </InputItem>
            <InputItem>
              <label>Nome de usuário</label>
              <input
                value={username}
                onChange={(e) => setName(e.target.value)}
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
