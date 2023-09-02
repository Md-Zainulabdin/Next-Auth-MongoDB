import Header from '@/app/components/Header/page'
import ProfileCard from '@/app/components/ProfileCard/page'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='w-full h-screen'>
      <Header value={'Your Profile'}/>
      <ProfileCard/>
    </div>
  )
}

export default ProfilePage