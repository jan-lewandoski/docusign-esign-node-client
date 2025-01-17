/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkProcessingListSummary = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BulkProcessingListSummary model module.
   * @module model/BulkProcessingListSummary
   */

  /**
   * Constructs a new <code>BulkProcessingListSummary</code>.
   * @alias module:model/BulkProcessingListSummary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkProcessingListSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkProcessingListSummary} obj Optional instance to populate.
   * @return {module:model/BulkProcessingListSummary} The populated <code>BulkProcessingListSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bulkProcessListId')) {
        obj['bulkProcessListId'] = ApiClient.convertToType(data['bulkProcessListId'], 'String');
      }
      if (data.hasOwnProperty('createdByUser')) {
        obj['createdByUser'] = ApiClient.convertToType(data['createdByUser'], 'String');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} bulkProcessListId
   */
  exports.prototype['bulkProcessListId'] = undefined;
  /**
   * 
   * @member {String} createdByUser
   */
  exports.prototype['createdByUser'] = undefined;
  /**
   * 
   * @member {String} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


