import { registerEnumType } from '@nestjs/graphql';
/**
 * Defines the high-level category of a user.
 * Mirrors the Prisma enum `UserType`.
 */
export var UserType;
(function (UserType) {
    UserType["CUSTOMER"] = "CUSTOMER";
    UserType["EMPLOYEE"] = "EMPLOYEE";
    UserType["GUEST"] = "GUEST";
})(UserType || (UserType = {}));
registerEnumType(UserType, {
    name: 'UserType',
    description: 'Specifies the category of a user (customer, employee, guest).',
});
