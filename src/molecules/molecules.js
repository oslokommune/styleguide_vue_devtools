import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import OsgVueTrigger from 'styleguide_vue/src/molecules/buttons/trigger/trigger.vue'

storiesOf('Molecules/Buttons/Trigger', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueTrigger },

    data: () => ({
      state: false,
      stateIcons: object('StateIcons', {
        on: 'toggle-on',
        off: 'toggle-off'
      }),
      text: text('Content', 'Lorem ipsum')
    }),

    computed: {
      knobState() {
        return boolean('State', this.state)
      }
    },

    methods: {
      toggleState() {
        this.state = !this.state
        action('Event: toggleState(' + this.state.toString()  + ')')()
      }
    },

    template: '<osg-vue-trigger @toggleState="toggleState" :state="knobState" :state-icons="stateIcons" :text="text" />'
  }));
