// This class was generated on Tue, 19 Sep 2017 17:11:32 UTC by version 0.1 of Braintree SDK Generator
// orderVoidRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"order.void","Description":"Voids, or cancels, an order, by ID. You cannot void an order if the payment has already been partially or fully captured.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"order_id","Description":"The ID of the order to void.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":null,"ResponseType":{"Type":"Order","VariableName":"","Description":"An order transaction.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"Amount","VariableName":"amount","Description":"The payment amount, with break-ups.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":[{"Type":"string","VariableName":"currency","Description":"The [three-character ISO-4217 currency code](https://developer.paypal.com/docs/classic/api/currency_codes/). PayPal does not support all currencies.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"Amount details","VariableName":"details","Description":"The additional details about the payment amount.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"gift_wrap","Description":"The gift wrap fee.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"handling_fee","Description":"The handling fee. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"insurance","Description":"The insurance fee. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"shipping","Description":"The shipping fee. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"shipping_discount","Description":"The shipping fee discount. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"subtotal","Description":"The subtotal amount for the items. If the request includes line items, this property is **required**. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"tax","Description":"The tax. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},{"Type":"string","VariableName":"total","Description":"The total amount charged to the payee by the payer. For refunds, represents the amount that the payee refunds to the original payer. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]},{"Type":"string","VariableName":"create_time","Description":"The date and time when the resource was created, , in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"FMF Details","VariableName":"fmf_details","Description":"The [Fraud Management Filter (FMF)](/docs/classic/fmf/integration-guide/FMFSummary/) details.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"description","Description":"The filter description.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"filter_id","Description":"The filter ID.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"filter_type","Description":"The filter type.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"name","Description":"The filter name.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},{"Type":"string","VariableName":"id","Description":"The ID of the order transaction.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Link Description Object","VariableName":"links","Description":"","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"parent_payment","Description":"The ID of the payment on which this transaction is based.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"payment_mode","Description":"The transaction payment mode.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"pending_reason","Description":"\u003cstrong\u003eDEPRECATED\u003c/strong\u003e The reason code that describes why the transaction state is pending. Obsolete. Retained for backward compatibility. Use \u003ccode\u003ereason_code\u003c/code\u003e parameter instead.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"protection_eligibility","Description":"The level of seller protection in effect for the transaction.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"protection_eligibility_type","Description":"The kind of seller protection in effect for the transaction. Returned only when the `protection_eligibility` property is `ELIGIBLE` or `PARTIALLY_ELIGIBLE`. Supported only when the `payment_method` is `paypal`. One or both of these values can be returned:\u003cul\u003e\u003cli\u003e\u003ccode\u003eITEM_NOT_RECEIVED_ELIGIBLE\u003c/code\u003e. Sellers are protected against claims for items not received.\u003c/li\u003e\u003cli\u003e\u003ccode\u003eUNAUTHORIZED_PAYMENT_ELIGIBLE\u003c/code\u003e. Sellers are protected against claims for unauthorized payments.\u003c/li\u003e\u003c/ul\u003e","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"reason_code","Description":"The reason code that describes why the transaction state is pending or reversed. Eventually, this parameter will replace the `pending_reason` parameter. Supported only when the `payment_method` is `paypal`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"reference_id","Description":"The ID of the purchase unit that is associated with this object. Obsolete. Used only in `cart_base`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"state","Description":"The order transaction state.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"update_time","Description":"The date and time when the resource was last updated, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ContentType":"application/json","HttpMethod":"POST","Path":"/v1/payments/orders/{order_id}/do-void","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const OrderVoidRequest = require('../../../lib/lib').OrderVoidRequest;
const FAKE_ID = require('./orderGetRequestTest').FAKE_ID;

describe('OrderVoidRequest', function () {
  it('works as expected', function () {
    let request = new OrderVoidRequest(FAKE_ID);

    return client.execute(request).then((r) => {
      chai.assert.fail('This test is an example, relying on a fake id');
    }).catch((error) => {
      chai.assert.include(error.message, 'debug_id');
    });
  });
});
