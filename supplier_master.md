FORMAT: 1A

# Supplier Master Data

## Data Structures

### Supplier All (object)
+ id: 1
+ code: KF
+ name: Kimia Farma
+ is_taxed: true (boolean)

### Supplier Post (object)
+ code: KF
+ name: Kimia Farma 1
+ is_taxed: true

## Suppliers [/suppliers]

### Post Supplier [POST]

+ Request (application/json)

    + Attributes (Supplier Post)

+ Response 200 (application/json)

    + Attributes

        + message: Supplier added
        + data: (Supplier All)

## Suppliers paged [/suppliers/{size}/page/{page}]

+ Parameters
    + size (number) - page size
    + page (number) - page to display

### Get Suppliers [GET]

+ Response 200 (application/json)

    + Attributes (array[Supplier All])

## Supplier Detail [/suppliers/{id}]

+ Parameters
    + id (number) - auto increment id

### Get Supplier Detail [GET]

+ Response 200 (application/json)

    + Attributes (Supplier All)

### Update Supplier [POST]

+ Request (application/json)

    + Attributes (Supplier Post)

+ Response 200 (application/json)

    + Attributes

        + message: Supplier Updated
        + data: Supplier All

### Delete Supplier [DELETE]

+ Response 200 (application/json)

    + Attributes

        + message: Supplier deleted
        + data: Supplier All
