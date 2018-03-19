export type Shape = {
  user: {
    address: {
      street: {
        city: {
          state: {
            country: {
              continent: {
                name: string;
                planet: {
                  name: string;
                  galaxy: string;
                }
              },
              name: string;
            };
            name: string;
          };
          name: string;
        };
        name: string;
        number: number;
      };
      alternative: string;
    };
    name: string;
  };
  game: string;
};

export const testObj: Shape = {
  user: {
    address: {
      street: {
        city: {
          state: {
            country: {
              continent: {
                name: 'Europe',
                planet: {
                  name: 'Earth',
                  galaxy: 'Milky Way',
                },
              },
              name: 'Finland',
            },
            name: 'Uusimaa',
          },
          name: 'Helsinki',
        },
        name: 'Mannerheimintie',
        number: 10,
      },
      alternative: 'That building',
    },
    name: 'Kimmo',
  },
  game: 'Chess',
};
