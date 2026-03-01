import { registerEnumType } from '@nestjs/graphql';
/**
 * Represents the lifecycle status of a user.
 * Mirrors the Prisma enum `PersonStatus`.
 */
export var PersonStatus;
(function (PersonStatus) {
    PersonStatus["ACTIVE"] = "ACTIVE";
    PersonStatus["DISABLED"] = "DISABLED";
    PersonStatus["DELETED"] = "DELETED";
    PersonStatus["INACTIVE"] = "INACTIVE";
    PersonStatus["BLOCKED"] = "BLOCKED";
    PersonStatus["CLOSED"] = "CLOSED";
})(PersonStatus || (PersonStatus = {}));
registerEnumType(PersonStatus, {
    name: 'PersonStatus',
    description: 'Represents the current lifecycle state of a user.',
});
