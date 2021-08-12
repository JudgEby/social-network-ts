import React from 'react'
import styles from './ProfileInfo.module.css'
import { UserProfileType } from '../../../redux/profile-reducer'
import Preloader from '../../common/Preloader/Preloader'

type ProfileInfoType = UserProfileType

const ProfileInfo = (props: ProfileInfoType) => {
  const {
    userId,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    contacts: {
      github,
      vk,
      facebook,
      instagram,
      twitter,
      website,
      youtube,
      mainLink,
    },
    photos: { small, large },
  } = props

  if (!userId) {
    return <Preloader />
  }

  const socials = [
    github && (
      <span key={'Github'} className={styles.socials}>
        Github: {github}
      </span>
    ),
    vk && (
      <span key={'VK'} className={styles.socials}>
        VK: {vk}
      </span>
    ),
    facebook && (
      <span key={'Facebook'} className={styles.socials}>
        Facebook: {facebook}
      </span>
    ),
    instagram && (
      <span key={'Instagram'} className={styles.socials}>
        Instagram: {instagram}
      </span>
    ),
    twitter && (
      <span key={'Twitter'} className={styles.socials}>
        Twitter: {twitter}
      </span>
    ),
    website && (
      <span key={'Site'} className={styles.socials}>
        Site: {website}
      </span>
    ),
    youtube && (
      <span key={'Youtube'} className={styles.socials}>
        Youtube: {youtube}
      </span>
    ),
    mainLink && (
      <span key={'MainLink'} className={styles.socials}>
        MainLink: {mainLink}
      </span>
    ),
  ]

  return (
    <div>
      <img
        src={
          large ||
          small ||
          'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
        }
        alt='lake'
      />
      <h2>{fullName}</h2>
      {lookingForAJob && (
        <div>
          <span className={styles.lookingForAJob}>Ищу работу</span>
          <span className={styles.lookingForAJobDescription}>
            {lookingForAJobDescription}
          </span>
        </div>
      )}
      <div>
        <span className={styles.contactsLabel}>Контакты:</span>
        {socials}
      </div>
    </div>
  )
}

export default ProfileInfo
