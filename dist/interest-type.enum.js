import { registerEnumType } from '@nestjs/graphql';
/**
 * Represents user interests.
 * Mirrors the Prisma enum `InterestType`.
 */
export var InterestType;
(function (InterestType) {
    InterestType["SPORTS"] = "SPORTS";
    InterestType["MUSIC"] = "MUSIC";
    InterestType["TRAVEL"] = "TRAVEL";
    InterestType["TECHNOLOGY"] = "TECHNOLOGY";
    InterestType["OTHER"] = "OTHER";
    InterestType["INVESTMENTS"] = "INVESTMENTS";
    InterestType["SAVING_AND_FINANCE"] = "SAVING_AND_FINANCE";
    InterestType["CREDIT_AND_DEBT"] = "CREDIT_AND_DEBT";
    InterestType["BANK_PRODUCTS_AND_SERVICES"] = "BANK_PRODUCTS_AND_SERVICES";
    InterestType["FINANCIAL_EDUCATION_AND_COUNSELING"] = "FINANCIAL_EDUCATION_AND_COUNSELING";
    InterestType["REAL_ESTATE"] = "REAL_ESTATE";
    InterestType["INSURANCE"] = "INSURANCE";
    InterestType["SUSTAINABLE_FINANCE"] = "SUSTAINABLE_FINANCE";
    InterestType["TECHNOLOGY_AND_INNOVATION"] = "TECHNOLOGY_AND_INNOVATION";
})(InterestType || (InterestType = {}));
registerEnumType(InterestType, {
    name: 'InterestType',
    description: 'Represents areas of interest associated with a user.',
});
