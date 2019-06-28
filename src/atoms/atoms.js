import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object, boolean, select } from '@storybook/addon-knobs'
import OsgVueButton from 'styleguide_vue/src/atoms/buttons/button/button.vue'
import docVueButton from './docs/button.md';
import OsgVueIcon from 'styleguide_vue/src/atoms/icons/icon/icon.vue'

storiesOf('Atoms/Buttons/Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueButton },
    props: {
      text: {
        default: text('Content', 'Lorem ipsum')
      },

      isOutline: {
        default: boolean('is outline?', false)
      },
      color: {
        default: select('Color', ['blue-dark', 'green-dark', 'green-light', 'red', 'yellow'], 'blue-dark')
      }
    },
    data: () => ({
      click: action('Event: click')
    }),
    template: `
    <osg-vue-button
      @click="click"
      :isOutline="isOutline"
      :color="color"
    >
      {{ text }}
    </osg-vue-button>
    `
  }),
  {
    notes: { markdown: docVueButton },
  }
);

storiesOf('Atoms/Icons/Icon', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueIcon },
    props: {
      iconName: {
        default: select('Icon name', [
          '24h',
          'backpack',
          'bike',
          'bus',
          'cafe',
          'calendar',
          'chevron-down',
          'chevron-left',
          'chevron-right',
          'chevron-up',
          'coin-stacks',
          'crane',
          'dog',
          'drone',
          'exclamation-mark-circle',
          'filter',
          'fire-emblem',
          'handicap',
          'house-heart',
          'location-pin',
          'magnifying-glass-big',
          'magnifying-glass-small',
          'menu',
          'minus-sign',
          'museum',
          'park',
          'plus-sign',
          'recycling',
          'restaurant',
          'swingset',
          'toilet',
          'tram',
          'user',
          'water-faucet',
          'x',
          'facebook',
          'instagram',
          'linked-in',
          'twitter',
          'heart-plus'
        ], 'swingset')
      }
    },
    template: `<osg-vue-icon :iconName="iconName" />`
  }));
