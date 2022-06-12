
namespace Indotalent.Merchandise {
    export interface ProductForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Picture: Serenity.StringEditor;
        InternalCode: Serenity.StringEditor;
        Barcode: Serenity.StringEditor;
        UomId: Serenity.IntegerEditor;
        BrandId: Serenity.IntegerEditor;
        CategoryId: Serenity.IntegerEditor;
        SizeId: Serenity.IntegerEditor;
        ColourId: Serenity.IntegerEditor;
        FlavourId: Serenity.IntegerEditor;
        PurchasePrice: Serenity.DecimalEditor;
        SalesPrice: Serenity.DecimalEditor;
        PurchaseTaxId: Serenity.IntegerEditor;
        SalesTaxId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Merchandise.Product';
    }

    [,
        ['Name', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['Picture', () => Serenity.StringEditor],
        ['InternalCode', () => Serenity.StringEditor],
        ['Barcode', () => Serenity.StringEditor],
        ['UomId', () => Serenity.IntegerEditor],
        ['BrandId', () => Serenity.IntegerEditor],
        ['CategoryId', () => Serenity.IntegerEditor],
        ['SizeId', () => Serenity.IntegerEditor],
        ['ColourId', () => Serenity.IntegerEditor],
        ['FlavourId', () => Serenity.IntegerEditor],
        ['PurchasePrice', () => Serenity.DecimalEditor],
        ['SalesPrice', () => Serenity.DecimalEditor],
        ['PurchaseTaxId', () => Serenity.IntegerEditor],
        ['SalesTaxId', () => Serenity.IntegerEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(ProductForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}