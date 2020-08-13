import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select, object } from '@storybook/addon-knobs'
import OsgVueButton from 'styleguide_vue/src/atoms/buttons/button/button.vue'
import docVueButton from './docs/button.md';
import OsgVueFigure from 'styleguide_vue/src/atoms/decorators/figure/figure.vue'
import OsgVueShape from 'styleguide_vue/src/atoms/decorators/shape/shape.vue'
import OsgVueIcon from 'styleguide_vue/src/atoms/icons/icon/icon.vue'
import OsgVueCheckbox from 'styleguide_vue/src/atoms/checkbox/checkbox.vue'
import OsgVueDropdown from 'styleguide_vue/src/atoms/dropdown/dropdown.vue'

storiesOf('Atoms/Buttons/Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({

    components: { OsgVueButton },

    props: {
      text: {
        default: text('Content', 'Lorem ipsum')
      },

      isCircle: {
        default: boolean('Circular button', false)
      },

      isOutline: {
        default: boolean('Outlined button?', false)
      },

      color: {
        default: select('Color', ['blue-dark', 'green-dark', 'green-light', 'red', 'yellow'], 'blue-dark')
      }
    },

    data: () => ({
      click: action('Event: click')
    }),

    template: `
    <osg-vue-button
      @click="click"
      :isCircle="isCircle"
      :isOutline="isOutline"
      :color="color"
    >
      {{ text }}
    </osg-vue-button>
    `
  }),
  {
    info: {
      summary: docVueButton
    }
  }
)

storiesOf('Atoms/Decorators/Figure', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({

    components: { OsgVueFigure },

    props: {
      url: {
        default: text('Default Image Url', 'https://picsum.photos/1100/900/?random')
      },

      urlMobile: {
        default: text('Mobile Image Url', 'https://picsum.photos/800/600/?random')
      },

      urlTablet: {
        default: text('Tablet Image Url', 'https://picsum.photos/1100/900/?random')
      },

      urlDesktop: {
        default: text('Desktop Image Url', 'https://picsum.photos/1400/800/?random')
      },

      caption: {
        default: text('Image Caption', 'Lorem ipsum dolor sit amet')
      },
    },

    template: `
    <osg-vue-figure
      :url="url"
      :url-mobile="urlMobile"
      :url-tablet="urlTablet"
      :url-desktop="urlDesktop"
      :caption="caption"
      sr-description="Descriptive text for screen readers"
    />
    `
  }),
  {
    info: true
  }
)

storiesOf('Atoms/Decorators/Shape', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({

    components: { OsgVueShape },

    props: {
      isCircle: {
        default: boolean('Circular Shape/Image', true)
      },

      isLink: {
        default: boolean('Link Shape', false)
      },

      isImage: {
        default: boolean('Image Shape', true)
      },

      text: {
        default: text('Text in shape (without image)', '')
      },

      imageCaption: {
        default: text('Image Caption (with image)', 'Lorem ipsum dolor sit amet')
      }
    },

    template: `
    <osg-vue-shape
      :url="isLink ? '#' : null"
      :is-circle="isCircle"
      :image-url="isImage ? 'https://picsum.photos/900/900/?random': null"
      :image-caption="imageCaption"
      image-sr-description="Descriptive text for screen readers"
    >
      {{ text }}
    </osg-vue-shape>
    `
  }),
  {
    info: true
  }
)

storiesOf('Atoms/Icons/Icon', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({

    components: { OsgVueIcon },

    props: {
      iconName: {
        default: select('Icon name', [
          "24h",
"attachment",
"backpack",
"bike",
"bus",
"cafe",
"calendar",
"camera",
"check",
"check-circle",
"chevron-down",
"chevron-left",
"chevron-right",
"chevron-thin-down",
"chevron-thin-up",
"chevron-up",
"clock",
"close",
"coin-stacks",
"crane",
"cross",
"cross-circle",
"download",
"edit",
"email",
"exclamation-mark-circle",
"exclamation-mark-square",
"expand",
"facebook",
"filter",
"fire-emblem",
"graph",
"grid",
"handicap",
"heart",
"heart-plus",
"home",
"house-heart",
"information",
"instagram",
"language",
"linked-in",
"list",
"location-pin",
"magnifying-glass-big",
"magnifying-glass-small",
"map",
"menu",
"message",
"minimize",
"minus-sign",
"museum",
"neutral",
"new-window",
"park",
"picture",
"plus-sign",
"print",
"question",
"recycling",
"sad",
"save",
"share",
"smile",
"sound-off",
"sound-on",
"swingset",
"table",
"target",
"thumbs-down",
"thumbs-up",
"tickets",
"trail",
"tram",
"twitter",
"user",
"water-faucet",
"wifi"
        ], 'swingset')
      }
    },

    template: `<osg-vue-icon :iconName="iconName" />`
  }),
  {
    info: true
  }
)

storiesOf('Atoms/Checkbox/', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueCheckbox },
    props: {
      disabled: {
        default: boolean('Disabled', false)
      },

      checked: {
        default: boolean('Checked', false)
      },

      label: {
        default: text('Checkbox label', 'Check me!')
      }
    },
    template: `
    <osg-vue-checkbox
      :disabled="disabled"
      :checked="checked"
      :label="label">
    </osg-vue-checkbox>
    `
  }),
  {
    info: true
  }
)

storiesOf('Atoms/Dropdown', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({

    components: { OsgVueDropdown },

    props: {
      id: {
        default: text('Select option', 'dropdown-id')
      },
      name: {
        default: text('Select option', 'dropdown-name')
      },
      disabled: {
        default: boolean('Disabled', false)
      },
      required: {
        default: boolean('Required', false)
      }
    },

    data: () => (
      {
      selectOptions: object('Select Options',
        [
          { "name": "None",
            "value": "0"
          },
          {
            "name": "Option 1",
            "value": "1"
          },
          {
            "name": "Option 2",
            "value": "2"
          },
          {
            "name": "Option 3 This is a long option that could be a bit longer",
            "value": "3"
          },
          {
            "name": "Option 5",
            "value": "4"
          }
        ]
      ),
      selected: text('Pre-select value', '1')

    }),

    template: `
      <osg-vue-dropdown
        :id="id"
        :selectOptions="selectOptions"
        :name="name"
        :disabled="disabled"
        :required="required"
        v-model="selected">
      </osg-vue-dropdown>
    `
  }),
  {
    info: true
  }
)
