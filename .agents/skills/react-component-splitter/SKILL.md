# React Component Architecture

## Purpose

Build React applications with a clear separation between:

* UI/presentation
* business logic
* data fetching
* state management
* reusable utilities
* component-specific types

The goal is to keep React components small, readable, testable, and easy to maintain.

---

## Core Rules

### 1. Keep components focused on UI

A React component should primarily describe **what the UI looks like**.

Avoid putting substantial business logic directly inside JSX components.

Bad:

```tsx
function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.filter((user) => user.active));
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`/api/users/${id}`, { method: 'DELETE' });

    setUsers((current) => current.filter((user) => user.id !== id));
  };

  return (
    // large amount of UI
  );
}
```

Prefer:

```tsx
function UserList() {
  const {
    users,
    loading,
    deleteUser,
  } = useUsers();

  return (
    <UserListView
      users={users}
      loading={loading}
      onDelete={deleteUser}
    />
  );
}
```

The component should orchestrate the UI rather than contain the entire application logic.

---

## 2. Extract logic into custom hooks

Move component-specific state and behavior into custom hooks.

Example:

```tsx
export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    setLoading(true);

    try {
      const users = await usersService.getUsers();

      setUsers(users.filter((user) => user.active));
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: string) => {
    await usersService.deleteUser(id);

    setUsers((current) =>
      current.filter((user) => user.id !== id)
    );
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    loading,
    deleteUser,
  };
}
```

Use hooks for:

* state
* effects
* event/business behavior
* derived state
* subscriptions
* data loading
* coordinating multiple pieces of logic

Do not create hooks merely to move a few lines of trivial JSX-related code.

---

## 3. Extract API and data-access logic

Do not put raw API calls inside presentational components.

Bad:

```tsx
function UserCard({ user }: Props) {
  const handleDelete = async () => {
    await fetch(`/api/users/${user.id}`, {
      method: 'DELETE',
    });
  };

  return ...;
}
```

Prefer:

```tsx
// users.service.ts

export const usersService = {
  deleteUser(id: string) {
    return api.delete(`/users/${id}`);
  },
};
```

Then use the service from a hook or application logic layer.

---

## 4. Split large components

When a component becomes difficult to understand, split it into smaller components.

A component should generally have one clear responsibility.

For example, instead of:

```tsx
function Dashboard() {
  // 300+ lines
  // sidebar
  // header
  // statistics
  // charts
  // filters
  // tables
  // dialogs
  // API calls
  // business logic
}
```

Prefer:

```tsx
function Dashboard() {
  const data = useDashboard();

  return (
    <DashboardLayout>
      <DashboardHeader />
      <DashboardFilters />
      <DashboardStats stats={data.stats} />
      <DashboardCharts data={data.charts} />
      <DashboardTable rows={data.rows} />
    </DashboardLayout>
  );
}
```

---

## 5. Extract repeated UI

If the same UI pattern appears multiple times, consider extracting a reusable component.

Examples:

* Button
* Modal
* Dialog
* FormField
* Input
* Select
* Card
* Table
* EmptyState
* LoadingState
* ErrorState
* UserAvatar
* StatusBadge

Do not abstract code only because two pieces look superficially similar.

Prefer meaningful abstractions with a clear responsibility.

---

## 6. Separate container and presentation when useful

For complex screens, separate data/logic from presentation.

Example:

```text
UserList/
├── UserList.tsx
├── UserListView.tsx
├── useUserList.ts
└── types.ts
```

`UserList.tsx`:

```tsx
export function UserList() {
  const model = useUserList();

  return <UserListView {...model} />;
}
```

`UserListView.tsx`:

```tsx
type Props = {
  users: User[];
  loading: boolean;
  onDelete: (id: string) => void;
};

export function UserListView({
  users,
  loading,
  onDelete,
}: Props) {
  if (loading) {
    return <LoadingState />;
  }

  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
```

This pattern is especially useful when the UI is complex or needs isolated testing.

Do not force container/presentation separation for every tiny component.

---

## 7. Keep JSX readable

Avoid deeply nested conditional logic and complex expressions inside JSX.

Bad:

```tsx
return (
  <div>
    {loading ? (
      ...
    ) : error ? (
      ...
    ) : users.length === 0 ? (
      ...
    ) : (
      users.map(...)
    )}
  </div>
);
```

Prefer:

```tsx
if (loading) {
  return <LoadingState />;
}

if (error) {
  return <ErrorState error={error} />;
}

if (users.length === 0) {
  return <EmptyState />;
}

return <UserList users={users} />;
```

Extract complicated UI sections into components.

---

## 8. Keep derived values outside JSX

Bad:

```tsx
return (
  <div>
    {users
      .filter((user) => user.active)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
  </div>
);
```

Prefer:

```tsx
const activeUsers = users
  .filter((user) => user.active)
  .sort((a, b) => a.name.localeCompare(b.name));

return <UserList users={activeUsers} />;
```

If the computation is expensive or belongs to business logic, move it into a hook or utility.

---

## 9. Use utilities for pure logic

Pure transformations should be extracted into utilities.

Example:

```tsx
export function getActiveUsers(users: User[]) {
  return users.filter((user) => user.active);
}
```

Good candidates for `utils`:

* formatting
* parsing
* filtering
* sorting
* calculations
* transformations
* validation helpers

Utilities should not contain React state or side effects.

---

## 10. Component props should be explicit

Avoid passing huge objects when a component only needs a few values.

Prefer:

```tsx
<UserCard
  name={user.name}
  avatar={user.avatar}
  status={user.status}
/>
```

over:

```tsx
<UserCard user={user} />
```

when the component does not actually need the entire `User` object.

However, passing a domain object is acceptable when it makes the API clearer and the component genuinely represents that entity.

---

## 11. Avoid "god components"

If a component does all of the following:

* fetches data
* transforms data
* manages multiple unrelated states
* handles business rules
* renders many unrelated UI sections
* performs API mutations
* contains large forms
* manages dialogs
* renders tables/charts

it should probably be decomposed.

Before modifying it, identify separate responsibilities and extract them into:

* child components
* custom hooks
* services
* utilities
* domain modules

---

## 12. Do not over-engineer

Component decomposition should improve readability, not create unnecessary files.

Do NOT extract:

```tsx
const Title = () => <h1>Hello</h1>;
```

just because it is JSX.

Do NOT create a hook for:

```tsx
const isVisible = user.active && !user.deleted;
```

unless the logic is reused or meaningfully represents application behavior.

Use abstraction when it provides:

* reuse
* separation of responsibility
* testability
* readability
* independent evolution

---

## 13. Prefer composition

Prefer composing small components:

```tsx
<Card>
  <CardHeader>
    <CardTitle />
    <CardActions />
  </CardHeader>

  <CardContent>
    <UserInfo />
  </CardContent>
</Card>
```

over creating a huge component with many conditional modes.

Use props and composition instead of excessive boolean flags.

Avoid APIs such as:

```tsx
<Component
  compact
  bordered
  withHeader
  showActions
  isDashboard
  isMobile
/>
```

when separate components or composition would make the API clearer.

---

## 14. File organization

Prefer colocating component-specific files.

Example:

```text
features/
└── users/
    ├── components/
    │   ├── UserCard/
    │   │   ├── UserCard.tsx
    │   │   ├── UserCard.types.ts
    │   │   └── UserCard.test.tsx
    │   │
    │   └── UserList/
    │       ├── UserList.tsx
    │       └── UserList.types.ts
    │
    ├── hooks/
    │   └── useUsers.ts
    │
    ├── services/
    │   └── users.service.ts
    │
    ├── utils/
    │   └── user.utils.ts
    │
    └── types.ts
```

Prefer feature-based organization for medium and large applications.

---

## 15. Types

Keep component-specific types close to the component.

Example:

```tsx
type UserCardProps = {
  name: string;
  avatar?: string;
  status: UserStatus;
  onDelete?: () => void;
};
```

Shared domain types should live in an appropriate domain/types module.

Avoid creating one giant global `types.ts` containing unrelated types.

---

## 16. Refactoring existing code

When modifying existing React code:

1. Read the surrounding architecture first.
2. Identify the responsibilities of the component.
3. Separate UI from business logic.
4. Extract API/data access.
5. Extract reusable logic into hooks.
6. Extract pure functions into utilities.
7. Split large JSX sections into components.
8. Keep component APIs explicit.
9. Preserve existing behavior.
10. Avoid unrelated architectural rewrites.

Do not rewrite the entire project just to apply this architecture.

---

## 17. Decision process

Before creating or modifying a component, ask:

### Is this UI?

If yes:

```text
component
```

### Is this React state/effect/behavior?

If yes:

```text
custom hook
```

### Is this API/data access?

If yes:

```text
service / data-access layer
```

### Is this a pure transformation?

If yes:

```text
utility
```

### Is this reusable UI?

If yes:

```text
shared component
```

### Is this domain-specific?

Keep it inside the corresponding feature/domain rather than putting it into global shared code.

---

## 18. Required behavior for the agent

When generating React code, the agent MUST:

* avoid unnecessarily large components;
* separate business logic from JSX;
* extract non-trivial stateful logic into custom hooks;
* extract API calls from UI components;
* extract pure reusable logic into utilities;
* split complex UI sections into separate components;
* keep component responsibilities clear;
* preserve existing project conventions when they are reasonable;
* avoid unnecessary abstractions;
* avoid premature generalization;
* prefer composition;
* keep props explicit and understandable;
* maintain existing behavior while refactoring;
* inspect existing components before creating new abstractions;
* reuse existing components, hooks and utilities when appropriate.

When a component contains multiple unrelated responsibilities, the agent should proactively refactor it rather than continuing to make the component larger.

---

## Definition of Done

React code is considered properly structured when:

* components are primarily responsible for rendering;
* business logic is separated from presentation;
* API/data-access code is outside presentational components;
* complex stateful behavior is encapsulated in hooks;
* reusable pure logic is extracted into utilities;
* large UI sections are split into meaningful components;
* abstractions have clear responsibilities;
* the resulting code is easier to read and test;
* no unnecessary abstraction or file fragmentation was introduced.
