
namespace Indotalent.Settings {
    export interface SalesTaxForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        TaxRatePercentage: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class SalesTaxForm extends Serenity.PrefixedContext {
        static formKey = 'Settings.SalesTax';
    }

    [,
        ['Name', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['TaxRatePercentage', () => Serenity.DecimalEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(SalesTaxForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}