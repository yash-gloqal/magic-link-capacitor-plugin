# test-plugin

short

## Install

```bash
npm install test-plugin
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`loginWithEmailOtp(...)`](#loginwithemailotp)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### loginWithEmailOtp(...)

```typescript
loginWithEmailOtp(options: { email: string; }) => Promise<{ didToken: string; error?: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ email: string; }</code> |

**Returns:** <code>Promise&lt;{ didToken: string; error?: string; }&gt;</code>

--------------------

</docgen-api>
