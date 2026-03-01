/**
 * @license GPL-3.0-or-later
 * Copyright (C) 2025 Caleb Gyamfi - Omnixys Technologies
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * For more information, visit <https://www.gnu.org/licenses/>.
 */
export interface RoleData {
    id: string;
    name: string;
}
/**
 * Realm roles used by Omnixys services (single effective role).
 * NOTE: We resolve ONE effective role from potentially many Keycloak roles.
 */
export declare enum RealmRole {
    ADMIN = "ADMIN",
    SECURITY = "SECURITY",
    EVENT_ADMIN = "EVENT_ADMIN",
    SUPREME = "SUPREME",
    ELITE = "ELITE",
    BASIC = "BASIC",
    USER = "USER",
    GUEST = "GUEST",
    ANON = "ANON"
}
/** Enum → actual Keycloak role name (keep as defined in Keycloak) */
export declare const ENUM_TO_KC: Record<RealmRole, string>;
/** Keycloak name/string → enum (robust & case-insensitive) */
export declare const KC_TO_ENUM: Record<string, RealmRole>;
/** One string → enum (or null if unknown) */
export declare function roleStrToEnum(s: string | undefined | null): RealmRole | null;
/** Strings → deduplicated enum array */
export declare function toEnumRoles(list: Array<string | null | undefined>): RealmRole[];
/** Enum → Keycloak string */
export declare function enumToKcName(r: RealmRole): string;
/**
 * Resolve ONE effective role from many raw roles.
 * Priority order: admin/security/event_admin > tiers > user/guest > anon
 */
export declare function resolveEffectiveRole(isAuthenticated: boolean, raw?: string[] | null): RealmRole;
/** Mapping internal role → Keycloak role name (alias for enumToKcName) */
export declare const ROLE_NAME_MAP: Record<RealmRole, string>;
