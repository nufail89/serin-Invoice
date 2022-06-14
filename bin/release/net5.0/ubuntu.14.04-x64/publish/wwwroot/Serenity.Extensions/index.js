var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Extensions.UserPreferenceRow || (Extensions.UserPreferenceRow = {}));
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Extensions/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Extensions.UserPreferenceService || (Extensions.UserPreferenceService = {}));
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var BasicProgressDialog = /** @class */ (function (_super) {
            __extends(BasicProgressDialog, _super);
            function BasicProgressDialog() {
                var _this = _super.call(this) || this;
                _this.byId('ProgressBar').progressbar({
                    max: 100,
                    value: 0,
                    change: function (e, v) {
                        _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                    }
                });
                _this.dialogTitle = Q.text('Site.BasicProgressDialog.PleaseWait');
                return _this;
            }
            Object.defineProperty(BasicProgressDialog.prototype, "max", {
                get: function () {
                    return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
                },
                set: function (value) {
                    this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(BasicProgressDialog.prototype, "value", {
                get: function () {
                    return this.byId('ProgressBar').progressbar('value');
                },
                set: function (value) {
                    this.byId('ProgressBar').progressbar().progressbar('value', value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(BasicProgressDialog.prototype, "title", {
                get: function () {
                    return this.dialogTitle;
                },
                set: function (value) {
                    this.dialogTitle = value;
                },
                enumerable: false,
                configurable: true
            });
            BasicProgressDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [{
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () {
                            _this.cancelled = true;
                            _this.element.closest('.ui-dialog')
                                .find('.ui-dialog-buttonpane .ui-button')
                                .attr('disabled', 'disabled')
                                .css('opacity', '0.5');
                            _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                                Q.text('Site.BasicProgressDialog.CancelTitle'));
                        }
                    }];
            };
            BasicProgressDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.width = 600;
                return opt;
            };
            BasicProgressDialog.prototype.initDialog = function () {
                _super.prototype.initDialog.call(this);
                this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
            };
            BasicProgressDialog.prototype.getTemplate = function () {
                return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                    "<div id='~_StatusText' class='status-text' ></div>" +
                    "<div id='~_ProgressBar' class='progress-bar'>" +
                    "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                    "</div>" +
                    "</div>");
            };
            return BasicProgressDialog;
        }(Serenity.TemplatedDialog));
        Extensions.BasicProgressDialog = BasicProgressDialog;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Extensions.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Extensions.BulkServiceAction = BulkServiceAction;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.ExportColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.ExportColumns.push(column.id || column.field);
                        }
                        if (options.editRequest)
                            request = options.editRequest(request);
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Extensions.ExcelExportHelper || (Extensions.ExcelExportHelper = {}));
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = [];
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst.push(item[fld]);
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst.push(html);
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst.push($(el.children[0]).val());
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst.push($(el.children).hasClass("checked") ? "X" : "");
                            }
                            else
                                dst.push(el.textContent || '');
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        // @ts-ignore
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFont('helvetica', 'bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        var footer;
                        var header;
                        if (pageNumbers) {
                            footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            header = function (data) {
                                doc.setFont('helvetica', 'normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                        }
                        autoOptions.didDrawPage = function (data) {
                            if (!!header)
                                header(data);
                            if (!!footer)
                                footer(data);
                        };
                        autoOptions.head = [columns];
                        autoOptions.body = data;
                        doc.autoTable(autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                // @ts-ignore
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Serenity.Assets/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
                if (typeof jsPDF === "undefined" && typeof jspdf !== "undefined") {
                    window.jsPDF = jspdf.jsPDF;
                }
            }
            function includeAutoTable() {
                includeJsPDF();
                // @ts-ignore
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Serenity.Assets/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Extensions.PdfExportHelper || (Extensions.PdfExportHelper = {}));
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter('Serenity.Extensions.EnumSelectFormatter')
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Extensions.EnumSelectFormatter = EnumSelectFormatter;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var SingleLineTextFormatter = /** @class */ (function () {
            function SingleLineTextFormatter() {
            }
            SingleLineTextFormatter_1 = SingleLineTextFormatter;
            SingleLineTextFormatter.prototype.format = function (ctx) {
                return SingleLineTextFormatter_1.formatValue(ctx.value);
            };
            SingleLineTextFormatter.formatValue = function (value) {
                var text = $('<div/>').html(value || '').text();
                return Q.toSingleLine(text);
            };
            var SingleLineTextFormatter_1;
            SingleLineTextFormatter = SingleLineTextFormatter_1 = __decorate([
                Serenity.Decorators.registerFormatter('Serenity.Extensions.SingleLineTextFormatter')
            ], SingleLineTextFormatter);
            return SingleLineTextFormatter;
        }());
        Extensions.SingleLineTextFormatter = SingleLineTextFormatter;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var addButton = Q.tryFirst(buttons, function (x) { return x.cssClass == 'add-button'; });
                if (addButton != null) {
                    addButton.onClick = function () {
                        _this.createEntityDialog(_this.getItemType(), function (dlg) {
                            var dialog = dlg;
                            dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                            _this.transferDialogReadOnly(dialog);
                            dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                        });
                    };
                }
                return buttons.filter(function (x) { return x.cssClass != "refresh-button"; });
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    _this.transferDialogReadOnly(dialog);
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: false,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Extensions.GridEditorBase = GridEditorBase;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Extensions.GridEditorDialog = GridEditorDialog;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Serenity.Extensions/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.dialogTitle = _this.report.Title;
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport && !this.report.IsExternalReport);
                this.toolbar.findButton('run-button')
                    .toggle(this.report && this.report.IsExternalReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport && !this.report.IsExternalReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport && !this.report.IsExternalReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Extensions.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'Run',
                        cssClass: 'run-button',
                        icon: 'fa-print text-blue',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            ReportDialog.prototype.getTemplate = function () {
                return "<div class=\"s-DialogContent\">\n    <div id=\"~_Toolbar\" class=\"s-DialogToolbar\">\n    </div>\n    <div class=\"s-Form\">\n        <form id=\"~_Form\" action=\"\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n        </form>\n    </div>\n</div>";
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Extensions.ReportDialog = ReportDialog;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Serenity.Extensions/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Extensions.ReportHelper || (Extensions.ReportHelper = {}));
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text)
                    return;
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                visibles.children('[data-bs-toggle]:not([aria-expanded=true])')
                    .attr('aria-expanded', 'true')
                    .removeClass('collapsed');
                visibles
                    .parent('.collapse:not(.show)')
                    .addClass('show');
                var nonVisibles = liList.not(visibles);
                nonVisibles.addClass('non-match');
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Extensions.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Extensions.ReportPage = ReportPage;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Extensions.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Extensions.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Extensions.UserPreferenceStorage = UserPreferenceStorage;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var DialogUtils;
        (function (DialogUtils) {
            function pendingChangesConfirmation(element, hasPendingChanges) {
                element.on('dialogbeforeclose panelbeforeclose', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                        return;
                    }
                    e.preventDefault();
                    Q.confirm(Q.text('Site.Dialogs.PendingChangesConfirmation'), function () { return element.find('div.save-and-close-button').click(); }, {
                        onNo: function () {
                            if (element.hasClass('ui-dialog-content'))
                                element.dialog('close');
                            else if (element.hasClass('s-Panel'))
                                Serenity.TemplatedDialog.closePanel(element);
                        }
                    });
                });
            }
            DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
        })(DialogUtils = Extensions.DialogUtils || (Extensions.DialogUtils = {}));
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var PromptDialog = /** @class */ (function (_super) {
            __extends(PromptDialog, _super);
            function PromptDialog(opt) {
                var _this = _super.call(this, opt) || this;
                if (!Q.isEmptyOrNull(_this.options.cssClass))
                    _this.element.addClass(_this.options.cssClass);
                if (!Q.isEmptyOrNull(_this.options.message)) {
                    var msg = $("<div/>").addClass("message")
                        .insertBefore(_this.byId("PropertyGrid"));
                    _this.options.isHtml ? msg.html(_this.options.message) : msg.text(_this.options.message);
                }
                _this.dialogTitle = _this.options.title || "Prompt";
                return _this;
            }
            PromptDialog_1 = PromptDialog;
            PromptDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: Q.text("Dialogs.OkButton"),
                        click: function () {
                            if (!_this.validateForm())
                                return;
                            if (_this.options.validateValue == null || _this.options.validateValue(_this.value))
                                _this.dialogClose();
                        },
                    },
                    {
                        text: Q.text("Dialogs.CancelButton"),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            PromptDialog.prototype.loadInitialEntity = function () {
                this.value = this.options.value;
            };
            PromptDialog.prototype.getPropertyItems = function () {
                return [
                    {
                        name: "Value",
                        editorType: this.options.editorType || "String",
                        required: Q.coalesce(this.options.required, true),
                        editorParams: this.options.editorOptions
                    }
                ];
            };
            Object.defineProperty(PromptDialog.prototype, "value", {
                get: function () {
                    return this.getSaveEntity().Value;
                },
                set: function (v) {
                    this.propertyGrid.load({
                        Value: v
                    });
                },
                enumerable: false,
                configurable: true
            });
            PromptDialog.prompt = function (title, message, value, validateValue) {
                new PromptDialog_1({
                    title: title,
                    message: message,
                    value: value,
                    validateValue: function (v) { return validateValue(v); }
                }).dialogOpen();
            };
            var PromptDialog_1;
            PromptDialog = PromptDialog_1 = __decorate([
                Serenity.Decorators.registerClass()
            ], PromptDialog);
            return PromptDialog;
        }(Serenity.PropertyDialog));
        Extensions.PromptDialog = PromptDialog;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var SelectableEntityGrid = /** @class */ (function (_super) {
            __extends(SelectableEntityGrid, _super);
            function SelectableEntityGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SelectableEntityGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            SelectableEntityGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            SelectableEntityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SelectableEntityGrid);
            return SelectableEntityGrid;
        }(Serenity.EntityGrid));
        Extensions.SelectableEntityGrid = SelectableEntityGrid;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        var ServiceEditorBase = /** @class */ (function (_super) {
            __extends(ServiceEditorBase, _super);
            function ServiceEditorBase(hidden, options) {
                var _this = _super.call(this, hidden, options) || this;
                _this.setCascadeFrom(_this.options.cascadeFrom);
                return _this;
            }
            ServiceEditorBase.prototype.setCascadeFrom = function (value) {
                var _this = this;
                if (Q.isEmptyOrNull(value)) {
                    if (this.cascadeLink) {
                        this.cascadeLink.set_parentID(null);
                        this.cascadeLink = null;
                    }
                    this.options.cascadeFrom = null;
                    return;
                }
                this.cascadeLink = new Serenity.CascadedWidgetLink(Serenity.Widget, this, function (p) { return _this.cascadeValue = _this.getCascadeFromValue(p); });
                this.cascadeLink.set_parentID(value);
                this.options.cascadeFrom = value;
            };
            Object.defineProperty(ServiceEditorBase.prototype, "cascadeValue", {
                get: function () {
                    return this.options.cascadeValue;
                },
                set: function (value) {
                    if (value !== this.options.cascadeValue) {
                        this.options.cascadeValue = value;
                        this.value = null;
                    }
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ServiceEditorBase.prototype, "cascadeField", {
                get: function () {
                    return this.options.cascadeField || this.options.cascadeFrom;
                },
                set: function (value) {
                    this.options.cascadeField = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ServiceEditorBase.prototype, "cascadeFrom", {
                get: function () {
                    return this.options.cascadeFrom;
                },
                set: function (value) {
                    if (value !== this.options.cascadeFrom) {
                        this.setCascadeFrom(value);
                    }
                },
                enumerable: false,
                configurable: true
            });
            ServiceEditorBase.prototype.getCascadeFromValue = function (parent) {
                return Serenity.EditorUtils.getValue(parent);
            };
            ServiceEditorBase.prototype.getIncludeColumns = function () {
                return [];
            };
            ServiceEditorBase.prototype.getSort = function () {
                return [];
            };
            ServiceEditorBase.prototype.getTypeDelay = function () {
                return 200;
            };
            ServiceEditorBase.prototype.executeQueryByKey = function (options) {
                var request = options.request;
                request.ColumnSelection = 1 /* keyOnly */;
                request.IncludeColumns = this.getIncludeColumns();
                _super.prototype.executeQueryByKey.call(this, options);
            };
            ServiceEditorBase.prototype.executeQuery = function (options) {
                var _this = this;
                var request = options.request;
                request.ColumnSelection = 1 /* KeyOnly */;
                request.IncludeColumns = this.getIncludeColumns();
                request.Sort = this.getSort();
                request.ExcludeTotalCount = true;
                if (this.cascadeField) {
                    request.EqualityFilter = request.EqualityFilter || {};
                    request.EqualityFilter[this.cascadeField] = this.cascadeValue;
                }
                options.blockUI = false;
                options.error = function () { };
                if (this.lastRequest != null && this.lastRequest.readyState != XMLHttpRequest.DONE)
                    this.lastRequest.abort();
                this.lastRequest = Q.serviceCall(options);
                this.lastRequest.then(function () { return _this.lastRequest = null; }, function () { return _this.lastRequest = null; });
            };
            ServiceEditorBase = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceEditorBase);
            return ServiceEditorBase;
        }(Serenity.Select2AjaxEditor));
        Extensions.ServiceEditorBase = ServiceEditorBase;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Extensions;
    (function (Extensions) {
        /**
         * This is an editor widget but it only displays a text, not edits it.
         *
         */
        var StaticTextBlock = /** @class */ (function (_super) {
            __extends(StaticTextBlock, _super);
            function StaticTextBlock(container, options) {
                var _this = _super.call(this, container, options) || this;
                // hide the caption label for this editor if in a form. ugly hack
                if (_this.options.hideLabel)
                    _this.element.closest('.field').find('.caption').hide();
                _this.updateElementContent();
                return _this;
            }
            StaticTextBlock.prototype.updateElementContent = function () {
                var text = Q.coalesce(this.options.text, this.value);
                // if isLocalText is set, text is actually a local text key
                if (this.options.isLocalText)
                    text = Q.text(text);
                // don't html encode if isHtml option is true
                if (this.options.isHtml)
                    this.element.html(text);
                else
                    this.element.text(text);
            };
            /**
             * By implementing ISetEditValue interface, we allow this editor to display its field value.
             * But only do this when our text content is not explicitly set in options
             */
            StaticTextBlock.prototype.setEditValue = function (source, property) {
                if (this.options.text == null) {
                    this.value = Q.coalesce(this.options.text, source[property.name]);
                    this.updateElementContent();
                }
            };
            StaticTextBlock = __decorate([
                Serenity.Decorators.element("<div/>"),
                Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
            ], StaticTextBlock);
            return StaticTextBlock;
        }(Serenity.Widget));
        Extensions.StaticTextBlock = StaticTextBlock;
    })(Extensions = Serenity.Extensions || (Serenity.Extensions = {}));
})(Serenity || (Serenity = {}));
//# sourceMappingURL=index.js.map