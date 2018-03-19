# ts-multipick

Like the TypeScript `Pick` utility, but deeper: `Pick2`, `Pick3`, ..., `Pick9`.

## Usage

```typescript
import {Pick3} from 'ts-multipick';

type SomeShape = {
  username: string;
  address: {
    street: {
      name: string;
      city: {
        name: string;
        country: string;
      }
    }
  }
};

type ObjWithStreetName = Pick3<SomeShape, 'address', 'street', 'name'>;

let a: ObjWithStreetName = /* ... */;
a.address.street.city; // ERROR! This is a TypeScript error
a.address.street.city.name; // ERROR! This is a TypeScript error
a.username; // ERROR! This is a TypeScript error
a.address.street.name; // Only this is fine
```

## Install

```
npm install --save ts-multipick
```

## License

MIT
