import { registerEnumType } from '@nestjs/graphql';
/**
 * Represents the gender of a person.
 * Mirrors the Prisma enum `GenderType`.
 */
export var GenderType;
(function (GenderType) {
    GenderType["MALE"] = "MALE";
    GenderType["FEMALE"] = "FEMALE";
    GenderType["DIVERSE"] = "DIVERSE";
    GenderType["UNKNOWN"] = "UNKNOWN";
})(GenderType || (GenderType = {}));
registerEnumType(GenderType, {
    name: 'GenderType',
    description: 'Specifies the gender of a person.',
});
