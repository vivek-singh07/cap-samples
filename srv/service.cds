using northwind as external from './external/northwind';

service CatalogService @(requires: 'authenticated-user'){

    entity Products as projection on external.Products;
    entity Categories as projection on external.Categories;

}