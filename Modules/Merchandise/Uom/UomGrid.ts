
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class UomGrid extends Serenity.EntityGrid<UomRow, any> {
        protected getColumnsKey() { return UomColumns.columnsKey; }
        protected getDialogType() { return UomDialog; }
        protected getIdProperty() { return UomRow.idProperty; }
        protected getInsertPermission() { return UomRow.insertPermission; }
        protected getLocalTextPrefix() { return UomRow.localTextPrefix; }
        protected getService() { return UomService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}