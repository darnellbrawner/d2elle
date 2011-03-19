// ==========================================================================
// Project:   D2elle.ExcelData
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals D2elle */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
D2elle.ExcelData = SC.Record.extend(
/** @scope D2elle.ExcelData.prototype */ {
    worksheet_id: SC.Record.attr(Number),
    atn_1: SC.Record.attr(String),
    atv_1: SC.Record.attr(String),
    atn_2: SC.Record.attr(String),
    atv_2: SC.Record.attr(String)
}) ;
