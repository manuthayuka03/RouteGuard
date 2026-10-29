# Data contract (frontend phase)

These are the field names every member uses in mock data and pages.
If you need a new field, add it here first and tell the team.

## Rules

- Field names use camelCase: `licenceNumber`, not `licence_number`.
- Every record has an `id`. The `id` is the readable code shown on screen (for example `DRV-001`).
- Dates and times are text in ISO format: `2026-10-29T10:42:00`.
- Status values are fixed lists (below). Use them exactly, including capital letters.
- Use the same sample vehicles and drivers in every module's mock data.

## Officers (Member 1)

| Field | Example |
|---|---|
| id | OFF-001 |
| name | D. Jayasinghe |
| email | d.jayasinghe@routeguard.lk |
| role | Monitoring Officer |
| status | Active / Suspended |

## Audit logs (Member 1)

| Field | Example |
|---|---|
| id | LOG-001 |
| time | 2026-10-29T09:42:00 |
| user | Admin User |
| role | Administrator |
| action | Created account |
| target | OFF-024 |

## Drivers (Member 2)

| Field | Example |
|---|---|
| id | DRV-001 |
| name | Nimal Perera |
| licenceNumber | B1234567 |
| phone | 0771234567 |
| assignedVehicleId | VEH-001 (or null) |
| status | Active / Inactive / Review |

## Vehicles (Member 2)

GPS tracker details live inside the vehicle. There is no separate tracker record.

| Field | Example |
|---|---|
| id | VEH-001 |
| registrationNumber | REG-104 |
| type | Lorry |
| capacity | 10 tons |
| defaultDriverId | DRV-001 (or null) |
| trackerId | TRK-001 (or null) |
| trackerModel | Model X1 |
| trackerProvider | Provider A |
| status | Active / Maintenance / Inactive |

## Routes (Member 2)

| Field | Example |
|---|---|
| id | RT-001 |
| origin | Warehouse A |
| destination | Depot North |
| windowStart | 08:00 |
| windowEnd | 12:00 |
| checkpoints | list of `{ name, lat, lng }` |
| status | Active / Draft / Inactive |

## Trip authorizations (Member 2)

| Field | Example |
|---|---|
| id | TA-2026-0084 |
| routeId | RT-001 |
| driverId | DRV-001 (or null) |
| vehicleId | VEH-001 (or null) |
| departure | 2026-10-29T10:00:00 |
| status | Pending / Authorized / Assigned / Rejected / Cancelled |

## Trips (Members 2 and 3)

A trip is created from an authorization.

| Field | Example |
|---|---|
| id | TRP-1026 |
| authorizationId | TA-2026-0084 |
| routeId | RT-001 |
| driverId | DRV-001 |
| vehicleId | VEH-001 |
| startTime | 2026-10-29T08:30:00 |
| expectedArrival | 2026-10-29T11:30:00 |
| actualArrival | 2026-10-29T11:25:00 (or null) |
| progressPercent | 65 |
| status | In Progress / Completed / Delayed |
| compliance | Compliant / Deviation |

## Alerts (Member 4)

| Field | Example |
|---|---|
| id | ALT-001 |
| vehicleId | VEH-001 |
| tripId | TRP-1026 |
| type | Route Deviation |
| severity | Critical / High / Medium / Low |
| createdAt | 2026-10-21T10:42:00 |
| status | Open / Resolved |

## Incidents (Member 4)

| Field | Example |
|---|---|
| id | INC-001 |
| alertId | ALT-001 |
| vehicleId | VEH-001 |
| type | Route Deviation |
| severity | Critical / High / Medium / Low |
| assignedOfficer | D. Jayasinghe |
| status | Open / Reviewing / Resolved |
| updatedAt | 2026-10-21T10:44:00 |

## Vehicle positions, live (Member 3)

| Field | Example |
|---|---|
| vehicleId | VEH-001 |
| tripId | TRP-1026 |
| lat | 7.2906 |
| lng | 80.6337 |
| speedKmh | 72 |
| recordedAt | 2026-10-29T10:45:00 |