FORMAT: 1A

# UOM Master Data

## Data Structures

### UOM All (object)
+ id: 1
+ code: TB
+ description: Tablet

### UOM Post (object)
+ code: ST
+ description: Strip

## UOMs [/uoms]

### Post UOM [POST]

+ Request (application/json)

    + Attributes (UOM Post)

+ Response 200 (application/json)

    + Attributes

        + message: UOM added
        + data: (UOM All)

## UOMs paged [/uoms/{size}/page/{page}]

+ Parameters
    + size (number) - page size
    + page (number) - page to display

### Get UOMs [GET]

+ Request (application/json)

+ Response 200 (application/json)

    + Attributes (array[UOM All])

## UOM Detail [/uoms/{id}]

+ Parameters
    + id (number) - auto increment id

### Get UOM Detail [GET]

+ Request (application/json)

+ Response 200 (application/json)

    + Attributes (UOM All)

### Update UOM [POST]

+ Request (application/json)

    + Attributes (UOM Post)

+ Response 200 (application/json)

    + Attributes

        + message: UOM Updated
        + data: UOM All

### Delete UOM [DELETE]

+ Request (application/json)

+ Response 200 (application/json)

    + Attributes

        + message: UOM deleted
        + data: UOM All
