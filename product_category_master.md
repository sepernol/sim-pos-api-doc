FORMAT: 1A

# Product Category Master Data

## Data Structures

### Product Category All (object)
+ id: 1
+ code: HV
+ description: Obat Bebas

### Product Category Post (object)
+ code: NONHV
+ description: Obat Tidat Bebas

## Product Categories [/product_categories]

### Post Product Category [POST]

+ Request (application/json)

    + Attributes (Product Category Post)

+ Response 200 (application/json)

    + Attributes

        + message: Product Category added
        + data: (Product Category All)

## Product Categories paged [/product_categories/{size}/page/{page}]

+ Parameters
    + size (number) - page size
    + page (number) - page to display

### Get Product Categories [GET]

+ Response 200 (application/json)

    + Attributes (array[Product Category All])

## Product Category Detail [/product_categories/{id}]

+ Parameters
    + id (number) - auto increment id

### Get Product Category Detail [GET]

+ Response 200 (application/json)

    + Attributes (Product Category All)

### Update Product Category [POST]

+ Request (application/json)

    + Attributes (Product Category Post)

+ Response 200 (application/json)

    + Attributes

        + message: Product Category Updated
        + data: Product Category All

### Delete Product Category [DELETE]

+ Response 200 (application/json)

    + Attributes

        + message: Product Category deleted
        + data: Product Category All
