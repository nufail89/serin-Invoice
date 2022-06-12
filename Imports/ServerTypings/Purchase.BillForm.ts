
namespace Indotalent.Purchase {
    export interface BillForm {
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ExternalReferenceNumber: Serenity.StringEditor;
        ProcurementGroup: Serenity.StringEditor;
        BillDate: Serenity.DateEditor;
        PurchaseOrderId: Serenity.IntegerEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        OtherCharge: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class BillForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.Bill';
    }

    [,
        ['Number', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['ExternalReferenceNumber', () => Serenity.StringEditor],
        ['ProcurementGroup', () => Serenity.StringEditor],
        ['BillDate', () => Serenity.DateEditor],
        ['PurchaseOrderId', () => Serenity.IntegerEditor],
        ['SubTotal', () => Serenity.DecimalEditor],
        ['Discount', () => Serenity.DecimalEditor],
        ['BeforeTax', () => Serenity.DecimalEditor],
        ['TaxAmount', () => Serenity.DecimalEditor],
        ['Total', () => Serenity.DecimalEditor],
        ['OtherCharge', () => Serenity.DecimalEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(BillForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}