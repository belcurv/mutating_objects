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

```
formattedData = [
    {
        '1455602400000' : {
            'BODEGA' : {
                'APPLE'    : 123,
                'AVOCADO'  : 123,
                'BANANA'   : 123,
                'KIWI'     : 123,
                'ORANGE'   : 123,
                'PEAR'     : 123,
                'TANGERINE': 123 
            },
            'CAFE' : {
                'APPLE'    : 123,
                'AVOCADO'  : 123,
                'BANANA'   : 123,
                'KIWI'     : 123,
                'ORANGE'   : 123,
                'PEAR'     : 123,
                'TANGERINE': 123 
            },
            'CAFETERIA' : {
                'APPLE'    : 123,
                'AVOCADO'  : 123,
                'BANANA'   : 123,
                'KIWI'     : 123,
                'ORANGE'   : 123,
                'PEAR'     : 123,
                'TANGERINE': 123 
            },
            'DISTRIBUTOR' : {
                'APPLE'    : 123,
                'AVOCADO'  : 123,
                'BANANA'   : 123,
                'KIWI'     : 123,
                'ORANGE'   : 123,
                'PEAR'     : 123,
                'TANGERINE': 123 
            },
        }
    }
];
```