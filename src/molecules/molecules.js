import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import OsgVueExpandBox from 'styleguide_vue/src/molecules/content_display/expand_box/expand_box.vue'
import OsgVueNavbarMenu from 'styleguide_vue/src/molecules/navigation/navbar_menu/navbar_menu.vue'

storiesOf('Molecules/Content_Display/Expand_Box', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({

    components: { OsgVueExpandBox },

    props: {
      isExpanded: {
        default: boolean('is expanded?', false)
      },

      icons: {
        default: object('StateIcons', {
          expanded: 'chevron-up',
          collapsed: 'chevron-down'
        })
      },

      title: {
        default: text('Title', 'Title of the expandable content')
      },

      content: {
        default: text('Expandable content', 'Content in the expandable area')
      },

      buttonAriaLabel: {
        default: text('Buttons Aria Label', 'Button to toggle expandable area')
      }
    },

    data: () => ({
      knobState: false
    }),

    watch: {
      isExpanded: {
        immediate: true,
        handler: function (val) {
          this.knobState = val
        }
      }
    },

    methods: {
      toggleState() {
        this.knobState = !this.knobState
        action('Event: toggle expanded state - ' + this.knobState.toString()  + '')()
      }
    },

    template: `
    <osg-vue-expand-box
      @toggleState="toggleState"
      :isExpanded="knobState"
      :icons="icons"
      :button-aria-label="buttonAriaLabel"
    >
      <template v-slot:title>
        <h2 class="osg-u-heading-3">{{ title }}</h2>
      </template>
      <template v-slot:content>
        <h2>{{ content }}</h2>
      </template>
    </osg-vue-expand-box>
    `
  }),
  {
    info: true
  }
)

storiesOf('Molecules/Navigation/NavbarMenu', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({

    components: { OsgVueNavbarMenu },

    props: {
      isOpen: {
        default: boolean('The headers menu is open', false)
      },

      text: {
        default: text('Content', 'Custom content goes here.')
      }
    },

    watch: {
      isOpen: {
        immediate: true,
        handler: function (val) {
          this.openState = val
        }
      }
    },

    data: () => ({
      openState: false
    }),

    methods: {
      toggleOpenState() {
        this.openState = !this.openState
      }
    },

    template: `
    <osg-vue-navbar-menu
      @navbarMenuClicked="toggleOpenState"
      :is-open="openState"
      aria-label="Main menu"
    >
      <p>{{ text }}</p>
    </osg-vue-navbar-menu>
    `
  }),
  {
    info: true
  }
)
