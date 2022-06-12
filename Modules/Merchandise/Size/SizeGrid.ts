
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class SizeGrid extends Serenity.EntityGrid<SizeRow, any> {
        protected getColumnsKey() { return SizeColumns.columnsKey; }
        protected getDialogType() { return SizeDialog; }
        protected getIdProperty() { return SizeRow.idProperty; }
        protected getInsertPermission() { return SizeRow.insertPermission; }
        protected getLocalTextPrefix() { return SizeRow.localTextPrefix; }
        protected getService() { return SizeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}