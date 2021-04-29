import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Header, HeaderProps } from './Header'

export default {
  title: 'Example/Header',
  component: Header
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

const onLogin = () => {
  console.log('onLogin')
}

const onLogout = () => {
  console.log('onLogout')
}

const onCreateAccount = () => {
  console.log('onCreateAccount')
}

const loginUser = {
  name: '张三'
}

export const LoggedIn = () => (
  <Header
    onLogin={onLogin}
    onLogout={onLogout}
    onCreateAccount={onCreateAccount}
  />
)

export const LoggedOut = () => (
  <Header
    user={loginUser}
    onLogin={onLogin}
    onLogout={onLogout}
    onCreateAccount={onCreateAccount}
  />
)
