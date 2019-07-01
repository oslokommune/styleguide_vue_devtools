import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import OsgVueAlert from 'styleguide_vue/src/organisms/messages/alert/alert.vue'

storiesOf('Organisms/Messages/Alert', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueAlert },

    props: {
      isOpen: {
        default: boolean('Is open?', true)
      },

      icons: {
        default: object('StateIcons', {
          close: 'x'
        })
      },

      title: {
        default: text('Title', 'Title of the alert box')
      },

      content: {
        default: text('Alert content', 'Content in the alert box')
      },

      buttonAriaLabel: {
        default: text('Buttons Aria Label', 'Button to close the alert')
      }
    },

    watch: {
      isOpen: {
        immediate: true,
        handler: function (val) {
          this.knobState = val
        }
      }
    },

    methods: {
      openAlert() {
        this.knobState = !this.knobState
        action('Event: open alert - ' + this.knobState.toString()  + '')()
      }
    },

    template: `
    <osg-vue-alert
      @openAlert="openAlert"
      :isOpen="knobState"
      :icons="icons"
      :button-aria-label="buttonAriaLabel"
    >
      <template v-slot:title>
        <h3>{{ title }}</h3>
      </template>
      <template v-slot:content>
        <p>{{ content }}</p>
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
  }));
