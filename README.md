# Vue Enums

> Easily use TypeScript enums in Vue SFC templates

## Installation

Install and configure in your `main` file:

```js
import Vue from 'vue'
import enums from 'vue-enums'

// use enums directly in template
Vue.use(enums)
```

Alternatively, define enums under a namespace:

```js
// in templates, use {{ $enums.YourEnum }}
Vue.use(enums, { namespace: '$enums'} )
```

## Usage

Define enums:

```ts
enum Status {
  accepted = 1,
  declined = 2,
}

export default Status
```

Use in component:

```vue
<template>
  <div v-if="Status.accepted">
    You have been accepted!
  </div>
</template>

<script>
import Status from 'status'

export default {

  enums: {
    Status,
  },

  data () {
    return {
      state: Status.accepted
    }
  }
}
</script>
```
