import { registerEnumType } from '@nestjs/graphql';
/**
 * Represents the marital status of a person.
 * Mirrors the Prisma enum `MaritalStatusType`.
 */
export var MaritalStatusType;
(function (MaritalStatusType) {
    MaritalStatusType["SINGLE"] = "SINGLE";
    MaritalStatusType["MARRIED"] = "MARRIED";
    MaritalStatusType["DIVORCED"] = "DIVORCED";
    MaritalStatusType["WIDOWED"] = "WIDOWED";
})(MaritalStatusType || (MaritalStatusType = {}));
registerEnumType(MaritalStatusType, {
    name: 'MaritalStatusType',
    description: 'Specifies the marital status of a person.',
});
