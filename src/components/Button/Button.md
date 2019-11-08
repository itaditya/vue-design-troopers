### Basic Usage

```[import](../../docs/components/ClickButtonExample.vue) noeditor
Open ClickButtonExample.vue for full example.
```

```html static
<dt-button appearance="primary" @click="counter += 1">
  Click Me
</dt-button>
```

---

### Base Button

The Base Button serve as a base for other buttons. **Do not use it directly**.
```js
<section data-testid="example-base-buttons">
  <div class="dt-flex dt-items-center">
    <dt-button>
      Base Button
    </dt-button>

    <dt-button size="lg" class="dt-ml-2">
      Big Base Button
    </dt-button>

    <dt-button disabled class="dt-ml-2">
      Disabled Base Button
    </dt-button>
  </div>
</section>
```

---

### Semantic Buttons

```jsx static
<dt-button appearance="secondary">
  Secondary Action
</dt-button>
```

**Only one primary button should be used on a page**. Primary button represent a CTA (Call To Action) to the user and if there are mutiple CTAs, the user's focus will be divided.

In case you are rendering a list of items and each need a button, you can have the primary button in the first item of list and have the primary or secondary **ghost button** in the other items.

```js
<section data-testid="example-semantic-buttons">
  <div class="dt-flex dt-items-center">
    <dt-button appearance="primary">
      Sign Up
    </dt-button>

    <dt-button appearance="primary" class="dt-ml-2">
      Submit Form
    </dt-button>

    <dt-button appearance="primary" size="lg" class="dt-ml-2">
      Send Mails
    </dt-button>

    <dt-button appearance="primary" disabled class="dt-ml-2">
      Share File
    </dt-button>
  </div>

  <div class="dt-flex dt-items-center dt-mt-4">
    <dt-button appearance="secondary">
      Pause Upload
    </dt-button>

    <dt-button appearance="warning" class="dt-ml-2">
      Block User
    </dt-button>
  </div>

  <div class="dt-flex dt-items-center dt-mt-4">
    <dt-button appearance="danger" size="lg">
      Delete Account
    </dt-button>

    <dt-button appearance="danger" class="dt-ml-2">
      Discard Email
    </dt-button>

    <dt-button appearance="danger" class="dt-ml-2">
      Cancel
    </dt-button>
  </div>
</section>
```
