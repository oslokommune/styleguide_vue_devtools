import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, date, select, array, object } from '@storybook/addon-knobs'

import docVueAlert from './docs/messages/alert/alert.md'
import OsgVueButton from 'styleguide_vue/src/atoms/buttons/button/button.vue'
import OsgVueAlert from 'styleguide_vue/src/organisms/messages/alert/alert.vue'
import OsgVueHero from 'styleguide_vue/src/organisms/navigation/hero/hero.vue'
import OsgVueShapeHero from 'styleguide_vue/src/organisms/navigation/shape_hero/shape_hero.vue'
import OsgVueCallToAction from 'styleguide_vue/src/organisms/navigation/call_to_action/call_to_action.vue'
import OsgVueCountdown from 'styleguide_vue/src/organisms/headings/countdown/countdown.vue'
import OsgVueCarousel from 'styleguide_vue/src/organisms/headings/carousel/carousel.vue'
import OsgVueEvent from 'styleguide_vue/src/organisms/headings/event/event.vue'
import OsgVueInfoList from 'styleguide_vue/src/molecules/data_display/info_list/info_list.vue'
import OsgVueCard from 'styleguide_vue/src/organisms/cards/card/card.vue'
import OsgVueListCard from 'styleguide_vue/src/organisms/cards/list_card/list_card.vue'
import OsgVueHeader from 'styleguide_vue/src/organisms/global/header/header.vue'
import OsgVueShape from 'styleguide_vue/src/atoms/decorators/shape/shape.vue'

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
        action('Event: open alert - ' + this.openState.toString() + '')()
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

storiesOf('Organisms/Headings/Countdown', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueCountdown },

    props: {
      countDownDate: {
        default: () => {
          // one week from now
          const initKnobDate = new Date(new Date().getTime() + ((7 * 24) * 60 * 60 * 1000))
          return date('Time to count down to', initKnobDate)
        }
      },

      title: {
        default: text('Title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      },

      langDays: {
        default: text('Translation of the Word "Days"', 'Dager')
      },

      langHours: {
        default: text('Translation of the Word "Hours"', 'Timer')
      },

      langMinutes: {
        default: text('Translation of the Word "Minutes"', 'Minutter')
      },

      langSeconds: {
        default: text('Translation of the Word "Seconds"', 'Sekunder')
      }
    },

    computed: {
      dateConverted() {
        const countDownDate = new Date(this.countDownDate)
        return countDownDate.toLocaleString()
      }
    },

    template: `
    <osg-vue-countdown
      :count-down-to="dateConverted"
      :title="title"
      :lang-days="langDays"
      :lang-hours="langHours"
      :lang-minutes="langMinutes"
      :lang-seconds="langSeconds"
    >
    </osg-vue-countdown>
    `,

    propsDescription: {
      OsgVueCountdown: {
        countDownTo: 'The component will count down from now to the date that is passed to this prop. Example value: \'8/19/2022, 9:29:25 AM\'. Example value 2: myDateObject.toLocaleString().',
      }
    }
  }),
    {
      info: true
    }
  )

storiesOf('Organisms/Headings/Carousel', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueCarousel, OsgVueShape },

    props: {
      images: {
        default: array('Images', [
            {
              url: 'https://picsum.photos/id/614/600/600',
              urlMobile: 'https://picsum.photos/id/615/600/600',
              urlTablet: 'https://picsum.photos/id/616/600/600',
              urlDesktop: 'https://picsum.photos/id/617/600/600',
              caption: 'Example 1',
            },
            {
              url: 'https://picsum.photos/id/615/600/600',
              caption: 'Example 2',
            },
            {
              url: 'https://picsum.photos/id/616/600/600',
              caption: 'Example 3',
            },
            {
              url: 'https://picsum.photos/id/617/600/600',
              caption: 'Example 4',
            },
          ])
        },

      hasCircularShape: {
        default: boolean('Has Circle?', true)
      },

      hasSquaredShape: {
        default: boolean('Has Square?', true)
      },

      circleColor: {
        default: text('Circle Color', 'red', 'Figures')
      },

      squareColor: {
        default: text('Square Color', 'yellow', 'Figures')
      },

      navigationArrowColor: {
        default: text('Navigation Arrow Color', 'yellow', 'Figures')
      },

      icons: {
        default: object('Carousel Icons', {
          previousIcon: 'chevron-left',
          nextIcon: 'chevron-right'
        })
      },
    },

    template: `
    <osg-vue-carousel
      :navigation-arrow-color="navigationArrowColor"
      :images="images"
      :icons="icons"
      image-sr-description="Descriptive text for screen readers"
      :circle-color="circleColor"
      :square-color="squareColor"
      :has-squared-shape="hasSquaredShape"
      :has-circular-shape="hasCircularShape"
      :infinite="infinite"
    >
    </osg-vue-carousel>
    `,
  }),
  {
    info: true
  }
)

storiesOf('Organisms/Headings/Event', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueEvent, OsgVueInfoList },

    props: {
      title: {
        default: text('Title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      },

      imageUrl: {
        default: text('Default Image Url', 'https://picsum.photos/960/540/?random')
      },

      imageCaption: {
        default: text('Image caption', '')
      },

      stateText: {
        default: text('State text')
      },

      // Props for info list component
      
      calendarTitle: {
        default: text('Calendar title', 'Praesent 22. sed', 'Info list'),
      },

      calendarText: {
        default: text('Calendar link text', 'Vestibulum varius nisi', 'Info list'),
      },

      calendarUrl: {
        default: text('Calendar url link', '', 'Info list'),
      },

      locationTitle: {
        default: text('Location title', 'Fringilla Mattis Tortor', 'Info list'),
      },

      locationText: {
        default: text('Location link text', 'Aliquam erat volutpat', 'Info list'),
      },

      locationUrl: {
        default: text('Location url link', '', 'Info list'),
      }
    },

    template: `
    <osg-vue-event
      :title="title"
      :calendar-title="calendarTitle"
      :calendar-text="calendarText"
      :calendar-url="calendarUrl"
      :location-title="locationTitle"
      :location-text="locationText"
      :location-url="locationUrl"
      :state-text="stateText"
      :image-url="imageUrl"
      :image-caption="imageCaption"
      image-sr-description="Descriptive text for screen readers"
    >
    </osg-vue-event>
    `,
  }),
  {
    info: true
  }
)



storiesOf('Organisms/Navigation/ShapeHero', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({

    components: { OsgVueShapeHero },

    props: {
      isCircle: {
        default: boolean('Circular Image', false)
      },

      mainColor: {
        type: String,
        default: select('Color of the Main Box', ['yellow', 'blue', 'blue-light', 'green', 'green-dark', 'green-light', 'beige', 'beige-dark', 'red', 'black'])
      },

      circleColor: {
        default: select('Color of the Circle', ['yellow', 'blue', 'blue-light', 'green', 'green-dark', 'green-light', 'beige', 'beige-dark', 'red', 'black'])
      },

      circleBgColor: {
        default: select('Color of the Circles Background', ['white', 'grey', 'grey-light', 'yellow', 'blue', 'blue-light', 'green', 'green-dark', 'green-light', 'beige', 'beige-dark', 'red', 'black'])
      },

      textColor: {
        type: String,
        default: select('Color of the Dummy Content', ['blue-dark', 'grey-light'])
      },

      text: {
        default: text('Dummy Content', 'You can put any content in this area.')
      },

      imageUrl: {
        default: text('Default Image Url', 'https://picsum.photos/320/320/?random')
      },

      imageCaption: {
        default: text('Image Caption', '')
      },
    },

    template: `
    <osg-vue-shape-hero
      :is-circle="isCircle"
      :main-color="mainColor"
      :circle-color="circleColor"
      :circle-bg-color="circleBgColor"
      :image-url="imageUrl"
      :image-caption="imageCaption"
      image-sr-description="Descriptive text for screen readers"
    >
      <p :class="'osg-u-color-text-' + textColor">
        {{ text }}
      </p>
    </osg-vue-shape-hero>
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

storiesOf('Organisms/Cards/ListCard', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueListCard },
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
    <osg-vue-list-card
      :url="isLink ? '#' : null"
      :search-result="searchResult"
      :search-result-url="searchResult ? '#' : null"
      :has-animation="hasAnimation"
      :state-text="stateText"
      :image-url="imageUrl"
      image-sr-description="Descriptive text for screen readers"
    >
      <p>{{ text }}</p>
    </osg-vue-list-card>
    `
  }),
    {
      info: true
    }
  )

storiesOf('Organisms/Global/Header', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { OsgVueHeader },
    props: {
      isOpen: {
        default: boolean('The headers menu is open', false)
      },

      title: {
        default: text('Title', 'My Brand')
      },

      text: {
        default: text('Content', 'Custom content goes here.')
      },

      rootLevelLinkText: {
        default: text('Root level Link text', 'Oslo kommune')
      },
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
    <osg-vue-header
      @headerClicked="toggleOpenState"
      :is-open="openState"
      :brand-name="title"
      brand-url="#"
      button-aria-label="Main menu"
      root-level-link-url="#"
      :root-level-link-text="rootLevelLinkText"
    >
      <p>{{ text }}</p>
    </osg-vue-header>
    `,

    propsDescription: {
      OsgVueHeader: {
        rootLevelLinkTitle: 'Use this for screen reader support if you do not want to supply a "root level link text".',
      }
    }
  }),
    {
      info: true
    }
  )
