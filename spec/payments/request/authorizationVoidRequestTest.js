// This class was generated on Tue, 19 Sep 2017 17:11:32 UTC by version 0.1 of Braintree SDK Generator
// authorizationVoidRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"authorization.void","Description":"Voids, or cancels, an authorization, by ID. You cannot void a fully captured authorization.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"authorization_id","Description":"The ID of the authorization to void.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":null,"ResponseType":{"Type":"Authorization","VariableName":"","Description":"An authorization.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"Amount","VariableName":"amount","Description":"The payment amount, with break-ups.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":[{"Type":"string","VariableName":"currency","Description":"The [three-character ISO-4217 currency code](https://developer.paypal.com/docs/classic/api/currency_codes/). PayPal does not support all currencies.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"Amount details","VariableName":"details","Description":"The additional details about the payment amount.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"gift_wrap","Description":"The gift wrap fee.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"handling_fee","Description":"The handling fee. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"insurance","Description":"The insurance fee. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"shipping","Description":"The shipping fee. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"shipping_discount","Description":"The shipping fee discount. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"subtotal","Description":"The subtotal amount for the items. If the request includes line items, this property is **required**. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"tax","Description":"The tax. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},{"Type":"string","VariableName":"total","Description":"The total amount charged to the payee by the payer. For refunds, represents the amount that the payee refunds to the original payer. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]},{"Type":"string","VariableName":"create_time","Description":"The date and time when the authorization was created, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"FMF Details","VariableName":"fmf_details","Description":"The [Fraud Management Filter (FMF)](/docs/classic/fmf/integration-guide/FMFSummary/) details.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"description","Description":"The filter description.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"filter_id","Description":"The filter ID.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"filter_type","Description":"The filter type.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"name","Description":"The filter name.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},{"Type":"string","VariableName":"id","Description":"The ID of the authorization.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Link Description Object","VariableName":"links","Description":"The request-related [HATEOAS links](/docs/api/hateoas-links/).","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"parent_payment","Description":"The ID of the payment resource on which this transaction is based.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"payment_mode","Description":"The payment mode of the authorization.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"pending_reason","Description":"[DEPRECATED] The reason code for the pending transaction state. Obsolete. Use `reason_code` instead.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Processor Response","VariableName":"processor_response","Description":"A collection of payment response-related fields returned from a payment request.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"advice_code","Description":"The merchant advice on how to handle declines for recurring payments.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"avs_code","Description":"The [Address Verification System (AVS)](https://developer.paypal.com/webapps/developer/docs/classic/api/AVSResponseCodes/) response code.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"cvv_code","Description":"The [CVV](https://developer.paypal.com/webapps/developer/docs/classic/api/AVSResponseCodes/) system response code.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"eci_submitted","Description":"The processor-provided authorization response.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"response_code","Description":"The PayPal normalized response code, which is generated from the processor's specific response code.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"vpas","Description":"The processor-provided Visa Payer Authentication Service status.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},{"Type":"string","VariableName":"protection_eligibility","Description":"The level of seller protection present for the transaction. Supported for the PayPal payment method only. Value is:\u003cul\u003e\u003cli\u003e\u003ccode\u003eELIGIBLE\u003c/code\u003e. Merchant is protected by PayPal's Seller Protection Policy for Unauthorized Payments and Item Not Received.\u003c/li\u003e\u003cli\u003e\u003ccode\u003ePARTIALLY_ELIGIBLE\u003c/code\u003e. Merchant is protected by PayPal's Seller Protection Policy for Item Not Received or Unauthorized Payments. For details, see `protection_eligibility_type`.\u003c/li\u003e\u003cli\u003e\u003ccode\u003eINELIGIBLE\u003c/code\u003e. Merchant is not protected under the Seller Protection Policy.\u003c/li\u003e\u003c/ul\u003e","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"protection_eligibility_type","Description":"The type of seller protection present for the transaction. Returned only when the `protection_eligibility` property is `ELIGIBLE` or `PARTIALLY_ELIGIBLE`. Supported for the PayPal payment method only.\u003cbr/\u003e\u003cbr/\u003eReturns one or both of the allowed values.\u003cbr/\u003e\u003cbr/\u003eValue is:\u003cul\u003e\u003cli\u003e\u003ccode\u003eITEM_NOT_RECEIVED_ELIGIBLE\u003c/code\u003e. Sellers are protected against claims for items not received.\u003c/li\u003e\u003cli\u003e\u003ccode\u003eUNAUTHORIZED_PAYMENT_ELIGIBLE\u003c/code\u003e. Sellers are protected against claims for unauthorized payments.\u003c/li\u003e\u003c/ul\u003e","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"reason_code","Description":"The reason code for the pending transaction state.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"receipt_id","Description":"The receipt ID, which identifies the payment. Value is 16-digit numeric payment ID number that is returned for guest users.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"reference_id","Description":"The ID of the purchase or transaction unit that corresponds to this authorization transaction.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"state","Description":"The authorization state.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"update_time","Description":"The date and time when the authorization was last updated, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"valid_until","Description":"The date and time when the authorization expires, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ContentType":"application/json","HttpMethod":"POST","Path":"/v1/payments/authorization/{authorization_id}/void","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const AuthorizationVoidRequest = require('../../../lib/lib').AuthorizationVoidRequest;
const PaymentCreate = require('./paymentCreateRequestTest').PaymentCreate;

describe('AuthorizationVoidRequest', function () {
  it('works as expected', function () {
    return PaymentCreate('authorize').then((createResponse) => {
      let authId = createResponse.result.transactions[0].related_resources[0].authorization.id;
      let request = new AuthorizationVoidRequest(authId);

      return client.execute(request).then((r) => {
        chai.assert.equal(r.statusCode, 200);
        chai.assert.isNotNull(r.result);
      });
    });
  });
});
