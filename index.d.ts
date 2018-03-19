export type Pick2<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
> = {
  [P1 in K1]: {
    [P2 in K2]: (T[P1])[P2]
  }
};

export type Pick3<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof (T[K1])[K2],
> = {
  [P1 in K1]: {
    [P2 in K2]: {
      [P3 in K3]: ((T[P1])[P2])[P3]
    }
  }
};

export type Pick4<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof (T[K1])[K2],
  K4 extends keyof ((T[K1])[K2])[K3],
> = {
  [P1 in K1]: {
    [P2 in K2]: {
      [P3 in K3]: {
        [P4 in K4]: (((T[P1])[P2])[P3])[P4]
      }
    }
  }
};

export type Pick5<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof (T[K1])[K2],
  K4 extends keyof ((T[K1])[K2])[K3],
  K5 extends keyof (((T[K1])[K2])[K3])[K4],
> = {
  [P1 in K1]: {
    [P2 in K2]: {
      [P3 in K3]: {
        [P4 in K4]: {
          [P5 in K5]: ((((T[P1])[P2])[P3])[P4])[P5]
        }
      }
    }
  }
};

export type Pick6<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof (T[K1])[K2],
  K4 extends keyof ((T[K1])[K2])[K3],
  K5 extends keyof (((T[K1])[K2])[K3])[K4],
  K6 extends keyof ((((T[K1])[K2])[K3])[K4])[K5],
> = {
  [P1 in K1]: {
    [P2 in K2]: {
      [P3 in K3]: {
        [P4 in K4]: {
          [P5 in K5]: {
            [P6 in K6]: (((((T[P1])[P2])[P3])[P4])[P5])[P6]
          }
        }
      }
    }
  }
};

export type Pick7<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof (T[K1])[K2],
  K4 extends keyof ((T[K1])[K2])[K3],
  K5 extends keyof (((T[K1])[K2])[K3])[K4],
  K6 extends keyof ((((T[K1])[K2])[K3])[K4])[K5],
  K7 extends keyof (((((T[K1])[K2])[K3])[K4])[K5])[K6],
> = {
  [P1 in K1]: {
    [P2 in K2]: {
      [P3 in K3]: {
        [P4 in K4]: {
          [P5 in K5]: {
            [P6 in K6]: {
              [P7 in K7]: ((((((T[P1])[P2])[P3])[P4])[P5])[P6])[P7]
            }
          }
        }
      }
    }
  }
};

export type Pick8<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof (T[K1])[K2],
  K4 extends keyof ((T[K1])[K2])[K3],
  K5 extends keyof (((T[K1])[K2])[K3])[K4],
  K6 extends keyof ((((T[K1])[K2])[K3])[K4])[K5],
  K7 extends keyof (((((T[K1])[K2])[K3])[K4])[K5])[K6],
  K8 extends keyof ((((((T[K1])[K2])[K3])[K4])[K5])[K6])[K7],
> = {
  [P1 in K1]: {
    [P2 in K2]: {
      [P3 in K3]: {
        [P4 in K4]: {
          [P5 in K5]: {
            [P6 in K6]: {
              [P7 in K7]: {
                [P8 in K8]: (((((((T[P1])[P2])[P3])[P4])[P5])[P6])[P7])[P8]
              }
            }
          }
        }
      }
    }
  }
};

export type Pick9<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof (T[K1])[K2],
  K4 extends keyof ((T[K1])[K2])[K3],
  K5 extends keyof (((T[K1])[K2])[K3])[K4],
  K6 extends keyof ((((T[K1])[K2])[K3])[K4])[K5],
  K7 extends keyof (((((T[K1])[K2])[K3])[K4])[K5])[K6],
  K8 extends keyof ((((((T[K1])[K2])[K3])[K4])[K5])[K6])[K7],
  K9 extends keyof (((((((T[K1])[K2])[K3])[K4])[K5])[K6])[K7])[K8],
> = {
  [P1 in K1]: {
    [P2 in K2]: {
      [P3 in K3]: {
        [P4 in K4]: {
          [P5 in K5]: {
            [P6 in K6]: {
              [P7 in K7]: {
                [P8 in K8]: {
                  [P9 in K9]: ((((((((T[P1])[P2])[P3])[P4])[P5])[P6])[P7])[P8])[P9]
                }
              }
            }
          }
        }
      }
    }
  }
};