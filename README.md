# What is It?

A simple React component and higher order function to facilitate authentication
via U5-Auth (or rather, any OAuth2 provider).

# Prerequisites

* The provider url, e.g. `https://login.u5auth.com`.
* OAuth2 client credentials, where the client is allowed to use the
  [implicit flow](https://tools.ietf.org/html/rfc6749#section-1.3.2).
* A [React]() application, which is supposed to be secured via OAuth2 (or
  rather, needs an `access_token` to authenticate e.g. calls to APIs).

# How

## Setup

Client details need to be specified via the `AuthContext` component. The `AuthContext` must wrap any component that needs authentication, so the `AuthContext` is probably best placed high up in the component tree (maybe just above the router, if you use one):

First, import the `AuthContext` component:

```javascript
import { AuthContext } from 'react-u5auth'
```

Then, wrap your component(s):

```react
<AuthContext clientId={"123"} provider={"https://my-provider.com"}>
  <Router history={browserHistory}>
    // ...
  </Router>
</AuthContext>
```

## Protecting Components

Now, the higher-order function `authenticated` can be used to ensure a valid `access_token` whenever the component gets rendered:

```js
import { authenticated } from 'react-u5auth'

const SomeComponent = () => (<p>This is some component</p>)
const ProtectedComponent = authenticated()(<SomeComponent />)
```

# Status

It's fully functional, but does not deal with token expiry and/or certain error conditions yet. See the
[issues and/or add a new issue](https://github.com/Uber5/react-u5auth/issues).
