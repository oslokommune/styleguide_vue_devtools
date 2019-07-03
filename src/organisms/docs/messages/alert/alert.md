## Alert

The alert component is a dialog with a dark grey overlay behind.

### Accessibility

You need to add a couple of things to make this available to screen readers:

- Set an ID for the header and text of the alert. For example:

  ```
  <h3 id='my-id-1'>{{ title }}</h3>
  ```
  ```
  <p id='my-id-2'>{{ content }}</p>
  ```

- Set the same ID's as values of the aria-labelledby and the aria-describedby properties on the alert component.
