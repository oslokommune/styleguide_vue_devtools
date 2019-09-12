import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import OsgVueExpandBox from 'styleguide_vue/src/molecules/content_display/expand_box/expand_box.vue'
import OsgVueInfoList from 'styleguide_vue/src/molecules/data_display/info_list/info_list.vue'
import OsgVueNavbarMenuServices from 'styleguide_vue/src/molecules/navigation/navbar_menu_services/navbar_menu_services.vue'

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

    components: { OsgVueNavbarMenuServices },

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
      navbarMenuServicesClicked() {
        this.knobState = !this.knobState
        action('Event: navbarMenuServices opened state - ' + this.knobState.toString()  + '')()
      }
    },

    template: `
    <osg-vue-navbar-menu-services
     @navbarMenuServicesClicked="navbarMenuServicesClicked"
     :isExpanded="knobState"
     :hasOverlay="knobOverlayState"
     :menu-text="menuText"
     srMenuTextClose="Close menu"
    >
      {{ menuListExpanded }}
    </osg-vue-navbar-menu-services>
    `
  }),
  {
    info: true
  })
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

storiesOf('Molecules/Data_display/Info_list', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({

    components: { OsgVueInfoList }, 

    props: {
      calendarTitle: {
        default: text('Calendar title', 'Praesent 22. sed'),
      },

      calendarText: {
        default: text('Calendar link text', 'Vestibulum varius nisi'),
      },

      calendarUrl: {
        default: text('Calendar url link'),
      },

      locationTitle: {
        default: text('Location title', 'Fringilla Mattis Tortor'),
      },

      locationText: {
        default: text('Location link text', 'Aliquam erat volutpat'),
      },

      locationUrl: {
        default: text('Location url link'),
      }
    },

    template: `
    <osg-vue-info-list
      :calendar-title="calendarTitle"
      :calendar-text="calendarText"
      :calendar-url="calendarUrl"
      :location-title="locationTitle"
      :location-text="locationText"
      :location-url="locationUrl"
    >
    </osg-vue-info-list>
    `
  }),
  {
    info: true
  }
)