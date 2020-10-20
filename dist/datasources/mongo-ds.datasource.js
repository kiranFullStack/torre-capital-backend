"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDsDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'mongoDs',
    connector: 'mongodb',
    url: 'mongodb+srv://kiran:kiran@cluster0.yhif6.mongodb.net/mongoDs?retryWrites=true&w=majority',
    host: '',
    port: "",
    user: '',
    password: '',
    database: '',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MongoDsDataSource = class MongoDsDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MongoDsDataSource.dataSourceName = 'mongoDs';
MongoDsDataSource.defaultConfig = config;
MongoDsDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.mongoDs', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MongoDsDataSource);
exports.MongoDsDataSource = MongoDsDataSource;
//# sourceMappingURL=mongo-ds.datasource.js.map