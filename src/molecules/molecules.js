import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import OsgVueTrigger from 'styleguide_vue/src/molecules/buttons/trigger/trigger.vue'

storiesOf('Molecules/Buttons/Trigger', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueTrigger },

    props: {
      state: {
        default: boolean('State', false)
      },
      stateIcons: {
        default: object('StateIcons', {
          on: 'toggle-on',
          off: 'toggle-off'
        })
      },
      text: {
        default: text('Content', 'Lorem ipsum')
      }
    },

    data: () => ({
      knobState: false
    }),

    watch: {
      state: {
        immediate: true,
        handler: function (val) {
          this.knobState = val
        }
      }
    },

    methods: {
      toggleState() {
        this.knobState = !this.knobState
        action('Event: toggleState(' + this.knobState.toString()  + ')')()
      }
    },

    template: '<osg-vue-trigger @toggleState="toggleState" :state="knobState" :state-icons="stateIcons" :text="text" />'
  }));
