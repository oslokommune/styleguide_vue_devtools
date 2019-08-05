import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import OsgVueButton from 'styleguide_vue/src/atoms/buttons/button/button.vue'

import docVueAlert from './docs/messages/alert/alert.md'
import OsgVueAlert from 'styleguide_vue/src/organisms/messages/alert/alert.vue'
import OsgVueHero from 'styleguide_vue/src/organisms/navigation/hero/hero.vue'
import OsgVueCallToAction from 'styleguide_vue/src/organisms/navigation/call_to_action/call_to_action.vue'
import OsgVueCard from 'styleguide_vue/src/organisms/cards/card/card.vue'

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
      :is-open="openState"
      :icon="icon"
      :button-aria-label="buttonAriaLabel"
      :button-color="buttonColor"
      alert-aria-labelled-by="my-id-1"
      alert-aria-described-by="my-id-2"
    >
      <template v-slot>
        <h2>Open alert</h2>
      </template>

      <template v-slot:alertContent>
        <h3 id='my-id-1'>{{ title }}</h3>
        <p id='my-id-2'>{{ content }}</p>
      </template>
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

storiesOf('Organisms/Navigation/CallToAction', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueCallToAction },
    props: {
      text: {
        default: text('Content', 'Custom content goes here.')
      },

      imageUrl: {
        default: text('Default Image Url', 'https://picsum.photos/960/540/?random')
      },

      imageCaption: {
        default: text('Image Caption (with image)', 'Lorem ipsum dolor sit amet')
      }
    },

    template: `
    <osg-vue-call-to-action
      :image-url="imageUrl"
      :image-caption="imageCaption"
      image-sr-description="Descriptive text for screen readers"
    >
      {{ text }}
    </osg-vue-call-to-action>
    `
  }),
  {
    info: true
  }
)

storiesOf('Organisms/Navigation/CallToAction', module)
  .addDecorator(withKnobs)
  .add('With Button', () => ({
    components: { OsgVueCallToAction, OsgVueButton },

    template: `
    <osg-vue-call-to-action
      image-url="https://picsum.photos/960/540/?random"
      image-sr-description="Screen reader text"
    >
      <h2 class="osg-u-heading-3 osg-u-padding-bottom-1">
        Some Title
      </h2>
      <p class="osg-u-text-5 osg-u-padding-bottom-4">
        An ingress with more information
      </p>
      <osg-vue-button
        color="green-dark"
      >
        Button text
      </osg-vue-button>
    </osg-vue-call-to-action>
    `
  }),
  {
    info: true
  }
)

storiesOf('Organisms/Cards/Card', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueCard },
    props: {
      isLink: {
        default: boolean('Link Card', false)
      },

      hasAnimation: {
        default: boolean('Animates', false)
      },

      text: {
        default: text('Content', 'Custom content goes here.')
      },

      imageUrl: {
        default: text('Default Image Url', 'https://picsum.photos/960/540/?random')
      },

      stateText: {
        default: text('State text', '')
      },

      searchResult: {
        default: text('Search result text', '')
      }
    },

    template: `
    <osg-vue-card
      :url="isLink ? '#' : null"
      :search-result="searchResult"
      :search-result-url="searchResult ? '#' : null"
      :has-animation="hasAnimation"
      :state-text="stateText"
      :image-url="imageUrl"
      image-sr-description="Descriptive text for screen readers"
    >
      <p>{{ text }}</p>
    </osg-vue-card>
    `
  }),
  {
    info: true
  }
)
