import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import docVueAlert from './docs/messages/alert/alert.md'
import OsgVueAlert from 'styleguide_vue/src/organisms/messages/alert/alert.vue'
import OsgVueHero from 'styleguide_vue/src/organisms/navigation/hero/hero.vue'
import OsgVueShapeHero from 'styleguide_vue/src/organisms/navigation/shape_hero/shape_hero.vue'

storiesOf('Organisms/Messages/Alert', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueAlert },

    props: {
      isOpen: {
        default: boolean('Is open?', true)
      },

      icon: {
        default: text('close', 'x')
      },

      title: {
        default: text('Title', 'Title of the alert box')
      },

      content: {
        default: text('Alert content', 'Content in the alert box')
      },

      buttonAriaLabel: {
        default: text('Buttons Aria Label', 'Button to close the alert')
      },

      buttonColor: {
        default: select('Color', ['blue-dark', 'green-dark', 'green-light', 'red', 'yellow'], 'yellow')
      },

      alertAriaLabelledBy: {
        default: null
      },

      alertAriaDescribedBy: {
        default: null
      }
    },

    data: () => ({
      openState: true
    }),

    watch: {
      isOpen: {
        immediate: true,
        handler: function (val) {
          this.openState = val
        }
      }
    },

    methods: {
      toggleAlert() {
        this.openState = !this.openState
        action('Event: open alert - ' + this.openState.toString()  + '')()
      }
    },

    template: `
    <osg-vue-alert
      @toggleAlert="toggleAlert"
      :isOpen="openState"
      :icon="icon"
      :button-aria-label="buttonAriaLabel"
      :buttonColor="buttonColor"
      :alertAriaLabelledBy="alertAriaLabelledBy"
      :alertAriaDescribedBy="alertAriaDescribedBy"
    >
      <template v-slot>
        <h2>Open alert</h2>
      </template>

      <template v-slot:alertContent>
        <h3 id='my-id-1'>{{ title }}</h3>
        <p id='my-id-2'>{{ content }}</p>
      </template>
      <div class="osg-alert__overlay">
        <div class="osg-alert__overlay-top">
          <div class="osg-alert__white-space"></div>
        </div>
        <div class="osg-alert__content osg-content">

        </div>
      </div>
    </osg-vue-alert>
    `
  }),
  {
    info: {
      summary: docVueAlert
    }
  }
)

storiesOf('Organisms/Navigation/Hero', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueHero },
    props: {
      isCircle: {
        default: boolean('Circular Shape/Image', true)
      },

      isLink: {
        default: boolean('Link Hero', false)
      },

      contentPosition: {
        default: select('Position of content (mobile and up)', ['right', 'left', 'top', 'bottom'])
      },

      contentPositionTablet: {
        default: select('Position of content (tablet and up)', ['right', 'left'])
      },

      text: {
        default: text('Content', 'Typically there would be a heading and an ingress in this area')
      },

      imageUrl: {
        default: text('Default Image Url', 'https://picsum.photos/600/600/?random')
      },

      imageCaption: {
        default: text('Image Caption', '')
      },
    },

    template: `
    <osg-vue-hero
      :url="isLink ? '#' : null"
      :is-circle="isCircle"
      :content-position="contentPosition"
      :content-position-tablet="contentPositionTablet"
      :image-url="imageUrl"
      :image-caption="imageCaption"
      image-sr-description="Descriptive text for screen readers"
    >
      {{ text }}
    </osg-vue-hero>
    `
  }),
  {
    info: true
  }
)

storiesOf('Organisms/Navigation/ShapeHero', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueShapeHero },
    props: {
      isCircle: {
        default: boolean('Circular Image', false)
      },

      text: {
        default: text('Content', 'You can put any content in this area.')
      },

      imageUrl: {
        default: text('Default Image Url', 'https://picsum.photos/320/320/?random')
      },

      imageCaption: {
        default: text('Image Caption', '')
      },
    },

    template: `
    <osg-vue-shape-hero
      :is-circle="isCircle"
      :image-url="imageUrl"
      :image-caption="imageCaption"
      image-sr-description="Descriptive text for screen readers"
    >
      {{ text }}
    </osg-vue-shape-hero>
    `
  }),
  {
    info: true
  }
)
