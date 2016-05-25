## General notes

To pass object properties to functions, you have to use `[bracket]` notation instead of .dot notation. Otherwise, they're interpreted literally as strings.  You have to do the same thing (use `[bracket]` notation) in loops' keys when adding key:value pairs to objects.

## What are we hoping to achieve?

Our raw data looks like this:

```
rawData = [
    {
        'source': 'MARKET',
        'target': 'APPLE',
        'value': 143511206,
        'annum': 1455602400000
    },
    {
        'source': 'BODEGA',
        'target': 'PEAR',
        'value': 21878533,
        'annum': 1456466400000
    },
    {
        'source': 'MARKET',
        'target': 'KIWI',
        'value': 8165055,
        'annum': 1456207200000
    }
];
```

We want an array of objects where the primary objects' keys are the unique dates ('annum') from our raw data.  We'll nest additional objects to each of these dates for the source and target categories. We want the resulting array to resemble this:

```javascript
formattedData = [
    {
        "annum" : "02/05/2015",
        "sources": [
            {
                "name" : "MARKET",
                "targets" : [
                    {
                        "target" : "APPLE",
                        "sourcerows" : "203995"
                    },
                    {
                        "target" : "AVOCADO",
                        "sourcerows" : "5439516"
                    },
                    {
                        "target" : "BANANA",
                        "sourcerows" : "662607"
                    }
                ]
            },
            {
                "name" : "BODEGA",
                "targets" : [
                    {
                        "target" : "APPLE",
                        "sourcerows" : "203995"
                    },
                    {
                        "target" : "AVOCADO",
                        "sourcerows" : "5439516"
                    },
                    {
                        "target" : "BANANA",
                        "sourcerows" : "662607"
                    }
                ]
            },
            {
                "name" : "CAFETERIA",
                "targets" : [
                    {
                        "target" : "APPLE",
                        "sourcerows" : "203995"
                    },
                    {
                        "target" : "AVOCADO",
                        "sourcerows" : "5439516"
                    },
                    {
                        "target" : "BANANA",
                        "sourcerows" : "662607"
                    }
                ]
            ...
            }
        ]
    },
    {
        "annum" : "02/06/2015",
        "sources": [
            {
                "name" : "BODEGA",
                "targets" : [
                    {
                        "target" : "APPLE",
                        "sourcerows" : "203995"
                    },
                    {
                        "target" : "AVOCADO",
                        "sourcerows" : "5439516"
                    },
                    {
                        "target" : "BANANA",
                        "sourcerows" : "662607"
                    }
                ]
            },
            {
                "name" : "EPIC",
                "targets" : [
                    {
                        "target" : "APPLE",
                        "sourcerows" : "203995"
                    },
                    {
                        "target" : "AVOCADO",
                        "sourcerows" : "5439516"
                    },
                    {
                        "target" : "BANANA",
                        "sourcerows" : "662607"
                    }
                ]
            },
            {
                "name" : "BLAHBLAH",
                "targets" : [
                    {
                        "target" : "APPLE",
                        "sourcerows" : "203995"
                    },
                    {
                        "target" : "AVOCADO",
                        "sourcerows" : "5439516"
                    },
                    {
                        "target" : "BANANA",
                        "sourcerows" : "662607"
                    }
                ]
            ...
            }
        ]
    }
]
```

That JSON has generic keys for arrays of nested objects.  Each date has a name ("annum") and an array of sources ("sources").  Each element in the "sources" array has a name ("name") and an array of targets ("targets").  Each element in the "targets" array is an object with a name ("target") and value ("sourcerows").