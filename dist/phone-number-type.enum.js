import { registerEnumType } from '@nestjs/graphql';
/**
 * Enum for different phone number categories.
 * Mirrors the Prisma enum `PhoneType`.
 */
export var PhoneNumberType;
(function (PhoneNumberType) {
    PhoneNumberType["WHATSAPP"] = "WHATSAPP";
    PhoneNumberType["MOBILE"] = "MOBILE";
    PhoneNumberType["PRIVATE"] = "PRIVATE";
    PhoneNumberType["WORK"] = "WORK";
    PhoneNumberType["HOME"] = "HOME";
    PhoneNumberType["OTHER"] = "OTHER";
})(PhoneNumberType || (PhoneNumberType = {}));
// Register enum for GraphQL usage
registerEnumType(PhoneNumberType, {
    name: 'PhoneNumberType',
    description: 'Specifies the type/category of a phone number.',
});
