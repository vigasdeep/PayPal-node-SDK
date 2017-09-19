// This class was generated on Mon, 18 Sep 2017 18:42:43 UTC by version 0.1 of Braintree SDK Generator
// invoiceSearchRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"invoice.search","Description":"Lists invoices that match search criteria. In the JSON request body, include a `search` object that specifies the search criteria.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[],"RequestType":{"Type":"Search","VariableName":"body","Description":"Invoice search parameters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"boolean","VariableName":"archived","Description":"Indicates whether to list merchant-archived invoices in the response. If `true`, response lists only merchant-archived invoices. If `false`, response lists only unarchived invoices. If `null`, response lists all invoices.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"email","Description":"The initial letters of the email address.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"end_creation_date","Description":"The end creation date for the invoice. Date format is *yyyy*-*MM*-*dd* *z*, as defined in [Internet Date/Time Format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"end_due_date","Description":"The end due date for the invoice. Date format is *yyyy*-*MM*-*dd* *z*, as defined in [Internet Date/Time Format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"end_invoice_date","Description":"The end date for the invoice. Date format is *yyyy*-*MM*-*dd* *z*, as defined in [Internet Date/Time Format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"end_payment_date","Description":"The end payment date for the invoice. Date format is *yyyy*-*MM*-*dd* *z*, as defined in [Internet Date/Time Format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Currency","VariableName":"lower_total_amount","Description":"Base object for all financial value related fields (balance, payment due, etc.)","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"currency","Description":"3 letter currency code as defined by ISO 4217.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"value","Description":"amount up to N digit after the decimals separator as defined in ISO 4217 for the appropriate currency code.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]},{"Type":"string","VariableName":"number","Description":"The invoice number.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"number","VariableName":"page","Description":"The offset for the search results.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"number","VariableName":"page_size","Description":"The page size for the search results.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"recipient_business_name","Description":"The initial letters of the recipient business name.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"recipient_first_name","Description":"The initial letters of the recipient first name.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"recipient_last_name","Description":"The initial letters of the recipient last name.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"start_creation_date","Description":"The start creation date for the invoice. Date format is *yyyy*-*MM*-*dd* *z*, as defined in [Internet Date/Time Format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"start_due_date","Description":"The start due date for the invoice. Date format is *yyyy*-*MM*-*dd* *z*, as defined in [Internet Date/Time Format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"start_invoice_date","Description":"The start date for the invoice. Date format is *yyyy*-*MM*-*dd* *z*, as defined in [Internet Date/Time Format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"start_payment_date","Description":"The start payment date for the invoice. Date format is *yyyy*-*MM*-*dd* *z*, as defined in [Internet Date/Time Format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"status","Description":"The invoice status. To search by status, specify this value as an array. For example, `\"status\": [\"REFUNDED\"]`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"boolean","VariableName":"total_count_required","Description":"Indicates whether the total count appears in the response.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Currency","VariableName":"upper_total_amount","Description":"Base object for all financial value related fields (balance, payment due, etc.)","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"currency","Description":"3 letter currency code as defined by ISO 4217.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"value","Description":"amount up to N digit after the decimals separator as defined in ISO 4217 for the appropriate currency code.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]}]},"ResponseType":{"Type":"Invoices","VariableName":"","Description":"List of merchant invoices. Can include the total invoices count and HATEOAS links for navigation.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"Invoice","VariableName":"invoices","Description":"An array of invoices as search result.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Link Description Object","VariableName":"links","Description":"The HATEOAS links for `next` and `previous` navigation in the result set.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"integer","VariableName":"total_count","Description":"The total number of invoices that match the search criteria.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ContentType":"","HttpMethod":"POST","Path":"/v1/invoicing/search","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const InvoiceSearchRequest = require('../../../lib/lib').InvoiceSearchRequest;
const InvoiceCreate = require('./invoiceCreateRequestTest').InvoiceCreate;

function buildRequestBody(number) {
  return {
    'number': number
  };
}

describe('InvoiceSearchRequest', function () {
  it('works as expected', function () {
    return InvoiceCreate().then((createResp) => {
      let request = new InvoiceSearchRequest();
      request.requestBody(buildRequestBody(createResp.result.number));

      return client.execute(request)
    }).then((r) => {
      chai.assert.equal(r.statusCode, 200);
      chai.assert.isNotNull(r.result);
    });
  });
});
