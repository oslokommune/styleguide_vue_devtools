import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object, boolean, select } from '@storybook/addon-knobs'
import OsgVueButton from 'styleguide_vue/src/atoms/buttons/button/button.vue'
import docVueButton from './docs/button.md';
import OsgVueFigure from 'styleguide_vue/src/atoms/decorators/figure/figure.vue'
import OsgVueShape from 'styleguide_vue/src/atoms/decorators/shape/shape.vue'
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
)

storiesOf('Atoms/Decorators/Figure', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueFigure },
    props: {
      url: {
        default: text('Default Image Url', 'https://picsum.photos/1100/900/?random')
      },

      urlMobile: {
        default: text('Mobile Image Url', 'https://picsum.photos/800/600/?random')
      },

      urlTablet: {
        default: text('Tablet Image Url', 'https://picsum.photos/1100/900/?random')
      },

      urlDesktop: {
        default: text('Desktop Image Url', 'https://picsum.photos/1400/800/?random')
      },

      caption: {
        default: text('Image Caption', 'Lorem ipsum dolor sit amet')
      },
    },

    template: `
    <osg-vue-figure
      :url="url"
      :url-mobile="urlMobile"
      :url-tablet="urlTablet"
      :url-desktop="urlDesktop"
      :caption="caption"
      sr-description="Descriptive text for screen readers"
    />
    `
  })
)

storiesOf('Atoms/Decorators/Shape', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueShape },
    props: {
      isCircle: {
        default: boolean('is circle?', false)
      },

      text: {
        default: text('Text in shape (without image)', '')
      },

      imageUrl: {
        default: text('Default Image Url', 'https://picsum.photos/900/900/?random')
      },

      imageUrlMobile: {
        default: text('Mobile Image Url', 'https://picsum.photos/600/600/?random')
      },

      imageUrlTablet: {
        default: text('Tablet Image Url', 'https://picsum.photos/900/900/?random')
      },

      imageUrlDesktop: {
        default: text('Desktop Image Url', 'https://picsum.photos/1200/1200/?random')
      },

      imageCaption: {
        default: text('Image Caption', 'Lorem ipsum dolor sit amet')
      },
    },

    template: `
    <osg-vue-shape
      :is-circle="isCircle"
      :image-url="imageUrl"
      :image-url-mobile="imageUrlMobile"
      :image-url-tablet="imageUrlTablet"
      :image-url-desktop="imageUrlDesktop"
      :image-caption="imageCaption"
      image-sr-description="Descriptive text for screen readers"
    >
      {{ text }}
    </osg-vue-shape>
    `
  })
)

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
  }))
