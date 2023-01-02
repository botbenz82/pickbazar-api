"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const get_shippings_dto_1 = require("./dto/get-shippings.dto");
const shipping_dto_1 = require("./dto/shipping.dto");
const shippings_service_1 = require("./shippings.service");
let ShippingsController = class ShippingsController {
    constructor(shippingsService) {
        this.shippingsService = shippingsService;
    }
    create(createShippingDto) {
        return this.shippingsService.create(createShippingDto);
    }
    findAll(query) {
        return this.shippingsService.getShippings(query);
    }
    findOne(id) {
        return this.shippingsService.findOne(+id);
    }
    update(id, updateShippingDto) {
        return this.shippingsService.update(+id, updateShippingDto);
    }
    remove(id) {
        return this.shippingsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/shipping.entity").Shipping }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shipping_dto_1.CreateShippingDto]),
    __metadata("design:returntype", void 0)
], ShippingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/shipping.entity").Shipping] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_shippings_dto_1.GetShippingsDto]),
    __metadata("design:returntype", void 0)
], ShippingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    openapi.ApiResponse({ status: 200, type: require("./entities/shipping.entity").Shipping }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShippingsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":id"),
    openapi.ApiResponse({ status: 200, type: require("./entities/shipping.entity").Shipping }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, shipping_dto_1.UpdateShippingDto]),
    __metadata("design:returntype", void 0)
], ShippingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShippingsController.prototype, "remove", null);
ShippingsController = __decorate([
    (0, common_1.Controller)("shippings"),
    __metadata("design:paramtypes", [shippings_service_1.ShippingsService])
], ShippingsController);
exports.ShippingsController = ShippingsController;
//# sourceMappingURL=shippings.controller.js.map