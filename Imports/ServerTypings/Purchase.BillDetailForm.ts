
namespace Indotalent.Purchase {
    export interface BillDetailForm {
        BillId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxPercentage: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class BillDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.BillDetail';
    }

    [,
        ['BillId', () => Serenity.IntegerEditor],
        ['ProductId', () => Serenity.IntegerEditor],
        ['Price', () => Serenity.DecimalEditor],
        ['Qty', () => Serenity.DecimalEditor],
        ['SubTotal', () => Serenity.DecimalEditor],
        ['Discount', () => Serenity.DecimalEditor],
        ['BeforeTax', () => Serenity.DecimalEditor],
        ['TaxPercentage', () => Serenity.DecimalEditor],
        ['TaxAmount', () => Serenity.DecimalEditor],
        ['Total', () => Serenity.DecimalEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(BillDetailForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}