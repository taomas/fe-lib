import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

// const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = () => <Button primary={true} label="Button" />

export const Secondary = () => <Button label="Button" />

export const Large = () => <Button size="large" label="Button" />

export const Small = () => <Button size="small" label="Button" />
