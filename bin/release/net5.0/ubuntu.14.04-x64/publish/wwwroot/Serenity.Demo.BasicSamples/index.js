var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var BasicSamplesService;
            (function (BasicSamplesService) {
                BasicSamplesService.baseUrl = 'Serenity.Demo.BasicSamples';
                [
                    'OrdersByShipper'
                ].forEach(function (x) {
                    BasicSamplesService[x] = function (r, s, o) {
                        return Q.serviceRequest(BasicSamplesService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(BasicSamplesService = BasicSamples.BasicSamplesService || (BasicSamples.BasicSamplesService = {}));
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var ChangingLookupTextForm = /** @class */ (function (_super) {
                __extends(ChangingLookupTextForm, _super);
                function ChangingLookupTextForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ChangingLookupTextForm.init) {
                        ChangingLookupTextForm.init = true;
                        var s = Serenity;
                        var w0 = BasicSamples.ChangingLookupTextEditor;
                        var w1 = Serenity.DecimalEditor;
                        var w2 = Serenity.IntegerEditor;
                        Q.initFormType(ChangingLookupTextForm, [
                            'ProductID', w0,
                            'UnitPrice', w1,
                            'Quantity', w2,
                            'Discount', w1
                        ]);
                    }
                    return _this;
                }
                ChangingLookupTextForm.formKey = 'BasicSamples.ChangingLookupText';
                return ChangingLookupTextForm;
            }(Serenity.PrefixedContext));
            BasicSamples.ChangingLookupTextForm = ChangingLookupTextForm;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var FilteredLookupInDetailForm = /** @class */ (function (_super) {
                __extends(FilteredLookupInDetailForm, _super);
                function FilteredLookupInDetailForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!FilteredLookupInDetailForm.init) {
                        FilteredLookupInDetailForm.init = true;
                        var s = Serenity;
                        var w0 = Demo.Northwind.CustomerEditor;
                        var w1 = Serenity.DateEditor;
                        var w2 = Serenity.LookupEditor;
                        var w3 = BasicSamples.FilteredLookupDetailEditor;
                        Q.initFormType(FilteredLookupInDetailForm, [
                            'CustomerID', w0,
                            'OrderDate', w1,
                            'CategoryID', w2,
                            'DetailList', w3
                        ]);
                    }
                    return _this;
                }
                FilteredLookupInDetailForm.formKey = 'BasicSamples.FilteredLookupInDetail';
                return FilteredLookupInDetailForm;
            }(Serenity.PrefixedContext));
            BasicSamples.FilteredLookupInDetailForm = FilteredLookupInDetailForm;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var HardcodedValuesForm = /** @class */ (function (_super) {
                __extends(HardcodedValuesForm, _super);
                function HardcodedValuesForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!HardcodedValuesForm.init) {
                        HardcodedValuesForm.init = true;
                        var s = Serenity;
                        var w0 = BasicSamples.HardcodedValuesEditor;
                        Q.initFormType(HardcodedValuesForm, [
                            'SomeValue', w0
                        ]);
                    }
                    return _this;
                }
                HardcodedValuesForm.formKey = 'BasicSamples.HarcodedValues';
                return HardcodedValuesForm;
            }(Serenity.PrefixedContext));
            BasicSamples.HardcodedValuesForm = HardcodedValuesForm;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var InlineImageInGridColumns = /** @class */ (function () {
                function InlineImageInGridColumns() {
                }
                InlineImageInGridColumns.columnsKey = 'BasicSamples.InlineImageInGrid';
                return InlineImageInGridColumns;
            }());
            BasicSamples.InlineImageInGridColumns = InlineImageInGridColumns;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var LookupFilterByMultipleForm = /** @class */ (function (_super) {
                __extends(LookupFilterByMultipleForm, _super);
                function LookupFilterByMultipleForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!LookupFilterByMultipleForm.init) {
                        LookupFilterByMultipleForm.init = true;
                        var s = Serenity;
                        var w0 = Serenity.StringEditor;
                        var w1 = Serenity.ImageUploadEditor;
                        var w2 = Serenity.BooleanEditor;
                        var w3 = Serenity.LookupEditor;
                        var w4 = BasicSamples.ProduceSeafoodCategoryEditor;
                        var w5 = Serenity.DecimalEditor;
                        var w6 = Serenity.IntegerEditor;
                        Q.initFormType(LookupFilterByMultipleForm, [
                            'ProductName', w0,
                            'ProductImage', w1,
                            'Discontinued', w2,
                            'SupplierID', w3,
                            'CategoryID', w4,
                            'QuantityPerUnit', w0,
                            'UnitPrice', w5,
                            'UnitsInStock', w6,
                            'UnitsOnOrder', w6,
                            'ReorderLevel', w6
                        ]);
                    }
                    return _this;
                }
                LookupFilterByMultipleForm.formKey = 'BasicSamples.LookupFilterByMultiple';
                return LookupFilterByMultipleForm;
            }(Serenity.PrefixedContext));
            BasicSamples.LookupFilterByMultipleForm = LookupFilterByMultipleForm;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var PopulateLinkedDataForm = /** @class */ (function (_super) {
                __extends(PopulateLinkedDataForm, _super);
                function PopulateLinkedDataForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!PopulateLinkedDataForm.init) {
                        PopulateLinkedDataForm.init = true;
                        var s = Serenity;
                        var w0 = Demo.Northwind.CustomerEditor;
                        var w1 = Serenity.StringEditor;
                        var w2 = Serenity.DateEditor;
                        var w3 = Serenity.LookupEditor;
                        var w4 = Demo.Northwind.OrderDetailsEditor;
                        Q.initFormType(PopulateLinkedDataForm, [
                            'CustomerID', w0,
                            'CustomerContactName', w1,
                            'CustomerContactTitle', w1,
                            'CustomerCity', w1,
                            'CustomerRegion', w1,
                            'CustomerCountry', w1,
                            'CustomerPhone', w1,
                            'CustomerFax', w1,
                            'OrderDate', w2,
                            'RequiredDate', w2,
                            'EmployeeID', w3,
                            'DetailList', w4
                        ]);
                    }
                    return _this;
                }
                PopulateLinkedDataForm.formKey = 'BasicSamples.PopulateLinkedData';
                return PopulateLinkedDataForm;
            }(Serenity.PrefixedContext));
            BasicSamples.PopulateLinkedDataForm = PopulateLinkedDataForm;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var StaticTextBlockForm = /** @class */ (function (_super) {
                __extends(StaticTextBlockForm, _super);
                function StaticTextBlockForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!StaticTextBlockForm.init) {
                        StaticTextBlockForm.init = true;
                        var s = Serenity;
                        var w0 = Serenity.Extensions.StaticTextBlock;
                        var w1 = Serenity.StringEditor;
                        Q.initFormType(StaticTextBlockForm, [
                            'StaticText', w0,
                            'SomeInput', w1,
                            'HtmlList', w0,
                            'FromLocalText', w0,
                            'DisplayFieldValue', w0
                        ]);
                    }
                    return _this;
                }
                StaticTextBlockForm.formKey = 'BasicSamples.StaticTextBlock';
                return StaticTextBlockForm;
            }(Serenity.PrefixedContext));
            BasicSamples.StaticTextBlockForm = StaticTextBlockForm;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var chartColors = ['#4E79A7', '#A0CBE8', '#F28E2B', '#FFBE7D', '#59A14F', '#8CD17D', '#B6992D', '#F1CE63', '#499894', '#86BCB6',
                '#E15759', '#FF9D9A', '#79706E', '#BAB0AC', '#D37295', '#FABFD2', '#B07AA1', '#D4A6C8', '#9D7660', '#D7B5A6'];
            var ChartInDialog = /** @class */ (function (_super) {
                __extends(ChartInDialog, _super);
                function ChartInDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ChartInDialog_1 = ChartInDialog;
                ChartInDialog.initializePage = function () {
                    $(function () {
                        $('#LaunchDialogButton').click(function (e) {
                            (new ChartInDialog_1()).dialogOpen();
                        });
                    });
                };
                ChartInDialog.prototype.onDialogOpen = function () {
                    var _this = this;
                    _super.prototype.onDialogOpen.call(this);
                    BasicSamples.BasicSamplesService.OrdersByShipper({}, function (response) {
                        _this.areaChart = new Chart(document.getElementById(_this.idPrefix + 'Chart'), {
                            type: "bar",
                            data: {
                                labels: response.Values.map(function (x) { return x.Month; }),
                                datasets: response.ShipperKeys.map(function (shipperKey, shipperIdx) { return ({
                                    label: response.ShipperLabels[shipperIdx],
                                    fill: true,
                                    backgroundColor: chartColors[shipperIdx % chartColors.length],
                                    data: response.Values.map(function (x, ix) { return response.Values[ix][shipperKey]; })
                                }); })
                            }
                        });
                    });
                };
                ChartInDialog.prototype.getTemplate = function () {
                    return "<canvas id='~_Chart'></div>";
                };
                ChartInDialog.prototype.getDialogOptions = function () {
                    var opt = _super.prototype.getDialogOptions.call(this);
                    opt.title = 'Orders by Shipper';
                    return opt;
                };
                var ChartInDialog_1;
                ChartInDialog = ChartInDialog_1 = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.resizable(),
                    Serenity.Decorators.maximizable()
                ], ChartInDialog);
                return ChartInDialog;
            }(Serenity.TemplatedDialog));
            BasicSamples.ChartInDialog = ChartInDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var CloneableEntityDialog = /** @class */ (function (_super) {
                __extends(CloneableEntityDialog, _super);
                function CloneableEntityDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                CloneableEntityDialog.prototype.updateInterface = function () {
                    // by default cloneButton is hidden in base UpdateInterface method
                    _super.prototype.updateInterface.call(this);
                    // here we show it if it is edit mode (not new)
                    this.cloneButton.toggle(this.isEditMode());
                };
                /**
                 * Overriding this method is optional to customize cloned entity
                 */
                CloneableEntityDialog.prototype.getCloningEntity = function () {
                    var clone = _super.prototype.getCloningEntity.call(this);
                    // add (Clone) suffix if it's not already added
                    var suffix = ' (Clone)';
                    if (!Q.endsWith(clone.ProductName || '', suffix)) {
                        clone.ProductName = (clone.ProductName || '') + suffix;
                    }
                    // it's better to clear image for this sample
                    // otherwise we would have to create a temporary copy of it
                    // and upload
                    clone.ProductImage = null;
                    // let's clear fields not logical to be cloned
                    clone.UnitsInStock = 0;
                    clone.UnitsOnOrder = 0;
                    return clone;
                };
                CloneableEntityDialog = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.maximizable()
                ], CloneableEntityDialog);
                return CloneableEntityDialog;
            }(Demo.Northwind.ProductDialog));
            BasicSamples.CloneableEntityDialog = CloneableEntityDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
             */
            var CloneableEntityGrid = /** @class */ (function (_super) {
                __extends(CloneableEntityGrid, _super);
                function CloneableEntityGrid() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                CloneableEntityGrid.prototype.getColumnsKey = function () { return Demo.Northwind.ProductColumns.columnsKey; };
                CloneableEntityGrid.prototype.getDialogType = function () { return BasicSamples.CloneableEntityDialog; };
                CloneableEntityGrid.prototype.getIdProperty = function () { return Demo.Northwind.ProductRow.idProperty; };
                CloneableEntityGrid.prototype.getLocalTextPrefix = function () { return Demo.Northwind.ProductRow.localTextPrefix; };
                CloneableEntityGrid.prototype.getService = function () { return Demo.Northwind.ProductService.baseUrl; };
                CloneableEntityGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CloneableEntityGrid);
                return CloneableEntityGrid;
            }(Serenity.EntityGrid));
            BasicSamples.CloneableEntityGrid = CloneableEntityGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var DefaultValuesInNewGrid = /** @class */ (function (_super) {
                __extends(DefaultValuesInNewGrid, _super);
                function DefaultValuesInNewGrid(container) {
                    return _super.call(this, container) || this;
                }
                /**
                 * This method is called when New Item button is clicked.
                 * By default, it calls EditItem with an empty entity.
                 * This is a good place to fill in default values for New Item button.
                 */
                DefaultValuesInNewGrid.prototype.addButtonClick = function () {
                    this.editItem({
                        CustomerID: 'ANTON',
                        RequiredDate: Q.formatDate(new Date(), 'yyyy-MM-dd'),
                        EmployeeID: Demo.Northwind.EmployeeRow.getLookup().items
                            .filter(function (x) { return x.FullName === 'Robert King'; })[0].EmployeeID,
                        ShipVia: Demo.Northwind.ShipperRow.getLookup().items
                            .filter(function (x) { return x.CompanyName === 'Speedy Express'; })[0].ShipperID
                    });
                };
                DefaultValuesInNewGrid.prototype.getButtons = function () {
                    var _this = this;
                    // preserving default New Item button
                    var buttons = _super.prototype.getButtons.call(this);
                    buttons.push({
                        title: 'Add Order from the Queen',
                        cssClass: 'add-button',
                        onClick: function () {
                            // using EditItem method as a shortcut to create a new Order dialog,
                            // bind to its events, load our order row, and open dialog
                            _this.editItem({
                                CustomerID: 'QUEEN',
                                EmployeeID: Demo.Northwind.EmployeeRow.getLookup().items
                                    .filter(function (x) { return x.FullName === 'Nancy Davolio'; })[0].EmployeeID,
                                ShipVia: Demo.Northwind.ShipperRow.getLookup().items
                                    .filter(function (x) { return x.CompanyName === 'United Package'; })[0].ShipperID
                            });
                        }
                    });
                    buttons.push({
                        title: 'Add Order with 5 Chai by Laura', cssClass: 'add-note-button',
                        onClick: function () {
                            // we could use EditItem here too, but for demonstration
                            // purposes we are manually creating dialog this time
                            var dlg = new Demo.Northwind.OrderDialog();
                            // let grid watch for changes to manually created dialog, 
                            // so when a new item is saved, grid can refresh itself
                            _this.initDialog(dlg);
                            // get a reference to product Chai
                            var chai = Demo.Northwind.ProductRow.getLookup().items
                                .filter(function (x) { return x.ProductName === 'Chai'; })[0];
                            // LoadEntityAndOpenDialog, loads an OrderRow 
                            // to dialog and opens it
                            var lauraCallahanID = Demo.Northwind.EmployeeRow.getLookup().items
                                .filter(function (x) { return x.FullName === 'Laura Callahan'; })[0].EmployeeID;
                            dlg.loadEntityAndOpenDialog({
                                CustomerID: 'GOURL',
                                EmployeeID: lauraCallahanID,
                                DetailList: [{
                                        ProductID: chai.ProductID,
                                        ProductName: chai.ProductName,
                                        UnitPrice: chai.UnitPrice,
                                        Quantity: 5,
                                        LineTotal: chai.UnitPrice * 5
                                    }]
                            });
                        }
                    });
                    return buttons;
                };
                DefaultValuesInNewGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], DefaultValuesInNewGrid);
                return DefaultValuesInNewGrid;
            }(Demo.Northwind.OrderGrid));
            BasicSamples.DefaultValuesInNewGrid = DefaultValuesInNewGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var DialogBoxes;
            (function (DialogBoxes) {
                function initializePage() {
                    confirmDialogButtons();
                    confirmWithCustomTitle();
                    information();
                    success();
                    warning();
                    alert();
                    alertWithHtmlContent();
                }
                DialogBoxes.initializePage = initializePage;
                function confirmDialogButtons() {
                    // here we demonstrate how you can detect which button user has clicked
                    // second parameter is Yes handler and it is called only when user clicks Yes.
                    // third parameter has some additional options, that you should only use when needed
                    $('#ConfirmDialogButtons').click(function () {
                        Q.confirm("Click one of buttons, or close dialog with [x] on top right, i'll tell you what you did!", function () {
                            Q.notifySuccess("You clicked YES. Great!");
                        }, {
                            onNo: function () {
                                Q.notifyInfo("You clicked NO. Why?");
                            },
                            onCancel: function () {
                                Q.notifyError("You clicked X. Operation is cancelled. Will try again?");
                            }
                        });
                    });
                }
                function confirmWithCustomTitle() {
                    $('#ConfirmWithCustomTitle').click(function () {
                        Q.confirm("This confirmation has a custom title", function () {
                            Q.notifySuccess("Allright!");
                        }, {
                            title: 'Some Custom Confirmation Title'
                        });
                    });
                }
                function information() {
                    $('#Information').click(function () {
                        Q.information("What a nice day", function () {
                            Q.notifySuccess("No problem!");
                        });
                    });
                }
                function success() {
                    $('#Success').click(function () {
                        Q.success("Operation complete", function () {
                            Q.notifySuccess("Well done!");
                        });
                    });
                }
                function warning() {
                    $('#Warning').click(function () {
                        Q.warning("Hey, be careful!");
                    });
                }
                function alert() {
                    $('#Alert').click(function () {
                        Q.alert("Houston, we got a problem!");
                    });
                }
                function alertWithHtmlContent() {
                    $('#AlertWithHtmlContent').click(function () {
                        Q.alert("<h4>Here is some HTML content!</h4>" +
                            "<ul><li>Item 1</li><li>Item 2</li >" +
                            "<li>Visit <a href='http://serenity.is/' target='_blank' style='color: #ddf'>http://serenity.is/</a>!</li></ul>", {
                            htmlEncode: false
                        });
                    });
                }
            })(DialogBoxes = BasicSamples.DialogBoxes || (BasicSamples.DialogBoxes = {}));
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
             */
            var EntityDialogAsPanel = /** @class */ (function (_super) {
                __extends(EntityDialogAsPanel, _super);
                function EntityDialogAsPanel() {
                    return _super.call(this) || this;
                }
                EntityDialogAsPanel.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    this.deleteButton.hide();
                    this.applyChangesButton.hide();
                };
                EntityDialogAsPanel.prototype.onSaveSuccess = function (response) {
                    this.showSaveSuccessMessage(response);
                };
                EntityDialogAsPanel = __decorate([
                    Serenity.Decorators.panel()
                ], EntityDialogAsPanel);
                return EntityDialogAsPanel;
            }(Demo.Northwind.OrderDialog));
            BasicSamples.EntityDialogAsPanel = EntityDialogAsPanel;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var GetInsertedRecordIdDialog = /** @class */ (function (_super) {
                __extends(GetInsertedRecordIdDialog, _super);
                function GetInsertedRecordIdDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * This method is called after the save request to service
                 * is completed succesfully. This can be an insert or update.
                 *
                 * @param response Response that is returned from server
                 */
                GetInsertedRecordIdDialog.prototype.onSaveSuccess = function (response) {
                    // check that this is an insert
                    if (this.isNew()) {
                        Q.notifySuccess("Just inserted a category with ID: " + response.EntityId);
                        // you could also open a new dialog
                        // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);
                        // but let's better load inserted record using Retrieve service
                        Demo.Northwind.CategoryService.Retrieve({
                            EntityId: response.EntityId
                        }, function (resp) {
                            Q.notifyInfo("Looks like the category you added has name: " + resp.Entity.CategoryName);
                        });
                    }
                };
                GetInsertedRecordIdDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], GetInsertedRecordIdDialog);
                return GetInsertedRecordIdDialog;
            }(Demo.Northwind.CategoryDialog));
            BasicSamples.GetInsertedRecordIdDialog = GetInsertedRecordIdDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
             */
            var GetInsertedRecordIdGrid = /** @class */ (function (_super) {
                __extends(GetInsertedRecordIdGrid, _super);
                function GetInsertedRecordIdGrid(container) {
                    return _super.call(this, container) || this;
                }
                GetInsertedRecordIdGrid.prototype.getDialogType = function () { return BasicSamples.GetInsertedRecordIdDialog; };
                GetInsertedRecordIdGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], GetInsertedRecordIdGrid);
                return GetInsertedRecordIdGrid;
            }(Demo.Northwind.CategoryGrid));
            BasicSamples.GetInsertedRecordIdGrid = GetInsertedRecordIdGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
             */
            var OtherFormInTabDialog = /** @class */ (function (_super) {
                __extends(OtherFormInTabDialog, _super);
                function OtherFormInTabDialog() {
                    var _this = _super.call(this) || this;
                    // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                    // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                    _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                        idPrefix: _this.idPrefix + "_Customer_",
                        items: Q.getForm(Demo.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                        useCategories: true
                    });
                    // this is just a helper to access editors if needed
                    _this.customerForm = new Demo.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                    // initialize validator for customer form
                    _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                    var selfChange = 0;
                    // creating another toolbar for customer tab that will only save Customer
                    new Serenity.Toolbar(_this.byId("CustomerToolbar"), {
                        buttons: [{
                                cssClass: "apply-changes-button",
                                title: Q.text("Controls.EntityDialog.SaveButton"),
                                onClick: function () {
                                    var id = _this.getCustomerID();
                                    if (!id)
                                        return;
                                    if (!_this.customerValidator.form())
                                        return;
                                    // prepare an empty entity to serialize customer details into
                                    var c = {};
                                    _this.customerPropertyGrid.save(c);
                                    Demo.Northwind.CustomerService.Update({
                                        EntityId: id,
                                        Entity: c
                                    }, function (response) {
                                        // reload customer list just in case
                                        Q.reloadLookup(Demo.Northwind.CustomerRow.lookupKey);
                                        // set flag that we are triggering customer select change event
                                        // otherwise active tab will change to first one
                                        selfChange++;
                                        try {
                                            // trigger change so that customer select updates its text
                                            // in case if Company Name is changed
                                            _this.form.CustomerID.element.change();
                                        }
                                        finally {
                                            selfChange--;
                                        }
                                        Q.notifySuccess("Saved customer details");
                                    });
                                }
                            }]
                    });
                    _this.form.CustomerID.change(function (e) {
                        if (selfChange)
                            return;
                        var customerID = _this.getCustomerID();
                        Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                        if (!customerID) {
                            // no customer is selected, just load an empty entity
                            _this.customerPropertyGrid.load({});
                            return;
                        }
                        // load selected customer into customer form by calling CustomerService
                        Demo.Northwind.CustomerService.Retrieve({
                            EntityId: customerID
                        }, function (response) {
                            _this.customerPropertyGrid.load(response.Entity);
                        });
                    });
                    return _this;
                }
                OtherFormInTabDialog.prototype.getCustomerID = function () {
                    var customerID = this.form.CustomerID.value;
                    if (Q.isEmptyOrNull(customerID))
                        return null;
                    // unfortunately, CustomerID (a string) used in this form and 
                    // the ID (auto increment ID) are different, so we need to 
                    // find numeric ID from customer lookups. 
                    // you'll probably won't need this step.
                    return Q.first(Demo.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
                };
                OtherFormInTabDialog.prototype.loadEntity = function (entity) {
                    _super.prototype.loadEntity.call(this, entity);
                    Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
                };
                OtherFormInTabDialog.prototype.getTemplate = function () {
                    return "<div id=\"~_Tabs\" class=\"s-DialogContent\">\n    <ul>\n        <li><a href=\"#~_TabOrder\"><span>Order</span></a></li>\n        <li><a href=\"#~_TabCustomer\"><span>Customer</span></a></li>\n    </ul>\n    <div id=\"~_TabOrder\" class=\"tab-pane s-TabOrder\">\n        <div id=\"~_Toolbar\" class=\"s-DialogToolbar\">\n        </div>\n        <div class=\"s-Form\">\n            <form id=\"~_Form\" action=\"\">\n                <div class=\"fieldset\">\n                    <div id=\"~_PropertyGrid\"></div>\n                    <div class=\"clear\"></div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div id=\"~_TabCustomer\" class=\"tab-pane s-TabCustomer\">\n        <div id=\"~_CustomerToolbar\" class=\"s-DialogToolbar\">\n        </div>\n        <div class=\"s-Form\">\n            <form id=\"~_CustomerForm\" action=\"\">\n                <div class=\"fieldset\">\n                    <div id=\"~_CustomerPropertyGrid\"></div>\n                    <div class=\"clear\"></div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";
                };
                OtherFormInTabDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], OtherFormInTabDialog);
                return OtherFormInTabDialog;
            }(Demo.Northwind.OrderDialog));
            BasicSamples.OtherFormInTabDialog = OtherFormInTabDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
             */
            var OtherFormInTabGrid = /** @class */ (function (_super) {
                __extends(OtherFormInTabGrid, _super);
                function OtherFormInTabGrid(container) {
                    return _super.call(this, container) || this;
                }
                OtherFormInTabGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormInTabDialog; };
                OtherFormInTabGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], OtherFormInTabGrid);
                return OtherFormInTabGrid;
            }(Demo.Northwind.OrderGrid));
            BasicSamples.OtherFormInTabGrid = OtherFormInTabGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
             * With single toolbar for all forms
             */
            var OtherFormOneBarDialog = /** @class */ (function (_super) {
                __extends(OtherFormOneBarDialog, _super);
                function OtherFormOneBarDialog() {
                    var _this = _super.call(this) || this;
                    _this.selfChange = 0;
                    // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                    // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                    _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                        items: Q.getForm(Demo.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID' && x.name != "NoteList"; }),
                        idPrefix: _this.idPrefix + "_Customer_",
                        useCategories: true
                    });
                    // this is just a helper to access editors if needed
                    _this.customerForm = new Demo.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                    // initialize validator for customer form
                    _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                    _this.form.CustomerID.change(function (e) {
                        if (_this.selfChange)
                            return;
                        var customerID = _this.getCustomerID();
                        Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                        if (!customerID) {
                            // no customer is selected, just load an empty entity
                            _this.customerPropertyGrid.load({});
                            return;
                        }
                        // load selected customer into customer form by calling CustomerService
                        Demo.Northwind.CustomerService.Retrieve({
                            EntityId: customerID
                        }, function (response) {
                            _this.customerPropertyGrid.load(response.Entity);
                        });
                    });
                    return _this;
                }
                OtherFormOneBarDialog.prototype.getCustomerID = function () {
                    var customerID = this.form.CustomerID.value;
                    if (Q.isEmptyOrNull(customerID))
                        return null;
                    // unfortunately, CustomerID (a string) used in this form and 
                    // the ID (auto increment ID) are different, so we need to 
                    // find numeric ID from customer lookups. 
                    // you'll probably won't need this step.
                    return Q.first(Demo.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
                };
                OtherFormOneBarDialog.prototype.loadEntity = function (entity) {
                    _super.prototype.loadEntity.call(this, entity);
                    Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
                };
                // Save the customer and the order 
                OtherFormOneBarDialog.prototype.saveCustomer = function (callback, onSuccess) {
                    var _this = this;
                    var id = this.getCustomerID();
                    if (!id) {
                        // If id of Customer isn't present, we save only Order entity
                        onSuccess(null);
                    }
                    else {
                        // Get current tab
                        var currTab = Serenity.TabsExtensions.activeTabKey(this.tabs);
                        // Select the correct tab and validate to see the error message in tab
                        Serenity.TabsExtensions.selectTab(this.tabs, "Customer");
                        if (!this.customerValidator.form()) {
                            return false;
                        }
                        // Re-select initial tab
                        Serenity.TabsExtensions.selectTab(this.tabs, currTab);
                        // prepare an empty entity to serialize customer details into
                        var c = {};
                        this.customerPropertyGrid.save(c);
                        Demo.Northwind.CustomerService.Update({
                            EntityId: id,
                            Entity: c
                        }, function (response) {
                            // reload customer list just in case
                            Q.reloadLookup(Demo.Northwind.CustomerRow.lookupKey);
                            // set flag that we are triggering customer select change event
                            // otherwise active tab will change to first one
                            _this.selfChange++;
                            try {
                                // trigger change so that customer select updates its text
                                // in case if Company Name is changed
                                _this.form.CustomerID.element.change();
                            }
                            finally {
                                _this.selfChange--;
                            }
                            onSuccess(response);
                        });
                    }
                    return true;
                };
                // Call super.save to save Order entity
                OtherFormOneBarDialog.prototype.saveOrder = function (callback) {
                    _super.prototype.save.call(this, callback);
                };
                OtherFormOneBarDialog.prototype.saveAll = function (callback) {
                    var _this = this;
                    this.saveCustomer(callback, 
                    // If customer successa, save Order entity
                    function (resp) { return _this.saveOrder(callback); });
                };
                // This is called when save/update button is pressed
                OtherFormOneBarDialog.prototype.save = function (callback) {
                    this.saveAll(callback);
                };
                OtherFormOneBarDialog.prototype.getTemplate = function () {
                    return "<div id=\"~_Toolbar\" class=\"s-DialogToolbar\">\n</div>\n<div id=\"~_Tabs\" class=\"s-DialogContent\">\n    <ul>\n        <li><a href=\"#~_TabOrder\"><span>Order</span></a></li>\n        <li><a href=\"#~_TabCustomer\"><span>Customer</span></a></li>\n    </ul>\n    <div id=\"~_TabOrder\" class=\"tab-pane s-TabOrder\">\n        <div class=\"s-Form\">\n            <form id=\"~_Form\" action=\"\">\n                <div class=\"fieldset\">\n                    <div id=\"~_PropertyGrid\"></div>\n                    <div class=\"clear\"></div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div id=\"~_TabCustomer\" class=\"tab-pane s-TabCustomer\">\n        <div class=\"s-Form\">\n            <form id=\"~_CustomerForm\" action=\"\">\n                <div class=\"fieldset\">\n                    <div id=\"~_CustomerPropertyGrid\"></div>\n                    <div class=\"clear\"></div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";
                };
                OtherFormOneBarDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], OtherFormOneBarDialog);
                return OtherFormOneBarDialog;
            }(Demo.Northwind.OrderDialog));
            BasicSamples.OtherFormOneBarDialog = OtherFormOneBarDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
             */
            var OtherFormInTabOneBarGrid = /** @class */ (function (_super) {
                __extends(OtherFormInTabOneBarGrid, _super);
                function OtherFormInTabOneBarGrid(container) {
                    return _super.call(this, container) || this;
                }
                OtherFormInTabOneBarGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormOneBarDialog; };
                OtherFormInTabOneBarGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], OtherFormInTabOneBarGrid);
                return OtherFormInTabOneBarGrid;
            }(Demo.Northwind.OrderGrid));
            BasicSamples.OtherFormInTabOneBarGrid = OtherFormInTabOneBarGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var PopulateLinkedDataDialog = /** @class */ (function (_super) {
                __extends(PopulateLinkedDataDialog, _super);
                function PopulateLinkedDataDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new BasicSamples.PopulateLinkedDataForm(_this.idPrefix);
                    // "changeSelect2" is only fired when user changes the selection
                    // but "change" is fired when dialog sets customer on load too
                    // so we prefer "changeSelect2", as initial customer details 
                    // will get populated by initial load, we don't want extra call
                    _this.form.CustomerID.changeSelect2(function (e) {
                        var customerID = _this.form.CustomerID.value;
                        if (Q.isEmptyOrNull(customerID)) {
                            _this.setCustomerDetails({});
                            return;
                        }
                        // in northwind CustomerID is a string like "ALFKI", 
                        // while its actual integer ID value is 1.
                        // so we need to convert customer ID to ID.
                        // you won't have to do this conversion with your tables
                        var id = Q.first(Demo.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
                        Demo.Northwind.CustomerService.Retrieve({
                            EntityId: id
                        }, function (response) {
                            _this.setCustomerDetails(response.Entity);
                        });
                    });
                    return _this;
                }
                PopulateLinkedDataDialog.prototype.getFormKey = function () { return BasicSamples.PopulateLinkedDataForm.formKey; };
                PopulateLinkedDataDialog.prototype.getIdProperty = function () { return Demo.Northwind.OrderRow.idProperty; };
                PopulateLinkedDataDialog.prototype.getLocalTextPrefix = function () { return Demo.Northwind.OrderRow.localTextPrefix; };
                PopulateLinkedDataDialog.prototype.getNameProperty = function () { return Demo.Northwind.OrderRow.nameProperty; };
                PopulateLinkedDataDialog.prototype.getService = function () { return Demo.Northwind.OrderService.baseUrl; };
                PopulateLinkedDataDialog.prototype.setCustomerDetails = function (details) {
                    this.form.CustomerCity.value = details.City;
                    this.form.CustomerContactName.value = details.ContactName;
                    this.form.CustomerContactTitle.value = details.ContactTitle;
                    this.form.CustomerCountry.value = details.Country;
                    this.form.CustomerFax.value = details.Fax;
                    this.form.CustomerPhone.value = details.Phone;
                    this.form.CustomerRegion.value = details.Region;
                };
                /**
                 * This dialog will have CSS class "s-PopulateLinkedDataDialog"
                 * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
                 * This has no effect other than looks on populate linked data demonstration
                 */
                PopulateLinkedDataDialog.prototype.getCssClass = function () {
                    return _super.prototype.getCssClass.call(this) + " s-OrderDialog s-Demo-Northwind-OrderDialog";
                };
                PopulateLinkedDataDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], PopulateLinkedDataDialog);
                return PopulateLinkedDataDialog;
            }(Serenity.EntityDialog));
            BasicSamples.PopulateLinkedDataDialog = PopulateLinkedDataDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * A subclass of OrderGrid that launches PopulateLinkedDataDialog
             */
            var PopulateLinkedDataGrid = /** @class */ (function (_super) {
                __extends(PopulateLinkedDataGrid, _super);
                function PopulateLinkedDataGrid(container) {
                    return _super.call(this, container) || this;
                }
                PopulateLinkedDataGrid.prototype.getDialogType = function () { return BasicSamples.PopulateLinkedDataDialog; };
                PopulateLinkedDataGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], PopulateLinkedDataGrid);
                return PopulateLinkedDataGrid;
            }(Demo.Northwind.OrderGrid));
            BasicSamples.PopulateLinkedDataGrid = PopulateLinkedDataGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var ReadOnlyDialog = /** @class */ (function (_super) {
                __extends(ReadOnlyDialog, _super);
                function ReadOnlyDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * This is the method that gets list of tool
                 * buttons to be created in a dialog.
                 *
                 * Here we'll remove save and close button, and
                 * apply changes buttons.
                 */
                ReadOnlyDialog.prototype.getToolbarButtons = function () {
                    var buttons = _super.prototype.getToolbarButtons.call(this);
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                    // We could also remove delete button here, but for demonstration 
                    // purposes we'll hide it in another method (updateInterface)
                    // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
                    return buttons;
                };
                /**
                 * This method is a good place to update states of
                 * interface elements. It is called after dialog
                 * is initialized and an entity is loaded into dialog.
                 * This is also called in new item mode.
                 */
                ReadOnlyDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    // finding all editor elements and setting their readonly attribute
                    // note that this helper method only works with basic inputs, 
                    // some editors require widget based set readonly overload (setReadOnly)
                    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                    // remove required asterisk (*)
                    this.element.find('sup').hide();
                    // here is a way to locate a button by its css class
                    // note that this method is not available in 
                    // getToolbarButtons() because buttons are not 
                    // created there yet!
                    // 
                    // this.toolbar.findButton('delete-button').hide();
                    // entity dialog also has reference variables to
                    // its default buttons, lets use them to hide delete button
                    this.deleteButton.hide();
                    // we could also hide save buttons just like delete button,
                    // but they are null now as we removed them in getToolbarButtons()
                    // if we didn't we could write like this:
                    // 
                    // this.applyChangesButton.hide();
                    // this.saveAndCloseButton.hide();
                    // instead of hiding, we could disable a button
                    // 
                    // this.deleteButton.toggleClass('disabled', true);
                };
                /**
                 * This method is called when dialog title needs to be updated.
                 * Base class returns something like 'Edit xyz' for edit mode,
                 * and 'New xyz' for new record mode.
                 *
                 * But our dialog is readonly, so we should change it to 'View xyz'
                 */
                ReadOnlyDialog.prototype.getEntityTitle = function () {
                    if (!this.isEditMode()) {
                        // we shouldn't hit here, but anyway for demo...
                        return "How did you manage to open this dialog in new record mode?";
                    }
                    else {
                        // entitySingular is type of record this dialog edits. something like 'Supplier'.
                        // you could hardcode it, but this is for demonstration
                        var entityType = _super.prototype.getEntitySingular.call(this);
                        // get name field value of record this dialog edits
                        var name_1 = this.getEntityNameFieldValue() || "";
                        // you could use Q.format with a local text, but again demo...
                        return 'View ' + entityType + " (" + name_1 + ")";
                    }
                };
                /**
                 * This method is actually the one that calls getEntityTitle()
                 * and updates the dialog title. We could do it here too...
                 */
                ReadOnlyDialog.prototype.updateTitle = function () {
                    _super.prototype.updateTitle.call(this);
                    // remove super.updateTitle() call above and uncomment 
                    // below line if you'd like to use this version
                    // 
                    // this.dialogTitle = 'View Supplier (' + this.getEntityNameFieldValue() + ')';
                };
                ReadOnlyDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], ReadOnlyDialog);
                return ReadOnlyDialog;
            }(Demo.Northwind.SupplierDialog));
            BasicSamples.ReadOnlyDialog = ReadOnlyDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * A readonly grid that launches ReadOnlyDialog
             */
            var ReadOnlyGrid = /** @class */ (function (_super) {
                __extends(ReadOnlyGrid, _super);
                function ReadOnlyGrid(container) {
                    return _super.call(this, container) || this;
                }
                ReadOnlyGrid.prototype.getDialogType = function () { return BasicSamples.ReadOnlyDialog; };
                /**
                 * Removing add button from grid using its css class
                 */
                ReadOnlyGrid.prototype.getButtons = function () {
                    var buttons = _super.prototype.getButtons.call(this);
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                    return buttons;
                };
                ReadOnlyGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], ReadOnlyGrid);
                return ReadOnlyGrid;
            }(Demo.Northwind.SupplierGrid));
            BasicSamples.ReadOnlyGrid = ReadOnlyGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var SerialAutoNumberDialog = /** @class */ (function (_super) {
                __extends(SerialAutoNumberDialog, _super);
                function SerialAutoNumberDialog() {
                    var _this = _super.call(this) || this;
                    _this.form.CustomerID.element.on('keyup', function (e) {
                        // only auto number when a key between 'A' and 'Z' is pressed
                        if (e.which >= 65 && e.which <= 90)
                            _this.getNextNumber();
                    });
                    return _this;
                }
                SerialAutoNumberDialog.prototype.afterLoadEntity = function () {
                    _super.prototype.afterLoadEntity.call(this);
                    // fill next number in new record mode
                    if (this.isNew())
                        this.getNextNumber();
                };
                SerialAutoNumberDialog.prototype.getNextNumber = function () {
                    var _this = this;
                    var val = Q.trimToNull(this.form.CustomerID.value);
                    // we will only get next number when customer ID is empty or 1 character in length
                    if (!val || val.length <= 1) {
                        // if no customer ID yet (new record mode probably) use 'C' as a prefix
                        var prefix = (val || 'C').toUpperCase();
                        // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                        Serenity.Demo.Northwind.CustomerService.GetNextNumber({
                            Prefix: prefix,
                            Length: 5 // we want service to search for and return serials of 5 in length
                        }, function (response) {
                            _this.form.CustomerID.value = response.Serial;
                            // this is to mark numerical part after prefix
                            _this.form.CustomerID.element[0].setSelectionRange(prefix.length, response.Serial.length);
                        });
                    }
                };
                SerialAutoNumberDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], SerialAutoNumberDialog);
                return SerialAutoNumberDialog;
            }(Demo.Northwind.CustomerDialog));
            BasicSamples.SerialAutoNumberDialog = SerialAutoNumberDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
             */
            var SerialAutoNumberGrid = /** @class */ (function (_super) {
                __extends(SerialAutoNumberGrid, _super);
                function SerialAutoNumberGrid(container) {
                    return _super.call(this, container) || this;
                }
                SerialAutoNumberGrid.prototype.getDialogType = function () { return BasicSamples.SerialAutoNumberDialog; };
                SerialAutoNumberGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], SerialAutoNumberGrid);
                return SerialAutoNumberGrid;
            }(Demo.Northwind.CustomerGrid));
            BasicSamples.SerialAutoNumberGrid = SerialAutoNumberGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var ChangingLookupTextDialog = /** @class */ (function (_super) {
                __extends(ChangingLookupTextDialog, _super);
                function ChangingLookupTextDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new BasicSamples.ChangingLookupTextForm(_this.idPrefix);
                    _this.form.ProductID.changeSelect2(function (e) {
                        var productID = Q.toId(_this.form.ProductID.value);
                        if (productID != null) {
                            _this.form.UnitPrice.value = Demo.Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                        }
                    });
                    _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                        var price = _this.form.UnitPrice.value;
                        var quantity = _this.form.Quantity.value;
                        var discount = _this.form.Discount.value;
                        if (price != null && quantity != null && discount != null &&
                            discount > 0 && discount >= price * quantity) {
                            return "Discount can't be higher than total price!";
                        }
                    });
                    return _this;
                }
                ChangingLookupTextDialog.prototype.getFormKey = function () { return BasicSamples.ChangingLookupTextForm.formKey; };
                ChangingLookupTextDialog.prototype.getLocalTextPrefix = function () { return Demo.Northwind.OrderDetailRow.localTextPrefix; };
                ChangingLookupTextDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    this.toolbar.findButton('apply-changes-button').hide();
                    this.toolbar.findButton('save-and-close-button').hide();
                };
                ChangingLookupTextDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], ChangingLookupTextDialog);
                return ChangingLookupTextDialog;
            }(Serenity.Extensions.GridEditorDialog));
            BasicSamples.ChangingLookupTextDialog = ChangingLookupTextDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Our custom product editor type
             */
            var ChangingLookupTextEditor = /** @class */ (function (_super) {
                __extends(ChangingLookupTextEditor, _super);
                function ChangingLookupTextEditor(container, options) {
                    return _super.call(this, container, options) || this;
                }
                ChangingLookupTextEditor.prototype.getLookupKey = function () {
                    return Demo.Northwind.ProductRow.lookupKey;
                };
                ChangingLookupTextEditor.prototype.getItemText = function (item, lookup) {
                    return _super.prototype.getItemText.call(this, item, lookup) +
                        ' (' +
                        '$' + Q.formatNumber(item.UnitPrice, '#,##0.00') +
                        ', ' + (item.UnitsInStock > 0 ? (item.UnitsInStock + ' in stock') : 'out of stock') +
                        ', ' + (item.SupplierCompanyName || 'Unknown') +
                        ')';
                };
                ChangingLookupTextEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], ChangingLookupTextEditor);
                return ChangingLookupTextEditor;
            }(Serenity.LookupEditorBase));
            BasicSamples.ChangingLookupTextEditor = ChangingLookupTextEditor;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Our subclass of order detail dialog with a CategoryID property
             * that will be used to set CascadeValue of product editor
             */
            var FilteredLookupOrderDetailDialog = /** @class */ (function (_super) {
                __extends(FilteredLookupOrderDetailDialog, _super);
                function FilteredLookupOrderDetailDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Demo.Northwind.OrderDetailForm(_this.idPrefix);
                    // we can set cascade field in constructor
                    // we could also use FilterField but in this case, when CategoryID is null
                    // lookup editor would show all products in any category
                    _this.form.ProductID.cascadeField = "CategoryID" /* CategoryID */;
                    return _this;
                    // but CategoryID value is not yet available here as detail editor will set it 
                    // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
                }
                /**
                 * This method is called just before an entity is loaded to dialog
                 * This is also called for new record mode with an empty entity
                 */
                FilteredLookupOrderDetailDialog.prototype.beforeLoadEntity = function (entity) {
                    _super.prototype.beforeLoadEntity.call(this, entity);
                    // setting cascade value here
                    // make sure you have [LookupInclude] on CategoryID property of ProductRow
                    // otherwise this field won't be available in lookup script (will always be null),
                    // so can't be filtered and you'll end up with an empty product list.
                    this.form.ProductID.cascadeValue = this.categoryID;
                };
                FilteredLookupOrderDetailDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], FilteredLookupOrderDetailDialog);
                return FilteredLookupOrderDetailDialog;
            }(Demo.Northwind.OrderDetailDialog));
            BasicSamples.FilteredLookupOrderDetailDialog = FilteredLookupOrderDetailDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Our subclass of Order Details editor with a CategoryID property
             */
            var FilteredLookupDetailEditor = /** @class */ (function (_super) {
                __extends(FilteredLookupDetailEditor, _super);
                function FilteredLookupDetailEditor(container) {
                    return _super.call(this, container) || this;
                }
                FilteredLookupDetailEditor.prototype.getDialogType = function () { return BasicSamples.FilteredLookupOrderDetailDialog; };
                /**
                 * This method is called to initialize an edit dialog created by
                 * grid editor when Add button or an edit link is clicked
                 * We have an opportunity here to pass CategoryID to edit dialog
                 */
                FilteredLookupDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                    _super.prototype.initEntityDialog.call(this, itemType, dialog);
                    // passing category ID from grid editor to detail dialog
                    dialog.categoryID = this.categoryID;
                };
                FilteredLookupDetailEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], FilteredLookupDetailEditor);
                return FilteredLookupDetailEditor;
            }(Demo.Northwind.OrderDetailsEditor));
            BasicSamples.FilteredLookupDetailEditor = FilteredLookupDetailEditor;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Basic order dialog with a category selection
             */
            var FilteredLookupInDetailDialog = /** @class */ (function (_super) {
                __extends(FilteredLookupInDetailDialog, _super);
                function FilteredLookupInDetailDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new BasicSamples.FilteredLookupInDetailForm(_this.idPrefix);
                    _this.form.CategoryID.change(function (e) {
                        _this.form.DetailList.categoryID = Q.toId(_this.form.CategoryID.value);
                    });
                    return _this;
                }
                FilteredLookupInDetailDialog.prototype.getFormKey = function () { return BasicSamples.FilteredLookupInDetailForm.formKey; };
                FilteredLookupInDetailDialog.prototype.getIdProperty = function () { return Demo.Northwind.OrderRow.idProperty; };
                FilteredLookupInDetailDialog.prototype.getLocalTextPrefix = function () { return Demo.Northwind.OrderRow.localTextPrefix; };
                FilteredLookupInDetailDialog.prototype.getNameProperty = function () { return Demo.Northwind.OrderRow.nameProperty; };
                FilteredLookupInDetailDialog.prototype.getService = function () { return Demo.Northwind.OrderService.baseUrl; };
                FilteredLookupInDetailDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], FilteredLookupInDetailDialog);
                return FilteredLookupInDetailDialog;
            }(Serenity.EntityDialog));
            BasicSamples.FilteredLookupInDetailDialog = FilteredLookupInDetailDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
             */
            var FilteredLookupInDetailGrid = /** @class */ (function (_super) {
                __extends(FilteredLookupInDetailGrid, _super);
                function FilteredLookupInDetailGrid(container) {
                    return _super.call(this, container) || this;
                }
                FilteredLookupInDetailGrid.prototype.getDialogType = function () { return BasicSamples.FilteredLookupInDetailDialog; };
                FilteredLookupInDetailGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], FilteredLookupInDetailGrid);
                return FilteredLookupInDetailGrid;
            }(Demo.Northwind.OrderGrid));
            BasicSamples.FilteredLookupInDetailGrid = FilteredLookupInDetailGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * This is our custom product dialog that uses a different product form
             * (LookupFilterByMultipleForm) with our special category editor.
             */
            var LookupFilterByMultipleDialog = /** @class */ (function (_super) {
                __extends(LookupFilterByMultipleDialog, _super);
                function LookupFilterByMultipleDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                LookupFilterByMultipleDialog.prototype.getFormKey = function () { return BasicSamples.LookupFilterByMultipleForm.formKey; };
                LookupFilterByMultipleDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], LookupFilterByMultipleDialog);
                return LookupFilterByMultipleDialog;
            }(Demo.Northwind.ProductDialog));
            BasicSamples.LookupFilterByMultipleDialog = LookupFilterByMultipleDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
             */
            var LookupFilterByMultipleGrid = /** @class */ (function (_super) {
                __extends(LookupFilterByMultipleGrid, _super);
                function LookupFilterByMultipleGrid(container) {
                    return _super.call(this, container) || this;
                }
                LookupFilterByMultipleGrid.prototype.getColumnsKey = function () { return Demo.Northwind.ProductColumns.columnsKey; };
                LookupFilterByMultipleGrid.prototype.getDialogType = function () { return BasicSamples.LookupFilterByMultipleDialog; };
                LookupFilterByMultipleGrid.prototype.getIdProperty = function () { return Demo.Northwind.ProductRow.idProperty; };
                LookupFilterByMultipleGrid.prototype.getLocalTextPrefix = function () { return Demo.Northwind.ProductRow.localTextPrefix; };
                LookupFilterByMultipleGrid.prototype.getService = function () { return Demo.Northwind.ProductService.baseUrl; };
                /**
                 * This method is called just before List request is sent to service.
                 * You have an opportunity here to cancel request or modify it.
                 * Here we'll add a custom criteria to list request.
                 */
                LookupFilterByMultipleGrid.prototype.onViewSubmit = function () {
                    if (!_super.prototype.onViewSubmit.call(this)) {
                        return false;
                    }
                    // this has no relation to our lookup editor but as we'll allow picking only 
                    // categories of Produce and Seafood in product dialog, it's better to show
                    // only products from these categories in grid too
                    var request = this.view.params;
                    request.Criteria = Serenity.Criteria.and(request.Criteria, [['CategoryName'], 'in', [['Produce', 'Seafood']]]);
                    // brackets used are important above, NOT ['CategoryName', 'in', ['Produce', 'Seafood']]
                    return true;
                };
                LookupFilterByMultipleGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], LookupFilterByMultipleGrid);
                return LookupFilterByMultipleGrid;
            }(Serenity.EntityGrid));
            BasicSamples.LookupFilterByMultipleGrid = LookupFilterByMultipleGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * This is our category editor that will show only categories of Produce and
             * Seafood. We are subclassing LookupEditorBase which also LookupEditor
             * derives from.
             *
             * After compiling and transforming templates, this editor type will be
             * available in server side to use in our LookupFilterByMultipleForm,
             * which is a version of ProductForm that uses our custom editor.
             */
            var ProduceSeafoodCategoryEditor = /** @class */ (function (_super) {
                __extends(ProduceSeafoodCategoryEditor, _super);
                function ProduceSeafoodCategoryEditor(container, opt) {
                    return _super.call(this, container, opt) || this;
                }
                /**
                 * Normally LookupEditor requires a lookup key to determine which set of
                 * lookup data to show in editor. As our editor will only show category
                 * data, we lock it to category lookup key.
                 */
                ProduceSeafoodCategoryEditor.prototype.getLookupKey = function () {
                    return Demo.Northwind.CategoryRow.lookupKey;
                };
                /**
                 * Here we are filtering by category name but you could filter by any field.
                 * Just make sure the fields you filter on has [LookupInclude] attribute on them,
                 * otherwise their value will be null in client side as they are not sent back
                 * from server in lookup script.
                 */
                ProduceSeafoodCategoryEditor.prototype.getItems = function (lookup) {
                    return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                        return x.CategoryName === 'Produce' || x.CategoryName === 'Seafood';
                    });
                };
                ProduceSeafoodCategoryEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], ProduceSeafoodCategoryEditor);
                return ProduceSeafoodCategoryEditor;
            }(Serenity.LookupEditorBase));
            BasicSamples.ProduceSeafoodCategoryEditor = ProduceSeafoodCategoryEditor;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var HardcodedValuesDialog = /** @class */ (function (_super) {
                __extends(HardcodedValuesDialog, _super);
                function HardcodedValuesDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new BasicSamples.HardcodedValuesForm(_this.idPrefix);
                    _this.dialogTitle = "Please select some value";
                    _this.form.SomeValue.changeSelect2(function (e) {
                        Q.notifySuccess("You selected item with key: " + _this.form.SomeValue.value);
                    });
                    return _this;
                }
                HardcodedValuesDialog.prototype.getFormKey = function () { return BasicSamples.HardcodedValuesForm.formKey; };
                HardcodedValuesDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], HardcodedValuesDialog);
                return HardcodedValuesDialog;
            }(Serenity.PropertyDialog));
            BasicSamples.HardcodedValuesDialog = HardcodedValuesDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            /**
             * Our select editor with hardcoded values.
             *
             * When you define a new editor type, make sure you build
             * and transform templates for it to be available
             * in server side forms, e.g. [HardCodedValuesEditor]
             */
            var HardcodedValuesEditor = /** @class */ (function (_super) {
                __extends(HardcodedValuesEditor, _super);
                function HardcodedValuesEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    // add option accepts a key (id) value and display text value
                    _this.addOption("key1", "Text 1");
                    _this.addOption("key2", "Text 2");
                    // you may also use addItem which accepts a Select2Item parameter
                    _this.addItem({
                        id: "key3",
                        text: "Text 3"
                    });
                    // don't let selecting this one (disabled)
                    _this.addItem({
                        id: "key4",
                        text: "Text 4",
                        disabled: true
                    });
                    return _this;
                }
                HardcodedValuesEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], HardcodedValuesEditor);
                return HardcodedValuesEditor;
            }(Serenity.Select2Editor));
            BasicSamples.HardcodedValuesEditor = HardcodedValuesEditor;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var StaticTextBlockDialog = /** @class */ (function (_super) {
                __extends(StaticTextBlockDialog, _super);
                function StaticTextBlockDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new BasicSamples.StaticTextBlockForm(_this.idPrefix);
                    _this.dialogTitle = "A form with static text blocks";
                    return _this;
                }
                StaticTextBlockDialog.prototype.getFormKey = function () { return BasicSamples.StaticTextBlockForm.formKey; };
                /**
                 * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
                 * If this was an EntityDialog, your field value would be originating from server side entity.
                 */
                StaticTextBlockDialog.prototype.loadInitialEntity = function () {
                    this.propertyGrid.load({
                        DisplayFieldValue: 'This content comes from <b>the value</b> of <em>DisplayFieldValue</em> field.'
                    });
                };
                StaticTextBlockDialog.prototype.getDialogOptions = function () {
                    var opt = _super.prototype.getDialogOptions.call(this);
                    opt.width = 650;
                    return opt;
                };
                StaticTextBlockDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], StaticTextBlockDialog);
                return StaticTextBlockDialog;
            }(Serenity.PropertyDialog));
            BasicSamples.StaticTextBlockDialog = StaticTextBlockDialog;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var CustomLinksInGrid = /** @class */ (function (_super) {
                __extends(CustomLinksInGrid, _super);
                function CustomLinksInGrid(container) {
                    return _super.call(this, container) || this;
                }
                /**
                 * We override getColumns() to change format functions for some columns.
                 * You could also write them as formatter classes, and use them at server side
                 */
                CustomLinksInGrid.prototype.getColumns = function () {
                    var columns = _super.prototype.getColumns.call(this);
                    Q.first(columns, function (x) { return x.field == "CustomerCompanyName" /* CustomerCompanyName */; }).format =
                        function (ctx) { return "<a href=\"javascript:;\" class=\"customer-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                    Q.first(columns, function (x) { return x.field == "OrderDate" /* OrderDate */; }).format =
                        function (ctx) { return "<a href=\"javascript:;\" class=\"date-link\">" + Q.formatDate(ctx.value) + "</a>"; };
                    Q.first(columns, function (x) { return x.field == "EmployeeFullName" /* EmployeeFullName */; }).format =
                        function (ctx) { return "<a href=\"javascript:;\" class=\"employee-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                    Q.first(columns, function (x) { return x.field == "ShipCountry" /* ShipCountry */; }).format =
                        function (ctx) { return "<a href=\"javascript:;\" class=\"ship-country-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                    return columns;
                };
                CustomLinksInGrid.prototype.onClick = function (e, row, cell) {
                    // let base grid handle clicks for its edit links
                    _super.prototype.onClick.call(this, e, row, cell);
                    // if base grid already handled, we shouldn"t handle it again
                    if (e.isDefaultPrevented()) {
                        return;
                    }
                    // get reference to current item
                    var item = this.itemAt(row);
                    // get reference to clicked element
                    var target = $(e.target);
                    if (target.hasClass("customer-link")) {
                        e.preventDefault();
                        var message = Q.format("<p>You have clicked an order from customer: {0}.</p>" +
                            "<p>If you click Yes, i'll open Customer dialog.</p>" +
                            "<p>If you click No, i'll open Order dialog.</p>", Q.htmlEncode(item.CustomerCompanyName));
                        Q.confirm(message, function () {
                            // CustomerDialog doesn't use CustomerID but ID (identity)
                            // so need to find customer to get its actual ID
                            var customer = Q.first(Demo.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == item.CustomerID; });
                            new Demo.Northwind.CustomerDialog().loadByIdAndOpenDialog(customer.ID);
                        }, {
                            htmlEncode: false,
                            onNo: function () {
                                new Demo.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                            }
                        });
                    }
                    else if (target.hasClass("date-link")) {
                        e.preventDefault();
                        var ordersInSameDate = Q.count(this.view.getItems(), function (x) { return x.OrderDate == item.OrderDate; });
                        Q.notifyInfo("You clicked an order from date " +
                            Q.formatDate(item.OrderDate) + ". There are " +
                            ordersInSameDate + " orders from the same date that is loaded in grid at the moment");
                    }
                    else if (target.hasClass("employee-link")) {
                        e.preventDefault();
                        Q.notifySuccess("You clicked an employee name, " +
                            "so i've opened a new Order Dialog from same customer " +
                            "with that employee prepopulated!");
                        new Demo.Northwind.OrderDialog().loadEntityAndOpenDialog({
                            CustomerID: item.CustomerID,
                            EmployeeID: item.EmployeeID
                        });
                    }
                    else if (target.hasClass("ship-country-link")) {
                        e.preventDefault();
                        Q.notifySuccess("Let's filter the grid to orders from " + item.ShipCountry);
                        var countryFilter = this.findQuickFilter(Serenity.LookupEditor, "ShipCountry" /* ShipCountry */);
                        countryFilter.value = item.ShipCountry;
                        this.refresh();
                    }
                };
                /**
                 * This method is called for columns with [EditLink] attribute,
                 * but only for edit links of this grid's own item type.
                 * It is also called by Add Product button with a NULL entityOrId
                 * parameter so we should check that entityOrId is a string
                 * to be sure it is originating from a link.
                 *
                 * As we changed format for other columns, this will only be called
                 * for links in remaining OrderID column
                 */
                CustomLinksInGrid.prototype.editItem = function (entityOrId) {
                    // check that this is an edit link click, not add button, ID is always a string
                    if (typeof entityOrId == "string") {
                        // convert ID to an integer, and find order with that ID
                        var item = this.view.getItemById(Q.toId(entityOrId));
                        // date is a ISO string, so need to parse it first
                        var date = Q.formatDate(item.OrderDate);
                        // ask for confirmation
                        Q.confirm(Q.format("You clicked edit link for order with ID: {0} and Date: {1}. Should i open that order?", item.OrderID, date), function () {
                            new Demo.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                        });
                    }
                    else {
                        _super.prototype.editItem.call(this, entityOrId);
                    }
                };
                CustomLinksInGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CustomLinksInGrid);
                return CustomLinksInGrid;
            }(Demo.Northwind.OrderGrid));
            BasicSamples.CustomLinksInGrid = CustomLinksInGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var RowSelectionGrid = /** @class */ (function (_super) {
                __extends(RowSelectionGrid, _super);
                function RowSelectionGrid(container) {
                    return _super.call(this, container) || this;
                }
                RowSelectionGrid.prototype.getColumnsKey = function () { return Demo.Northwind.SupplierColumns.columnsKey; };
                RowSelectionGrid.prototype.getDialogType = function () { return Demo.Northwind.SupplierDialog; };
                RowSelectionGrid.prototype.getIdProperty = function () { return Demo.Northwind.SupplierRow.idProperty; };
                RowSelectionGrid.prototype.getLocalTextPrefix = function () { return Demo.Northwind.SupplierRow.localTextPrefix; };
                RowSelectionGrid.prototype.getService = function () { return Demo.Northwind.SupplierService.baseUrl; };
                RowSelectionGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], RowSelectionGrid);
                return RowSelectionGrid;
            }(Serenity.Extensions.SelectableEntityGrid));
            BasicSamples.RowSelectionGrid = RowSelectionGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var GridFilteredByCriteria = /** @class */ (function (_super) {
                __extends(GridFilteredByCriteria, _super);
                function GridFilteredByCriteria(container) {
                    return _super.call(this, container) || this;
                }
                GridFilteredByCriteria.prototype.getColumnsKey = function () { return Demo.Northwind.ProductColumns.columnsKey; };
                GridFilteredByCriteria.prototype.getDialogType = function () { return Demo.Northwind.ProductDialog; };
                GridFilteredByCriteria.prototype.getIdProperty = function () { return Demo.Northwind.ProductRow.idProperty; };
                GridFilteredByCriteria.prototype.getLocalTextPrefix = function () { return Demo.Northwind.ProductRow.localTextPrefix; };
                GridFilteredByCriteria.prototype.getService = function () { return Demo.Northwind.ProductService.baseUrl; };
                GridFilteredByCriteria.prototype.onViewSubmit = function () {
                    // only continue if base class returns true (didn't cancel request)
                    if (!_super.prototype.onViewSubmit.call(this)) {
                        return false;
                    }
                    // view object is the data source for grid (SlickRemoteView)
                    // this is an EntityGrid so its Params object is a ListRequest
                    var request = this.view.params;
                    // list request has a Criteria parameter
                    // we AND criteria here to existing one because 
                    // otherwise we might clear filter set by 
                    // an edit filter dialog if any.
                    request.Criteria = Serenity.Criteria.and(request.Criteria, [['UnitsInStock'], '>', 10], [['CategoryName'], '!=', 'Condiments'], [['Discontinued'], '=', 0]);
                    // TypeScript doesn't support operator overloading
                    // so we had to use array syntax above to build criteria.
                    // Make sure you write
                    // [['Field'], '>', 10] (which means field A is greater than 10)
                    // not 
                    // ['A', '>', 10] (which means string 'A' is greater than 10
                    return true;
                };
                GridFilteredByCriteria = __decorate([
                    Serenity.Decorators.registerClass()
                ], GridFilteredByCriteria);
                return GridFilteredByCriteria;
            }(Serenity.EntityGrid));
            BasicSamples.GridFilteredByCriteria = GridFilteredByCriteria;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var GroupingAndSummariesInGrid = /** @class */ (function (_super) {
                __extends(GroupingAndSummariesInGrid, _super);
                function GroupingAndSummariesInGrid(container) {
                    return _super.call(this, container) || this;
                }
                GroupingAndSummariesInGrid.prototype.getColumnsKey = function () { return Demo.Northwind.ProductColumns.columnsKey; };
                GroupingAndSummariesInGrid.prototype.getDialogType = function () { return BasicSamples.LookupFilterByMultipleDialog; };
                GroupingAndSummariesInGrid.prototype.getIdProperty = function () { return Demo.Northwind.ProductRow.idProperty; };
                GroupingAndSummariesInGrid.prototype.getLocalTextPrefix = function () { return Demo.Northwind.ProductRow.localTextPrefix; };
                GroupingAndSummariesInGrid.prototype.getService = function () { return Demo.Northwind.ProductService.baseUrl; };
                GroupingAndSummariesInGrid.prototype.createSlickGrid = function () {
                    var grid = _super.prototype.createSlickGrid.call(this);
                    // need to register this plugin for grouping or you'll have errors
                    grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                    this.view.setSummaryOptions({
                        aggregators: [
                            new Slick.Aggregators.Avg('UnitPrice'),
                            new Slick.Aggregators.Sum('UnitsInStock'),
                            new Slick.Aggregators.Max('UnitsOnOrder'),
                            new Slick.Aggregators.Avg('ReorderLevel')
                        ]
                    });
                    return grid;
                };
                GroupingAndSummariesInGrid.prototype.getColumns = function () {
                    var columns = _super.prototype.getColumns.call(this);
                    Q.first(columns, function (x) { return x.field === 'UnitsOnOrder'; })
                        .groupTotalsFormatter = function (totals, col) {
                        return (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');
                    };
                    Q.first(columns, function (x) { return x.field === 'ReorderLevel'; })
                        .groupTotalsFormatter = function (totals, col) {
                        return (totals.avg ? ('avg: ' + Q.coalesce(Q.formatNumber(totals.avg[col.field], '0.'), '')) : '');
                    };
                    return columns;
                };
                GroupingAndSummariesInGrid.prototype.getSlickOptions = function () {
                    var opt = _super.prototype.getSlickOptions.call(this);
                    opt.showFooterRow = true;
                    return opt;
                };
                GroupingAndSummariesInGrid.prototype.usePager = function () {
                    return false;
                };
                GroupingAndSummariesInGrid.prototype.getButtons = function () {
                    var _this = this;
                    return [{
                            title: 'Group By Category',
                            cssClass: 'expand-all-button',
                            onClick: function () { return _this.view.setGrouping([{
                                    getter: 'CategoryName'
                                }]); }
                        },
                        {
                            title: 'Group By Category and Supplier',
                            cssClass: 'expand-all-button',
                            onClick: function () { return _this.view.setGrouping([{
                                    formatter: function (x) { return 'Category: ' + x.value + ' (' + x.count + ' items)'; },
                                    getter: 'CategoryName'
                                }, {
                                    formatter: function (x) { return 'Supplier: ' + x.value + ' (' + x.count + ' items)'; },
                                    getter: 'SupplierCompanyName'
                                }]); }
                        }, {
                            title: 'No Grouping',
                            cssClass: 'collapse-all-button',
                            onClick: function () { return _this.view.setGrouping([]); }
                        }];
                };
                GroupingAndSummariesInGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], GroupingAndSummariesInGrid);
                return GroupingAndSummariesInGrid;
            }(Serenity.EntityGrid));
            BasicSamples.GroupingAndSummariesInGrid = GroupingAndSummariesInGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var InitialValuesForQuickFilters = /** @class */ (function (_super) {
                __extends(InitialValuesForQuickFilters, _super);
                function InitialValuesForQuickFilters(container) {
                    return _super.call(this, container) || this;
                }
                /**
                 * This method is called to get list of quick filters to be created for this grid.
                 * By default, it returns quick filter objects corresponding to properties that
                 * have a [QuickFilter] attribute at server side OrderColumns.cs
                 */
                InitialValuesForQuickFilters.prototype.getQuickFilters = function () {
                    // get quick filter list from base class
                    var filters = _super.prototype.getQuickFilters.call(this);
                    // quick filter init method is a good place to set initial
                    // value for a quick filter editor, just after it is created
                    Q.first(filters, function (x) { return x.field == "OrderDate" /* OrderDate */; }).init = function (w) {
                        // w is a reference to the editor for this quick filter widget
                        // here we cast it to DateEditor, and set its value as date.
                        // note that in Javascript, months are 0 based, so date below
                        // is actually 2016-05-01
                        w.valueAsDate = new Date(2010, 4, 1);
                        // setting start date was simple. but this quick filter is actually
                        // a combination of two date editors. to get reference to second one,
                        // need to find its next sibling element by its class
                        var endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                        endDate.valueAsDate = new Date(2020, 6, 1);
                    };
                    Q.first(filters, function (x) { return x.field == "ShippingState" /* ShippingState */; }).init = function (w) {
                        // enum editor has a string value, so need to call toString()
                        w.value = Demo.Northwind.OrderShippingState.NotShipped.toString();
                    };
                    return filters;
                };
                /**
                 * This method is another possible place to modify quick filter widgets.
                 * It is where the quick filter widgets are actually created.
                 *
                 * By default, it calls getQuickFilters() then renders UI for these
                 * quick filters.
                 *
                 * We could use getQuickFilters() method for ShipVia too,
                 * but this is for demonstration purposes
                 */
                InitialValuesForQuickFilters.prototype.createQuickFilters = function () {
                    // let base class to create quick filters first
                    _super.prototype.createQuickFilters.call(this);
                    // find a quick filter widget by its field name
                    this.findQuickFilter(Serenity.LookupEditor, "ShipVia" /* ShipVia */).values = ["1", "2"];
                };
                InitialValuesForQuickFilters = __decorate([
                    Serenity.Decorators.registerClass()
                ], InitialValuesForQuickFilters);
                return InitialValuesForQuickFilters;
            }(Demo.Northwind.OrderGrid));
            BasicSamples.InitialValuesForQuickFilters = InitialValuesForQuickFilters;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var InlineActionGrid = /** @class */ (function (_super) {
                __extends(InlineActionGrid, _super);
                function InlineActionGrid(container) {
                    return _super.call(this, container) || this;
                }
                InlineActionGrid.prototype.getColumns = function () {
                    var columns = _super.prototype.getColumns.call(this);
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                    columns.splice(1, 0, {
                        field: 'View Details',
                        name: '',
                        format: function (ctx) { return "<a class=\"inline-action view-details\" title=\"view details\">\n                    <i class=\"fa fa-search\"></i></a>"; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                    columns.splice(2, 0, {
                        field: 'New Order',
                        name: '',
                        format: function (ctx) { return "<a class=\"inline-action new-order text-purple\" title=\"new order\">\n                    <i class=\"fa fa-cart-plus\"></i></a>"; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                    return columns;
                };
                InlineActionGrid.prototype.onClick = function (e, row, cell) {
                    var _this = this;
                    _super.prototype.onClick.call(this, e, row, cell);
                    if (e.isDefaultPrevented())
                        return;
                    var item = this.itemAt(row);
                    var target = $(e.target);
                    // if user clicks "i" element, e.g. icon
                    if (target.parent().hasClass('inline-action'))
                        target = target.parent();
                    if (target.hasClass('inline-action')) {
                        e.preventDefault();
                        if (target.hasClass('delete-row')) {
                            Q.confirm('Delete record?', function () {
                                Demo.Northwind.CustomerService.Delete({
                                    EntityId: item.ID,
                                }, function (response) {
                                    _this.refresh();
                                });
                            });
                        }
                        else if (target.hasClass('view-details')) {
                            this.editItem(item.ID);
                        }
                        else if (target.hasClass('new-order')) {
                            var dlg = new Demo.Northwind.OrderDialog();
                            this.initDialog(dlg);
                            dlg.loadEntityAndOpenDialog({
                                CustomerID: item.CustomerID
                            });
                        }
                    }
                };
                InlineActionGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], InlineActionGrid);
                return InlineActionGrid;
            }(Demo.Northwind.CustomerGrid));
            BasicSamples.InlineActionGrid = InlineActionGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var InlineImageFormatter = /** @class */ (function () {
                function InlineImageFormatter() {
                }
                InlineImageFormatter.prototype.format = function (ctx) {
                    var file = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value);
                    if (!file || !file.length)
                        return "";
                    var href = Q.resolveUrl("~/upload/" + file);
                    if (this.thumb) {
                        var parts = file.split('.');
                        file = parts.slice(0, parts.length - 1).join('.') + '_t.jpg';
                    }
                    var src = Q.resolveUrl('~/upload/' + file);
                    return "<a class=\"inline-image\" target='_blank' href=\"" + href + "\">" +
                        ("<img src=\"" + src + "\" style='max-height: 145px; max-width: 100%;' /></a>");
                };
                InlineImageFormatter.prototype.initializeColumn = function (column) {
                    if (this.fileProperty) {
                        column.referencedFields = column.referencedFields || [];
                        column.referencedFields.push(this.fileProperty);
                    }
                };
                __decorate([
                    Serenity.Decorators.option()
                ], InlineImageFormatter.prototype, "fileProperty", void 0);
                __decorate([
                    Serenity.Decorators.option()
                ], InlineImageFormatter.prototype, "thumb", void 0);
                InlineImageFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], InlineImageFormatter);
                return InlineImageFormatter;
            }());
            BasicSamples.InlineImageFormatter = InlineImageFormatter;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var InlineImageInGrid = /** @class */ (function (_super) {
                __extends(InlineImageInGrid, _super);
                function InlineImageInGrid(container) {
                    return _super.call(this, container) || this;
                }
                InlineImageInGrid.prototype.getColumnsKey = function () { return BasicSamples.InlineImageInGridColumns.columnsKey; };
                InlineImageInGrid.prototype.getDialogType = function () { return Demo.Northwind.ProductDialog; };
                InlineImageInGrid.prototype.getIdProperty = function () { return Demo.Northwind.ProductRow.idProperty; };
                InlineImageInGrid.prototype.getLocalTextPrefix = function () { return Demo.Northwind.ProductRow.localTextPrefix; };
                InlineImageInGrid.prototype.getService = function () { return Demo.Northwind.ProductService.baseUrl; };
                InlineImageInGrid.prototype.getSlickOptions = function () {
                    var opt = _super.prototype.getSlickOptions.call(this);
                    opt.rowHeight = 150;
                    return opt;
                };
                InlineImageInGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], InlineImageInGrid);
                return InlineImageInGrid;
            }(Serenity.EntityGrid));
            BasicSamples.InlineImageInGrid = InlineImageInGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var RemovingAddButton = /** @class */ (function (_super) {
                __extends(RemovingAddButton, _super);
                function RemovingAddButton(container) {
                    return _super.call(this, container) || this;
                }
                /**
                 * This method is called to get list of buttons to be created.
                 */
                RemovingAddButton.prototype.getButtons = function () {
                    // call base method to get list of buttons
                    // by default, base entity grid adds a few buttons, 
                    // add, refresh, column selection in order.
                    var buttons = _super.prototype.getButtons.call(this);
                    // here is several methods to remove add button
                    // only one is enabled, others are commented
                    // METHOD 1
                    // we would be able to simply return an empty button list,
                    // but this would also remove all other buttons
                    // return [];
                    // METHOD 2
                    // remove by splicing (something like delete by index)
                    // here we hard code add button index (not nice!)
                    // buttons.splice(0, 1);
                    // METHOD 3 - recommended
                    // remove by splicing, but this time find button index
                    // by its css class. it is the best and safer method
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                    return buttons;
                };
                RemovingAddButton = __decorate([
                    Serenity.Decorators.registerClass()
                ], RemovingAddButton);
                return RemovingAddButton;
            }(Demo.Northwind.SupplierGrid));
            BasicSamples.RemovingAddButton = RemovingAddButton;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var ViewWithoutIDGrid = /** @class */ (function (_super) {
                __extends(ViewWithoutIDGrid, _super);
                function ViewWithoutIDGrid(container) {
                    var _this = _super.call(this, container) || this;
                    // this is our autoincrementing counter
                    _this.nextId = 1;
                    return _this;
                }
                ViewWithoutIDGrid.prototype.getColumnsKey = function () { return Demo.Northwind.SalesByCategoryColumns.columnsKey; };
                ViewWithoutIDGrid.prototype.getIdProperty = function () { return "__id"; };
                ViewWithoutIDGrid.prototype.getNameProperty = function () { return Demo.Northwind.SalesByCategoryRow.nameProperty; };
                ViewWithoutIDGrid.prototype.getLocalTextPrefix = function () { return Demo.Northwind.SalesByCategoryRow.localTextPrefix; };
                ViewWithoutIDGrid.prototype.getService = function () { return Demo.Northwind.SalesByCategoryService.baseUrl; };
                /**
                 * This method is called to preprocess data returned from the list service
                 */
                ViewWithoutIDGrid.prototype.onViewProcessData = function (response) {
                    response = _super.prototype.onViewProcessData.call(this, response);
                    // there is no __id property in SalesByCategoryRow but 
                    // this is javascript and we can set any property of an object
                    for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                        var x = _a[_i];
                        x.__id = this.nextId++;
                    }
                    return response;
                };
                ViewWithoutIDGrid.prototype.getButtons = function () {
                    return [];
                };
                ViewWithoutIDGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], ViewWithoutIDGrid);
                return ViewWithoutIDGrid;
            }(Serenity.EntityGrid));
            BasicSamples.ViewWithoutIDGrid = ViewWithoutIDGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var BasicSamples;
        (function (BasicSamples) {
            var WrappedHeadersGrid = /** @class */ (function (_super) {
                __extends(WrappedHeadersGrid, _super);
                function WrappedHeadersGrid(container) {
                    return _super.call(this, container) || this;
                }
                WrappedHeadersGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], WrappedHeadersGrid);
                return WrappedHeadersGrid;
            }(Demo.Northwind.OrderGrid));
            BasicSamples.WrappedHeadersGrid = WrappedHeadersGrid;
        })(BasicSamples = Demo.BasicSamples || (Demo.BasicSamples = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
//# sourceMappingURL=index.js.map