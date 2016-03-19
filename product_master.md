FORMAT: 1A

# Product Master Data

## Data Structures

### Product All (object)
+ id: 1
+ SKU: 1001230 (string)
+ Name: Bodrek (string)
+ ShortName: BOD
+ CategoryId: 1 (number)

### Product Post (object)
+ SKU: 1001231 (string)
+ Name: Paramex (string)
+ ShortName: PAR
+ CategoryId: 1 (number)

### Product UOM All (object)
+ ProductId: 1 (number)
+ UomId: 1 (number)
+ UomDesc: pcs (string

### Product UOM Post (object)
+ UomId: 1 (number)

### Product Unit Price All (object)
+ ProductId: 1 (number)
+ UomId: 2 (number)
+ UomDesc: pcs (string)
+ UnitPrice: 2000 (number)

### Product Unit Price Post (object)
+ UomId: 2 (number)
+ UnitPrice: 2000 (number)

### Product Unit Price Put (object)
+ UnitPrice: 2000 (number)

## Products [/products]

### Post Product [POST]

+ Request (application/json)

    + Attributes (Product Post)

+ Response 200 (application/json)

    + Attributes

        + message: Product added
        + data: (Product All)

## Products paged [/products/{size}/page/{page}]

+ Parameters
    + size (number) - page size
    + page (number) - page to display

### Get Products [GET]

+ Request (application/json)

+ Response 200 (application/json)

    + Attributes (array[Product All])

## Product Detail [/products/{id}]

+ Parameters
    + id (number) - auto increment id

### Get Product Detail [GET]

+ Request (application/json)

+ Response 200 (application/json)

    + Attributes (Product All)

### Update Product [POST]

+ Request (application/json)

    + Attributes (Product Post)

+ Response 200 (application/json)

    + Attributes

        + message: Product Updated
        + data: (Product All)

### Delete Product [DELETE]

+ Request (application/json)

+ Response 200 (application/json)

    + Attributes

        + message: Product deleted
        + data: (Product All)

## Product UOM List [/products/{id}/uoms]

+ Parameters
    + id (number) - id of product

### Get Product UOM List [GET]

+ Request (application/json)

+ Response 200 (application/json)

    + Attributes (array [Product UOM All])

### Add Product UOM [POST]

+ Request (application/json)

    + Attributes (Product Post)

+ Response 200 (application/json)

    + Attributes

        + message: Product UOM added
        + data: (Product UOM All)

## Product UOM Detail [/products/{id}/uoms/{uom_id}]

+ Parameters
    + id (number) - id of product
    + uom_id (number) - id of UOM

### Delete Product UOM [DELETE]

+ Request (application/json)

+ Response 200 (application/json)

    + Attributes

        + message: Product UOM deleted
        + data: (Product UOM All)

## Product Unit Price List [/products/{id}/unit_prices]

+ Parameters
    + id (number) - id of product

### Get Product Unit Prices [GET]

+ Request (application/json)

+ Response 200 (application/json)

    + Attributes (array [Product Unit Price All])

### Add Product Unit Price [POST]

+ Request (application/json)

    + Attributes (Product Unit Price Post)

+ Response 200 (application/json)

    + Attributes

        + message: Product Unit Price Added
        + data: (Product Unit Price All)

## Product Unit Price Detail [/products/{id}/unit_prices/{uom_id}]

+ Parameters
    + id (number) - id of product
    + uom_id (number) - id of uom to set price

### Update product price [PUT]

+ Request (application/json)

    + Attributes (Product Unit Price Put)

+ Response 200 (application/json)

    + Attributes

        + message: Product Unit Price Updated
        + data: (Product Unit Price All)

### Delete Product Price [DELETE]

+ Request (application/json)

+ Response 200 (application/json)

    + Attributes

        + message: Product Unit Price Deleted
        + data: (Product Unit Price All)
