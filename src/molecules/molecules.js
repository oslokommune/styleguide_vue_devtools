import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import OsgVueExpandBox from 'styleguide_vue/src/molecules/content_display/expand_box/expand_box.vue'
import OsgVueMenu from 'styleguide_vue/src/molecules/navigation/menu/menu.vue'

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

  storiesOf('Molecules/Menu/Menu', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({

    components: { OsgVueMenu },

    props: {
      isOpen: {
        default: boolean('is opened?', false)
      },

      menuText: {
        default: text('button text', 'Menu')
      },

      menuTextClose: {
        default: text('close button text', 'Close')
      }
    },

    data: () => ({
      knobState: false
    }),

    watch: {
      isOpen: {
        immediate: true,
        handler: function (val) {
          this.knobState = val
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
      :isOpen="knobState"
      :menu-text="menuText"
      :menu-text-close="menuTextClose"
    >
      <template v-slot:content>
      </template>
      <template v-slot:otherContent>
        <div class="osg-menu__content">
          <a href="#">Link 0</a>
          <a href="#">Link 1</a>
        </div>
      </template>
    </osg-vue-menu>
    `
  }),
  {
    info: true
  })
)
