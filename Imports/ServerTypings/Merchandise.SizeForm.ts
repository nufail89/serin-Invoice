namespace Indotalent.Merchandise {
    export interface SizeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class SizeForm extends Serenity.PrefixedContext {
        static formKey = 'Merchandise.Size';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SizeForm.init)  {
                SizeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(SizeForm, [
                    'Name', w0,
                    'Description', w0,
                    'InsertDate', w1,
                    'InsertUserId', w2,
                    'UpdateDate', w1,
                    'UpdateUserId', w2,
                    'TenantId', w2
                ]);
            }
        }
    }
}
