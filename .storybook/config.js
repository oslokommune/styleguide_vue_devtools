import { configure, addParameters, addDecorator } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from 'storybook-addon-vue-info'
import osloTheme from './osloTheme'
import 'styleguide/src/assets/sass/common.sass'

addDecorator(withInfo)
addDecorator(withA11y)

// Option defaults:
addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'grey-light', value: '#f9f9f9' },
    { name: 'grey', value: '#f2f2f2' },
    { name: 'black', value: '#2c2c2c' },
    { name: 'beige', value: '#f8f0dd' },
    { name: 'beige-dark', value: '#d0bfae' },
    { name: 'blue', value: '#6fe9ff' },
    { name: 'blue-dark', value: '#2a2859' },
    { name: 'blue-light', value: '#b3f5ff' },
    { name: 'green', value: '#43f8b6' },
    { name: 'green-dark', value: '#034b45' },
    { name: 'green-light', value: '#c7f6c9' },
    { name: 'red', value: '#ff8274' },
    { name: 'yellow', value: '#f9c66b' }
  ],
  options: {
    theme: osloTheme,

    isFullScreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: false,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'right',
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: false,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\//,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: null,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: false, // true by default
  }
});

function loadStories() {
  require('../src/atoms/atoms')
  require('../src/molecules/molecules')
  require('../src/organisms/organisms')
}

configure(loadStories, module)
