using Serenity.Navigation;
using MyPages = Indotalent.Purchase.Pages;

[assembly: NavigationLink(int.MaxValue, "Purchase/Bill", typeof(MyPages.BillController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Purchase/Bill Detail", typeof(MyPages.BillDetailController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Purchase/Bill Payment", typeof(MyPages.BillPaymentController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Purchase/Purchase Order", typeof(MyPages.PurchaseOrderController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Purchase/Purchase Order Detail", typeof(MyPages.PurchaseOrderDetailController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Purchase/Vendor", typeof(MyPages.VendorController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Purchase/Vendor Contact", typeof(MyPages.VendorContactController), icon: null)]