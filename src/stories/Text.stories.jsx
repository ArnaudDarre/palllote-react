import React from 'react'

import { Grid } from '../lib/components/Grid'
import { Text } from '../lib/components/Text'

export default {
  title: 'Utilities/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: { type: 'text' } }
  }
}

const Template = (args) => <Text {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Text'
}

export const Variant = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper spacing={2} alignItems="baseline">
      <Grid item><Text variant="h1">h1</Text></Grid>
      <Grid item><Text variant="h2">h2</Text></Grid>
      <Grid item><Text variant="h3">h3</Text></Grid>
      <Grid item><Text variant="h4">h4</Text></Grid>
      <Grid item><Text variant="h5">h5</Text></Grid>
      <Grid item><Text variant="h6">h6</Text></Grid>
    </Grid>
    <Grid item wrapper spacing={2} alignItems="baseline">
      <Grid item><Text variant="subtitle">Subtitle</Text></Grid>
      <Grid item><Text variant="body">Body</Text></Grid>
      <Grid item><Text variant="caption">Caption</Text></Grid>
      <Grid item><Text variant="overline">Overline</Text></Grid>
    </Grid>
  </Grid>
)

export const Align = () => (
  <Grid wrapper spacing={2} direction="column">
    <Grid item><Text align="left" className="w-100">Left</Text></Grid>
    <Grid item><Text align="center" className="w-100">Center</Text></Grid>
    <Grid item><Text align="right" className="w-100">Right</Text></Grid>
    <Grid item><Text align="justify" className="w-100">Justify</Text></Grid>
  </Grid>
)

export const Weight = () => (
  <Grid wrapper spacing={2}>
    <Grid item><Text weight="light">Light</Text></Grid>
    <Grid item><Text weight="regular">Regular</Text></Grid>
    <Grid item><Text weight="bold">Bold</Text></Grid>
  </Grid>
)

export const Transform = () => (
  <Grid wrapper spacing={2}>
    <Grid item><Text transform="none">None</Text></Grid>
    <Grid item><Text transform="capitalize">Capitalize</Text></Grid>
    <Grid item><Text transform="uppercase">Uppercase</Text></Grid>
    <Grid item><Text transform="lowercase">Lowercase</Text></Grid>
    <Grid item><Text transform="initial">Initial</Text></Grid>
    <Grid item><Text transform="inherit">Inherit</Text></Grid>
  </Grid>
)

export const Underline = () => (
  <Text underline>Underline</Text>
)

export const Italic = () => (
  <Text italic>Italic</Text>
)

export const Code = () => (
  <Text code>Code</Text>
)

export const Color = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper spacing={2}>
      <Grid item><Text color="default">Default</Text></Grid>
      <Grid item><Text color="alt">Alt</Text></Grid>
      <Grid item><Text color="disabled">Disabled</Text></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item className="fill--white"><Text color="contrast">Contrast</Text></Grid>
      <Grid item className="fill--white"><Text color="contrastAlt">Contrast alt</Text></Grid>
      <Grid item className="fill--white"><Text color="contrastDisabled">Contrast disabled</Text></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Text color="primary">Primary</Text></Grid>
      <Grid item><Text color="secondary">Secondary</Text></Grid>
      <Grid item><Text color="highlight">Highlight</Text></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Text color="success">Success</Text></Grid>
      <Grid item><Text color="info">Info</Text></Grid>
      <Grid item><Text color="warning">Warning</Text></Grid>
      <Grid item><Text color="error">Error</Text></Grid>
    </Grid>
  </Grid>
)
