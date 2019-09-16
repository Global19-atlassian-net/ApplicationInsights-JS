// THIS FILE WAS AUTOGENERATED
/// <reference path="../../External/qunit.d.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/DataPoint.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/MetricData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/RemoteDependencyData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/RequestData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/StackFrame.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/ExceptionDetails.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/ExceptionData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/MessageData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/EventData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/PageViewData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/PageViewPerfData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/AvailabilityData.ts" />
QUnit.test("Test property DataPoint.name was created and default is set", function () {
    var temp = new AI.DataPoint();
    QUnit.ok(temp.name !== null, "DataPoint.name == null");
});

QUnit.test("Test property DataPoint.kind was created and default is set", function () {
    var temp = new AI.DataPoint();
    QUnit.ok(temp.kind !== null, "DataPoint.kind == null");
    QUnit.ok(temp.kind === AI.DataPointType.Measurement, "Issue with DataPoint.kind");
});

QUnit.test("Test property DataPoint.value was created and default is set", function () {
    var temp = new AI.DataPoint();
    QUnit.ok(temp.value !== null, "DataPoint.value == null");
});

QUnit.test("Test property DataPoint.count was created and default is set", function () {
    var temp = new AI.DataPoint();
    QUnit.ok(temp.count !== null, "DataPoint.count == null");
});

QUnit.test("Test property DataPoint.min was created and default is set", function () {
    var temp = new AI.DataPoint();
    QUnit.ok(temp.min !== null, "DataPoint.min == null");
});

QUnit.test("Test property DataPoint.max was created and default is set", function () {
    var temp = new AI.DataPoint();
    QUnit.ok(temp.max !== null, "DataPoint.max == null");
});

QUnit.test("Test property DataPoint.stdDev was created and default is set", function () {
    var temp = new AI.DataPoint();
    QUnit.ok(temp.stdDev !== null, "DataPoint.stdDev == null");
});
