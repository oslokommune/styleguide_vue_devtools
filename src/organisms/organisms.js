import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import docVueAlert from './docs/messages/alert/alert.md'
import OsgVueAlert from 'styleguide_vue/src/organisms/messages/alert/alert.vue'

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
);
