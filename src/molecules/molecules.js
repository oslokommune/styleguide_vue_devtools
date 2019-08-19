import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import OsgVueExpandBox from 'styleguide_vue/src/molecules/content_display/expand_box/expand_box.vue'
import OsgVueMenu from 'styleguide_vue/src/molecules/navigation/navbar_menu_services/navbar_menu_services.vue'

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
  },

  storiesOf('Molecules/Navbar_menu_services/Navbar_menu_services', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({

    components: { OsgVueMenu },

    props: {
      isExpanded: {
        default: boolean('is opened?', false)
      },

      hasOverlay: {
        default: boolean('has overlay', false)
      },

      menuText: {
        default: text('button text', 'Menu')
      },

      menuListExpanded: {
        default: text('Expandable content', 'Content in the expandable area')
      }
    },

    data: () => ({
      knobState: false,
      knobOverlayState: false
    }),

    watch: {
      isExpanded: {
        immediate: true,
        handler: function (val) {
          this.knobState = val
        }
      },
      hasOverlay: {
        immediate: true,
        handler: function (val) {
          this.knobOverlayState = val
        }
      }
    },

    methods: {
      toggleState() {
        this.knobState = !this.knobState
        action('Event: toggle opened state - ' + this.knobState.toString()  + '')()
      }
    },

    template: `
    <osg-vue-menu
     @toggleState="toggleState"
     :isExpanded="knobState"
     :hasOverlay="knobOverlayState"
     :menu-text="menuText"
   >
     {{ menuListExpanded }}
   </osg-vue-menu>
    `
  }),
  {
    info: true
  })
)
