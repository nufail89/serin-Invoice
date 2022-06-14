var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CategoryColumns = /** @class */ (function () {
                function CategoryColumns() {
                }
                CategoryColumns.columnsKey = 'Northwind.Category';
                return CategoryColumns;
            }());
            Northwind.CategoryColumns = CategoryColumns;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CategoryForm = /** @class */ (function (_super) {
                __extends(CategoryForm, _super);
                function CategoryForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!CategoryForm.init) {
                        CategoryForm.init = true;
                        var s = Serenity;
                        var w0 = Serenity.StringEditor;
                        Q.initFormType(CategoryForm, [
                            'CategoryName', w0,
                            'Description', w0
                        ]);
                    }
                    return _this;
                }
                CategoryForm.formKey = 'Northwind.Category';
                return CategoryForm;
            }(Serenity.PrefixedContext));
            Northwind.CategoryForm = CategoryForm;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CategoryLangRow;
            (function (CategoryLangRow) {
                CategoryLangRow.idProperty = 'Id';
                CategoryLangRow.nameProperty = 'CategoryName';
                CategoryLangRow.localTextPrefix = 'Northwind.CategoryLang';
                CategoryLangRow.deletePermission = 'Northwind:General';
                CategoryLangRow.insertPermission = 'Northwind:General';
                CategoryLangRow.readPermission = 'Northwind:General';
                CategoryLangRow.updatePermission = 'Northwind:General';
            })(CategoryLangRow = Northwind.CategoryLangRow || (Northwind.CategoryLangRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CategoryLangService;
            (function (CategoryLangService) {
                CategoryLangService.baseUrl = 'Serenity.Demo.Northwind/CategoryLang';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    CategoryLangService[x] = function (r, s, o) {
                        return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CategoryLangService = Northwind.CategoryLangService || (Northwind.CategoryLangService = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CategoryRow;
            (function (CategoryRow) {
                CategoryRow.idProperty = 'CategoryID';
                CategoryRow.nameProperty = 'CategoryName';
                CategoryRow.localTextPrefix = 'Northwind.Category';
                CategoryRow.lookupKey = 'Northwind.Category';
                function getLookup() {
                    return Q.getLookup('Northwind.Category');
                }
                CategoryRow.getLookup = getLookup;
                CategoryRow.deletePermission = 'Northwind:General';
                CategoryRow.insertPermission = 'Northwind:General';
                CategoryRow.readPermission = 'Northwind:General';
                CategoryRow.updatePermission = 'Northwind:General';
            })(CategoryRow = Northwind.CategoryRow || (Northwind.CategoryRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CategoryService;
            (function (CategoryService) {
                CategoryService.baseUrl = 'Serenity.Demo.Northwind/Category';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    CategoryService[x] = function (r, s, o) {
                        return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CategoryService = Northwind.CategoryService || (Northwind.CategoryService = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerColumns = /** @class */ (function () {
                function CustomerColumns() {
                }
                CustomerColumns.columnsKey = 'Northwind.Customer';
                return CustomerColumns;
            }());
            Northwind.CustomerColumns = CustomerColumns;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerCustomerDemoRow;
            (function (CustomerCustomerDemoRow) {
                CustomerCustomerDemoRow.idProperty = 'ID';
                CustomerCustomerDemoRow.nameProperty = 'CustomerID';
                CustomerCustomerDemoRow.localTextPrefix = 'Northwind.CustomerCustomerDemo';
                CustomerCustomerDemoRow.deletePermission = 'Northwind:General';
                CustomerCustomerDemoRow.insertPermission = 'Northwind:General';
                CustomerCustomerDemoRow.readPermission = 'Northwind:General';
                CustomerCustomerDemoRow.updatePermission = 'Northwind:General';
            })(CustomerCustomerDemoRow = Northwind.CustomerCustomerDemoRow || (Northwind.CustomerCustomerDemoRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerDemographicRow;
            (function (CustomerDemographicRow) {
                CustomerDemographicRow.idProperty = 'ID';
                CustomerDemographicRow.nameProperty = 'CustomerTypeID';
                CustomerDemographicRow.localTextPrefix = 'Northwind.CustomerDemographic';
                CustomerDemographicRow.deletePermission = 'Northwind:General';
                CustomerDemographicRow.insertPermission = 'Northwind:General';
                CustomerDemographicRow.readPermission = 'Northwind:General';
                CustomerDemographicRow.updatePermission = 'Northwind:General';
            })(CustomerDemographicRow = Northwind.CustomerDemographicRow || (Northwind.CustomerDemographicRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerDetailsRow;
            (function (CustomerDetailsRow) {
                CustomerDetailsRow.idProperty = 'Id';
                CustomerDetailsRow.nameProperty = 'Email';
                CustomerDetailsRow.localTextPrefix = 'Northwind.CustomerDetails';
                CustomerDetailsRow.deletePermission = 'Northwind:General';
                CustomerDetailsRow.insertPermission = 'Northwind:General';
                CustomerDetailsRow.readPermission = 'Northwind:General';
                CustomerDetailsRow.updatePermission = 'Northwind:General';
            })(CustomerDetailsRow = Northwind.CustomerDetailsRow || (Northwind.CustomerDetailsRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerForm = /** @class */ (function (_super) {
                __extends(CustomerForm, _super);
                function CustomerForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!CustomerForm.init) {
                        CustomerForm.init = true;
                        var s = Serenity;
                        var w0 = Serenity.StringEditor;
                        var w1 = Serenity.LookupEditor;
                        var w2 = Northwind.NotesEditor;
                        var w3 = Serenity.DateEditor;
                        var w4 = Serenity.EmailAddressEditor;
                        var w5 = Serenity.BooleanEditor;
                        Q.initFormType(CustomerForm, [
                            'CustomerID', w0,
                            'CompanyName', w0,
                            'ContactName', w0,
                            'ContactTitle', w0,
                            'Representatives', w1,
                            'Address', w0,
                            'Country', w1,
                            'City', w1,
                            'Region', w0,
                            'PostalCode', w0,
                            'Phone', w0,
                            'Fax', w0,
                            'NoteList', w2,
                            'LastContactDate', w3,
                            'LastContactedBy', w1,
                            'Email', w4,
                            'SendBulletin', w5
                        ]);
                    }
                    return _this;
                }
                CustomerForm.formKey = 'Northwind.Customer';
                return CustomerForm;
            }(Serenity.PrefixedContext));
            Northwind.CustomerForm = CustomerForm;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerGrossSalesRow;
            (function (CustomerGrossSalesRow) {
                CustomerGrossSalesRow.nameProperty = 'ContactName';
                CustomerGrossSalesRow.localTextPrefix = 'Northwind.CustomerGrossSales';
                CustomerGrossSalesRow.deletePermission = 'Northwind:General';
                CustomerGrossSalesRow.insertPermission = 'Northwind:General';
                CustomerGrossSalesRow.readPermission = 'Northwind:General';
                CustomerGrossSalesRow.updatePermission = 'Northwind:General';
            })(CustomerGrossSalesRow = Northwind.CustomerGrossSalesRow || (Northwind.CustomerGrossSalesRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerRepresentativesRow;
            (function (CustomerRepresentativesRow) {
                CustomerRepresentativesRow.idProperty = 'RepresentativeId';
                CustomerRepresentativesRow.localTextPrefix = 'Northwind.CustomerRepresentatives';
                CustomerRepresentativesRow.deletePermission = 'Northwind:Customer:View';
                CustomerRepresentativesRow.insertPermission = 'Northwind:Customer:View';
                CustomerRepresentativesRow.readPermission = 'Northwind:Customer:View';
                CustomerRepresentativesRow.updatePermission = 'Northwind:Customer:View';
            })(CustomerRepresentativesRow = Northwind.CustomerRepresentativesRow || (Northwind.CustomerRepresentativesRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerRow;
            (function (CustomerRow) {
                CustomerRow.idProperty = 'ID';
                CustomerRow.nameProperty = 'CompanyName';
                CustomerRow.localTextPrefix = 'Northwind.Customer';
                CustomerRow.lookupKey = 'Northwind.Customer';
                function getLookup() {
                    return Q.getLookup('Northwind.Customer');
                }
                CustomerRow.getLookup = getLookup;
                CustomerRow.deletePermission = 'Northwind:Customer:Delete';
                CustomerRow.insertPermission = 'Northwind:Customer:Modify';
                CustomerRow.readPermission = 'Northwind:Customer:View';
                CustomerRow.updatePermission = 'Northwind:Customer:Modify';
            })(CustomerRow = Northwind.CustomerRow || (Northwind.CustomerRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerService;
            (function (CustomerService) {
                CustomerService.baseUrl = 'Serenity.Demo.Northwind/Customer';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'GetNextNumber',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    CustomerService[x] = function (r, s, o) {
                        return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CustomerService = Northwind.CustomerService || (Northwind.CustomerService = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var EmployeeRow;
            (function (EmployeeRow) {
                EmployeeRow.idProperty = 'EmployeeID';
                EmployeeRow.nameProperty = 'FullName';
                EmployeeRow.localTextPrefix = 'Northwind.Employee';
                EmployeeRow.lookupKey = 'Northwind.Employee';
                function getLookup() {
                    return Q.getLookup('Northwind.Employee');
                }
                EmployeeRow.getLookup = getLookup;
                EmployeeRow.deletePermission = 'Northwind:General';
                EmployeeRow.insertPermission = 'Northwind:General';
                EmployeeRow.readPermission = 'Northwind:General';
                EmployeeRow.updatePermission = 'Northwind:General';
            })(EmployeeRow = Northwind.EmployeeRow || (Northwind.EmployeeRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var EmployeeTerritoryRow;
            (function (EmployeeTerritoryRow) {
                EmployeeTerritoryRow.idProperty = 'EmployeeID';
                EmployeeTerritoryRow.nameProperty = 'TerritoryID';
                EmployeeTerritoryRow.localTextPrefix = 'Northwind.EmployeeTerritory';
                EmployeeTerritoryRow.deletePermission = 'Northwind:General';
                EmployeeTerritoryRow.insertPermission = 'Northwind:General';
                EmployeeTerritoryRow.readPermission = 'Northwind:General';
                EmployeeTerritoryRow.updatePermission = 'Northwind:General';
            })(EmployeeTerritoryRow = Northwind.EmployeeTerritoryRow || (Northwind.EmployeeTerritoryRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var Gender;
            (function (Gender) {
                Gender[Gender["Male"] = 1] = "Male";
                Gender[Gender["Female"] = 2] = "Female";
            })(Gender = Northwind.Gender || (Northwind.Gender = {}));
            Serenity.Decorators.registerEnumType(Gender, 'Serenity.Demo.Northwind.Gender');
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var NoteRow;
            (function (NoteRow) {
                NoteRow.idProperty = 'NoteId';
                NoteRow.nameProperty = 'EntityType';
                NoteRow.localTextPrefix = 'Northwind.Note';
                NoteRow.deletePermission = 'Northwind:General';
                NoteRow.insertPermission = 'Northwind:General';
                NoteRow.readPermission = 'Northwind:General';
                NoteRow.updatePermission = 'Northwind:General';
            })(NoteRow = Northwind.NoteRow || (Northwind.NoteRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderColumns = /** @class */ (function () {
                function OrderColumns() {
                }
                OrderColumns.columnsKey = 'Northwind.Order';
                return OrderColumns;
            }());
            Northwind.OrderColumns = OrderColumns;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderDetailColumns = /** @class */ (function () {
                function OrderDetailColumns() {
                }
                OrderDetailColumns.columnsKey = 'Northwind.OrderDetail';
                return OrderDetailColumns;
            }());
            Northwind.OrderDetailColumns = OrderDetailColumns;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderDetailForm = /** @class */ (function (_super) {
                __extends(OrderDetailForm, _super);
                function OrderDetailForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!OrderDetailForm.init) {
                        OrderDetailForm.init = true;
                        var s = Serenity;
                        var w0 = Serenity.LookupEditor;
                        var w1 = Serenity.DecimalEditor;
                        var w2 = Serenity.IntegerEditor;
                        Q.initFormType(OrderDetailForm, [
                            'ProductID', w0,
                            'UnitPrice', w1,
                            'Quantity', w2,
                            'Discount', w1
                        ]);
                    }
                    return _this;
                }
                OrderDetailForm.formKey = 'Northwind.OrderDetail';
                return OrderDetailForm;
            }(Serenity.PrefixedContext));
            Northwind.OrderDetailForm = OrderDetailForm;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderDetailRow;
            (function (OrderDetailRow) {
                OrderDetailRow.idProperty = 'DetailID';
                OrderDetailRow.localTextPrefix = 'Northwind.OrderDetail';
                OrderDetailRow.deletePermission = 'Northwind:General';
                OrderDetailRow.insertPermission = 'Northwind:General';
                OrderDetailRow.readPermission = 'Northwind:General';
                OrderDetailRow.updatePermission = 'Northwind:General';
            })(OrderDetailRow = Northwind.OrderDetailRow || (Northwind.OrderDetailRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderDetailService;
            (function (OrderDetailService) {
                OrderDetailService.baseUrl = 'Serenity.Demo.Northwind/OrderDetail';
                [
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    OrderDetailService[x] = function (r, s, o) {
                        return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(OrderDetailService = Northwind.OrderDetailService || (Northwind.OrderDetailService = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderForm = /** @class */ (function (_super) {
                __extends(OrderForm, _super);
                function OrderForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!OrderForm.init) {
                        OrderForm.init = true;
                        var s = Serenity;
                        var w0 = Northwind.CustomerEditor;
                        var w1 = Serenity.DateEditor;
                        var w2 = Serenity.LookupEditor;
                        var w3 = Northwind.OrderDetailsEditor;
                        var w4 = Serenity.DecimalEditor;
                        var w5 = Serenity.StringEditor;
                        Q.initFormType(OrderForm, [
                            'CustomerID', w0,
                            'OrderDate', w1,
                            'RequiredDate', w1,
                            'EmployeeID', w2,
                            'DetailList', w3,
                            'ShippedDate', w1,
                            'ShipVia', w2,
                            'Freight', w4,
                            'ShipName', w5,
                            'ShipAddress', w5,
                            'ShipCity', w5,
                            'ShipRegion', w5,
                            'ShipPostalCode', w5,
                            'ShipCountry', w5
                        ]);
                    }
                    return _this;
                }
                OrderForm.formKey = 'Northwind.Order';
                return OrderForm;
            }(Serenity.PrefixedContext));
            Northwind.OrderForm = OrderForm;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderRow;
            (function (OrderRow) {
                OrderRow.idProperty = 'OrderID';
                OrderRow.nameProperty = 'CustomerID';
                OrderRow.localTextPrefix = 'Northwind.Order';
                OrderRow.deletePermission = 'Northwind:General';
                OrderRow.insertPermission = 'Northwind:General';
                OrderRow.readPermission = 'Northwind:General';
                OrderRow.updatePermission = 'Northwind:General';
            })(OrderRow = Northwind.OrderRow || (Northwind.OrderRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderService;
            (function (OrderService) {
                OrderService.baseUrl = 'Serenity.Demo.Northwind/Order';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    OrderService[x] = function (r, s, o) {
                        return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(OrderService = Northwind.OrderService || (Northwind.OrderService = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderShippingState;
            (function (OrderShippingState) {
                OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
                OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
            })(OrderShippingState = Northwind.OrderShippingState || (Northwind.OrderShippingState = {}));
            Serenity.Decorators.registerEnumType(OrderShippingState, 'Serenity.Demo.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var PermissionKeys;
            (function (PermissionKeys) {
                PermissionKeys.General = "Northwind:General";
                var Customer;
                (function (Customer) {
                    Customer.Delete = "Northwind:Customer:Delete";
                    Customer.Modify = "Northwind:Customer:Modify";
                    Customer.View = "Northwind:Customer:View";
                })(Customer || (Customer = {}));
            })(PermissionKeys = Northwind.PermissionKeys || (Northwind.PermissionKeys = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ProductColumns = /** @class */ (function () {
                function ProductColumns() {
                }
                ProductColumns.columnsKey = 'Northwind.Product';
                return ProductColumns;
            }());
            Northwind.ProductColumns = ProductColumns;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ProductForm = /** @class */ (function (_super) {
                __extends(ProductForm, _super);
                function ProductForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ProductForm.init) {
                        ProductForm.init = true;
                        var s = Serenity;
                        var w0 = Serenity.StringEditor;
                        var w1 = Serenity.ImageUploadEditor;
                        var w2 = Serenity.BooleanEditor;
                        var w3 = Serenity.LookupEditor;
                        var w4 = Serenity.DecimalEditor;
                        var w5 = Serenity.IntegerEditor;
                        Q.initFormType(ProductForm, [
                            'ProductName', w0,
                            'ProductImage', w1,
                            'Discontinued', w2,
                            'SupplierID', w3,
                            'CategoryID', w3,
                            'QuantityPerUnit', w0,
                            'UnitPrice', w4,
                            'UnitsInStock', w5,
                            'UnitsOnOrder', w5,
                            'ReorderLevel', w5
                        ]);
                    }
                    return _this;
                }
                ProductForm.formKey = 'Northwind.Product';
                return ProductForm;
            }(Serenity.PrefixedContext));
            Northwind.ProductForm = ProductForm;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ProductLangRow;
            (function (ProductLangRow) {
                ProductLangRow.idProperty = 'Id';
                ProductLangRow.nameProperty = 'ProductName';
                ProductLangRow.localTextPrefix = 'Northwind.ProductLang';
                ProductLangRow.deletePermission = 'Northwind:General';
                ProductLangRow.insertPermission = 'Northwind:General';
                ProductLangRow.readPermission = 'Northwind:General';
                ProductLangRow.updatePermission = 'Northwind:General';
            })(ProductLangRow = Northwind.ProductLangRow || (Northwind.ProductLangRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ProductLangService;
            (function (ProductLangService) {
                ProductLangService.baseUrl = 'Serenity.Demo.Northwind/ProductLang';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    ProductLangService[x] = function (r, s, o) {
                        return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(ProductLangService = Northwind.ProductLangService || (Northwind.ProductLangService = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ProductLogRow;
            (function (ProductLogRow) {
                ProductLogRow.idProperty = 'ProductLogID';
                ProductLogRow.localTextPrefix = 'Northwind.ProductLog';
                ProductLogRow.deletePermission = null;
                ProductLogRow.insertPermission = null;
                ProductLogRow.readPermission = '';
                ProductLogRow.updatePermission = null;
            })(ProductLogRow = Northwind.ProductLogRow || (Northwind.ProductLogRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ProductRow;
            (function (ProductRow) {
                ProductRow.idProperty = 'ProductID';
                ProductRow.nameProperty = 'ProductName';
                ProductRow.localTextPrefix = 'Northwind.Product';
                ProductRow.lookupKey = 'Northwind.Product';
                function getLookup() {
                    return Q.getLookup('Northwind.Product');
                }
                ProductRow.getLookup = getLookup;
                ProductRow.deletePermission = 'Northwind:General';
                ProductRow.insertPermission = 'Northwind:General';
                ProductRow.readPermission = 'Northwind:General';
                ProductRow.updatePermission = 'Northwind:General';
            })(ProductRow = Northwind.ProductRow || (Northwind.ProductRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ProductService;
            (function (ProductService) {
                ProductService.baseUrl = 'Serenity.Demo.Northwind/Product';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    ProductService[x] = function (r, s, o) {
                        return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(ProductService = Northwind.ProductService || (Northwind.ProductService = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var RegionColumns = /** @class */ (function () {
                function RegionColumns() {
                }
                RegionColumns.columnsKey = 'Northwind.Region';
                return RegionColumns;
            }());
            Northwind.RegionColumns = RegionColumns;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var RegionForm = /** @class */ (function (_super) {
                __extends(RegionForm, _super);
                function RegionForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!RegionForm.init) {
                        RegionForm.init = true;
                        var s = Serenity;
                        var w0 = Serenity.IntegerEditor;
                        var w1 = Serenity.StringEditor;
                        Q.initFormType(RegionForm, [
                            'RegionID', w0,
                            'RegionDescription', w1
                        ]);
                    }
                    return _this;
                }
                RegionForm.formKey = 'Northwind.Region';
                return RegionForm;
            }(Serenity.PrefixedContext));
            Northwind.RegionForm = RegionForm;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var RegionRow;
            (function (RegionRow) {
                RegionRow.idProperty = 'RegionID';
                RegionRow.nameProperty = 'RegionDescription';
                RegionRow.localTextPrefix = 'Northwind.Region';
                RegionRow.lookupKey = 'Northwind.Region';
                function getLookup() {
                    return Q.getLookup('Northwind.Region');
                }
                RegionRow.getLookup = getLookup;
                RegionRow.deletePermission = 'Northwind:General';
                RegionRow.insertPermission = 'Northwind:General';
                RegionRow.readPermission = 'Northwind:General';
                RegionRow.updatePermission = 'Northwind:General';
            })(RegionRow = Northwind.RegionRow || (Northwind.RegionRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var RegionService;
            (function (RegionService) {
                RegionService.baseUrl = 'Serenity.Demo.Northwind/Region';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    RegionService[x] = function (r, s, o) {
                        return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(RegionService = Northwind.RegionService || (Northwind.RegionService = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var SalesByCategoryColumns = /** @class */ (function () {
                function SalesByCategoryColumns() {
                }
                SalesByCategoryColumns.columnsKey = 'Northwind.SalesByCategory';
                return SalesByCategoryColumns;
            }());
            Northwind.SalesByCategoryColumns = SalesByCategoryColumns;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var SalesByCategoryRow;
            (function (SalesByCategoryRow) {
                SalesByCategoryRow.nameProperty = 'CategoryName';
                SalesByCategoryRow.localTextPrefix = 'Northwind.SalesByCategory';
                SalesByCategoryRow.deletePermission = 'Northwind:General';
                SalesByCategoryRow.insertPermission = 'Northwind:General';
                SalesByCategoryRow.readPermission = 'Northwind:General';
                SalesByCategoryRow.updatePermission = 'Northwind:General';
            })(SalesByCategoryRow = Northwind.SalesByCategoryRow || (Northwind.SalesByCategoryRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var SalesByCategoryService;
            (function (SalesByCategoryService) {
                SalesByCategoryService.baseUrl = 'Serenity.Demo.Northwind/SalesByCategory';
                [
                    'List'
                ].forEach(function (x) {
                    SalesByCategoryService[x] = function (r, s, o) {
                        return Q.serviceRequest(SalesByCategoryService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(SalesByCategoryService = Northwind.SalesByCategoryService || (Northwind.SalesByCategoryService = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ShipperColumns = /** @class */ (function () {
                function ShipperColumns() {
                }
                ShipperColumns.columnsKey = 'Northwind.Shipper';
                return ShipperColumns;
            }());
            Northwind.ShipperColumns = ShipperColumns;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ShipperForm = /** @class */ (function (_super) {
                __extends(ShipperForm, _super);
                function ShipperForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ShipperForm.init) {
                        ShipperForm.init = true;
                        var s = Serenity;
                        var w0 = Serenity.StringEditor;
                        var w1 = Northwind.PhoneEditor;
                        Q.initFormType(ShipperForm, [
                            'CompanyName', w0,
                            'Phone', w1
                        ]);
                    }
                    return _this;
                }
                ShipperForm.formKey = 'Northwind.Shipper';
                return ShipperForm;
            }(Serenity.PrefixedContext));
            Northwind.ShipperForm = ShipperForm;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ShipperRow;
            (function (ShipperRow) {
                ShipperRow.idProperty = 'ShipperID';
                ShipperRow.nameProperty = 'CompanyName';
                ShipperRow.localTextPrefix = 'Northwind.Shipper';
                ShipperRow.lookupKey = 'Northwind.Shipper';
                function getLookup() {
                    return Q.getLookup('Northwind.Shipper');
                }
                ShipperRow.getLookup = getLookup;
                ShipperRow.deletePermission = 'Northwind:General';
                ShipperRow.insertPermission = 'Northwind:General';
                ShipperRow.readPermission = 'Northwind:General';
                ShipperRow.updatePermission = 'Northwind:General';
            })(ShipperRow = Northwind.ShipperRow || (Northwind.ShipperRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ShipperService;
            (function (ShipperService) {
                ShipperService.baseUrl = 'Serenity.Demo.Northwind/Shipper';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    ShipperService[x] = function (r, s, o) {
                        return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(ShipperService = Northwind.ShipperService || (Northwind.ShipperService = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var SupplierColumns = /** @class */ (function () {
                function SupplierColumns() {
                }
                SupplierColumns.columnsKey = 'Northwind.Supplier';
                return SupplierColumns;
            }());
            Northwind.SupplierColumns = SupplierColumns;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var SupplierForm = /** @class */ (function (_super) {
                __extends(SupplierForm, _super);
                function SupplierForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!SupplierForm.init) {
                        SupplierForm.init = true;
                        var s = Serenity;
                        var w0 = Serenity.StringEditor;
                        Q.initFormType(SupplierForm, [
                            'CompanyName', w0,
                            'ContactName', w0,
                            'ContactTitle', w0,
                            'Address', w0,
                            'Region', w0,
                            'PostalCode', w0,
                            'Country', w0,
                            'City', w0,
                            'Phone', w0,
                            'Fax', w0,
                            'HomePage', w0
                        ]);
                    }
                    return _this;
                }
                SupplierForm.formKey = 'Northwind.Supplier';
                return SupplierForm;
            }(Serenity.PrefixedContext));
            Northwind.SupplierForm = SupplierForm;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var SupplierRow;
            (function (SupplierRow) {
                SupplierRow.idProperty = 'SupplierID';
                SupplierRow.nameProperty = 'CompanyName';
                SupplierRow.localTextPrefix = 'Northwind.Supplier';
                SupplierRow.lookupKey = 'Northwind.Supplier';
                function getLookup() {
                    return Q.getLookup('Northwind.Supplier');
                }
                SupplierRow.getLookup = getLookup;
                SupplierRow.deletePermission = 'Northwind:General';
                SupplierRow.insertPermission = 'Northwind:General';
                SupplierRow.readPermission = 'Northwind:General';
                SupplierRow.updatePermission = 'Northwind:General';
            })(SupplierRow = Northwind.SupplierRow || (Northwind.SupplierRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var SupplierService;
            (function (SupplierService) {
                SupplierService.baseUrl = 'Serenity.Demo.Northwind/Supplier';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    SupplierService[x] = function (r, s, o) {
                        return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(SupplierService = Northwind.SupplierService || (Northwind.SupplierService = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var TerritoryColumns = /** @class */ (function () {
                function TerritoryColumns() {
                }
                TerritoryColumns.columnsKey = 'Northwind.Territory';
                return TerritoryColumns;
            }());
            Northwind.TerritoryColumns = TerritoryColumns;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var TerritoryForm = /** @class */ (function (_super) {
                __extends(TerritoryForm, _super);
                function TerritoryForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!TerritoryForm.init) {
                        TerritoryForm.init = true;
                        var s = Serenity;
                        var w0 = Serenity.StringEditor;
                        var w1 = Serenity.LookupEditor;
                        Q.initFormType(TerritoryForm, [
                            'TerritoryID', w0,
                            'TerritoryDescription', w0,
                            'RegionID', w1
                        ]);
                    }
                    return _this;
                }
                TerritoryForm.formKey = 'Northwind.Territory';
                return TerritoryForm;
            }(Serenity.PrefixedContext));
            Northwind.TerritoryForm = TerritoryForm;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var TerritoryRow;
            (function (TerritoryRow) {
                TerritoryRow.idProperty = 'ID';
                TerritoryRow.nameProperty = 'TerritoryID';
                TerritoryRow.localTextPrefix = 'Northwind.Territory';
                TerritoryRow.lookupKey = 'Northwind.Territory';
                function getLookup() {
                    return Q.getLookup('Northwind.Territory');
                }
                TerritoryRow.getLookup = getLookup;
                TerritoryRow.deletePermission = 'Northwind:General';
                TerritoryRow.insertPermission = 'Northwind:General';
                TerritoryRow.readPermission = 'Northwind:General';
                TerritoryRow.updatePermission = 'Northwind:General';
            })(TerritoryRow = Northwind.TerritoryRow || (Northwind.TerritoryRow = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var TerritoryService;
            (function (TerritoryService) {
                TerritoryService.baseUrl = 'Serenity.Demo.Northwind/Territory';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    TerritoryService[x] = function (r, s, o) {
                        return Q.serviceRequest(TerritoryService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(TerritoryService = Northwind.TerritoryService || (Northwind.TerritoryService = {}));
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CategoryDialog = /** @class */ (function (_super) {
                __extends(CategoryDialog, _super);
                function CategoryDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Northwind.CategoryForm(_this.idPrefix);
                    return _this;
                }
                CategoryDialog.prototype.getFormKey = function () { return Northwind.CategoryForm.formKey; };
                CategoryDialog.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
                CategoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
                CategoryDialog.prototype.getNameProperty = function () { return Northwind.CategoryRow.nameProperty; };
                CategoryDialog.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
                CategoryDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], CategoryDialog);
                return CategoryDialog;
            }(Serenity.EntityDialog));
            Northwind.CategoryDialog = CategoryDialog;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CategoryGrid = /** @class */ (function (_super) {
                __extends(CategoryGrid, _super);
                function CategoryGrid(container) {
                    return _super.call(this, container) || this;
                }
                CategoryGrid.prototype.getColumnsKey = function () { return Northwind.CategoryColumns.columnsKey; };
                CategoryGrid.prototype.getDialogType = function () { return Northwind.CategoryDialog; };
                CategoryGrid.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
                CategoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
                CategoryGrid.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
                CategoryGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CategoryGrid);
                return CategoryGrid;
            }(Serenity.EntityGrid));
            Northwind.CategoryGrid = CategoryGrid;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerDialog = /** @class */ (function (_super) {
                __extends(CustomerDialog, _super);
                function CustomerDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Northwind.CustomerForm(_this.idPrefix);
                    _this.ordersGrid = new Northwind.CustomerOrdersGrid(_this.byId('OrdersGrid'));
                    // force order dialog to open in Dialog mode instead of Panel mode
                    // which is set as default on OrderDialog with @panelAttribute
                    _this.ordersGrid.openDialogsAsPanel = false;
                    _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                    Serenity.Extensions.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                    return _this;
                }
                CustomerDialog.prototype.getFormKey = function () { return Northwind.CustomerForm.formKey; };
                CustomerDialog.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
                CustomerDialog.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
                CustomerDialog.prototype.getNameProperty = function () { return Northwind.CustomerRow.nameProperty; };
                CustomerDialog.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
                CustomerDialog.prototype.getSaveState = function () {
                    try {
                        return $.toJSON(this.getSaveEntity());
                    }
                    catch (e) {
                        return null;
                    }
                };
                CustomerDialog.prototype.loadResponse = function (data) {
                    _super.prototype.loadResponse.call(this, data);
                    this.loadedState = this.getSaveState();
                };
                CustomerDialog.prototype.loadEntity = function (entity) {
                    _super.prototype.loadEntity.call(this, entity);
                    Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                    this.ordersGrid.customerID = entity.CustomerID;
                };
                CustomerDialog.prototype.onSaveSuccess = function (response) {
                    _super.prototype.onSaveSuccess.call(this, response);
                    Q.reloadLookup('Northwind.Customer');
                };
                CustomerDialog.prototype.getTemplate = function () {
                    return "<div id=\"~_Tabs\" class=\"s-DialogContent\">\n    <ul>\n        <li><a href=\"#~_TabInfo\"><span>" + Q.text("Db.Northwind.Customer.EntitySingular") + "</span></a></li>\n        <li><a href=\"#~_TabNotes\"><span>" + Q.text("Db.Northwind.Note.EntityPlural") + "</span></a></li>\n        <li><a href=\"#~_TabOrders\"><span>" + Q.text("Db.Northwind.Order.EntityPlural") + "</span></a></li>\n    </ul>\n    <div id=\"~_TabInfo\" class=\"tab-pane s-TabInfo\">\n        <div id=\"~_Toolbar\" class=\"s-DialogToolbar\">\n        </div>\n        <div class=\"s-Form\">\n            <form id=\"~_Form\" action=\"\">\n                <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                    <div id=\"~_PropertyGrid\"></div>\n                    <div class=\"clear\"></div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div id=\"~_TabNotes\" class=\"tab-pane s-TabNotes\">\n    </div>\n    <div id=\"~_TabOrders\" class=\"tab-pane s-TabOrders\">\n        <div id=\"~_OrdersGrid\">\n        </div>\n    </div>\n</div>";
                };
                CustomerDialog = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.panel()
                ], CustomerDialog);
                return CustomerDialog;
            }(Serenity.EntityDialog));
            Northwind.CustomerDialog = CustomerDialog;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerEditor = /** @class */ (function (_super) {
                __extends(CustomerEditor, _super);
                function CustomerEditor(hidden, options) {
                    return _super.call(this, hidden, options) || this;
                }
                CustomerEditor.prototype.getLookupKey = function () {
                    return 'Northwind.Customer';
                };
                CustomerEditor.prototype.getItemText = function (item, lookup) {
                    return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
                };
                CustomerEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], CustomerEditor);
                return CustomerEditor;
            }(Serenity.LookupEditorBase));
            Northwind.CustomerEditor = CustomerEditor;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerGrid = /** @class */ (function (_super) {
                __extends(CustomerGrid, _super);
                function CustomerGrid(container) {
                    return _super.call(this, container) || this;
                }
                CustomerGrid.prototype.getColumnsKey = function () { return Northwind.CustomerColumns.columnsKey; };
                CustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
                CustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
                CustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
                CustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
                CustomerGrid = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.filterable()
                ], CustomerGrid);
                return CustomerGrid;
            }(Serenity.EntityGrid));
            Northwind.CustomerGrid = CustomerGrid;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderDialog = /** @class */ (function (_super) {
                __extends(OrderDialog, _super);
                function OrderDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Northwind.OrderForm(_this.idPrefix);
                    return _this;
                }
                OrderDialog.prototype.getFormKey = function () { return Northwind.OrderForm.formKey; };
                OrderDialog.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
                OrderDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
                OrderDialog.prototype.getNameProperty = function () { return Northwind.OrderRow.nameProperty; };
                OrderDialog.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
                OrderDialog.prototype.getToolbarButtons = function () {
                    var _this = this;
                    var buttons = _super.prototype.getToolbarButtons.call(this);
                    buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                        title: 'Invoice',
                        cssClass: 'export-pdf-button',
                        reportKey: 'Northwind.OrderDetail',
                        getParams: function () { return ({
                            OrderID: _this.get_entityId()
                        }); }
                    }));
                    return buttons;
                };
                OrderDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
                };
                OrderDialog = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.panel()
                ], OrderDialog);
                return OrderDialog;
            }(Serenity.EntityDialog));
            Northwind.OrderDialog = OrderDialog;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
/// <reference path="../Order/OrderDialog.ts" />
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerOrderDialog = /** @class */ (function (_super) {
                __extends(CustomerOrderDialog, _super);
                function CustomerOrderDialog() {
                    return _super.call(this) || this;
                }
                CustomerOrderDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
                };
                CustomerOrderDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], CustomerOrderDialog);
                return CustomerOrderDialog;
            }(Northwind.OrderDialog));
            Northwind.CustomerOrderDialog = CustomerOrderDialog;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderGrid = /** @class */ (function (_super) {
                __extends(OrderGrid, _super);
                function OrderGrid(container) {
                    return _super.call(this, container) || this;
                }
                OrderGrid.prototype.getColumnsKey = function () { return Northwind.OrderColumns.columnsKey; };
                OrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
                OrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
                OrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
                OrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
                OrderGrid.prototype.getQuickFilters = function () {
                    var _this = this;
                    var filters = _super.prototype.getQuickFilters.call(this);
                    filters.push({
                        type: Serenity.LookupEditor,
                        options: {
                            lookupKey: Northwind.ProductRow.lookupKey
                        },
                        field: 'ProductID',
                        title: 'Contains Product in Details',
                        handler: function (w) {
                            _this.view.params.ProductID = Q.toId(w.value);
                        },
                        cssClass: 'hidden-xs'
                    });
                    return filters;
                };
                OrderGrid.prototype.createQuickFilters = function () {
                    _super.prototype.createQuickFilters.call(this);
                    this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, "ShippingState" /* ShippingState */);
                };
                OrderGrid.prototype.getButtons = function () {
                    var _this = this;
                    var buttons = _super.prototype.getButtons.call(this);
                    buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                        grid: this,
                        service: Northwind.OrderService.baseUrl + '/ListExcel',
                        onViewSubmit: function () { return _this.onViewSubmit(); },
                        separator: true
                    }));
                    buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                        grid: this,
                        onViewSubmit: function () { return _this.onViewSubmit(); }
                    }));
                    return buttons;
                };
                OrderGrid.prototype.getColumns = function () {
                    var columns = _super.prototype.getColumns.call(this);
                    columns.splice(1, 0, {
                        id: 'Print Invoice',
                        field: null,
                        name: '',
                        cssClass: 'align-center',
                        format: function (ctx) { return '<a class="inline-action print-invoice" title="invoice">' +
                            '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                        width: 36,
                        minWidth: 36,
                        maxWidth: 36
                    });
                    return columns;
                };
                OrderGrid.prototype.onClick = function (e, row, cell) {
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
                        if (target.hasClass('print-invoice')) {
                            Serenity.Extensions.ReportHelper.execute({
                                reportKey: 'Northwind.OrderDetail',
                                params: {
                                    OrderID: item.OrderID
                                }
                            });
                        }
                    }
                };
                OrderGrid.prototype.set_shippingState = function (value) {
                    this.shippingStateFilter.value = value == null ? '' : value.toString();
                };
                OrderGrid.prototype.addButtonClick = function () {
                    var eq = this.view.params.EqualityFilter;
                    this.editItem({
                        CustomerID: eq ? eq.CustomerID : null
                    });
                };
                OrderGrid = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.filterable()
                ], OrderGrid);
                return OrderGrid;
            }(Serenity.EntityGrid));
            Northwind.OrderGrid = OrderGrid;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
/// <reference path="../Order/OrderGrid.ts" />
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var CustomerOrdersGrid = /** @class */ (function (_super) {
                __extends(CustomerOrdersGrid, _super);
                function CustomerOrdersGrid(container) {
                    return _super.call(this, container) || this;
                }
                CustomerOrdersGrid.prototype.getDialogType = function () { return Northwind.CustomerOrderDialog; };
                CustomerOrdersGrid.prototype.getColumns = function () {
                    return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== "CustomerCompanyName" /* CustomerCompanyName */; });
                };
                CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                    _super.prototype.initEntityDialog.call(this, itemType, dialog);
                    Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
                };
                CustomerOrdersGrid.prototype.addButtonClick = function () {
                    this.editItem({ CustomerID: this.customerID });
                };
                CustomerOrdersGrid.prototype.getInitialTitle = function () {
                    return null;
                };
                CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                    return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
                };
                Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                    get: function () {
                        return this._customerID;
                    },
                    set: function (value) {
                        if (this._customerID !== value) {
                            this._customerID = value;
                            this.setEquality('CustomerID', value);
                            this.refresh();
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                CustomerOrdersGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CustomerOrdersGrid);
                return CustomerOrdersGrid;
            }(Northwind.OrderGrid));
            Northwind.CustomerOrdersGrid = CustomerOrdersGrid;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var EmployeeListFormatter = /** @class */ (function () {
                function EmployeeListFormatter() {
                }
                EmployeeListFormatter.prototype.format = function (ctx) {
                    var idList = ctx.value;
                    if (!idList || !idList.length)
                        return "";
                    var byId = Northwind.EmployeeRow.getLookup().itemById;
                    var z;
                    return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
                };
                EmployeeListFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], EmployeeListFormatter);
                return EmployeeListFormatter;
            }());
            Northwind.EmployeeListFormatter = EmployeeListFormatter;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var EmployeeFormatter = /** @class */ (function () {
                function EmployeeFormatter() {
                }
                EmployeeFormatter.prototype.format = function (ctx) {
                    var text = Q.htmlEncode(ctx.value);
                    if (!this.genderProperty || Q.isTrimmedEmpty(ctx.value)) {
                        return text;
                    }
                    var gender = ctx.item[this.genderProperty];
                    return '<i class="fa fa-' + ((gender === Northwind.Gender.Female) ?
                        'female text-danger' : 'male text-primary') + ' text-opacity-75"></i>' + text;
                };
                EmployeeFormatter.prototype.initializeColumn = function (column) {
                    column.referencedFields = column.referencedFields || [];
                    if (this.genderProperty)
                        column.referencedFields.push(this.genderProperty);
                };
                __decorate([
                    Serenity.Decorators.option()
                ], EmployeeFormatter.prototype, "genderProperty", void 0);
                EmployeeFormatter = __decorate([
                    Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
                ], EmployeeFormatter);
                return EmployeeFormatter;
            }());
            Northwind.EmployeeFormatter = EmployeeFormatter;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var NoteDialog = /** @class */ (function (_super) {
                __extends(NoteDialog, _super);
                function NoteDialog() {
                    var _this = _super.call(this) || this;
                    _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                    return _this;
                }
                NoteDialog.prototype.getTemplate = function () {
                    return ("<form id='~_Form' class='s-Form'>" +
                        "<textarea id='~_Text' class='required'></textarea>" +
                        "</form>");
                };
                NoteDialog.prototype.getDialogButtons = function () {
                    var _this = this;
                    return [
                        {
                            text: Q.text('Dialogs.OkButton'),
                            click: function () {
                                if (!_this.validateForm()) {
                                    return;
                                }
                                _this.okClick && _this.okClick();
                            }
                        },
                        {
                            text: Q.text('Dialogs.CancelButton'),
                            click: function () { return _this.dialogClose(); }
                        }
                    ];
                };
                Object.defineProperty(NoteDialog.prototype, "text", {
                    get: function () {
                        return this.textEditor.value;
                    },
                    set: function (value) {
                        this.textEditor.value = value;
                    },
                    enumerable: false,
                    configurable: true
                });
                NoteDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], NoteDialog);
                return NoteDialog;
            }(Serenity.TemplatedDialog));
            Northwind.NoteDialog = NoteDialog;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var NotesEditor = /** @class */ (function (_super) {
                __extends(NotesEditor, _super);
                function NotesEditor(div) {
                    var _this = _super.call(this, div) || this;
                    new Serenity.Toolbar(_this.byId('Toolbar'), {
                        buttons: [{
                                title: 'Add Note',
                                cssClass: 'add-button',
                                onClick: function (e) {
                                    e.preventDefault();
                                    _this.addClick();
                                }
                            }]
                    });
                    return _this;
                }
                NotesEditor.prototype.getTemplate = function () {
                    return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
                };
                NotesEditor.prototype.updateContent = function () {
                    var _this = this;
                    var noteList = this.byId('NoteList');
                    noteList.children().remove();
                    if (this.items) {
                        var index = 0;
                        for (var t1 = 0; t1 < this.items.length; t1++) {
                            var item = this.items[t1];
                            var li = $('<li/>');
                            $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                            $('<a/>').attr('href', '#').addClass('note-date')
                                .text(item.InsertUserDisplayName + ' - ' +
                                Q.formatDate(item.InsertDate, 'g'))
                                .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                            $('<a/>').attr('href', '#').addClass('note-delete')
                                .attr('title', 'delete note').data('index', index)
                                .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                            li.appendTo(noteList);
                            index++;
                        }
                    }
                };
                NotesEditor.prototype.addClick = function () {
                    var _this = this;
                    var dlg = new Northwind.NoteDialog();
                    dlg.dialogTitle = 'Add Note';
                    dlg.okClick = function () {
                        var text = Q.trimToNull(dlg.text);
                        if (text == null) {
                            return;
                        }
                        _this.items = _this.items || [];
                        Q.insert(_this.items, 0, {
                            Text: text,
                            InsertUserDisplayName: Q.Authorization.userDefinition.DisplayName,
                            InsertDate: Q.formatISODateTimeUTC(new Date())
                        });
                        _this.updateContent();
                        dlg.dialogClose();
                        _this.set_isDirty(true);
                        _this.onChange && _this.onChange();
                    };
                    dlg.dialogOpen();
                };
                NotesEditor.prototype.editClick = function (e) {
                    var _this = this;
                    e.preventDefault();
                    var index = $(e.target).data('index');
                    var old = this.items[index];
                    var dlg = new Northwind.NoteDialog();
                    dlg.dialogTitle = 'Edit Note';
                    dlg.text = old.Text;
                    dlg.okClick = function () {
                        var text = Q.trimToNull(dlg.text);
                        if (!text) {
                            return;
                        }
                        _this.items[index].Text = text;
                        _this.updateContent();
                        dlg.dialogClose();
                        _this.set_isDirty(true);
                        _this.onChange && _this.onChange();
                    };
                    dlg.dialogOpen();
                };
                NotesEditor.prototype.deleteClick = function (e) {
                    var _this = this;
                    e.preventDefault();
                    var index = $(e.target).data('index');
                    Q.confirm('Delete this note?', function () {
                        _this.items.splice(index, 1);
                        _this.updateContent();
                        _this.set_isDirty(true);
                        _this.onChange && _this.onChange();
                    });
                };
                Object.defineProperty(NotesEditor.prototype, "value", {
                    get: function () {
                        return this.items;
                    },
                    set: function (value) {
                        this.items = value || [];
                        this.set_isDirty(false);
                        this.updateContent();
                    },
                    enumerable: false,
                    configurable: true
                });
                NotesEditor.prototype.getEditValue = function (prop, target) {
                    target[prop.name] = this.value;
                };
                NotesEditor.prototype.setEditValue = function (source, prop) {
                    this.value = source[prop.name] || [];
                };
                NotesEditor.prototype.get_isDirty = function () {
                    return this.isDirty;
                };
                NotesEditor.prototype.set_isDirty = function (value) {
                    this.isDirty = value;
                };
                NotesEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                    Serenity.Decorators.element("<div/>")
                ], NotesEditor);
                return NotesEditor;
            }(Serenity.TemplatedWidget));
            Northwind.NotesEditor = NotesEditor;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var FreightFormatter = /** @class */ (function () {
                function FreightFormatter() {
                }
                FreightFormatter.prototype.format = function (ctx) {
                    if (ctx.value == null)
                        return "";
                    return Q.htmlEncode(ctx.value) +
                        ' <i class="icon fa fa-balance-scale text-secondary text-opacity-75"></i>';
                };
                FreightFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], FreightFormatter);
                return FreightFormatter;
            }());
            Northwind.FreightFormatter = FreightFormatter;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderDetailDialog = /** @class */ (function (_super) {
                __extends(OrderDetailDialog, _super);
                function OrderDetailDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Northwind.OrderDetailForm(_this.idPrefix);
                    _this.form.ProductID.changeSelect2(function (e) {
                        var productID = Q.toId(_this.form.ProductID.value);
                        if (productID != null) {
                            _this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
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
                OrderDetailDialog.prototype.getFormKey = function () { return Northwind.OrderDetailForm.formKey; };
                OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
                OrderDetailDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], OrderDetailDialog);
                return OrderDetailDialog;
            }(Serenity.Extensions.GridEditorDialog));
            Northwind.OrderDetailDialog = OrderDetailDialog;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var OrderDetailsEditor = /** @class */ (function (_super) {
                __extends(OrderDetailsEditor, _super);
                function OrderDetailsEditor(container) {
                    return _super.call(this, container) || this;
                }
                OrderDetailsEditor.prototype.getColumnsKey = function () { return Northwind.OrderDetailColumns.columnsKey; };
                OrderDetailsEditor.prototype.getDialogType = function () { return Northwind.OrderDetailDialog; };
                OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
                OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                    row.ProductID = Q.toId(row.ProductID);
                    var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                    if (sameProduct && this.id(sameProduct) !== id) {
                        Q.alert('This product is already in order details!');
                        return false;
                    }
                    row.ProductName = Northwind.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                    row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                OrderDetailsEditor = __decorate([
                    Serenity.Decorators.registerEditor('Serenity.Demo.Northwind.OrderDetailsEditor')
                ], OrderDetailsEditor);
                return OrderDetailsEditor;
            }(Serenity.Extensions.GridEditorBase));
            Northwind.OrderDetailsEditor = OrderDetailsEditor;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ProductDialog = /** @class */ (function (_super) {
                __extends(ProductDialog, _super);
                function ProductDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Northwind.ProductForm(_this.idPrefix);
                    return _this;
                }
                ProductDialog.prototype.getFormKey = function () { return Northwind.ProductForm.formKey; };
                ProductDialog.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
                ProductDialog.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
                ProductDialog.prototype.getNameProperty = function () { return Northwind.ProductRow.nameProperty; };
                ProductDialog.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
                ProductDialog = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.maximizable()
                ], ProductDialog);
                return ProductDialog;
            }(Serenity.EntityDialog));
            Northwind.ProductDialog = ProductDialog;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ProductGrid = /** @class */ (function (_super) {
                __extends(ProductGrid, _super);
                function ProductGrid(container) {
                    var _this = _super.call(this, container) || this;
                    _this.pendingChanges = {};
                    _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                    return _this;
                }
                ProductGrid.prototype.getColumnsKey = function () { return Northwind.ProductColumns.columnsKey; };
                ProductGrid.prototype.getDialogType = function () { return Northwind.ProductDialog; };
                ProductGrid.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
                ProductGrid.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
                ProductGrid.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
                ProductGrid.prototype.getButtons = function () {
                    var _this = this;
                    var buttons = _super.prototype.getButtons.call(this);
                    buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                        grid: this,
                        service: Northwind.ProductService.baseUrl + '/ListExcel',
                        onViewSubmit: function () { return _this.onViewSubmit(); },
                        separator: true
                    }));
                    buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                        grid: this,
                        onViewSubmit: function () { return _this.onViewSubmit(); },
                        reportTitle: 'Product List',
                        columnTitles: {
                            'Discontinued': 'Dis.',
                        },
                        tableOptions: {
                            columnStyles: {
                                ProductID: {
                                    columnWidth: 25,
                                    halign: 'right'
                                },
                                Discountinued: {
                                    columnWidth: 25
                                }
                            }
                        }
                    }));
                    buttons.push({
                        title: 'Save Changes',
                        cssClass: 'apply-changes-button disabled',
                        onClick: function (e) { return _this.saveClick(); },
                        separator: true
                    });
                    return buttons;
                };
                ProductGrid.prototype.onViewProcessData = function (response) {
                    this.pendingChanges = {};
                    this.setSaveButtonState();
                    return _super.prototype.onViewProcessData.call(this, response);
                };
                // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
                // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
                // custom widgets and validations are not possible, and as a bonus the code can become a mess.
                // 
                // This was just a sample how-to after much requests, and is not supported. 
                // This is all we can offer, please don't ask us to Guide you...
                /**
                 * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
                 * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
                 * no event handlers to rendered cell contents
                 */
                ProductGrid.prototype.numericInputFormatter = function (ctx) {
                    if (ctx.item.__nonDataRow)
                        return Q.htmlEncode(Q.formatNumber(ctx.value, '#0.##'));
                    var klass = 'edit numeric';
                    var item = ctx.item;
                    var pending = this.pendingChanges[item.ProductID];
                    if (pending && pending[ctx.column.field] !== undefined) {
                        klass += ' dirty';
                    }
                    var value = this.getEffectiveValue(item, ctx.column.field);
                    return "<input type='text' class='" + klass +
                        "' data-field='" + ctx.column.field +
                        "' value='" + Q.formatNumber(value, '0.##') + "'/>";
                };
                ProductGrid.prototype.stringInputFormatter = function (ctx) {
                    if (ctx.item.__nonDataRow)
                        return Q.htmlEncode(ctx.value);
                    var klass = 'edit string';
                    var item = ctx.item;
                    var pending = this.pendingChanges[item.ProductID];
                    var column = ctx.column;
                    if (pending && pending[column.field] !== undefined) {
                        klass += ' dirty';
                    }
                    var value = this.getEffectiveValue(item, column.field);
                    return "<input type='text' class='" + klass +
                        "' data-field='" + column.field +
                        "' value='" + Q.attrEncode(value) +
                        "' maxlength='" + column.sourceItem.maxLength + "'/>";
                };
                /**
                 * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
                 */
                ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                    if (ctx.item.__nonDataRow)
                        return Q.htmlEncode(ctx.value);
                    var klass = 'edit';
                    var item = ctx.item;
                    var pending = this.pendingChanges[item.ProductID];
                    var column = ctx.column;
                    if (pending && pending[idField] !== undefined) {
                        klass += ' dirty';
                    }
                    var value = this.getEffectiveValue(item, idField);
                    var markup = "<select class='" + klass +
                        "' data-field='" + idField +
                        "' style='width: 100%; max-width: 100%'>";
                    for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                        var c = _a[_i];
                        var id = c[lookup.idField];
                        markup += "<option value='" + Q.attrEncode(id) + "'";
                        if (id == value) {
                            markup += " selected";
                        }
                        markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                    }
                    return markup + "</select>";
                };
                ProductGrid.prototype.getEffectiveValue = function (item, field) {
                    var pending = this.pendingChanges[item.ProductID];
                    if (pending && pending[field] !== undefined) {
                        return pending[field];
                    }
                    return item[field];
                };
                ProductGrid.prototype.getColumns = function () {
                    var _this = this;
                    var columns = _super.prototype.getColumns.call(this);
                    var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                    var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                    Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                    var category = Q.first(columns, function (x) { return x.field === "CategoryName" /* CategoryName */; });
                    category.referencedFields = ["CategoryID" /* CategoryID */];
                    category.format = function (ctx) { return _this.selectFormatter(ctx, "CategoryID" /* CategoryID */, Northwind.CategoryRow.getLookup()); };
                    var supplier = Q.first(columns, function (x) { return x.field === "SupplierCompanyName" /* SupplierCompanyName */; });
                    supplier.referencedFields = ["SupplierID" /* SupplierID */];
                    supplier.format = function (ctx) { return _this.selectFormatter(ctx, "SupplierID" /* SupplierID */, Northwind.SupplierRow.getLookup()); };
                    Q.first(columns, function (x) { return x.field === "UnitPrice" /* UnitPrice */; }).format = num;
                    Q.first(columns, function (x) { return x.field === "UnitsInStock" /* UnitsInStock */; }).format = num;
                    Q.first(columns, function (x) { return x.field === "UnitsOnOrder" /* UnitsOnOrder */; }).format = num;
                    Q.first(columns, function (x) { return x.field === "ReorderLevel" /* ReorderLevel */; }).format = num;
                    return columns;
                };
                ProductGrid.prototype.inputsChange = function (e) {
                    var cell = this.slickGrid.getCellFromEvent(e);
                    var item = this.itemAt(cell.row);
                    var input = $(e.target);
                    var field = input.data('field');
                    var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                    var pending = this.pendingChanges[item.ProductID];
                    var effective = this.getEffectiveValue(item, field);
                    var oldText;
                    if (input.hasClass("numeric"))
                        oldText = Q.formatNumber(effective, '0.##');
                    else
                        oldText = effective;
                    var value;
                    if (field === 'UnitPrice') {
                        value = Q.parseDecimal(text);
                        if (value == null || isNaN(value)) {
                            Q.notifyError(Q.text('Validation.Decimal'), '', null);
                            input.val(oldText);
                            input.focus();
                            return;
                        }
                    }
                    else if (input.hasClass("numeric")) {
                        var i = Q.parseInteger(text);
                        if (isNaN(i) || i > 32767 || i < 0) {
                            Q.notifyError(Q.text('Validation.Integer'), '', null);
                            input.val(oldText);
                            input.focus();
                            return;
                        }
                        value = i;
                    }
                    else
                        value = text;
                    if (!pending) {
                        this.pendingChanges[item.ProductID] = pending = {};
                    }
                    pending[field] = value;
                    item[field] = value;
                    this.view.refresh();
                    if (input.hasClass("numeric"))
                        value = Q.formatNumber(value, '0.##');
                    input.val(value).addClass('dirty');
                    this.setSaveButtonState();
                };
                ProductGrid.prototype.setSaveButtonState = function () {
                    this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
                };
                ProductGrid.prototype.saveClick = function () {
                    if (Object.keys(this.pendingChanges).length === 0) {
                        return;
                    }
                    // this calls save service for all modified rows, one by one
                    // you could write a batch update service
                    var keys = Object.keys(this.pendingChanges);
                    var current = -1;
                    var self = this;
                    (function saveNext() {
                        if (++current >= keys.length) {
                            self.refresh();
                            return;
                        }
                        var key = keys[current];
                        var entity = Q.deepClone(self.pendingChanges[key]);
                        entity.ProductID = key;
                        Q.serviceRequest("Serenity.Demo.Northwind/Product/Update" /* Update */, {
                            EntityId: key,
                            Entity: entity
                        }, function (response) {
                            delete self.pendingChanges[key];
                            saveNext();
                        });
                    })();
                };
                ProductGrid.prototype.getQuickFilters = function () {
                    var flt = _super.prototype.getQuickFilters.call(this);
                    var q = Q.parseQueryString();
                    if (q["cat"]) {
                        var category = Q.tryFirst(flt, function (x) { return x.field == "CategoryID"; });
                        category.init = function (e) {
                            e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                        };
                    }
                    return flt;
                };
                ProductGrid = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.filterable()
                ], ProductGrid);
                return ProductGrid;
            }(Serenity.EntityGrid));
            Northwind.ProductGrid = ProductGrid;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var RegionDialog = /** @class */ (function (_super) {
                __extends(RegionDialog, _super);
                function RegionDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Northwind.RegionForm(_this.idPrefix);
                    return _this;
                }
                RegionDialog.prototype.getFormKey = function () { return Northwind.RegionForm.formKey; };
                RegionDialog.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
                RegionDialog.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
                RegionDialog.prototype.getNameProperty = function () { return Northwind.RegionRow.nameProperty; };
                RegionDialog.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
                RegionDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], RegionDialog);
                return RegionDialog;
            }(Serenity.EntityDialog));
            Northwind.RegionDialog = RegionDialog;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var RegionGrid = /** @class */ (function (_super) {
                __extends(RegionGrid, _super);
                function RegionGrid(container) {
                    return _super.call(this, container) || this;
                }
                RegionGrid.prototype.getColumnsKey = function () { return Northwind.RegionColumns.columnsKey; };
                RegionGrid.prototype.getDialogType = function () { return Northwind.RegionDialog; };
                RegionGrid.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
                RegionGrid.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
                RegionGrid.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
                RegionGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], RegionGrid);
                return RegionGrid;
            }(Serenity.EntityGrid));
            Northwind.RegionGrid = RegionGrid;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var PhoneEditor = /** @class */ (function (_super) {
                __extends(PhoneEditor, _super);
                function PhoneEditor(input) {
                    var _this = _super.call(this, input) || this;
                    _this.addValidationRule(_this.uniqueName, function (e) {
                        var value = Q.trimToNull(_this.get_value());
                        if (value == null) {
                            return null;
                        }
                        return PhoneEditor_1.validate(value, _this.multiple);
                    });
                    input.bind('change', function (e) {
                        if (!Serenity.WX.hasOriginalEvent(e)) {
                            return;
                        }
                        _this.formatValue();
                    });
                    input.bind('blur', function (e) {
                        if (_this.element.hasClass('valid')) {
                            _this.formatValue();
                        }
                    });
                    return _this;
                }
                PhoneEditor_1 = PhoneEditor;
                PhoneEditor.prototype.formatValue = function () {
                    this.element.val(this.getFormattedValue());
                };
                PhoneEditor.prototype.getFormattedValue = function () {
                    var value = this.element.val();
                    if (this.multiple) {
                        return PhoneEditor_1.formatMulti(value, PhoneEditor_1.formatPhone);
                    }
                    return PhoneEditor_1.formatPhone(value);
                };
                PhoneEditor.prototype.get_value = function () {
                    return this.getFormattedValue();
                };
                PhoneEditor.prototype.set_value = function (value) {
                    this.element.val(value);
                };
                PhoneEditor.validate = function (phone, isMultiple) {
                    var valid = (isMultiple ? PhoneEditor_1.isValidMulti(phone, PhoneEditor_1.isValidPhone) : PhoneEditor_1.isValidPhone(phone));
                    if (valid) {
                        return null;
                    }
                    return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
                };
                PhoneEditor.isValidPhone = function (phone) {
                    if (Q.isEmptyOrNull(phone)) {
                        return false;
                    }
                    phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                    if (phone.length < 10) {
                        return false;
                    }
                    if (Q.startsWith(phone, '0')) {
                        phone = phone.substring(1);
                    }
                    if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                        phone = phone.substr(1, 3) + phone.substring(5);
                    }
                    if (phone.length !== 10) {
                        return false;
                    }
                    if (Q.startsWith(phone, '0')) {
                        return false;
                    }
                    for (var i = 0; i < phone.length; i++) {
                        var c = phone.charAt(i);
                        if (c < '0' || c > '9') {
                            return false;
                        }
                    }
                    return true;
                };
                PhoneEditor.formatPhone = function (phone) {
                    if (!PhoneEditor_1.isValidPhone(phone)) {
                        return phone;
                    }
                    phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                    if (Q.startsWith(phone, '0')) {
                        phone = phone.substring(1);
                    }
                    phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                    return phone;
                };
                PhoneEditor.formatMulti = function (phone, format) {
                    var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                    var result = '';
                    for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                        var x = phones_1[_i];
                        var s = Q.trimToNull(x);
                        if (s == null) {
                            continue;
                        }
                        if (result.length > 0) {
                            result += ', ';
                        }
                        result += format(s);
                    }
                    return result;
                };
                PhoneEditor.isValidMulti = function (phone, check) {
                    if (Q.isEmptyOrNull(phone)) {
                        return false;
                    }
                    var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                    var anyValid = false;
                    for (var $t1 = 0; $t1 < phones.length; $t1++) {
                        var x = phones[$t1];
                        var s = Q.trimToNull(x);
                        if (s == null) {
                            continue;
                        }
                        if (!check(s)) {
                            return false;
                        }
                        anyValid = true;
                    }
                    if (!anyValid) {
                        return false;
                    }
                    return true;
                };
                var PhoneEditor_1;
                __decorate([
                    Serenity.Decorators.option()
                ], PhoneEditor.prototype, "multiple", void 0);
                PhoneEditor = PhoneEditor_1 = __decorate([
                    Serenity.Decorators.registerEditor()
                ], PhoneEditor);
                return PhoneEditor;
            }(Serenity.StringEditor));
            Northwind.PhoneEditor = PhoneEditor;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ShipperDialog = /** @class */ (function (_super) {
                __extends(ShipperDialog, _super);
                function ShipperDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Northwind.ShipperForm(_this.idPrefix);
                    return _this;
                }
                ShipperDialog.prototype.getFormKey = function () { return Northwind.ShipperForm.formKey; };
                ShipperDialog.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
                ShipperDialog.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
                ShipperDialog.prototype.getNameProperty = function () { return Northwind.ShipperRow.nameProperty; };
                ShipperDialog.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
                ShipperDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], ShipperDialog);
                return ShipperDialog;
            }(Serenity.EntityDialog));
            Northwind.ShipperDialog = ShipperDialog;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ShipperFormatter = /** @class */ (function () {
                function ShipperFormatter() {
                }
                ShipperFormatter.prototype.format = function (ctx) {
                    if (!ctx.value)
                        return Q.htmlEncode(ctx.value);
                    return '<i class="text-info fa fa-' +
                        (ctx.value == "Speedy Express" ? "plane"
                            : (ctx.value == "Federal Shipping" ? "ship"
                                : "truck")) + ' text-opacity-75"></i> ' + Q.htmlEncode(ctx.value);
                };
                ShipperFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], ShipperFormatter);
                return ShipperFormatter;
            }());
            Northwind.ShipperFormatter = ShipperFormatter;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var ShipperGrid = /** @class */ (function (_super) {
                __extends(ShipperGrid, _super);
                function ShipperGrid(container) {
                    return _super.call(this, container) || this;
                }
                ShipperGrid.prototype.getColumnsKey = function () { return Northwind.ShipperColumns.columnsKey; };
                ShipperGrid.prototype.getDialogType = function () { return Northwind.ShipperDialog; };
                ShipperGrid.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
                ShipperGrid.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
                ShipperGrid.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
                ShipperGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], ShipperGrid);
                return ShipperGrid;
            }(Serenity.EntityGrid));
            Northwind.ShipperGrid = ShipperGrid;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var SupplierDialog = /** @class */ (function (_super) {
                __extends(SupplierDialog, _super);
                function SupplierDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Northwind.SupplierForm(_this.idPrefix);
                    return _this;
                }
                SupplierDialog.prototype.getFormKey = function () { return Northwind.SupplierForm.formKey; };
                SupplierDialog.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
                SupplierDialog.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
                SupplierDialog.prototype.getNameProperty = function () { return Northwind.SupplierRow.nameProperty; };
                SupplierDialog.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
                SupplierDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], SupplierDialog);
                return SupplierDialog;
            }(Serenity.EntityDialog));
            Northwind.SupplierDialog = SupplierDialog;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var SupplierGrid = /** @class */ (function (_super) {
                __extends(SupplierGrid, _super);
                function SupplierGrid(container) {
                    return _super.call(this, container) || this;
                }
                SupplierGrid.prototype.getColumnsKey = function () { return Northwind.SupplierColumns.columnsKey; };
                SupplierGrid.prototype.getDialogType = function () { return Northwind.SupplierDialog; };
                SupplierGrid.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
                SupplierGrid.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
                SupplierGrid.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
                SupplierGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], SupplierGrid);
                return SupplierGrid;
            }(Serenity.EntityGrid));
            Northwind.SupplierGrid = SupplierGrid;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var TerritoryDialog = /** @class */ (function (_super) {
                __extends(TerritoryDialog, _super);
                function TerritoryDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Northwind.TerritoryForm(_this.idPrefix);
                    return _this;
                }
                TerritoryDialog.prototype.getFormKey = function () { return Northwind.TerritoryForm.formKey; };
                TerritoryDialog.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
                TerritoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
                TerritoryDialog.prototype.getNameProperty = function () { return Northwind.TerritoryRow.nameProperty; };
                TerritoryDialog.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
                TerritoryDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], TerritoryDialog);
                return TerritoryDialog;
            }(Serenity.EntityDialog));
            Northwind.TerritoryDialog = TerritoryDialog;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var Demo;
    (function (Demo) {
        var Northwind;
        (function (Northwind) {
            var TerritoryGrid = /** @class */ (function (_super) {
                __extends(TerritoryGrid, _super);
                function TerritoryGrid(container) {
                    return _super.call(this, container) || this;
                }
                TerritoryGrid.prototype.getColumnsKey = function () { return Northwind.TerritoryColumns.columnsKey; };
                TerritoryGrid.prototype.getDialogType = function () { return Northwind.TerritoryDialog; };
                TerritoryGrid.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
                TerritoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
                TerritoryGrid.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
                TerritoryGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], TerritoryGrid);
                return TerritoryGrid;
            }(Serenity.EntityGrid));
            Northwind.TerritoryGrid = TerritoryGrid;
        })(Northwind = Demo.Northwind || (Demo.Northwind = {}));
    })(Demo = Serenity.Demo || (Serenity.Demo = {}));
})(Serenity || (Serenity = {}));
//# sourceMappingURL=index.js.map