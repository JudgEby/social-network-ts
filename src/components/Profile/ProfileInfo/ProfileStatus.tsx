import React, { useState } from 'react'
import { useEffect } from 'react'
import { KeyboardEvent } from 'react'
import styles from './ProfileInfo.module.css'

type ProfileStatusType = {
  status: string
  updateUserStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusType) => {
  const { status, updateUserStatus } = props

  const [editMode, setEditMode] = useState(false)
  const [inputText, setInputText] = useState(status)

  useEffect(() => setInputText(status), [status])

  const onPressEnter = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter') {
      updateUserStatus(inputText)
      setEditMode(false)
    }
  }

  return (
    <div className={styles.status}>
      {editMode || <div onDoubleClick={() => setEditMode(true)}>{status}</div>}
      {editMode && (
        <input
          type='text'
          autoFocus={true}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onBlur={() => {
            setEditMode(false)
            setInputText(status)
          }}
          onKeyDown={onPressEnter}
        />
      )}
    </div>
  )
}

export default ProfileStatus
