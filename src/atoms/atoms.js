import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import OsgVueButton from 'styleguide_vue/src/atoms/buttons/button/button.vue'
import OsgVueIcon from 'styleguide_vue/src/atoms/icons/icon/icon.vue'

storiesOf('Atoms/Buttons/Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueButton },
    props: {
      text: {
        default: text('Content', 'Lorem ipsum')
      },
      attrs: {
        default: object('Attributes', {'id': 'test', 'type': 'button'})
      }
    },
    data: () => ({
      click: action('Event: click')
    }),
    template: `<osg-vue-button @click="click" :attrs="attrs">{{ text }}</osg-vue-button>`
  }));

storiesOf('Atoms/Icons/Icon', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueIcon },
    props: {
      text: {
        default: text('Icon', 'coffee')
      }
    },
    template: `<osg-vue-icon :icon="text" />`
  }));
